var token = localStorage.getItem('token');

async function loadAllbaiviet() {
    var url = 'http://localhost:8080/api/public/baiViet';
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
                    '<td>'+list[i].tieuDe+'</td>'+
                    '<td>'+list[i].ngayDang+'</td>'+
                    '<td>'+list[i].noiDung+'</td>'+
                    '<td>'+list[i].moTa+'</td>'+
                    '<td><img src="'+list[i].anhNen+'" style="width:120px"></td>'+
                    '<td><button onclick="deleteTuyenDuong('+list[i].id+')" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>'+
                    '<td><a href="addblog.html?id='+list[i].id+'" class="btn btn-success"><i class="fa fa-trash"></i> Sửa</a></td>'+
                '</tr>'
    }
    document.getElementById("listbaiviet").innerHTML = main
    $('#example').DataTable();
}


async function loadbaiviet(){
    var id = window.location.search.split('=')[1];
    if(id != null){
        var url = 'http://localhost:8080/api/public/baiVietId?id='+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
            })
        });
        var baiviet = await response.json();
        console.log(baiviet)
        document.getElementById("tieude").value = baiviet.tieuDe
        document.getElementById("mota").value = baiviet.moTa
        document.getElementById("imgblog").src = baiviet.anhNen
        tinyMCE.get('editor').setContent(baiviet.noiDung)
        linkbanner = baiviet.anhNen
    }
}

var linkbanner = ''

async function savebaiviet() {
    document.getElementById("loading").style.display = 'block'
    var id = window.location.search.split('=')[1];

    var url = 'http://localhost:8080/api/admin/themBaiViet';

    var tieude = document.getElementById("tieude").value
    var mota = document.getElementById("mota").value
    var noidung = tinyMCE.get('editor').getContent()

    // up anh
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
        linkbanner = await res.text();
    }
    // ==========

    
    var baiviet = {
            "id": id,
            "tieuDe": tieude,
            "noiDung":noidung,
            "moTa": mota,
            "anhNen": linkbanner
    }
    console.log(baiviet)
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(baiviet)
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa bài viết thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('blogadmin.html')
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "thêm/sửa bài viết thất bại", 
            type: "error"
          },
        function(){ 
            // window.location.reload();
        });
    }
    document.getElementById("loading").style.display = 'none'
}