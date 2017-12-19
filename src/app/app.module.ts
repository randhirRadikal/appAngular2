import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent }  from './home/home';
import { AboutComponent }  from './about/about';
import { ContactComponent }  from './contact/contact';
import { routing }  from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	AboutComponent,
	ContactComponent
  ],
  imports: [
    BrowserModule,
	routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
