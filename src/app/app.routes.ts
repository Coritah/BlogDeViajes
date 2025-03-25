import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TuPostComponent } from './pages/tu-post/tu-post.component';
import { PublicarComponent } from './pages/publicar/publicar.component';


export const routes: Routes = [
    {path: "", pathMatch:'full', redirectTo: 'inicio'},
    {path:'inicio', component: InicioComponent},
    {path: 'tupost', component: TuPostComponent},
    {path: 'publicar', component: PublicarComponent},
    { path: "**", redirectTo: 'inicio' }
];
