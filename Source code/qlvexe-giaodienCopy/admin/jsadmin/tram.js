var token = localStorage.getItem('token');

async function loadAllTram() {
    // $('#example').DataTable();
    var url = 'http://localhost:8080/api/public/tram';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    console.log(list)
    for (i = 0; i < list.length; i++) {
        main += '<tr>'+
                    '<td>#'+list[i].id+'</td>'+
                    '<td>'+list[i].tenTram+'</td>'+
                    '<td>'+list[i].diaChi+'</td>'+
                    '<td>'+list[i].moTa+'</td>'+
                    '<td><a href="addtram.html?id='+list[i].id+'" class="btn btn-success"><i class="fa fa-trash"></i> Sửa</a></td>'+
                    '<td><button onclick="deletetram('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                '</tr>'
    }
    document.getElementById("listttram").innerHTML = main
    $('#example').DataTable();
}
async function loadATram(){
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/tramById?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var Tram = await response.json();
        console.log(Tram)
        document.getElementById("tentram").value = Tram.tenTram
        document.getElementById("diachi").value = Tram.diaChi
        document.getElementById("mota").value = Tram.moTa
    }
}


async function saveTram() {
    var id = window.location.search.split('=')[1];

    var url = 'http://localhost:8080/api/admin/themTram';

    var tentram = document.getElementById("tentram").value
    var diachi = document.getElementById("diachi").value
    var mota = document.getElementById("mota").value


    if(tentram == "" || diachi == ""){
        alert("tên trạm hoặc địa chỉ không được để trống");
        return;
    }
    var Tram = { //lấy dữ liệu từ d
            "id": id,
            "tenTram": tentram,
            "diaChi": diachi,
            "moTa":mota
        }
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(Tram)
        
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa Trạm thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('tram.html')
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa Trạm thất bại", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
}


async function deletetram(id) {
    var url = 'http://localhost:8080/api/admin/xoaTram?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa tuyến đường thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa", 
            type: "error"
          },
        function(){ 
            // window.location.reload();
        });
    }
}
