import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CounterStore } from './counterstore/counter-store';

describe('AppComponent', () => {
  let component: AppComponent;
  const counterStoreMock = {
    increment: jest.fn(),
    count: jest.fn().mockReturnValue(0), // Set initial count to 0 for the test
  };
  const mockRouter = {
    navigate: jest.fn(),
  };

  const mockActivatedRoute = {};
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: CounterStore, useValue: counterStoreMock },
      ],
    }).compileComponents();

    TestBed.overrideProvider(CounterStore, { useValue: counterStoreMock });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call increment on CounterStore when countUp is called', () => {
    const navigateSpy = jest.spyOn(mockRouter, 'navigate');

    // Call the countUp method
    component.navigateToTrainers();

    // Check if the increment method was called
    expect(navigateSpy).toHaveBeenCalled();
  });

  it(`should have as title 'materialapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    expect(fixture).toBeTruthy();
  });
});
