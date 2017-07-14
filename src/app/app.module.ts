import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BodyareaComponent } from './bodyarea/bodyarea.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    BodyareaComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'teio'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
