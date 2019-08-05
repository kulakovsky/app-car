import {Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {Car} from '../../models/car';
import {MatDialog} from '@angular/material';
import {CarCreateDialogComponent} from '../car-create-dialog/car-create-dialog.component';
import {filter, takeUntil} from 'rxjs/operators';
import {CarsService} from '../../services/cars.service';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.sass'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class CarsComponent implements OnInit, OnDestroy {

    @HostBinding('class.app-cars') private isDialogClassUsed = true;

    carsGroup: CarsGroup[];

    cars: Array<Car> = [];

    private destroy$ = new Subject();

    constructor(private dialogService: MatDialog, private carsService: CarsService) {
    }

    openCarDialogButtonClick() {

        this.dialogService.open(CarCreateDialogComponent).afterClosed()
            .pipe(
                takeUntil(this.destroy$),
                filter(car => car)
            )
            .subscribe(
                (car: Car) => {

                    this.cars.push(car);

                    this.generateCarGroup();
                }
            );
    }

    onDeletingCar(car: Car) {

        this.cars.splice(this.cars.indexOf(car), 1);

        this.generateCarGroup();

    }

    generateCarGroup(): void {

        this.carsGroup = groupCars(this.cars);
    }

    ngOnInit() {

        this.carsService.loadCars().pipe(
            takeUntil(this.destroy$)
        ).subscribe((cars: Array<Car>) => {

            return this.cars = cars;
        });

        this.cars = this.carsService.cars;

        this.generateCarGroup();
    }



    ngOnDestroy(): void {

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }

}

function generateCarGroupTitle(car: Car): string {

    return car.category.title;
}

function groupCars(cars: Car[]): CarsGroup[] {

    const carsGroupsByTitleMap: Map<string, CarsGroup> = cars.reduce((groupsMap, car): Map<string, CarsGroup> => {

        const groupTitle = generateCarGroupTitle(car);

        if (!groupsMap.has(groupTitle)) {

            groupsMap.set(groupTitle, { title: groupTitle, cars: [] });
        }

        const group: CarsGroup = groupsMap.get(groupTitle);

        group.cars.push(car);

        return groupsMap;
    }, new Map());

    return Array.from(carsGroupsByTitleMap.values());

}

interface CarsGroup {

    cars: Car[];

    title: string;
}
