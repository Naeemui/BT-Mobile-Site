import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Swiper: any;


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      new Swiper('.businesstoday_photo .swiper-container', {
        pagination: '.businesstoday_photo .swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
});
 new Swiper('.businesstoday_video .swiper-container', {
        pagination: '.businesstoday_video .swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
});

  new Swiper('.bt_nav_section .swiper-container', {
    slidesPerView: 'auto',     
        spaceBetween: 20
        //loop: true
    });
  
  }

}
