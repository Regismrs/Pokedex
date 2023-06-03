import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesModule } from './pages/pages.module';


const routes: Routes = [
  {path: '', 
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule )
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
