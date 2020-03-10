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



      // Show form order  
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

//filter price
      $("#filterbyprice").ionRangeSlider({
        type: "double",
        onChange: function(data){
          var toPrice = document.querySelector('.irs-to');
          var fromPrice = document.querySelector('.irs-from');
         var  from = fromPrice.innerHTML;
         var to = toPrice.innerHTML;
          let min = document.getElementById('min-price');
          let max = document.getElementById('max-price');           
    
         
          min.innerHTML = from;
          max.innerHTML = to;
    
        }
      });

    });

    