import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'trainers',
        loadChildren: () => {
          console.log('approutes');
          return import('@materialapp2/trainers').then((m) => m.trainerRoutes);
        },
      },
    ],
  },
];
