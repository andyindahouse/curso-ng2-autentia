import {Component} from '@angular/core'
import {Routes, ROUTER_DIRECTIVES} from '@angular/router'  
import {HelloWorldComponent} from './helloworld/hello-world.component'
import {OtherComponent} from './other/other.component.ts'

@Component({
  selector: 'ng2-app',
  template: `<nav>
              <a [routerLink]="['/hello']"> Hello</a>
              <a [routerLink]="['/other/andy/mola']"> Other</a>
             </nav>
             <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/hello', component: HelloWorldComponent},
  {path: '/other/:param1/:param2', component: OtherComponent}
])

export class AppComponent{

  constructor(){
  }

}
