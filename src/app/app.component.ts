import { Component,NgModule } from '@angular/core';
import {TabModule} from 'angular-tabs-component';


@NgModule({
  imports: [
    
    TabModule
  ],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7';
  
}
