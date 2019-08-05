import {ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {Car, CarCategory} from '../../models/car';
import {CarsService} from '../../services/cars.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-car-create-dialog',
    templateUrl: './car-create-dialog.component.html',
    styleUrls: ['./car-create-dialog.component.sass'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
})
export class CarCreateDialogComponent implements OnInit, OnDestroy {

    @HostBinding('class.app-car-dialog') private isDialogClassUsed = true;

    categories: Array<CarCategory> = [];

    compareFn = defaultCompareFn;

    formGroup: FormGroup;

    private destroy$ = new Subject();

    constructor(private carsService: CarsService, private dialogRef: MatDialogRef<CarCreateDialogComponent>) {
    }

    private initFormGroup() {

        this.formGroup = new FormGroup({

            titleCtrl: new FormControl(null, Validators.required),

            descriptionCtrl: new FormControl(null, Validators.required),

            categoryCtrl: new FormControl(null, Validators.required),

            responseCtrl: new FormControl(null, Validators.required),
        });
    }

    onFormSubmit() {

        const car = new Car();

        car.title = this.formGroup.get('titleCtrl').value;
        car.description = this.formGroup.get('descriptionCtrl').value;
        car.category = this.formGroup.get('categoryCtrl').value;
        car.response = this.formGroup.get('responseCtrl').value;

        this.dialogRef.close(car);
    }

    ngOnInit() {

        this.carsService.loadCategories().pipe(
            takeUntil(this.destroy$)
        ).subscribe((categories: Array<CarCategory>) => {

            return this.categories = categories;
        });

        this.initFormGroup();
    }

    ngOnDestroy(): void {

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }

}

export function defaultCompareFn(compared1: { id: number }, compared2: { id: number }) {

    return compared1 && compared2 ? compared1.id === compared2.id : compared1 === compared2;
}
