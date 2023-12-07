function loadMenuAdmin(){
    var main = '<nav class="nav nav-dark ">'+
    '<div> '+
        '<div class="nav_list"> '+
            '<a href="user.html" class="nav_link"> '+
                '<i class="bx bx-user nav_icon"></i> <span class="nav_name">Người dùng</span> '+
            '</a> '+
            '<a href="tau.html" class="nav_link"> '+
                '<i class="fas fa-user-graduate"></i> <span class="nav_name">Tàu</span> '+
            '</a> '+
            '<a href="tram.html" class="nav_link"> '+
                '<i class="fa fa-shopping-cart"></i> <span class="nav_name">Trạm</span> '+
            '</a> '+
            '<a href="tuyenduong.html" class="nav_link"> '+
                '<i class="fa fa-list-alt"></i> <span class="nav_name">Tuyến Đường</span> '+
            '</a> '+
            '<a href="datve.html" class="nav_link"> '+
                '<i class="fa fa-folder"></i> <span class="nav_name">Đặt vé</span> '+
            '</a> '+
            '<a href="blogadmin.html" class="nav_link"> '+
                '<i class="fa fa-list-alt"></i> <span class="nav_name">Bài viết</span> '+
            '</a> '+
            
            '<a href="toatau.html" class="nav_link"> '+
                '<i class="fa fa-users"></i> <span class="nav_name">Toa Tàu</span> '+
            '</a> '+
        '</div>'+
    '</div> '+
    '<a href="../dangnhap.html" class="nav_link"> '+
        '<i class="bx bx-log-out nav_icon"></i> <span class="nav_name">SignOut</span> '+
    '</a>'+
'</nav>'

document.getElementById("nav-bar").innerHTML = main;
document.getElementById("img-login").src = '../image/icon-avatar.png'
}










document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
     
    });

