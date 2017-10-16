import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {GameComponent} from './game/game/game.component';
import { GameCategoryComponent } from './game/game-category/game-category.component';
import {AuthGuard} from './guards/auth.guard';
import {GameGuard} from './guards/game.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
  	path: 'profile',
  	component: ProfileComponent,
  	canActivate: [AuthGuard]
  },
  {
  	path: 'game',
  	component: GameComponent,
  	canActivate: [AuthGuard, GameGuard]
  },
  {
  	path: 'category-choose',
  	component: GameCategoryComponent,
  	canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
