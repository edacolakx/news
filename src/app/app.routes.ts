import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewspageComponent } from './newspage/newspage.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"app-about",component:AboutComponent
    },
    {
        path:"app-categories",component:CategoriesComponent
    },
    {
        path:"business",component:BusinessComponent
    },
    {
        path:"health",component:HealthComponent
    },
    {
        path:"general",component:GeneralComponent
    },
    {
        path:"entertainment",component:EntertainmentComponent
    },
    {
        path:"science",component:ScienceComponent
    },
    {
        path:"sports",component:SportsComponent
    },
    {
        path:"technology",component:TechnologyComponent
    },
];
