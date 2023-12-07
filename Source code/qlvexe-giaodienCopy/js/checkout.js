var uls = new URL(document.URL)
var tuyenDuongId = uls.searchParams.get("id");
var ngaydi = uls.searchParams.get("ngaydi");
var ngayve = uls.searchParams.get("ngayve");
var loaive = uls.searchParams.get("loaive");
var token = localStorage.getItem("token");
async function loadTau(){
    if(token == null){
        alert("hãy đăng nhập để thực hiện chức năng này")
        window.location.replace('dangnhap.html');
    }
    url = 'http://localhost:8080/api/public/tauByTuyenDuongId?id='+tuyenDuongId;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<div onclick="loadAllToaTau(${list[i].id})" class="singletrain">
                    <img class="icont" src="image/icont.jpg">
                    <p>Mã tàu: #${list[i].id}</p>
                    <p>Tên tàu: ${list[i].ten}</p>
                </div>`
    }
    document.getElementById("listtau").innerHTML = main
   
    var urlAccount = 'http://localhost:8080/api/userlogged';
    const res = await fetch(urlAccount, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer '+token
        })
    });

    var account = await res.json();
    console.log(account)
    document.getElementById("hotencheck").innerHTML = account.fullname
    document.getElementById("sdtcheck").innerHTML = account.phone
}


async function loadAllToaTau(id) {
    url = 'http://localhost:8080/api/public/toaTauByTauId?id='+id;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    var main = '';
    for (i = 0; i < list.length; i++) {
        main += `<label onclick="loadGheNgoi(${list[i].id})" class="radio-custom">${list[i].tenToa}
                    <input type="radio" name="toatauchon" checked="checked">
                    <span class="checkmark"></span>
                </label>`
    }
    document.getElementById("listtoatau").innerHTML = main
    if(list.length > 0){
        loadGheNgoi(list[list.length - 1].id)
    }
    localStorage.removeItem("carttt");
}

async function loadGheNgoi(id) {
    url = 'http://localhost:8080/api/public/getGheNgoi?id='+id+'&ngaydi='+ngaydi;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var list = await response.json();
    console.log(list)
    var main = '';
    for (i = 0; i < list.length; i++) {
        if(i % 4 == 0){
            main += '<div class="rows">'
        }
        var cl = ''
        var onc = 'onclick="chonGhe('+list[i].id+','+list[i].toaTau.giaTien+', this)"'
        if(list[i].daDat == 1){
            cl = 'sold'
            onc = ''
        }
        main += '<div '+onc+' class="seat '+cl+'">'+list[i].soGhe+'</div>'

        if((Number(i) +1) % 4 == 0){
            main += '</div>'
        }

        
    }
    document.getElementById("listghe").innerHTML = main
}


var listcart = localStorage.getItem("carttt");
function chonGhe(idghe,giave, e){
    if (localStorage.getItem("carttt") === null) {
    	var list = [];
    	window.localStorage.setItem('carttt', JSON.stringify(list));
	}
    if(e.classList.contains('dachon')){
        e.classList.remove("dachon");
        var list = JSON.parse(localStorage.getItem("carttt"));
        var remainingArr = list.filter(data => data.id != idghe);
        window.localStorage.setItem('carttt', JSON.stringify(remainingArr));
    }
    else{
        e.classList.add("dachon");
        var list = JSON.parse(localStorage.getItem("carttt"));
        var ca = {
            "id":idghe,
            "giave":giave,
            "loaive":loaive,
            "ngaydi":ngaydi,
            "ngayve":ngayve
        }
        list.push(ca);
        window.localStorage.setItem('carttt', JSON.stringify(list));
    }
    loadthongtin();
}


async function loadthongtin(){
    var list = JSON.parse(localStorage.getItem("carttt"));
    document.getElementById("tongsl").innerHTML = list.length
    var tongtien = 0;
    for(i=0; i< list.length ; i++){
        if(list[i].loaive == 0){
            tongtien += list[i].giave * 80 / 100 + list[i].giave
        }
        else{
            tongtien += list[i].giave
        }
    }
    document.getElementById("tongtien").innerHTML = formatmoneyCart(tongtien)
}


function formatmoneyCart(money) {
    var VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return VND.format(money);
}

async function datveoff(){
    var list = JSON.parse(localStorage.getItem("carttt"));
    var datVeDto = []
    for(i=0; i< list.length ; i++){
        var obj = list[i]
        var dto = {
            "gheNgoi":{
                "id": obj.id
            },
            "giaVe":obj.giave,
            "loaiVe":obj.loaive,
            "ngayDi":obj.ngaydi,
            "ngayVe":obj.ngayve,
        }
        datVeDto.push(dto)
    }
    var url = 'http://localhost:8080/api/user/datVeOffline';
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(datVeDto)
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "đặt vé thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace('thanhtoan.html')
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "đặt vé thất bại", 
            type: "error"
          },
        function(){ 
            // window.location.reload();
        });
    }

}

async function requestPayMentMomo(){
    var list = JSON.parse(localStorage.getItem("carttt"));
    var tongtien = 0;
	for(i=0; i<list.length; i++){
		tongtien += list[i].giave;
	}
    var returnurl = 'http://localhost:5503/thanhcong.html';

    var urlinit = 'http://localhost:8080/api/urlpayment';
    var paymentDto = {
        "amount":tongtien,
        "content":"thanh toán đặt vé",
        "returnUrl":returnurl,
        "notifyUrl":returnurl
    }
    console.log(paymentDto)
    const res = await fetch(urlinit, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(paymentDto)
    });
    var urlReturn = await res.json();
    window.open(urlReturn.url, '_blank');

}


async function checkPayment() {
    var uls = new URL(document.URL)
    var orderId = uls.searchParams.get("orderId");
    var requestId = uls.searchParams.get("requestId");
    var list = JSON.parse(localStorage.getItem("carttt"));
    var datVeDto = []
    for(i=0; i< list.length ; i++){
        var obj = list[i]
        var dto = {
            "gheNgoi":{
                "id": obj.id
            },
            "giaVe":obj.giave,
            "loaiVe":obj.loaive,
            "ngayDi":obj.ngaydi,
            "ngayVe":obj.ngayve,
        }
        datVeDto.push(dto)
    }
    var orderDto = {
        "orderId":orderId,
        "requestId":requestId,
        "datVeDtis":datVeDto
    }
    console.log(orderDto)
    var url = 'http://localhost:8080/api/user/checkPayment';
    var token = localStorage.getItem("token");
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(orderDto)
    });
    var result = await res.text();
    if(result == 0){
        document.getElementById("thatbai").style.display = 'block'
        document.getElementById("thanhcong").style.display = 'none'
    }
    if(result == 1){
        document.getElementById("thanhcong").style.display = 'block'
    }
}
