import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
Swiper.use([Pagination, Navigation, Autoplay, EffectFade])


export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

@Component({
  selector: 'app-team-swiper',
  imports: [],
  templateUrl: './team-swiper.component.html',
  styleUrl: './team-swiper.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TeamSwiperComponent implements OnInit, AfterViewInit {

  @ViewChild('swiperRef', { static: false }) swiperRef?: ElementRef;

  mySwiper?: Swiper;

  // Swiper configuration
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 40,
    centeredSlides: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    effect: 'slide',
    speed: 600,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
  };

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Joko Sumiyanto',
      position: 'Founder | Director of Engineering',
      description: '30+ years of experience in structural engineering, forensic engineering, construction supervision, concrete materials.',
      image: '/images/team-member-profile/joko_sumiyanto_zoom.png',
      social: {
        linkedin: '#',
        email: 'budi@prakarsa.com',
      }
    },
    {
      id: 2,
      name: 'Kemal Fardianto',
      position: 'Engineer | Director of Operations & Business Development',
      description: '5+ years of experience in transportation engineering, planning & financing engineering economics.',
      image: '/images/team-member-profile/kemal_fardianto_zoom.png',
      social: {
        linkedin: '#',
        email: 'sari@prakarsa.com',
      }
    },
    {
      id: 3,
      name: 'Gatra Dewa Oktananda',
      position: 'Engineer | Head of Research & Development',
      description: '5+ years of experience in structural engineering, construction engineering & supervision, concrete materials, project logistics & planning.',
      image: '/images/team-member-profile/gatra_dewa_oktananda_zoom.png',
      social: {
        linkedin: '#',
        email: 'ahmad@prakarsa.com',
      }
    },
    {
      id: 4,
      name: 'Mochammad Murtadlo Najib',
      position: 'Engineer | Head of Construction',
      description: '10+ years of experience in construction engineering & supervision, project management, logistics & supervision, cost estimator.',
      image: '/images/team-member-profile/mochammad_murtadlo_najib_zoom.png',
      social: {
        linkedin: '#',
        email: 'maya@prakarsa.com',
      }
    },
    {
      id: 5,
      name: 'Arif Tri Wijayanto',
      position: 'Engineer | Head of Drafting',
      description: '10+ years of experience in engineering drafting, construction engineering, project management, cost estimator.',
      image: '/images/team-member-profile/arif_tri_wijayanto_zoom.png',
      social: {
        linkedin: '#',
        email: 'dedi@prakarsa.com',
      }
    },
    {
      id: 6,
      name: 'Irkhas Bayu Faveryan',
      position: 'Academic Partner | Research & Development',
      description: '5+ years of experience in structural engineering, numerical analysis & modeling, building information modeling (BIM).',
      image: '/images/team-member-profile/irkhas_bayu_faveryan_zoom.png',
      social: {
        linkedin: '#',
        email: 'rini@prakarsa.com',
      }
    },
    {
      id: 7,
      name: 'Tsalitsatul Husna',
      position: 'Engineer | Research & Development',
      description: '10+ years of experience in hydrologic engineering, admin.',
      image: '/images/team-member-profile/tsalitsatul_husna_zoom.png',
      social: {
        linkedin: '#',
        email: 'rini@prakarsa.com',
      }
    },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.swiperRef) {
      this.mySwiper = new Swiper(this.swiperRef.nativeElement, this.swiperConfig);
    }
  }

  trackByMemberId(index: number, member: TeamMember): number {
    return member.id;
  }

  // Method to handle social media clicks
  onSocialClick(platform: string, link: string): void {
    if (platform === 'email') {
      window.location.href = `mailto:${link}`;
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/${link}`, '_blank');
    } else {
      window.open(link, '_blank');
    }
  }

  // Method to handle member card click (optional)
  onMemberClick(member: TeamMember): void {
    console.log('Member clicked:', member);
    // Add your logic here (e.g., open modal, navigate to detail page)
  }

}
