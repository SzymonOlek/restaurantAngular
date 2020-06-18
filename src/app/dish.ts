import { Restaurant } from './restaurant';
import { DishType } from './dishType';

export class Dish {
    public id: string;
    // tslint:disable-next-line: variable-name
    public inMenu: boolean;
    public name: string;
    public price: number;
    // tslint:disable-next-line: variable-name
    public restaurant = 'd41af725-86e5-429a-b17d-1b932d08c4e7';
    // tslint:disable-next-line: align
    public dishTypes: string[] = ['88c94c75-1422-430b-9a59-623d06c5341c'];
}
