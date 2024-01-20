import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id:any;
  task={
    title:''
  }
  constructor (private api: TodoService,private router:ActivatedRoute,private route:Router){
   
    
  }
  ngOnInit():void{
   
    this.id=this.router.snapshot.paramMap.get('id');
    this.api.gettaskbyid(this.id).subscribe(res=>{
      console.log(res);
      this.task=res;
    })
    
  }
  edit(title:string){
    this.id=this.router.snapshot.paramMap.get('id');
    this.api.edit(this.id,title).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/task'])
    })
  }
  logout(){
    this.api.logout().subscribe(res=>{
      console.log(res);
      this.api.removetoken();
      this.route.navigate(['/']);
    })
  }
}
