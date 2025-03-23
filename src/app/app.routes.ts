import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path: "", pathMatch:'full', redirectTo: 'home' },
    {path: 'home', component: HeaderComponent},
    
    { path: "**", redirectTo: 'home' }
];
