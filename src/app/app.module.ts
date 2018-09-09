import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

//importing generated components here
import {LandingComponent} from './views/landing/landing.component';
import {NavigationComponent} from './views/components/navigation/navigation.component';
import {SignupComponent} from './views/signup/signup.component';
import {NgbdModalComponent,NgbdModalContent} from './views/components/modal/modal.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignupComponent,
    NavigationComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [NgbdModalContent],
  providers: [NgbModal,NgbActiveModal,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
