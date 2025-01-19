import { Page, PageMeta } from './page';

export class Mapper<E, M> {
  protected convert(data: M): E {
    throw Error('method not implemented');
  }

  toList(data: Array<M>): Array<E> {
    return data.map((item) => this.convert(item));
  }

  toPage(data: Array<M>, options: PageMeta): Page<E> {
    return {
      content: this.toList(data),
      meta: options,
    };
  }
}
