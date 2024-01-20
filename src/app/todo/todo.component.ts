import { Component,OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  task={
    title:''
  }
taskarray:any=[];
constructor(private api:TodoService,private router:Router) {}
ngOnInit(): void {
  this.api.gettask().subscribe(res=>{
    console.log(JSON.stringify(res));
    this.taskarray=res;
  })
}
posttask(title:any){
  this.api.postask(this.task).subscribe(res=>{
    console.log(res);
    this.ngOnInit();
  })
}
deletetask(id:any){
this.api.delete(id).subscribe(res=>{
  console.log(res);
  this.ngOnInit();
})
}
logout(){
  this.api.logout().subscribe(res=>{
    console.log(res);
    
    this.api.removetoken();
    this.router.navigate(['/'])
  })
}
}
