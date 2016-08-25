import {HelloWorldComponent} from '../../app/helloworld/hello-world.component'
import { HelloWorldService } from '../../app/helloworld/hello-world.service'

import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  async
} from '@angular/core/testing'

import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing'

describe('HelloWorldComponent', () => {

  beforeEachProviders(() => [HelloWorldService])

  it ('should show text', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(HelloWorldComponent)
      .then ((fixture: ComponentFixture<HelloWorldComponent>) => {
        let element = fixture.nativeElement
        let component = fixture.debugElement.componentInstance
        fixture.detectChanges()
        expect(element.querySelector('#hello').innerHTML).toBe('Hello World!')
      })
  })))

})
