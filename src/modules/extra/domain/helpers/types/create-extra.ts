import { ModificationType } from "./modification-type";

export interface ICreateExtra {
    name: string;
    price: number;
    food: string;
    modification: ModificationType;
}