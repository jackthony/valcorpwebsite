import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home', loadComponent: () => import('../app/landing/pages/home/home.component')

    },
    {
        path: 'nosotros', loadComponent: () => import('./landing/componentes/nosotros/nosotros.component')
    },
    {
        path: 'nuestro-proposito', loadComponent: () => import('./landing/pages/nuestro-proposito/nuestro-proposito.component')
    },
    {

        path: 'proyectos/:id', loadComponent: () => import('../../src/app/landing/pages/proyecto-detalles/proyecto-detalles.component')
    },

    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'home', pathMatch: 'full'
    }

];
