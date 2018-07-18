import { Component, OnInit  } from '@angular/core';
// Se declaran las variables que jquery va usar
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photo = 'https://firebasestorage.googleapis.com/v0/b/portfolio-a3e4e.appspot.com/o/13662129_1191084747609255_5184517875363444775_o.jpg?alt=media&token=656bd179-b513-4b48-ba50-6c925973c8c6';
  constructor() {

  }

  ngOnInit() {

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 48)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
     // Closes responsive menu when a scroll trigger link is clicked
     $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  }
}
