import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myValue = 'lowercase';
  date = new Date(2018, 7, 10);
  myList = ['Milk', 'Bread', 'Beans', 'Banana', 'Honey', 'Mango', 'Egg', 'Raj Rajeshwar Singh Rathore'];
}
