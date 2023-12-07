// const inputSearch = document.querySelector(".timkiem1");
// const autbox = document.querySelector(".outbox");

// // console.log(inputSearch);
// inputSearch.onkeyup = (e) => {
//   //   console.log(e.target.value);
//   let checkData = e.target.value;
//   let dataArray = [];
//   if (checkData) {
//     dataArray = recomentlist.filter((Date) => {
//       return Date.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
//     });
//     dataArray = dataArray.map((Date) => {
//       return (Date = "<li>" + Date + "</li>");
//     });
//     console.log(dataArray);
//     autbox.classList.add("active");
//     showAdress1(dataArray);
//     let liItem = autbox.querySelectorAll("li");
//     for (let i = 0; i < liItem.length; i++) {
//       liItem[i].addEventListener("click", function () {
//         inputSearch.value = liItem[i].innerHTML;
//         autbox.classList.remove("active");
//       });
//     }
//   } else {
//     autbox.classList.remove("active");
//   }
// };

// function showAdress1(list) {
//   let listData;
//   if (!list.length) {
//     listData = "<li>" + inputSearch.value + "</li>";
//   } else {
//     listData = list.join("");
//   }
//   autbox.innerHTML = listData;
// }

// let recomentlist = [
//   "Hà Nội",
//   "Hải Phòng",
//   "Hà giang",
//   "Hải Dương",
//   "Hà Tỉnh",
//   "Hà Nam",
//   "Hồ Chí Minh",
//   "Nghệ An",
//   "Phú Quốc",
//   "Phú Thọ",
//   "Nha Trang",
//   "Quảng Bình",
//   "Quảng Trị",
//   "Quảng Nam",
//   "Đà Nẵng",
//   "Đà Lạt",
// ];

// const inputSearch1 = document.querySelector(".timkiem2");
// const autbox1 = document.querySelector(".outbox1");
// // console.log(inputSearch1);
// inputSearch1.onkeyup = (e) => {
//   let checkData = e.target.value;
//   let dataArray = [];
//   if (checkData) {
//     dataArray = recomentlist1.filter((Date) => {
//       return Date.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase());
//     });

//     dataArray = dataArray.map((Date) => {
//       return (Date = "<li>" + Date + "</li>");
//     });
//     // console.log(dataArray);
//     autbox1.classList.add("active");
//     showAdress(dataArray);
//     let liItem = autbox1.querySelectorAll("li");
//     for (let i = 0; i < liItem.length; i++) {
//       liItem[i].addEventListener("click", function () {
//         inputSearch1.value = liItem[i].innerHTML;
//         autbox1.classList.remove("active");
//       });
//     }
//   } else {
//     autbox1.classList.remove("active");
//   }
// };

// function showAdress(list) {
//   let listData;
//   if (!list.length) {
//     listData = "<li>" + inputSearch1.value + "</li>";
//   } else {
//     listData = list.join("");
//   }
//   autbox1.innerHTML = listData;
// }

// let recomentlist1 = [
//   "Hà Nội",
//   "Hải Phòng",
//   "Hà giang",
//   "Hải Dương",
//   "Hà Tỉnh",
//   "Hà Nam",
//   "Hồ Chí Minh",
//   "Nghệ An",
//   "Phú Quốc",
//   "Phú Thọ",
//   "Nha Trang",
//   "Quảng Bình",
//   "Quảng Trị",
//   "Quảng Nam",
//   "Đà Nẵng",
//   "Đà Lạt",
// ];


// // -----------------------------
function motchieu() {
    document.getElementById("ngayve").style.display = 'none';
    document.getElementById("lbngayve").style.display = 'none';
  }
  function khuhoi() {
    document.getElementById("ngayve").style.display = 'block';
    document.getElementById("lbngayve").style.display = 'block';
  }

  async function openGadi(){
    document.getElementById("gadibox").style.display = 'inline'

    var diemdi = document.getElementById("textgadi").value
    var url = 'http://localhost:8080/api/public/findByDiemDi?diemdi='+diemdi;
    const response = await fetch(url, {
          method: 'GET',
          headers: new Headers({
          })
    });
    var list = await response.json();
    var main = ''
    for(i=0; i<list.length; i++){
      main += '<li onclick="chonTd('+list[i].id+')">'+list[i].diemDi+' - '+list[i].diemDen+'</li>'
    }
    document.getElementById("gadibox").innerHTML = main;
  }

  async function chonTd(idtuyenduong){
    var url = 'http://localhost:8080/api/public/tuyenDuongId?id='+idtuyenduong;
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
        })
    });
    var tuyenduong = await response.json();
    document.getElementById("textgadi").value = tuyenduong.diemDi +'-'+tuyenduong.diemDen
    document.getElementById("idtuyend").value = idtuyenduong
  }
  function chuyenChonToa(){
    var ngaydi = document.getElementById("ngaydi").value
    var ngayve = document.getElementById("ngayve").value
    var idtuyenduong = document.getElementById("idtuyend").value
    var loaive = document.querySelector('input[name="loaive"]:checked').value;
    if(loaive == 1){
      if(ngaydi == ""){
        alert("vui lòng chọn ngày đi")
        return;
      }
    }
    if(loaive == 0){
      if(ngaydi == "" || ngayve == ""){
        alert("vui lòng chọn ngày đi và ngày về")
        return;
      }
    }
    if(ngaydi != "" && ngayve != ""){
      if(ngaydi > ngayve){
        alert("ngày đi phải nhỏ hơn ngày về")
        return;
      }
    }

    var url = 'chontoa.html?id='+idtuyenduong+'&ngaydi='+ngaydi+'&ngayve='+ngayve+'&loaive='+loaive 
    window.location.replace(url)
  }

  $(window).click(function() {
    document.getElementById("gadibox").style.display = 'none'
  });