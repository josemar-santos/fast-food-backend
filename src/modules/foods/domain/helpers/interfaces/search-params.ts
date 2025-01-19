export interface SearchParam {
  name?: string;
  category?: string;
  prepareTime?: string;
  deleted: boolean;
}

export enum Order {
  NAME = 'name',
  PRICE = 'price',
  PREPARETIME = 'prepareTime',
  CATEGORY = 'category',
  DELETED = 'deleted',
}

export enum Sort {
  DESCENDING = 'desc',
  GROWING = 'asc',
}
