import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularInit';
}

@NgModule({
  declarations :[],
  imports:[CoreModule],
  providers: [],
  bootstrap: [],
})
export class AppMpdule {}