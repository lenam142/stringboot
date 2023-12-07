var token = localStorage.getItem('token');

async function loadAllTuyenDuongSelect() {
    var url = 'http://localhost:8080/api/public/tuyenDuong';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<option value="'+list[i].id+'" data-tokens="'+list[i].id+'">'+list[i].diemDi+' - '+list[i].diemDen+'</option>'
    }
    document.getElementById("tuyenduongselect").innerHTML = main
    document.getElementById("tuyenduongselect").classList.add("selectpicker");
    $('.selectpicker').selectpicker();
}


async function loadAllTauSelect() {
    var idtuyenduong = document.getElementById("tuyenduongselect").value;
    var url = 'http://localhost:8080/api/public/tauByTuyenDuongId?id='+idtuyenduong;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<option value="'+list[i].id+'" data-tokens="'+list[i].id+'">'+list[i].ten+'</option>'
    }
    document.getElementById("listtauselect").innerHTML = main
    if(list.length == 1){
        loadAllToaTau(list[0].id);
    }
    if(list.length == 0){
        swal({
            title: "Thông báo", 
            text: "không có tàu nào ở tuyến đường này!", 
            type: "warning"
          },
        function(){ 
        });
    }
}

async function loadAllTauAdd() {
    var url = 'http://localhost:8080/api/public/tau';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<option value="'+list[i].id+'" data-tokens="'+list[i].id+'">tàu: '+list[i].ten+', tuyến đường: '+list[i].tuyenDuong.diemDi+'-'+list[i].tuyenDuong.diemDen+'</option>'
    }
    document.getElementById("listtauselect").innerHTML = main
    document.getElementById("listtauselect").classList.add("selectpicker");
    $('.selectpicker').selectpicker();
}

async function loadAllToaTau(id) {
    $('#example').DataTable().destroy();
    var url = 'http://localhost:8080/api/public/toaTau';
    if(id != -1){
        url = 'http://localhost:8080/api/public/toaTauByTauId?id='+id;
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        var loai = 'ghế ngồi'
        if(list[i].loaiToa == 1){
            loai = 'giường nằm';
        }
        main += '<tr>'+
                    '<td>#'+list[i].id+'</td>'+
                    '<td>'+list[i].tenToa+'</td>'+
                    '<td>'+loai+'</td>'+
                    '<td>'+list[i].soChoNgoi+'</td>'+
                    '<td>'+list[i].giaTien+'</td>'+
                    '<td>'+list[i].tau.ten+'</td>'+
                    '<td><button onclick="deleteToaTau('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><a href="addToaTau.html?id='+list[i].id+'" class="btn btn-success"><i class="fa fa-trash"></i> Sửa</a></td>'+
                '</tr>'
    }
    document.getElementById("listtoatau").innerHTML = main
    $('#example').DataTable();   
}

function loadToaTauByTau(){
    var idtau = document.getElementById("listtauselect").value
    loadAllToaTau(idtau);
}


async function saveToaTau() {
    var id = window.location.search.split('=')[1];

    var url = 'http://localhost:8080/api/admin/themToaTau';

    var tentoan = document.getElementById("tentoan").value
    var sochongoi = document.getElementById("sochongoi").value
    var giatien = document.getElementById("giatien").value
    var idtau = document.getElementById("listtauselect").value
    var loaitoa = document.getElementById("loaitoa").value
    var moTa = document.getElementById("mota").value

    var toatau = { 
            "id": id,
            "tenToa": tentoan,
            "soChoNgoi": sochongoi,
            "giaTien":giatien,
            "moTa":moTa,
            "loaiToa":loaitoa,
            "tau":{
                "id":idtau
            }
        }
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(toatau)
        
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa toa tàu thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('toaTau.html')
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa toa tàu thất bại", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
}

async function loadAToaTau(){
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/toaTauId?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var toaTau = await response.json();
        document.getElementById("tentoan").value = toaTau.tenToa
        document.getElementById("sochongoi").value = toaTau.soChoNgoi
        document.getElementById("giatien").value = toaTau.giaTien
        document.getElementById("listtauselect").value = toaTau.tau.id
        document.getElementById("mota").value = toaTau.moTa
        document.getElementById("loaitoa").value = toaTau.loaiToa
    }
}


async function deleteToaTau(id) {
    var url = 'http://localhost:8080/api/admin/xoaToaTau?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa toa tàu thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa toa tàu, đã có người đặt", 
            type: "error"
          },
        function(){ 
            // window.location.reload();
        });
    }
}
