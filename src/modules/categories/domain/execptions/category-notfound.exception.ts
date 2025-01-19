export class CategoryNotFound extends Error {
  constructor() {
    super('Category was not found');
  }
}
