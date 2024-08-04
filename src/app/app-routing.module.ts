import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full'
  },
  {
    path: 'hero',
    loadChildren: () => import('./ui/hero/hero.module').then(m => m.HeroModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
