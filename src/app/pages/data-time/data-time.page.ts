import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.page.html',
  styleUrls: ['./data-time.page.scss'],
})
export class DataTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'save',
        handler: ( evento ) => {
          console.log('Clicked save!');
          console.log(evento);
        }
        }, {
          text: 'log',
          handler: () => {
            console.log('clicked log. do not dimiss.');
            return false;
          }
      }]
    };
  }

  cambioFecha( event ){
      console.log('ionChange', event);
      console.log('Date', new Date( event.details.value));
  }
}  
