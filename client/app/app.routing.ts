import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import {BookDetailPageComponent} from "./components/bookDetailPage/book-detail-page.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'book/:id',
    component: BookDetailPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
