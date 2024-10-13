import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CounterStore } from './counterstore/counter-store';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CounterStore],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly counterStore = inject(CounterStore);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  countUp(): void {
    this.counterStore.increment();
  }

  navigateToTrainers(): void {
    this.router.navigate(['trainers'], { relativeTo: this.activatedRoute });
  }
}
