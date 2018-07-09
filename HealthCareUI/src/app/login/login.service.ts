import { Injectable } from '@angular/core';
import { LoginUser } from './loginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  validateUser(loginId: string,password:string)
  {    
    if(Users.find(s=>s.loginId==loginId && s.password==password))
        {
          return true;
        }
        else
        {
          return false;
        }  
  }  
}
export const Users: LoginUser[] = [
  { loginId: 'p1', password: 'p1' },
  { loginId: 'a1', password: 'a1' }
];
