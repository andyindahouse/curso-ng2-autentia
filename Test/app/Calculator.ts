import {AddService} from './add.service'

export class Calculator {

  constructor(private addService: AddService){}


  add(a: number, b: number): Promise<number> {
      return this.addService.add(a, b)
  }

}
