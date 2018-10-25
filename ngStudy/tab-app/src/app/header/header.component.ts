import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @ViewChild('ul') ul: ElementRef;
    // isShow: boolean ;

    constructor(private render: Renderer2) { }

    ngOnInit() {
    }

    showMenu = (): void => {
        this.render.setStyle(this.ul.nativeElement, 'display', 'block');
    }

    hiddenMenu = ():void => {
        this.render.setStyle(this.ul.nativeElement, 'display', 'none');
    }

    @HostListener('window:resize', ['$event']) resetMenu(event) {
        if(document.documentElement.clientWidth > 768){
            this.render.setStyle(this.ul.nativeElement, 'display',
                'inline-block');
        }else {
            this.render.setStyle(this.ul.nativeElement, 'display',
                'none');
        }

    }

}
