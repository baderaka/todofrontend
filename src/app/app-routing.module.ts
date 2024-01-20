import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { NewuserComponent } from './newuser/newuser.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './share/auth.guard';
const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },
  {path:'task',component:TodoComponent,canActivate:[AuthGuard]},
  {path:'newuser',component:NewuserComponent},
  {
    path:'edit/:id',component:EditComponent,canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
