import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http :HttpClient) { }

  private pathIsUserLoggedIn = 'https://localhost:44337/api/Authentication';

  // login(username: string, password: string): Observable<any> {
  //   // Mock a successful call to an API server.
  //   if (username == this.fakeUsername && password == this.fakePassword) {
  //     localStorage.setItem("token", "my-super-secret-token-from-server");
  //     return of(new HttpResponse({ status: 200 }));
  //   } else {
  //     return of(new HttpResponse({ status: 401 }));
  //   }
  // }

  logout(): void {
    localStorage.removeItem("AccessToken");
  }

  public isUserLoggedIn(): Observable<any> 
  {
    let obj = new HttpHeaders().set("Authorization","Bearer "+ localStorage.getItem("AccessToken"));
    return this.http.get(this.pathIsUserLoggedIn , { headers: obj});
  }
}
