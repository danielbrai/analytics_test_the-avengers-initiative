import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'heroes-list', component: HeroesListComponent },
  { path: 'heroes/:id', component: HeroesDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
