import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
//import {} from './app.component';
import  {TasksComponent} from './tasks.component';


const appRoutes: Routes = [{
    path: 'tasks',
    component: TasksComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)