var token = localStorage.getItem('token');

async function loadAllTuyenDuong() {
    var url = 'http://localhost:8080/api/public/tuyenDuong';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<tr>'+
                    '<td>#'+list[i].id+'</td>'+
                    '<td>'+list[i].diemDi+'</td>'+
                    '<td>'+list[i].diemDen+'</td>'+
                    '<td>'+list[i].moTa+'</td>'+
                    '<td><button onclick="deleteTuyenDuong('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><a href="themTuyenDuong.html?id='+list[i].id+'" class="btn btn-success"><i class="fa fa-trash"></i> Sửa</a></td>'+
                '</tr>'
    }
    document.getElementById("listtuyenduong").innerHTML = main
    $('#example').DataTable();
}

async function loadATuyenDuong() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        console.log("chay roi hihi")
        var url = 'http://localhost:8080/api/public/tuyenDuongId?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var tuyenduong = await response.json();
        document.getElementById("diemdi").value = tuyenduong.diemDi
        document.getElementById("diemden").value = tuyenduong.diemDen
        document.getElementById("mota").value = tuyenduong.moTa
    }
}


async function saveTuyenDuong() {
    var id = window.location.search.split('=')[1];//?

    var url = 'http://localhost:8080/api/admin/themTuyenDuong';

    var diemdi = document.getElementById("diemdi").value
    var diemden = document.getElementById("diemden").value
    var mota = document.getElementById("mota").value


    if(diemdi == "" || diemden == ""){
        alert("điểm đi hoặc điểm đến không được để trống");
        return;
    }
    var tuyenduong = { //lấy dữ liệu từ d
            "id": id,
            "diemDi": diemdi,
            "diemDen": diemden,
            "moTa":mota
        }
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(tuyenduong)
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa tuyến đường thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('tuyenduong.html')
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa tuyến đường thất bại", 
            type: "error"
          },
        function(){ 
            // window.location.reload();
        });
    }
}


async function deleteTuyenDuong(id) {
    var url = 'http://localhost:8080/api/admin/xoaTuyenDuong?id=' + id;
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
            window.location.reload();
        });
    }
}

