import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AboutComponent }  from './about/about';
import { ContactComponent }  from './contact/contact';
import { HomeComponent }  from './home/home';
//console.log(RouterModule);
const appRoutes: Routes = [
    {
		path: '',
		component: HomeComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
