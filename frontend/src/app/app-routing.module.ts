import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyComponent
  }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
