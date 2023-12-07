var token = localStorage.getItem('token');

async function loadAllTuyenDuongSelect() {
    var url = 'http://localhost:8080/api/public/tuyenDuong';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '<option value="-1"> -- chọn tuyến đường --</option>';
    for (i = 0; i < list.length; i++) {
        main += '<option value="'+list[i].id+'" data-tokens="'+list[i].id+'">'+list[i].diemDi+' - '+list[i].diemDen+'</option>'
    }
    document.getElementById("tuyenduongselect").innerHTML = main
    document.getElementById("tuyenduongselect").classList.add("selectpicker");
    $('.selectpicker').selectpicker();
}


async function loadAllTau() {
    $('#example').DataTable().destroy();
    var tuyenDuong = document.getElementById("tuyenduongselect").value
    var url = 'http://localhost:8080/api/public/tau';
    if(tuyenDuong != -1){
        url = 'http://localhost:8080/api/public/tauByTuyenDuongId?id='+tuyenDuong;
    }
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
                    '<td>'+list[i].ten+'</td>'+
                    '<td>'+list[i].thoiGianDi+'</td>'+
                    '<td>'+list[i].thoiGianDen+'</td>'+
                    '<td>'+list[i].tongSoCho+'</td>'+
                    '<td>'+list[i].tuyenDuong.diemDi+' - '+list[i].tuyenDuong.diemDen+'</td>'+
                    '<td><button onclick="deleteTuyenDuong('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><a href="addTau.html?id='+list[i].id+'" class="btn btn-success"><i class="fa fa-trash"></i> Sửa</a></td>'+
                '</tr>'
    }
    document.getElementById("listtau").innerHTML = main
    $('#example').DataTable();
}


async function loadATau() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/tauId?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var tau = await response.json();
        document.getElementById("ten").value = tau.ten
        var tgdi = tau.thoiGianDi.split(":");
        var tgden = tau.thoiGianDen.split(":");
        document.getElementById("tgdi").value = tgdi[0]+':'+tgdi[1];
        document.getElementById("tgden").value = tgden[0]+':'+tgden[1]
        document.getElementById("tongsocho").value = tau.tongSoCho
        document.getElementById("tuyenduongselect").value = tau.tuyenDuong.id
    }
}

async function saveTau() {
    var id = window.location.search.split('=')[1];

    var url = 'http://localhost:8080/api/admin/themTau';

    var ten = document.getElementById("ten").value
    var tgdi = document.getElementById("tgdi").value
    var tgden = document.getElementById("tgden").value
    var tongsocho = document.getElementById("tongsocho").value
    var tuyenduongselect = document.getElementById("tuyenduongselect").value


    
    var tau = {
            "id": id,
            "ten": ten,
            "thoiGianDi": tgdi,
            "thoiGianDen":tgden,
            "tongSoCho": tongsocho,
            "tuyenDuong":{
                "id":tuyenduongselect
            }
    }
    console.log(tau)
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(tau)
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa tàu thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('Tau.html')
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa tàu thất bại", 
            type: "error"
          },
        function(){ 
            // window.location.reload();
        });
    }
}