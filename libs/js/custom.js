    $(document).ready(function () {


      $("#banner").slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        responsive: [{
          breakpoint: 500,
          settings: {
            adaptiveHeight: false
          }

        }]
      });
      $('#carouselBlog').slick({
        'dots': false,
        'slidesToShow': 3,
        responsive: [{
            breakpoint: 769,
            settings: {

              slidesToShow: 2
            }
          },
          {
            breakpoint: 448,
            settings: {

              slidesToShow: 1
            }
          },
          {
            breakpoint: 498,
            settings: {

              slidesToShow: 1
            }
          }



        ]
      })

      $(document).on("scroll", onScroll);

      //smoothscroll
      $('#pagination a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
          $(this).removeClass('active-page');
        })
        $(this).addClass('active-page');

        var target = this.hash,
          menu = target;
        $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top + 2
        }, 700, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      });

      function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('#pagination a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#pagination a').removeClass("active-page");
            currLink.addClass("active-page");
          } else {
            currLink.removeClass("active-page");
          }
        });
      }



      //scroll menu
      var lastScrollTop = 100;

      $(window).scroll(function (event) {
        var the_top = jQuery(document).scrollTop();


        if (the_top < 100) {
          $('header, #rewiev').removeClass('fixed');
        } else {
          $('header, #rewiev').addClass('fixed');
        }
        lastScrollTop = the_top;
      });

      //mobile menu toggle
      $('.icon-menu').click(function () {
        $('nav').toggleClass('active');
        $(this).toggleClass('active');

      });



      // Show form order a doctor   
      $('.get_popup').click(function () {
        var item = $(this).parent().parent('.item-p');
        var image = item.find('img').attr('src');
        var nameDoctor = item.find('.name-p').text();
        var price = item.find('.price').text();
        var popup = $('#wrap-popup');
        var description = item.find('.text-p').text();
        popup.find('.product-name').text(nameDoctor);
        popup.find('img').attr('src', image);
        popup.find('#price').text(price);
        popup.find('.text').text(description);
        popup.fadeIn();
        console.log(nameDoctor);

      });
      //Close form order a doctor
      $('.close-form').click(function () {
        $('#wrap-popup').fadeOut();
      });

      $('#filterbtn').click(function () {
        $('.wrap-filter').slideToggle();
      });

      $("#filterbyprice").ionRangeSlider();

    });

    function filter() {
      var price = document.getElementById('filterbyprice').value;
      let min = document.getElementById('min-price');
      let item = document.getElementsByClassName('item-3');



      min.innerHTML = price;




    }