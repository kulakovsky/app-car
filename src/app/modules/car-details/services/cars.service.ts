import {Injectable} from '@angular/core';
import {Car, CarCategory} from '../models/car';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    cars: Array<Car> = [
        {
            id: 1,
            title: 'VW',
            description: 'There stand..',
            response: '...',
            category: {
                id: 1,
                title: 'Van'
            }
        } as Car,
        {
            id: 2,
            title: 'Golf',
            description: 'There stand..',
            response: '...',
            category: {
                id: 2,
                title: 'Track'
            }
        } as Car,
        {
            id: 3,
            title: 'Mercedes',
            description: 'There stand..',
            response: '...',
            category: {
                id: 2,
                title: 'Track'
            }
        } as Car
    ];

    categories: Array<CarCategory> = [
        {
            id: 1,
            title: 'Van'
        } as CarCategory,
        {
            id: 2,
            title: 'Track'
        } as CarCategory
    ];

    constructor() {
    }

    loadCars(): Observable<Array<Car>> {

        return of(this.cars);
    }

    loadCategories(): Observable<Array<CarCategory>> {

        return of(this.categories);
    }
}
