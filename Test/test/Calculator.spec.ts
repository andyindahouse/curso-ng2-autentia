import {Calculator} from '../app/Calculator'

describe ("Calculator tests", () => {

  let calc: Calculator

  beforeEach(()=>{
      calc = new Calculator()
  })

  it("should add 3 and 5", () =>{
      let a: number = 3
      let b: number = 5

      expect(calc.add(a,b)).toBe(8)
  })

})