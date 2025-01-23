import { ModificationType } from "../types/modification-type";

export interface CreateExtraDto {
    name: string;
    price: number;
    food: string;
    modification: ModificationType;
}