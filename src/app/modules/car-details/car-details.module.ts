import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {CarCreateDialogComponent} from './components/car-create-dialog/car-create-dialog.component';
import {
    MatButtonModule,
    MatDialogModule, MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
    declarations: [
        CarDetailsComponent,
        CarCreateDialogComponent,
        CarsComponent
    ],
    entryComponents: [
        CarDetailsComponent,
        CarCreateDialogComponent,
        CarsComponent
    ],
    imports: [
        CommonModule,

        // Angular material modules

        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatExpansionModule,

        FormsModule,
        ReactiveFormsModule,
    ],
})
export class CarDetailsModule {
}
