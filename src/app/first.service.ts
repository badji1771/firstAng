import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  sayHello(){
    return ["hello from service","hi","Bonjour"]
  }
}
