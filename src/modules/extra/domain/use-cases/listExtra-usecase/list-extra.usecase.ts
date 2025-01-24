import { ExtraRepository } from "src/modules/extra/ports/repository/extra.repository";

export class ListExtraUseCase {
    constructor(private readonly extraRepository: ExtraRepository) {}

    exec(
        page: number,
        perPage: number,
        food_id: string
     ) {
        return this.extraRepository.findAll(page, perPage, food_id);
     }
}