import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {Subject} from 'rxjs';
import {Car} from '../../models/car';

@Component({
    selector: 'app-car-details',
    templateUrl: './car-details.component.html',
    styleUrls: ['./car-details.component.sass'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
})
export class CarDetailsComponent implements OnInit, OnDestroy {

    @HostBinding('class.app-car-details') private isDialogClassUsed = true;

    private destroy$ = new Subject();

    @Input() car: Car;

    @Output() private deleteCar$ = new EventEmitter();

    constructor() {
    }

    onDeletingButtonClick() {

        this.deleteCar$.next(this.car);
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }

}
