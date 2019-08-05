import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarCreateDialogComponent} from './car-create-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatButtonModule,
    MatDialogModule,
    MatDialogRef,
    MatIconModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';

describe('CarCreateDialogComponent', () => {
    let component: CarCreateDialogComponent;

    let fixture: ComponentFixture<CarCreateDialogComponent>;

    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CarCreateDialogComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                BrowserAnimationsModule,
                NoopAnimationsModule,

                MatButtonModule,
                MatIconModule,
                MatDialogModule,
                MatSelectModule,
                MatInputModule,
            ],
            providers: [
                { provide: MatDialogRef, useValue: dialogRefSpy },
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CarCreateDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
