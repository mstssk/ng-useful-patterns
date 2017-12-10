import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';

import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
