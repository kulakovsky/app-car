import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarsComponent} from './cars.component';
import {
    MatButtonModule,
    MatDialog,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
} from '@angular/material';
import {CarDetailsComponent} from '../car-details/car-details.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {of} from 'rxjs';
import {Car} from '../../models/car';

class MatDialogMock {

    open() {
        return {
            afterClosed: () => of(mockCar)
        };
    }
}

const mockCar: Car = {
    id: 55,
    title: 'BMW',
    description: 'There stand..',
    response: '...',
    category: {
        id: 1,
        title: 'Van'
    }
};

describe('CarsComponent', () => {
    let component: CarsComponent;
    let fixture: ComponentFixture<CarsComponent>;
    let dialog: MatDialogMock;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CarsComponent, CarDetailsComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                BrowserAnimationsModule,
                NoopAnimationsModule,

                MatButtonModule,
                MatExpansionModule,
                MatDialogModule,
                MatIconModule,
                MatInputModule,
            ],
            providers: [
                {
                    provide: MatDialog, useClass: MatDialogMock
                },
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CarsComponent);
        component = fixture.componentInstance;
        dialog = TestBed.get(MatDialog);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add car', () => {

        dialog.open().afterClosed().subscribe((car: Car) => {

            if (car) {
                expect(true);

                component.cars.push(car);

                component.generateCarGroup();

                fixture.detectChanges();
            } else {
                expect(false);
            }

        });

    });
});
