export class CategoryExistException extends Error {
  constructor() {
    super('category just exist');
  }
}
