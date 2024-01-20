import { Injectable } from '@angular/core';
import{ CanActivate ,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:TodoService,private router:Router,private toaster:ToastrService){}
  canActivate():boolean {
    if(this.api.islogged()){
      return true;
    }
    else{
      this.toaster.info("to acess this page first you need to log in");
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
