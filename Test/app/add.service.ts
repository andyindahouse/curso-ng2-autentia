export class AddService {

  add(a: number, b: number): Promise<number> {
    return new Promise((resolve)=> {
      setTimeout(() => {
        resolve(a + b)
      }, 2000)
    })
  }

}
