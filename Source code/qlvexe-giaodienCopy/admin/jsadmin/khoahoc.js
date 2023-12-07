var token = localStorage.getItem("token");

async function loadAllCourse() {
    var url = 'http://localhost:8080/api/public/allCourse';
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += 
        `<tr>
            <td>#${list[i].id}</td>
            <td><img src="${list[i].banner}" class="img-sp-admin"></td>
            <td>${list[i].name}</td>
            <td>${list[i].startDate}</td>
            <td>${list[i].endDate}</td>
            <td>${list[i].online} buổi</td>
            <td>${list[i].offline} buổi</td>
            <td>Thứ 4, thứ 5 hàng tuần</td>
            <td>${list[i].times}</td>
            <td>4,500,000đ</td>
            <td><button class="btn btn-primary"><i class="fa fa-edit"></i> Cập nhật</button></td>
            <td><button class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</button></td>
        </tr>`
    }
    document.getElementById("listcategory").innerHTML = main
    $('#example').DataTable();
}