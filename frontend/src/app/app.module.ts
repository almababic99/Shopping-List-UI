import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { EmptyComponent } from './components/empty/empty.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, EmptyComponent], // This is an array where you list all the components, directives, and pipes that belong to this module.
  imports: [BrowserModule, SharedModule, AppRoutingModule], // This is an array where you import other Angular modules that your module depends on. BrowserModule provides the necessary functionalities to run the app in the browser.
  bootstrap: [AppComponent], // This property specifies which component should be bootstrapped/loaded when the application starts.
})
export class AppModule {}
