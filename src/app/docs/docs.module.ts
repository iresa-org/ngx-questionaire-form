import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent
  }
];

@NgModule({
  declarations: [DocsComponent],
  imports: [
    CommonModule,

    SharedModule,

    RouterModule.forChild(routes)
  ]
})
export class DocsModule { }
