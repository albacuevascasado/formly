import { Nation } from "../models/nation";
import { Observable } from 'rxjs';
import { City } from "../models/city";

export const formlyNationInput = (nations: Observable<Nation[]>) => {
    return {
        key: "nationId",
        type: "select",
        className: "flex-3",
        templateOptions : {
            label: "Nation",
            options: nations,
            description: "Place of residence",
            required: true
        }
    }
}

//export const formlyCityInput = (cities: Observable<City[]>) => {
//    return{}

//}