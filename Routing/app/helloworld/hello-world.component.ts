import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import { HelloWorldService } from './hello-world.service'

@Component({
  selector: 'ng2-hello-world',
  providers: [HelloWorldService],
  template: `<p id="hello">{{hello}}</p>
  <button (click)="goToOther()">Go to Other</button>`

})

export class HelloWorldComponent implements OnInit{
  hello: string

  constructor(
    private helloWorldService:HelloWorldService,
    private router:Router
  ){}

  ngOnInit(){
    this.hello = this.helloWorldService.getHello()
  }

  goToOther(){
    this.router.navigate(['/other', 'from', 'hello'])
  }
}
