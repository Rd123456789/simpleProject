import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';

const routes: Routes = [
  {
    path:'' ,component:TodoComponentComponent 

  },
  {
    path:'about', component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
