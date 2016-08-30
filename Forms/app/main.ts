import {Component} from '@angular/core'
import {HelloWorldComponent} from './helloworld/hello-world.component'

@Component({
  selector: 'ng2-app',
  template: `<ng2-hello-world></ng2-hello-world>`,
  directives: [HelloWorldComponent]
})

export class AppComponent{

  constructor(){
  }

}
