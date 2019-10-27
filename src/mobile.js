var isMobile = false;

if (/Mobi|Android/i.test(navigator.userAgent)) {
  isMobile = true;
}



function startMobileApp(){
  if(!isMobile) return;
  const search_icon = document.querySelector('.mobile_search_icon');
  const search_box_holder = document.querySelector('.mb_nav_flex');
  const search_box_back_arrow = document.querySelector('.mb_nav_flex .back');
  const mb_left_nav = document.querySelector('.left_nav');
  const nav_toggle = document.querySelector('.toggle_nav');
  const lf_nav_back = document.querySelector('.lf_nv_back .back');
  const mob_book_opt = document.querySelectorAll('.mob_option_wrap');
  const mob_bk_data = document.querySelectorAll('.abs_dt');
  const close_bk_data = document.querySelectorAll('.hide_abs_dt');


  search_icon.addEventListener('click', () => {
    search_box_holder.style.opacity = 1;
    search_box_holder.style.zIndex = 1;
  });
  search_box_back_arrow.addEventListener('click', () => {
    search_box_holder.style.opacity = 0;
    search_box_holder.style.zIndex = 0;
  });
  nav_toggle.addEventListener('click', () => {
    mb_left_nav.style.marginLeft = 0;
  });
  lf_nav_back.addEventListener('click', () => {
    mb_left_nav.style.marginLeft = -75+'%';
  });

  mob_book_opt.forEach((mob) => {
    mob.addEventListener('click', () => {
      mob.style.display = 'none';
      mob_bk_data.forEach((mbd) => {
        if(mob.parentElement.parentElement === mbd.parentElement){
          mbd.style.opacity = 1;
        }
      })
    })
  })

  close_bk_data.forEach((bk_data) => {
    bk_data.addEventListener('click', () => {
      mob_bk_data.forEach((mbd) => {
        if(bk_data.parentElement === mbd) {
            mbd.style.opacity = 0;
            mob_book_opt.forEach((mob) => {
              if(mob.parentElement.parentElement === mbd.parentElement){
                mob.style.display = 'block';
              }
            })
        }
      })
    })
  })
  mob_book_opt.forEach((mob) => {
    mob.addEventListener('click', () => {
      mob.style.display = 'none';
      mob_bk_data.forEach((mbd) => {
        if(mob.parentElement.parentElement === mbd.parentElement){
          mbd.style.opacity = 1;
        }
      })
    })
  })

  close_bk_data.forEach((bk_data) => {
    bk_data.addEventListener('click', () => {
      mob_bk_data.forEach((mbd) => {
        if(bk_data.parentElement === mbd) {
            mbd.style.opacity = 0;
            mob_book_opt.forEach((mob) => {
              if(mob.parentElement.parentElement === mbd.parentElement){
                mob.style.display = 'block';
              }
          })
        }
      })
    })
  })
}


startMobileApp();

