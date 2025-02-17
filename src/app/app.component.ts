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
  declarations :[AppComponent],
  imports:[CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppMpdule {}