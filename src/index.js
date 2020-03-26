import 'jquery';
import 'slick-carousel';
import './css/slick.scss';
import './css/slick-theme.scss';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './css/main.scss';





import '../src/css/svg/menu.svg';
import '../src/css/svg/logo.svg';
import '../src/css/svg/Group-2.svg';
import '../src/css/svg/Polygon.svg';
// import '../src/css/svg/IllustrationDashboard.svg';
import '../src/css/svg/Знаксобводкой.svg';
import '../src/css/svg/Знаксобводкой_old.svg';
import '../src/css/svg/Graph.svg';
import '../src/css/svg/Graph2.svg';
import '../src/css/svg/IllustrationConnect.svg';
import '../src/css/svg/IllustrationChoise.svg';
import '../src/css/svg/IllustrationNotification.svg';
import '../src/css/svg/Line1.svg';
import '../src/css/svg/MoneyTree.svg';
import '../src/css/svg/Unicorn.svg';
import '../src/css/svg/bitrix24.svg';
import '../src/css/svg/znak.svg';
import '../src/css/svg/tochka.svg';
import '../src/css/svg/glaz.svg';
import '../src/css/svg/heart.svg';
import '../src/css/svg/Rubl.svg';
import '../src/css/svg/Rubl2.svg';
import '../src/css/svg/Rubl3.svg';
import '../src/css/svg/ЗнаксобводкойСлева.svg';
import '../src/css/svg/Vector-1.svg';
import '../src/css/svg/Vector.svg';
import '../src/css/svg/secur.svg';
import '../src/css/svg/Linkedin.svg';
import '../src/css/svg/Twitter.svg';
import '../src/css/svg/Facebook.svg';
import '../src/css/svg/Shape.svg';
import '../src/css/svg/zv.svg';
import '../src/css/svg/Line.svg';

function removeMenu(){
  show = false;
  document.getElementById("myNav").style.transform = "translateY(-100%)";
  document.getElementById('myBtn').classList.remove('showHmb');
};

//smos scroll
$('a').on('click', function(e) {
  var anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 67
  }, 1000);
  removeMenu();
  e.preventDefault();
});



//navbar
var show = false;



document.getElementById('myBtn')
    .addEventListener( "click" , ()=>{
      
      var x = document.getElementById("myNav");
    
    if (show) {
      removeMenu();

    } else {
            document.getElementById('myBtn').classList.add('showHmb');
            show = true;
            x.style.transform = "translateY(0)";    
       
        
        
    }
    });


var showFlaf = false;


document.getElementById('downMenu')
    .addEventListener( "click" , ()=>{
      if(showFlaf){
        
        document.getElementById("downMenuChild").style.opacity = "0";
        document.getElementById("arrowFlaf").style.transform = "rotate(0deg)";

        showFlaf = false;
      }else{
        showFlaf = true;
        document.getElementById("arrowFlaf").style.transform = "rotate(180deg)";
        document.getElementById("downMenuChild").style.opacity = "1";
      }
    });


$(".slide1").slick({
    asNavFor: '.slider1CoverNav',
    slidesToShow: 3, 
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.slider1CoverNav').slick({
    slidesToShow: 3, 
    slidesToScroll: 1,
    asNavFor: '.slide1',
    variableWidth: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    draggable: false,
    infinite: false
    

});
$('.slide2').slick({
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,  
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    draggable: true,
    infinite: true,
    customPaging : function(slider, i) {
        return '<span class="slider2dots"></span>';
    },
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            dots: false,
            centerMode: false,
            focusOnSelect: false,
            slidesToScroll: 1
            
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

$('.slide3').slick({
    // slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,  
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    draggable: true,
    variableWidth: true,
    infinite: false,
    customPaging : function(slider, i) {
        return '<span class="slider3dots"></span>';
    },
    responsive: [
        {
          breakpoint: 1441,
          settings: {
            // slidesToShow: 2,
            dots: false,
            draggable: false,
            variableWidth: true,
            centerMode: false,
            focusOnSelect: false,
            // slidesToScroll: 1
            
          }
        },
        {
          breakpoint: 1440,
          settings: {
            // slidesToShow: 2,
            dots: false,
            variableWidth: true,
            draggable: false,
            centerMode: false,
            focusOnSelect: false,
            // slidesToScroll: 1
            
          }
        },
        {
          breakpoint: 1439,
          settings: {
            // slidesToShow: 2,
            dots: true,
            variableWidth: true,
            centerMode: false,
            focusOnSelect: false,
            // slidesToScroll: 1
            
          }
        },
        {
          breakpoint: 769,
          settings: {
            // slidesToShow: 2,
            dots: true,
            variableWidth: true,
            centerMode: false,
            focusOnSelect: false,
            slidesToScroll: 1
            
          }
        },
        {
          breakpoint: 767,
          settings: {
            dots: true,
            // slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 321,
          settings: {
            dots: true,
            // slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            dots: true,
            // slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
});

$('.slide4').slick({
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,  
    dots: true,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    draggable: true,
    infinite: true,
    customPaging : function(slider, i) {
        return '<span class="slider4dots"></span>';
    },
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            dots: false,
            centerMode: false,
            focusOnSelect: false,
            slidesToScroll: 1
            
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});