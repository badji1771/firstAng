import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit{
  // hello : string = '' //cas dune variable
 hello : string[] = [] //cas des tableaux
  constructor(private service:FirstService){
   
  }
  ngOnInit() : void{
    this.hello = this.service.sayHello()
  }
}
