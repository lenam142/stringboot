var token = localStorage.getItem("token");

async function loadAllTaiLieu() {
    var url = 'http://localhost:8080/api/public/allDoc';
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
                    '<td>'+list[i].title+'</td>'+
                    '<td>'+list[i].createdDate+'</td>'+
                    '<td>'+list[i].description+'</td>'+
                    '<td><button onclick="deleteTailieu('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><a href="addtailieu.html?id='+list[i].id+'" class="btn btn-success"><i class="fa fa-trash"></i> Sửa</a></td>'+
                '</tr>'
    }
    document.getElementById("listtailieu").innerHTML = main
    $('#example').DataTable();
}

var linkFile = ''
async function saveTailieu() {
    document.getElementById("loading").style.display='block'

    var id = window.location.search.split('=')[1];
    var url = 'http://localhost:8080/api/admin/addDoc';
    var tieude = document.getElementById("tieude").value
    var mota = tinyMCE.get('editor').getContent()

    if(tieude == "" || mota == ""){
        alert("dữ liệu không được để trống");return;
    }

    const filePath = document.getElementById('imagebanner')
    const formData = new FormData()
    formData.append("file", filePath.files[0])
    var urlUpload = 'http://localhost:8080/api/public/upload';
    const res = await fetch(urlUpload, { 
             method: 'POST', 
              headers: new Headers({
             }),
             body: formData
           });
    if(res.status < 300){
        linkFile = await res.text();
    }

    var tailieu = {
        "id": id,
        "title": tieude,
        "description":mota,
        "linkFile":linkFile
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(tailieu)
    });
    if(response.status < 300){
        swal({
            title: "Thông báo", 
            text: "thêm/sửa tài liệu thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace("tailieu.html")
        });
    }
    else{
        swal({
            title: "Thông báo", 
            text: "thêm/sửa tài liệu thất bại!", 
            type: "error"
          },
        function(){ 
        });
    }
    document.getElementById("loading").style.display='none'
}


async function loadADoc() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/docById?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var doc = await response.json();
        document.getElementById("tieude").value = doc.title
        tinyMCE.get('editor').setContent(doc.description)
        linkFile = doc.linkFile
    }
}

async function deleteTailieu(id) {
    var url = 'http://localhost:8080/api/admin/deleteDoc?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa tài liệu thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa tài liệu", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
}