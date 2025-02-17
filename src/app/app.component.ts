import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

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
  imports:[CoreModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppMpdule {}