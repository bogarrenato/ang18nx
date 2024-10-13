import {
  patchState,
  signalStore,
  watchState,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

export const CounterStore = signalStore(
  withState({ count: 0 }),
  withMethods((store) => ({
    increment(): void {
      patchState(store, { count: store.count() + 1 });
    },
  })),
  withHooks({
    onInit(store) {
      watchState(store, (state) => {
        console.log('[watchState] counter state', state);
      }); // logs: { count: 0 }, { count: 1 }, { count: 2 }

      //   effect(() => {
      //     console.log('[effect] counter state', getState(store));
      //   }); // logs: { count: 2 }

      //   store.increment();
      //   store.increment();
    },
  })
);
