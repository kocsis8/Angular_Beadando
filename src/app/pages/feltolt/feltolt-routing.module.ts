import { FeltoltComponent } from './feltolt.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: FeltoltComponent,
        data: { title: 'feltoltes' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeltoltRoutingModule { }
