import { Component,OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data={
    email:'',
    password:''
  }
constructor(private api:TodoService,private router:Router,private toastr: ToastrService){

}
  ngOnInit(): void {
    
  }
login(){
this.api.postlogin(this.data).subscribe(res=>{
  console.log(res);
 
  this.api.settoken(res.token);
  
this.toastr.info("loggin successfull");
this.router.navigate(['/task'])
},
err=>{
  console.log(err)
this.toastr.info("loggin unsuccessfull")
})
}
}
