import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';

import { HomeComponent } from './home/home.component';
import { RepeatElemPairComponent } from './samples/repeat-elem-pair/repeat-elem-pair.component';

export const ROUTES: Routes = [
    {
        path: 'samples', children: [
            { path: 'repeat-elem-pair', component: RepeatElemPairComponent },
            { path: '**', redirectTo: '/' }
        ]
    },
    { path: '', component: HomeComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
