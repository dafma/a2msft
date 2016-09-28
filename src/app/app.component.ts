import { Component, OnInit } from '@angular/core';
import  {TasksComponent} from './tasks.component';




@Component({
  selector: 'app-root',
  directives:[TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works!';
}
