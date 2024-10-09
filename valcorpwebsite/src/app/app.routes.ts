import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 export  const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../app/landing/pages/home/home.component')
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./landing/componentes/nosotros/nosotros.component')
  },
  {
    path: 'nuestro-proposito',
    loadComponent: () => import('./landing/pages/nuestro-proposito/nuestro-proposito.component')
  },
  {
    path: 'proyectos/:id',
    loadComponent: () => import('../../src/app/landing/pages/proyecto-detalles/proyecto-detalles.component')
  },
  {
    path: 'legales-comerciales',
    loadComponent: () => import('./landing/componentes/legales-comerciales/legales-comerciales.component')
  },
  {
    path: 'libro-reclamaciones',
    loadComponent: () => import('./landing/componentes/libro-reclamaciones/libro-reclamaciones.component')
  },
  {
    path: 'contacto',
    loadComponent: () => import('./landing/pages/contactar/contactar.component')
  },
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./landing/componentes/erro-404/erro-404.component')
  }
];

@NgModule({
  imports: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export { RouterModule };

