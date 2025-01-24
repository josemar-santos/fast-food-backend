import { ModificationType } from "./modification-type";

export interface ICreateExtra {
    name: string;
    price: string;
    food: string;
    modification: ModificationType;
}