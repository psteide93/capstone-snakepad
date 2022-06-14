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
import { HomeComponent } from './components/home/home.component';
import { SnakePictureComponent } from './components/snake-picture/snake-picture.component';
import { SnakePageComponent } from './components/snake-page/snake-page.component';
import { TableComponent } from './components/table/table.component';
import { RecordAddFormComponent } from './components/record-add-form/record-add-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RecordComponent } from './components/record/record.component';
import { RecordButtonComponent } from './components/record-button/record-button.component';
import { RecordSelectComponent } from './components/record-select/record-select.component';
import { SnakePageContainerComponent } from './components/snake-page-container/snake-page-container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SnakeCardComponent,
    AddSnakeFormComponent,
    ButtonComponent,
    AuthButtonComponent,
    SnakeListingComponent,
    HeaderComponent,
    HomeComponent,
    SnakePictureComponent,
    SnakePageComponent,
    TableComponent,
    RecordAddFormComponent,
    NavBarComponent,
    RecordComponent,
    RecordButtonComponent,
    RecordSelectComponent,
    SnakePageContainerComponent,
    PageNotFoundComponent,
    SpinnerComponent,
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
