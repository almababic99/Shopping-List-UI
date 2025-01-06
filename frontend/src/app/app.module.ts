import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],    // This is an array where you list all the components, directives, and pipes that belong to this module.
  imports: [BrowserModule],        // This is an array where you import other Angular modules that your module depends on. BrowserModule provides the necessary functionalities to run the app in the browser.
  bootstrap: [AppComponent]        // This property specifies which component should be bootstrapped/loaded when the application starts. 
})
export class AppModule {}
