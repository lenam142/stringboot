var token = localStorage.getItem("token");
async function loadmenu() {
  var authen =
    '<li class="nav-item"><a class="nav-link" href="./dangnhap.html">Đăng nhập</a></li>';
  if (token != null) {
    authen = `<li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Tài khoản
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Lịch sử đặt</a></li>
                    <li><a class="dropdown-item" href="#">Tài khoản</a></li>
                    <li><a class="dropdown-item" onclick="logout()" style="cursor: pointer;">Đăng xuất</a></li>
                  </ul>
                </li>`;
  }
   // <div class="searchheader">
      //   <form class="input-group">
      //     <input class="inputsearchheader" placeholder="Tìm kiếm" name="title">
      //     <button class="btnsearchheader">
      //       <i class="fa fa-search iconsearchheader"></i>
      //     </button>
      //   </form>
      // </div>
      // <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
      //             aria-expanded="false">
      //             Về chúng tôi
      //           </a>
      //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      //             <li><a class="dropdown-item" href="#">Action</a></li>
      //             <li><a class="dropdown-item" href="#">Another action</a></li>
      //             <li><a class="dropdown-item" href="#">Something else here</a></li>
      //           </ul>
      // <li class="nav-item dropdown">
      //           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
      //             aria-expanded="false">
      //             Khóa học
      //           </a>
      //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="listcategory">
      //             <li><a class="dropdown-item" href="#">Action</a></li>
      //           </ul>
      //         </li>
  var menu = `<div class="menutop">
    <div class="container listmenutop">
      <img src="image/logo-dino.png" class="imglogo">
     
      <div class="d-lg-flex ms-auto">
        <a class="hotline-item itemphone" href="tel:02462947586">
          <i class="fa fa-phone"></i>
          <span class="d-none d-xl-inline ms-2">02462947586</span>
        </a>
        <a class="hotline-item" href="mailto:inova@gmail.com">
          <i class="fa fa-envelope"></i>
          <span class="d-none d-xl-inline ms-2">inova@gmail.com</span>
        </a>
      </div>
    </div>
  </div>
  <div id="navigation" style="background-color: #fff; width: 100%;">
    <div class="container menubottom">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav navbar-nav-hover navbar-nav-effect">
              <li class="nav-item"><a class="nav-link" aria-current="page" href="index.html">Trang chủ</a></li>
              <li class="nav-item"><a class="nav-link" href="./thongtindatve.html">thông tin đặt vé</a></li>

              <li class="nav-item"><a class="nav-link" href="./timkiem.html">kiểm tra vé</a></li>
              <li class="nav-item"><a class="nav-link" href="./huongdan.html">Hướng dẫn</a></li>
              <li class="nav-item"><a class="nav-link" href="blog.html">Tin tức</a></li>
              ${authen}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>`;
  document.getElementById("menuall").innerHTML = menu;

  var elementPosition = $("#navigation").offset();
  $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
      $("#navigation").css("position", "fixed").css("top", "0");
      $("#navigation").css("z-index", "1000");
    } else {
      $("#navigation").css("position", "static");
      // $('#navigation').css('margin','auto');
    }
  });
  loadCategoryMenu();
  loadfooter();
}
{/* <li class="nav-item"><a class="nav-link" href="./trave.html">Tra vé</a></li> */}
async function loadCategoryMenu() {
  var url = "http://localhost:8080/api/public/allcategory";
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({}),
  });
  var list = await response.json();
  var main = "";
  for (i = 0; i < list.length; i++) {
    main +=
      '<li><a class="dropdown-item" href="#">' + list[i].name + "</a></li>";
  }
  document.getElementById("listcategory").innerHTML = main;
}

async function logout() {
  localStorage.removeItem("token");
  window.location.replace("dangnhap.html");
}

function loadfooter() {
  var foo = `<div class="footer-main py-5">
    <div class="container">
      <div class="row gy-5 g-md-4 align-items-start lh-lg mb-5">
        <div class="col-md-3">
          <a class="footer-logo" href="">
            <img class="img-fluid" src="https://dinotech.edu.vn/images/logo-white.png" alt="">
          </a>
          <div class="card-body p-4">
            <h6 class="card-title">VĂN PHÒNG Hồ Chí Minh</h6>
            <ul class="list list-icons list-gap-2 mb-2 pb-1">
              <li class="list-item">
              215 đường Điện Biên Phủ, Phường 15 ,Quận Bình Thành, TP. Hồ Chí Minh
              </li>
              <li class="list-item">
                <a href="tel:02462947586">02462947586</a>
              </li>
              <li class="list-item">
                <a href="tel:0867196779">inova@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="social" style="margin-left: 20px">
            <a class="social-item" href="">
              <img class="img-fluid social-icon" src=""
                alt="">
            </a>
            <a class="social-item" href="">
              <img class="img-fluid social-icon" src="" alt="">
            </a>
            <a class="social-item" href="">
              <img class="img-fluid social-icon" src="" alt="">
            </a>
          </div>
        </div>
        <div class="col-md-3 d-grid gap-5 gap-md-3">
          <div class="card-body p-4">
            <h6 class="card-title">VỀ INOVA</h6>
            <ul class="list list-icons list-gap-2 mb-2 pb-1">
          
              <li class="mb-2">
                <a href="">chọn vé nhanh - khởi hành êm ái</a>
              </li>
              <li class="mb-2">
                <a href="#">Đường ray bảo trì theo định kì</a>
              </li>
              <li class="mb-2">
                <a href="#">phục vụ 24/24 tận tình hỗ trợ</a>
              </li>
              <li class="mb-2">
                <a href="#">tuân thủ nghiêm ngạch về luật pháp</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="col-md-3 d-grid gap-5 gap-md-3">
          <div class="card-body p-4">
            <h6 class="card-title">CHÍNH SÁCH, QUY ĐỊNH</h6>
            <ul class="list list-icons list-gap-2 mb-2 pb-1">
              <li class="mb-2">
                <a href="#">Chính sách, quy định chung</a>
              </li>
              <li class="mb-2">
                <a href="#">Quy trình cung ứng dịch vụ</a>
              </li>
              <li class="mb-2">
                <a href="#">Phương thức thanh toán</a>
              </li>
              <li class="mb-2">
                <a href="#">Chính sách bảo vệ thông tin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="text-center mb-4">Địa chỉ liên hệ</h5>
      <div class="accordion accordion-2 accordion-icon-caret mb-4" id="accordion-store">
        <div class="row g-3 g-lg-4">
          <div class="col-lg-4 col-sm-6 d-flex">
            <div class="card card-store border-0">
              <div class="card-body p-4">
                <h5 class="card-title">Địa chỉ TP. Hồ Chí Minh</h5>
                <ul class="list list-icons list-gap-2 mb-2 pb-1">
                  <li class="list-item">
                  215 đường Điện Biên Phủ, Phường 15 ,Quận Bình Thành, TP. Hồ Chí Minh
                  </li>
                  <li class="list-item">
                    <a class="text-muted" href="tel:02462947586">02462947586</a>
                  </li>
                </ul>
                <a class="btn btn-primary-light text-primary mt-auto"
                  href="https://maps.google.com/?q=10.800431, 106.706320" role="button"
                  target="_blank">Xem bản đồ</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 d-flex">
            <div class="card card-store border-0">
              <div class="card-body p-4">
                <h5 class="card-title">Địa chỉ Hà Nội</h5>
                <ul class="list list-icons list-gap-2 mb-2 pb-1">
                  <li class="list-item">
                    14 Phố Trần Kim Xuyến, Yên Hoà, Cầu Giấy, Hanoi, Vietnam
                  </li>
                  <li class="list-item">
                    <a class="text-muted" href="tel:0965500306">0965500306</a>
                  </li>
                </ul>
                <a class="btn btn-primary-light text-primary mt-auto"
                  href="https://maps.google.com/?q=21.018245100000000,105.795860700000000" role="button"
                  target="_blank">Xem bản đồ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById("footer").innerHTML = foo;
}
