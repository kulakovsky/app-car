import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarDetailsModule} from './modules/car-details/car-details.module';
import {RouterModule} from '@angular/router';
import {CarsComponent} from './modules/car-details/components/cars/cars.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CarDetailsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: CarsComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
