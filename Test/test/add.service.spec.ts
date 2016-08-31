import {AddService} from '../app/add.service'

describe("Add service tests", () => {

  it ('should add two numbers', (done) => {
    let addService:AddService = new AddService()
    addService.add(3, 7).then(
      value => {
        expect(value).toBe(10)
        done()
      }
    )
  })

})
