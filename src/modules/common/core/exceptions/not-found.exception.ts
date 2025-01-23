export class CustomerNotFoundExecption extends Error {

  private status = 409
  constructor(message: string) {
    super(message);
  }

  getStatus() {
    return this.status
  }
}
