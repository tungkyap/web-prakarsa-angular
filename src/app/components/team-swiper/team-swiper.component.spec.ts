import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSwiperComponent } from './team-swiper.component';

describe('TeamSwiperComponent', () => {
  let component: TeamSwiperComponent;
  let fixture: ComponentFixture<TeamSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
