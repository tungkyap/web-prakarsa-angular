import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { client } from '../logo-carousel/client-logo';

@Component({
  selector: 'app-logo-slider',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './logo-slider.component.html',
  styleUrl: './logo-slider.component.css'
})
export class LogoSliderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  private swiper!: Swiper;

  // Sample client data - replace with your actual client data
  // clients = [
  //   { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg' },
  //   { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  //   { name: 'Apple', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  //   { name: 'Amazon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  //   { name: 'Meta', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg' },
  //   { name: 'Netflix', logo: 'https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png' },
  //   { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg' },
  //   { name: 'Adobe', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg' },
  //   { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  //   { name: 'Twitter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg' }
  // ];

  clients = client;

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Autoplay, Navigation, Pagination],

      // Slides configuration
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: false,

      // Infinite loop
      loop: true,

      // Autoplay configuration
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,
      },

      // Speed for smooth continuous scrolling
      speed: 3000,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 60,
        }
      },

      // Additional options
      freeMode: true,
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },

      // Events
      on: {
        init: () => {
          // Optional: Add any initialization logic
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }


}
