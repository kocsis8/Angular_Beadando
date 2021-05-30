import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
      /*       {
                path: 'leker',
                loadChildren: () => import('./../leker/leker.module').then(m => m.LekerModule),
            },
            {
                path: 'feltolt',
                loadChildren: () => import('./../feltolt/feltolt.module').then(m => m.FeltoltModule),
            },
            {
                path: 'modosit',
                loadChildren: () => import('./../modosit/modosit.module').then(m => m.ModositModule),
            } */

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
