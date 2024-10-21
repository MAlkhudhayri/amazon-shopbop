import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RankingComponent } from './components/ranking/ranking.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ranking', component: RankingComponent },
];
