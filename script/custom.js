/* ############ Include Files ############*/
/* 
fetch('경로')
.then(response => response.text())
.then(data => {
  선택자.innerHTML = data;
})
*/

fetch('../include/footer.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.footer-include').innerHTML = data;
  /* 푸터의  .link-item-title클릭시 link-item-contnet보여지게*/
  document.querySelectorAll('.link-item-title').forEach(function(item){
    item.addEventListener('click', function(){
      let submenu = this.nextElementSibling;
      console.log(submenu);
      //현재 서브메뉴 display상태 토글
      if(submenu.style.display==='block'){submenu.style.display='none'}else{submenu.style.display='block'}
    })
  })
  /* .company-info-trigger 클릭시 주소 보이게*/
  document.querySelector('.company-info-trigger').addEventListener('click', function(){
    let address = document.querySelector('address');
    if(address.style.display==='block'){address.style.display='none'}else{address.style.display='block'}
  })
});

fetch('../include/header.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.header-include').innerHTML = data;
  /* 
  로그인 버튼 클릭 > 모달창이 보인다
  로그인 수행 > header ui변경
  모달 닫기버튼 클릭시 > 모달 닫힘 
  trigger > 메가네비 높이 생겼다가 사라지게
  */
 /* 선택자
 로그인 버튼, 모달창, 헤더에 로그인 회원가입 user-alarm trigger mega-nav 
 모달안에 로그인버튼 
 */
  let loginBtn = document.querySelector('.btn-login'); //로그인버튼
  let loginModal = document.getElementById('loginModal');//모달창
  let loginRegister = document.querySelector('.login-register-buttons');
  let userAlarm = document.querySelector('.user-alarm');
  let trigger = document.querySelector('.trigger');;
  let megaNavi = document.querySelector('.mega-navi');
  console.log(loginBtn,loginModal,loginRegister , userAlarm, trigger, megaNavi);
  /* 페이지 진입시 로그인 전 상태로 만들기 */
  loginRegister.style.display='flex';
  userAlarm.style.display='none';
  /* 로그인 버튼 클릭시 모달 열기 */
  loginBtn.addEventListener('click', function(){
    loginModal.style.display = 'flex';
  })
  /* 닫기 버튼 누르면 모달창 닫기 */
  document.addEventListener('click', function(e){
    if(e.target.classList.contains('modal-close')){
      loginModal.style.display='none'
    }
  })
  /* 모달안에 로그인 버튼 클릭시 유저알람 보이게 */
  document.addEventListener('click', function(e){
    if(e.target.id==='loginSubmit'){
      /* 모달 사라져야됨, loginRegister 사라져야됨, userAlarm보여야됨*/
      // console.log(loginSubmit, '클릭됨?')
      loginModal.style.display = 'none';
      loginRegister.style.display = 'none';
      userAlarm.style.display = 'block';
    }
  })
  /*  trigger 클릭시 megaNavi 열고 닫기*/
  trigger.addEventListener('click', function(e){
    e.preventDefault();
    megaNavi.classList.toggle('active')
  });
  /*  
  1. trigger클릭시, 너비가 767이하일 때만,  left 0 
  2. 클릭했을 때 > 너비가 767이하이고, btn-mega-navi-close가 있다면 포함되었다면 left -300px 
  */
  trigger.addEventListener('click', function () {
    if (window.innerWidth <= 767) {
      megaNavi.style.left = '0';
    }
  });
  document.addEventListener('click', function(e){
    if(window.innerWidth <= 767 && e.target.classList.contains('btn-mega-navi-close')){
      megaNavi.style.left = '-300px';
    }
  })
  /* 모바일 아코디언 메뉴 : b클릭시 하위메뉴 토글 */
  if(window.innerWidth <= 767){
    /* mega-navi-item > b , mega-navi-item-wrap*/
    let cagegoryTitles = document.querySelectorAll('.mega-navi-item > b');
    let subMenus = document.querySelectorAll('.mega-navi-item-wrap');
    // console.log('선택확인', cagegoryTitles, subMenus)
    cagegoryTitles.forEach(function(bTag){
      bTag.addEventListener('click', function(){
        let thisWrap = bTag.nextElementSibling;
        //모든 active삭제
        cagegoryTitles.forEach(function(b){
          b.classList.remove('active')
        })
        //모든 subMenus닫기
        subMenus.forEach(function(wrap){
          wrap.style.display = 'none';
        })
        //현재 항목만 열기 + active추가
        thisWrap.style.display = 'block'
        bTag.classList.add('active');
      })
    })
  }
})

/* ############ front-event-banner  ############*/

let banner = document.querySelector('.front-event-banner');
let hideBtn = document.querySelector('.btn-hide');
let closeBtn = document.querySelector('.btn-close');
// console.log(banner,hideBtn, closeBtn);
hideBtn.addEventListener('click', function(){
  banner.style.display = 'none'
})
closeBtn.addEventListener('click', function(){
  banner.style.display = 'none'
})