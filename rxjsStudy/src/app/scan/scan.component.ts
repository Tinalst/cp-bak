import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {count, scan} from 'rxjs/operators';

@Component({
        selector: 'app-scan',
        templateUrl: './scan.component.html',
        styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
        @ViewChild( 'btn') btn: ElementRef;
        constructor() {
        }

        ngOnInit() {
                this.scan();
        }

        scan = () => {
                fromEvent(this.btn.nativeElement, 'click')
                        .pipe(
                                scan( count =>  count + 1, 0)
                        )
                        .subscribe( count =>  {
                                console.log(count);
                        })
        }
}
