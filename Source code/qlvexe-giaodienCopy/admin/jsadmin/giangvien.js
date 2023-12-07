var token = localStorage.getItem("token");

async function loadAllTeacher() {
    var url = 'http://localhost:8080/api/public/allTeacher';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += '<tr>' +
            '<td>#' + list[i].id + '</td>' +
            '<td><img style="width: 120px;" src="' + list[i].avatar + '"></td>' +
            '<td>' + list[i].fullname + '</td>' +
            '<td>' + list[i].birth + '</td>' +
            '<td><button onclick="deleteTeacher(' + list[i].id + ')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>' +
            '<td><a href="addgiangvien.html?id=' + list[i].id + '" class="btn btn-success"><i class="fa fa-trash"></i> Sửa</a></td>' +
            '</tr>'
    }
    document.getElementById("listteacher").innerHTML = main
    $('#example').DataTable();
}

async function loadATeacher() {
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/teacherById?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var teacher = await response.json();
        document.getElementById("ten").value = teacher.fullname
        document.getElementById("ngsinh").value = teacher.birth
        document.getElementById("mota").value = teacher.description
        document.getElementById("imgTeacher").src = teacher.avatar
        tinyMCE.get('editor').setContent(teacher.content)
        avatars = teacher.avatar
    }
}



var avatars = ''
async function saveTeacher() {
    document.getElementById("loading").style.display='block'
    var id = window.location.search.split('=')[1];
    var url = 'http://localhost:8080/api/admin/addTeacher';

    var ten = document.getElementById("ten").value
    var ngsinh = document.getElementById("ngsinh").value
    var mota = document.getElementById("mota").value
    var content = tinyMCE.get('editor').getContent()
    
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
        avatars = await res.text();
    }
    // if(tieude == "" || mota == ""){
    //     alert("dữ liệu không được để trống");return;
    // }
    var teacher = {
        "id": id,
        "fullname": ten,
        "birth":ngsinh,
        "avatar":avatars,
        "description":mota,
        "content":content
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(teacher)
    });
    if(response.status < 300){
        swal({
            title: "Thông báo", 
            text: "thêm/sửa giảng viên thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace("giangvien.html")
        });
    }
    else{
        swal({
            title: "Thông báo", 
            text: "thêm/sửa giảng viên thất bại!", 
            type: "error"
          },
        function(){ 
        });
    }
    document.getElementById("loading").style.display='none'
}


async function deleteTeacher(id) {
    var url = 'http://localhost:8080/api/admin/deleteTeacher?id=' + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "xóa giảng viên thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload();
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "không thể xóa giảng viên", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
}