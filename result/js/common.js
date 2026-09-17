jQuery(document).ready(function ($) {
  $('body').click(function () {
    if ($('.toggle-mnu').hasClass('on')) {
      $('.toggle-mnu').removeClass('on');
      $('.top-mnu').fadeOut();
    }
  });

  $('.top-mnu').click(function (e) {
    e.stopPropagation();
  });

  $('.burger-w').click(function () {
    $(this).find('.burger').toggleClass('burger-open');
    $('body').toggleClass('body-open');
    $('.header__col').toggleClass('open');
  });

  // Находим все блоки .open-element2
  $('.open-element2').each(function () {
    // Проверяем, есть ли внутри .mabout__txt элемент .hide-content
    var $hideContent = $(this).find('.mabout__txt .hide-content');

    // Если элемента нет (или он пустой после удаления содержимого)
    if ($hideContent.length === 0) {
      // Удаляем кнопку .mabout__more внутри этого блока
      $(this).find('.mabout__more').remove();
    }
  });

  if ($(window).width() >= 1200) {
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > 107) {
        $('.top').addClass('slide');
      }

      if (scrollTop > 500) {
        $('.top').addClass('fixed');
      }

      if (scrollTop < 200) {
        $('.top').removeClass('fixed');
        $('.top').removeClass('slide');
      }
    });
  } //1200

  if ($(window).width() < 1200) {
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > 107) {
        $('.top').addClass('slide');
      }

      if (scrollTop > 200) {
        $('.top').addClass('fixed');
      }

      if (scrollTop < 150) {
        $('.top').removeClass('fixed');
        $('.top').removeClass('slide');
      }
    });
  } //1200

  //levels menu
  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  let body = document.querySelector('body');

  if (isMobile.any()) {
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
  } else {
    body.classList.add('mouse');
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
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
    ],
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
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: false,
          swipe: true,
        },
      },
    ],
  });

  $('.vid-with__sl').slick({
    infinite: true,
    slidesToShow: 3,
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 200,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    dots: false,    
    arrows: true,    
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: false,
          swipe: true,
        },
      },
    ],
  });

  $('[data-fancybox="certif-doc"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe: {
      css: {
        width: '950px',
      },
    },
    slideClass: 'myClass',
    baseClass: 'myclass',
  });

  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe: {
      css: {
        width: '950px',
      },
    },
    slideClass: 'myClass',
    baseClass: 'myclass',
  });

  $('[data-fancybox="gal-m1"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe: {
      css: {
        width: '950px',
      },
    },
    slideClass: 'myClass',
    baseClass: 'myclass',
  });

  $('.vid__play-btn').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
      media: {},
    },
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
    $(openLink).click(function (e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function (e) {
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

  popup('.js-call', '.modal-overlay_1', '.modal-close_1');
  popup('.js-calldoc', '.modal-overlay_2', '.modal-close_2');
  popup('.js-tel', '.modal-overlay_3', '.modal-close_3');

  $('.tel').mask('+7 (999) 999-99-99');

  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination - 85 }, 1100);
    return false;
  });

  $(window).scroll(function () {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    } else {
      $('.serv-arr-up').hide();
    }
  });

  if ($('select').length) {
    $('select').each(function () {
      $(this).select2({
        minimumResultsForSearch: -1,
        dropdownParent: $(this).parent(),
      });
    });
  }

  $('.accordion-item').click(function () {
    $(this).find('.accordion-header').toggleClass('active-header');
    $(this).find('.accordion-content').slideToggle().toggleClass('open-content');
  });

  $('.audio-player').each(function () {
    const player = $(this);
    const audio = new Audio(player.data('audio'));

    // Элементы плеера
    const playBtn = player.find('.audio-player__play');
    const playIcon = player.find('.play-icon');
    const pauseIcon = player.find('.pause-icon');
    const progressBar = player.find('.audio-player__progress-bar');
    const progressFilled = player.find('.audio-player__progress-filled');
    const currentTimeEl = player.find('.audio-player__current');
    const durationEl = player.find('.audio-player__duration');
    const volumeBtn = player.find('.audio-player__volume-btn');
    const volumeBar = player.find('.audio-player__volume-bar');
    const volumeFilled = player.find('.audio-player__volume-filled');

    let isDragging = false;
    let isVolumeDragging = false;

    // Форматирование времени
    function formatTime(seconds) {
      if (isNaN(seconds)) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    // Обновление прогресса
    function updateProgress() {
      if (!isDragging) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFilled.css('width', percent + '%');
        currentTimeEl.text(formatTime(audio.currentTime));
      }
    }

    // Обновление времени
    audio.addEventListener('loadedmetadata', function () {
      durationEl.text(formatTime(audio.duration));
    });

    // Обновление прогресса во время воспроизведения
    audio.addEventListener('timeupdate', updateProgress);

    // Завершение воспроизведения
    audio.addEventListener('ended', function () {
      playIcon.show();
      pauseIcon.hide();
      progressFilled.css('width', '0%');
      currentTimeEl.text('0:00');
      audio.currentTime = 0;
    });

    // Play/Pause
    playBtn.on('click', function () {
      if (audio.paused) {
        audio.play();
        playIcon.hide();
        pauseIcon.show();
      } else {
        audio.pause();
        playIcon.show();
        pauseIcon.hide();
      }
    });

    // Клик по прогресс-бару
    progressBar.on('click', function (e) {
      const rect = this.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audio.currentTime = percent * audio.duration;
      progressFilled.css('width', percent * 100 + '%');
    });

    // Перетаскивание прогресс-бара
    progressBar.on('mousedown', function (e) {
      isDragging = true;
      const rect = this.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audio.currentTime = percent * audio.duration;
      progressFilled.css('width', percent * 100 + '%');
    });

    $(document).on('mousemove', function (e) {
      if (isDragging) {
        const rect = progressBar[0].getBoundingClientRect();
        let percent = (e.clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        audio.currentTime = percent * audio.duration;
        progressFilled.css('width', percent * 100 + '%');
        currentTimeEl.text(formatTime(audio.currentTime));
      }

      if (isVolumeDragging) {
        const rect = volumeBar[0].getBoundingClientRect();
        let percent = (e.clientX - rect.left) / rect.width;
        percent = Math.max(0, Math.min(1, percent));
        audio.volume = percent;
        volumeFilled.css('width', percent * 100 + '%');
      }
    });

    $(document).on('mouseup', function () {
      isDragging = false;
      isVolumeDragging = false;
    });

    // Управление громкостью
    volumeBtn.on('click', function () {
      if (audio.volume > 0) {
        audio.volume = 0;
        volumeFilled.css('width', '0%');
      } else {
        audio.volume = 1;
        volumeFilled.css('width', '100%');
      }
    });

    volumeBar.on('click', function (e) {
      const rect = this.getBoundingClientRect();
      let percent = (e.clientX - rect.left) / rect.width;
      percent = Math.max(0, Math.min(1, percent));
      audio.volume = percent;
      volumeFilled.css('width', percent * 100 + '%');
    });

    volumeBar.on('mousedown', function (e) {
      isVolumeDragging = true;
      const rect = this.getBoundingClientRect();
      let percent = (e.clientX - rect.left) / rect.width;
      percent = Math.max(0, Math.min(1, percent));
      audio.volume = percent;
      volumeFilled.css('width', percent * 100 + '%');
    });

    // Клавиши на клавиатуре
    playBtn.on('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playBtn.click();
      }
    });

    // Обработка ошибок
    audio.addEventListener('error', function () {
      console.error('Ошибка воспроизведения аудио');
      playBtn.prop('disabled', true);
    });
  });

  $('.why__icon').each(function () {
    var $img = $(this).find('img');
    var imgSrc = $img.attr('src');

    if (imgSrc && imgSrc.endsWith('.svg')) {
      $.ajax({
        url: imgSrc,
        dataType: 'text',
        success: function (svgCode) {
          // Заменяем весь контент .why__icon на SVG код
          $(this).html(svgCode);
        }.bind(this),
        error: function () {
          console.error('Ошибка загрузки SVG:', imgSrc);
        },
      });
    }
  });

  document.addEventListener(
    'wpcf7mailsent',
    function (event) {
      var form = jQuery(event.target); // Берем отправленную форму
      var formId = event.detail.contactFormId; // ID формы

      // Базовые поля для всех форм
      var phone = form.find('input[name="your-phone"]').val();
      var name = form.find('input[name="your-name"]').val();
      var comment = form.find('textarea[name="your-comment"]').val();

      // Определяем заголовок в зависимости от формы
      var subject = '';
      if (formId == 'b88bbdb') {
        subject = 'Заявка с формы "Заказать звонок" (синий блок)';
      } else if (formId == 'f425873') {
        subject = 'Заявка с формы "Вызвать нарколога" (горизонтальная)';
      } else if (formId == '76297f3') {
        subject = 'Заявка с формы "Вызвать нарколога"';
      } else if (formId == '689a2c9') {
        subject = 'Заявка с формы "Заказать звонок"';
      } else if (formId == 'f152145') {
        subject = 'Заявка с формы "Записаться на приём"';
      } else {
        subject = 'Заявка с сайта'; // На случай, если форма не из списка
      }

      var ct_site_id = '84959'; // Ваш site_id

      // Формируем данные для Calltouch
      var ct_data = {
        fio: name || '',
        phoneNumber: phone,
        subject: subject,
        comment: comment || '',
        requestUrl: location.href,
        sessionId: window.call_value || getCookie('_ct_session_id'), // Пытаемся получить sessionId
      };

      console.log('🚀 Данные перед отправкой в Calltouch:', ct_data);
      console.log('📝 ID формы:', formId);

      // Отправляем, только если есть телефон
      if (phone && phone != '') {
        $.ajax({
          url:
            'https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/',
          dataType: 'json',
          type: 'POST',
          data: ct_data,
          async: false, // Синхронный запрос, если после отправки редирект
          success: function (response) {
            console.log('✅ Calltouch успешно принял данные:', response);
          },
          error: function (xhr, status, error) {
            console.error('❌ Ошибка при отправке в Calltouch:', status, error);
            console.error('ℹ️ Ответ сервера:', xhr.responseText);
          },
        });
      } else {
        console.warn('⚠️ Телефон не указан, отправка в Calltouch пропущена');
      }

      // Вспомогательная функция для получения куки
      function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
      }
    },
    false,
  );
}); //ready
