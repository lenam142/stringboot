const size = 3;
async function loadAllbaiviet(page) {
    var url = 'http://localhost:8080/api/public/findAllPage?page='+page+'&size='+size;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var listblog = await response.json();
    console.log(listblog)
    var list = listblog.content;
    var totalpage = listblog.totalPages;
    var main = '';
    console.log(list)
    for (i = 0; i < list.length; i++) {
        main += 
        `<article class="card card-post-h">
            <div class="row g-3 gx-md-4">
                <div class="col-sm-5">
                    <a href="chitietblog.html?id=${list[i].id}"><img class="thumbnail-img" src="${list[i].anhNen}"></a>
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title"><a href="chitietblog.html?id=${list[i].id}">${list[i].tieuDe}</a></h5>
                        <p class="card-text text-muted mb-2">${list[i].moTa}</p>
                        <a class="card-read-more text-muted mt-auto fs-sm" href="chitietblog.html?id=${list[i].id}">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        </article><hr>`
    }
    document.getElementById("listblog").innerHTML = main

    var to = ''
    for(i=0; i<totalpage; i++){
        to += '<li onclick="loadAllbaiviet('+i+')" class="page-item"><a href="#listblog" class="page-link">'+(Number(i) + Number(1))+'</a></li>'
    }
    document.getElementById("listpage").innerHTML = to
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
        document.getElementById("tieude").innerHTML = baiviet.tieuDe
        document.getElementById("blogcontent").innerHTML = baiviet.noiDung
    }
}