import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  postlogin(data:any){
    return this.http.post<any>("https://taskk-qyyr.onrender.com/user/login",data,{withCredentials:true})
  }
  postask(title:any){
    return this.http.post<any>("https://taskk-qyyr.onrender.com/user",title,{withCredentials:true})
  }
  gettask(){
    return this.http.get<any>("https://taskk-qyyr.onrender.com/user",{withCredentials:true})
  }
  gettaskbyid(id:any){
    return this.http.get<any>(`https://taskk-qyyr.onrender.com/user/${id}`,{withCredentials:true})
  }
  
  registeruser(data:any){
    return this.http.post<any>("https://taskk-qyyr.onrender.com/user/register",data)
  }
  delete(id:any){
    return this.http.delete<any>(`https://taskk-qyyr.onrender.com/user/${id}`,{withCredentials:true})
  }
  logout(){
    return this.http.post<any>("https://taskk-qyyr.onrender.com/user/logout",{},{withCredentials:true})
  }
  edit(id:any,data:any){
    return this.http.put<any>(`https://taskk-qyyr.onrender.com/user/${id}`,data,{withCredentials:true})
  }
  settoken(tokenvalue:any){
     localStorage.setItem("token",tokenvalue)
  }
  removetoken(){
    localStorage.removeItem("token")
  }
  islogged():boolean{
    return !!localStorage.getItem("token")
  }
}
