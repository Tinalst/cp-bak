import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
    speakSocial: Array<any> = [];
    constructor() {
        this.speakSocial = [
            {
                social : ['web', 'Twitter', 'Linkdin' ],
                link: [ '#', '#', '#']
            },
            {
                social : ['Linkdin'],
                link: [ '#']
            },
            {
                social : [],
                link: [ ]
            },
            {
                social : ['Linkdin'],
                link: [ '#']
            }
        ];
    }

    ngOnInit() {
    }

}
