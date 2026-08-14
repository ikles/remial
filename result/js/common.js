jQuery(document).ready(function( $ ) {



  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.header__col').toggleClass("open");    
  });



//levels menu
  let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

  let body = document.querySelector('body');


  if ( isMobile.any() ) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.menu-arrow');
    arrow.forEach(function (item) {
      let thisLink = item.previousElementSibling;
      let subMenu = item.nextElementSibling;
      let thisArrow = item;

      thisLink.classList.add('parent');
      item.addEventListener('click', function () {      
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    });
  }
  else {
    body.classList.add('mouse')
  }




  $('.doctors__sl').slick({            
    infinite: true,    
    slidesToShow: 3,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,
    autoplaySpeed: 200,
    cssEase: 'ease-out',
    dots: false,    
    arrows: true,    
    responsive: [
      {
        breakpoint: 1381,
        settings: {
          slidesToShow: 3        
        }
      },
    ]
  });


  $('.rev-sl').slick({            
    infinite: true,    
    slidesToShow: 3,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 200,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    dots: false,
    centerMode: true,   
    arrows: true,    
    responsive: [
      {
        breakpoint: 1381,
        settings: {
          slidesToShow: 3        
        }
      },
    ]
  });

  $('.gal-sl').slick({            
    infinite: true,    
    slidesToShow: 3,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 200,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    dots: false,
    centerMode: true,   
    arrows: true,   
    swipe: false,
    draggable: false, 
    responsive: [
      {
        breakpoint: 1381,
        settings: {
          slidesToShow: 3        
        }
      },
    ]
  });

  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });

  $('[data-fancybox="gal-m1"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });

  function showHide(elem) {
    let block = $(elem);
    var button = block.find('.toggle');
    button.html(button.data('text'));
    button.click(function (e) {
      e.preventDefault();      
      let desc = $(this).closest(block).find('.hide-content');
      desc.toggleClass('more');
      var swap = $(this).data('swap');
      var text = $(this).data('text');
      $(this).data('text', swap);
      $(this).data('swap', text);
      $(this).html(swap);
    });
  }

  
  showHide('.rev-sl__slide');


  function showHide2(elem) {
    let block = $(elem);
    const hideContent = block.find('.hide-content');
    var button = block.find('.toggle');

    button.html(button.data('text'));

    button.click(function (e) {
      e.preventDefault();

      hideContent.stop(true, true).slideToggle(300);

      var swap = $(this).data('swap');
      var text = $(this).data('text');

      $(this).data('text', swap);
      $(this).data('swap', text);
      $(this).html(swap);
    });
  }

  showHide2('.open-element2');




  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link', '.modal-overlay_1', '.modal-close_1');
  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.link2', '.modal-overlay_3', '.modal-close_3');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,
        dropdownParent: $(this).parent()
      });
    });
  }

  $('.accordion-item').click(function () {
    $(this).find('.accordion-header').toggleClass('active-header'); $(this).find('.accordion-content').slideToggle().toggleClass('open-content');
  });

}); //ready

