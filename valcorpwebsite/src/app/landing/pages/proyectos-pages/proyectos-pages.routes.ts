import { Routes } from '@angular/router';
 const routes: Routes = [
 
{

    path:'', loadComponent:()=> import('./proyectos-pages.component')
},

{
    path:':id', loadComponent: ()=> import('./proyecto-robles/proyecto-robles.component')

},

];

export default routes;