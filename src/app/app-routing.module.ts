import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { SnakeListingComponent } from './components/snake-listing/snake-listing.component';
import { SnakePageComponent } from './components/snake-page/snake-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'snakes',
    component: SnakeListingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'snakes/:id',
    component: SnakePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
