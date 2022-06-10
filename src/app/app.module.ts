import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnakeCardComponent } from './components/snake-card/snake-card.component';
import { AddSnakeFormComponent } from './components/add-snake-form/add-snake-form.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { SnakeListingComponent } from './components/snake-listing/snake-listing.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SnakeCardComponent,
    AddSnakeFormComponent,
    ButtonComponent,
    AuthButtonComponent,
    SnakeListingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-dembkhhc.us.auth0.com',
      clientId: 'CTgCUqDwPTx9kd9aYP0ug57Wc9eIwIUj',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
