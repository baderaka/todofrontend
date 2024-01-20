import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  register={
    name:'',
    email:'',
    password:''
  }
  constructor(private api:TodoService,private route:Router,private toaster:ToastrService){

  }
ngOnInit(): void {
  
}
onsubmit(value:any){
this.api.registeruser(value).subscribe(res=>{
console.log(res);
this.toaster.info("registration successfull.now try to loggin here!!")
this.route.navigate(['/'])
})
}
}
