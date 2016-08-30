import {describe, it, beforeEachProviders, inject, expect} from '@angular/core/testing'
import {HelloWorldService} from '../../app/helloworld/hello-world.service'

describe('Hello World', () => {

  const HELLO = 'Hello World!'

  beforeEachProviders(() => [
    HelloWorldService
  ])

  it ('should inject hello service',
    (inject([HelloWorldService], (helloWorldService: HelloWorldService) => {
      expect(helloWorldService.getHello()).toBe(HELLO)
  })))
})
