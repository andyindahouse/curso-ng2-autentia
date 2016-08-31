import {Calculator} from '../app/Calculator'
import {AddService} from '../app/add.service'

describe ("Calculator tests", () => {

  let calc: Calculator

  beforeEach(()=>{
      let addService = jasmine.createSpyObj('addService', ['add'])
      addService.add.and.callFake((a, b) => {
        return new Promise((resolve) => {
          resolve(a + b)
        })
      })
      calc = new Calculator(addService)
  })

  it("should add 3 and 5", (done) =>{
      let a: number = 3
      let b: number = 5

      calc.add(a, b).then(
        value => {
          console.log('******************')
          expect(value).toBe(8)
          done()
        }
      )

  })

})
