export interface Page<T> {
    content: Array<T>,
    meta: PageMeta
}

export interface PageMeta {
    page: number,
    perPage: number,
    total: number
}