async function regis() {
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var password = document.getElementById("password").value
    var repassword = document.getElementById("repassword").value
    if(fullname == ""){
        alert("Họ tên không được để trống")
        return;
    }
    if(email == ""){
        alert("email không được để trống")
        return;
    }
    if(phone == ""){
        alert("phone không được để trống")
        return;
    }
    if(password == ""){
        alert("password không được để trống")
        return;
    }
    if(repassword == ""){
        alert("mật khẩu không được để trống")
        return;
    }
    if(password != repassword){
        alert("mật khẩu không trùng khớp")
        return;
    }
    var url = 'http://localhost:8080/api/register'
    var user = {
        "username": email,
        "fullname": fullname,
        "email": email,
        "phone": phone,
        "password": password,
        "authorities": [
            "ROLE_USER"
        ]
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    });
    var result = await res.text();
    console.log(result)
    if (result === '1') {
        alert("email này đã được đăng ký")
    }
    else if (result === '0') {
        swal({
            title: "Notification", 
            text: "Đăng ký tài khoản thành công!", 
            type: "success"
          },
        function(){ 
            window.location.replace("dangnhap.html")
        });
    }
}

async function login() {
    var url = 'http://localhost:8080/api/authenticate'
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var user = {
        "username": username,
        "password": password
    }
    console.log(user)
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    });
    var token = await response.text(); 

    
    if(response.status > 300){
        swal({
            title: "Thông báo", 
            text: "Tài khoản hoặc mật khẩu không chính xác!", 
            type: "warning"
          },
        function(){  });
    }
    if(response.status < 300){
        window.localStorage.setItem('token', token);
        var urlAccount = 'http://localhost:8080/api/userlogged';
        const res = await fetch(urlAccount, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer '+token, 
                'Content-Type': 'application/json'
            })
        });

        var account = await res.json();
        window.localStorage.setItem('username', account.username);
        var check = 0;
        for(i=0; i<account.authorities.length; i++){
            if(account.authorities[i].name === 'ROLE_ADMIN'){
                check = 1;
            }
        }
        if(check === 0){
            window.location.replace("index.html")
        }
        if(check === 1){
            window.location.replace("admin/user.html")
        }
    }
}

async function forgotpass(){
    var email = document.getElementById("email").value
    var url = 'http://localhost:8080/api/public/forgotpass?email='+email
    const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
        })
    });
    if(res.status > 300){
        swal({
            title: "thông báo", 
            text: "không tim thấy email của bạn", 
            type: "error"
          },
        function(){ 
            window.location.reload();
        });
    }
    else{
        swal({
            title: "thông báo", 
            text: "mật khẩu mới đã được gửi về email của bạn", 
            type: "success"
          },
        function(){ 
            window.location.replace('dangnhap.html')
        });
    }
}

var token = localStorage.getItem("token");

async function loadUser() {
    if(token == null){
        alert("bạn chưa đăng nhập")
        window.location.replace("dangnhap.html")
    }
    var url = 'http://localhost:8080/api/userlogged';
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    var user = await response.json();
    console.log(user)
    document.getElementById("fullname").value = user.fullname
    document.getElementById("phone").value = user.phone
    document.getElementById("email").value = user.email
}

async function changeUser() {
    var token = localStorage.getItem("token");
    var url = 'http://localhost:8080/api/user/updateinfor';
    var fullname = document.getElementById("fullname").value
    var phone = document.getElementById("phone").value
    var email = document.getElementById("email").value
    if(fullname == "" || phone== "" || email ==""){
        alert("dữ liệu không được để trống");
        return;
    }
    var userDto = {
        "fullname":fullname,
        "phone":phone,
        "email":email
    }
    
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(userDto)
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "cập nhật thông tin tài khoản thành công!", 
            type: "success"
          },
        function(){ 
            window.location.reload()
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "cập nhật thông tin tài khoản thất bại", 
            type: "error"
          },
        function(){ });
    }
}


async function changePassword() {
    var token = localStorage.getItem("token");
    var oldpass = document.getElementById("oldpass").value
    var newpass = document.getElementById("newpass").value
    var renewpass = document.getElementById("renewpass").value
    var url = 'http://localhost:8080/api/user/changePassword?old='+oldpass+"&new="+newpass;
    if(fullname == "" || phone== "" || email ==""){
        alert("dữ liệu không được để trống");
        return;
    }
    if(newpass != renewpass){
        alert("mật khẩu mới không trùng khớp");
        return;
    }
    
    const response = await fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    });
    if (response.status < 300) {
        swal({
            title: "Thông báo", 
            text: "cập nhật mật khẩu thành công, hãy đăng nhập lại", 
            type: "success"
          },
        function(){ 
            window.location.reload()
        });
    }
    else {
        swal({
            title: "Thông báo", 
            text: "cập nhật mật khẩun thất bại, mật khẩu không chính xác", 
            type: "error"
          },
        function(){ });
    }
}