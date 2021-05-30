
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListElemComponent } from './list-elem.component';

const routes: Routes = [
    {
        path: '',
        component: ListElemComponent,
        data: { title: 'feltoltes' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListElemRoutingModule { }
