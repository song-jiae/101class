/* ############ Include Files ############*/

// footer include
fetch('../include/footer.html')
  .then(res => res.text())
  .then(data => {
    const footerWrap = document.querySelector('.footer-include');
    if (footerWrap) {
      footerWrap.innerHTML = data;

      // .link-item-title 클릭 시 toggle
      document.querySelectorAll('.link-item-title').forEach(item => {
        item.addEventListener('click', () => {
          const submenu = item.nextElementSibling;
          if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
          }
        });
      });

      // 회사정보 toggle
      const infoTrigger = document.querySelector('.company-info-trigger');
      if (infoTrigger) {
        infoTrigger.addEventListener('click', () => {
          const address = document.querySelector('address');
          if (address) {
            address.style.display = address.style.display === 'block' ? 'none' : 'block';
          }
        });
      }
    }
  });

// header include
fetch('../include/header.html')
  .then(res => res.text())
  .then(data => {
    const headerWrap = document.querySelector('.header-include');
    if (headerWrap) {
      headerWrap.innerHTML = data;

      const loginBtn = document.querySelector('.btn-login');
      const loginModal = document.getElementById('loginModal');
      const loginRegister = document.querySelector('.login-register-buttons');
      const userAlarm = document.querySelector('.user-alarm');
      const trigger = document.querySelector('.trigger');
      const megaNavi = document.querySelector('.mega-navi');

      if (loginRegister && userAlarm) {
        loginRegister.style.display = 'flex';
        userAlarm.style.display = 'none';
      }

      if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
          loginModal.style.display = 'flex';
        });
      }

      document.addEventListener('click', e => {
        if (e.target.classList.contains('modal-close')) {
          if (loginModal) loginModal.style.display = 'none';
        }

        if (e.target.id === 'loginSubmit') {
          if (loginModal) loginModal.style.display = 'none';
          if (loginRegister) loginRegister.style.display = 'none';
          if (userAlarm) userAlarm.style.display = 'block';
        }
      });

      if (trigger && megaNavi) {
        trigger.addEventListener('click', e => {
          e.preventDefault();
          megaNavi.classList.toggle('active');
          if (window.innerWidth <= 767) {
            megaNavi.style.left = '0';
          }
        });

        document.addEventListener('click', e => {
          if (window.innerWidth <= 767 && e.target.classList.contains('btn-mega-navi-close')) {
            megaNavi.style.left = '-300px';
          }
        });

        if (window.innerWidth <= 767) {
          const categoryTitles = document.querySelectorAll('.mega-navi-item > b');
          const subMenus = document.querySelectorAll('.mega-navi-item-wrap');
          categoryTitles.forEach(b => {
            b.addEventListener('click', () => {
              categoryTitles.forEach(x => x.classList.remove('active'));
              subMenus.forEach(x => x.style.display = 'none');
              b.classList.add('active');
              if (b.nextElementSibling) {
                b.nextElementSibling.style.display = 'block';
              }
            });
          });
        }
      }
    }
  });

/* ############ front-event-banner ############ */
const banner = document.querySelector('.front-event-banner');
const hideBtn = document.querySelector('.btn-hide');
const closeBtn = document.querySelector('.btn-close');

if (banner && hideBtn && closeBtn) {
  hideBtn.addEventListener('click', () => banner.style.display = 'none');
  closeBtn.addEventListener('click', () => banner.style.display = 'none');
}

/* ############ countdown ############ */
function startCountdown(durationInSeconds) {
  let timer = durationInSeconds;
  const hour1 = document.getElementById('hour1');
  const hour2 = document.getElementById('hour2');
  const minute1 = document.getElementById('minute1');
  const minute2 = document.getElementById('minute2');
  const second1 = document.getElementById('second1');
  const second2 = document.getElementById('second2');

  if (!hour1 || !hour2 || !minute1 || !minute2 || !second1 || !second2) return;

  const interval = setInterval(() => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const [h1, h2] = String(hours).padStart(2, '0');
    const [m1, m2] = String(minutes).padStart(2, '0');
    const [s1, s2] = String(seconds).padStart(2, '0');

    hour1.textContent = h1;
    hour2.textContent = h2;
    minute1.textContent = m1;
    minute2.textContent = m2;
    second1.textContent = s1;
    second2.textContent = s2;

    if (timer > 0) {
      timer--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

startCountdown(28230);
