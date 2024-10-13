import { TestBed } from '@angular/core/testing';
import { CounterStore } from './counter-store';

describe('CounterStore', () => {
  let counterStore: InstanceType<typeof CounterStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterStore],
    });

    counterStore = TestBed.inject(CounterStore);
  });

  it('should be created', () => {
    expect(counterStore).toBeTruthy();
  });

  it('should have an initial count of 0', () => {
    const initialState = counterStore.count();
    expect(initialState).toBe(0);
  });

  it('should increment the count', () => {
    counterStore.increment();
    expect(counterStore.count()).toBe(1);

    counterStore.increment();
    expect(counterStore.count()).toBe(2);
  });

  //   it('should log state changes on init', () => {
  //     spyOn(console, 'log');

  //     // Manually trigger initialization hooks
  //     counterStore.onInit(counterStore);

  //     expect(console.log).toHaveBeenCalledWith('[watchState] counter state', {
  //       count: 0,
  //     });
  //     expect(console.log).toHaveBeenCalledWith('[effect] counter state', {
  //       count: 2,
  //     });

  //     // Since store.increment() is called twice on init
  //     expect(counterStore.count()).toBe(2);
  //   });
});
