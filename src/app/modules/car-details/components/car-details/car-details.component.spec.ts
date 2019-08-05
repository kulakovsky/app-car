import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarDetailsComponent} from './car-details.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';

describe('CarDetailsComponent', () => {
    let component: CarDetailsComponent;
    let fixture: ComponentFixture<CarDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CarDetailsComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                BrowserAnimationsModule,
                NoopAnimationsModule,
                MatIconModule,
                MatButtonModule,
                MatInputModule,
                MatSelectModule,
            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CarDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
