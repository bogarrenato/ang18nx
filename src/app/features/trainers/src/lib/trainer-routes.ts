import { Route } from '@angular/router';
import { TrainersComponent } from './trainers/trainers.component';

export const trainerRoutes: Route[] = [
  {
    path: '',
    component: TrainersComponent,
  },
  {
    path: ':id',
    loadComponent: () => {
      return import('./trainer-details/trainer-details.component').then(
        (routing) => routing.TrainerDetailsComponent
      );
    },
  },
];
