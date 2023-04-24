import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailServiceService {

  private pathGetAllDetails = 'https://localhost:44337/api/Testing/GetData/';
  private pathDeleteDataById ='https://localhost:44337/api/Testing/DeleteDataById/'
  private pathInsertAllData = 'https://localhost:44337/api/Testing/InsertAllData';
  private pathUpdateData = 'https://localhost:44337/api/Testing/UpdateData';
  private pathUserLogin = 'https://localhost:44337/api/Authentication/UserLogin/';

  constructor(private http :HttpClient) { }

  token = localStorage.getItem("AccessToken");
  // const header = new Headers({'Authorization':'Bearer ${token}'});

  // header = new Headers({
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${this.token}`,
  // });

  public GetAllDetails(pagenumber : number, pagesize : number) : Observable<any>
  {
    let obj = new HttpHeaders().set("Authorization","Bearer "+ this.token);
    return this.http.get(this.pathGetAllDetails + pagenumber + '/' + pagesize, { headers: obj});
  }

  public DeleteDataById(id:number) : Observable<any>
  {
    return this.http.delete(this.pathDeleteDataById + id);
  }

  public InsertAllData(data:any) : Observable<any>
  {
    return this.http.post(this.pathInsertAllData,data);
  }

  public UpdateData(data:any) : Observable<any>
  {
    return this.http.put(this.pathUpdateData,data);
  }

  public UserLogin(UserName:string,Password:string) : Observable<any>
  {
    return this.http.get(this.pathUserLogin + UserName + '/' + Password);
  }

}
