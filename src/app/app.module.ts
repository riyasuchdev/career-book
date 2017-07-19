import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import {CareerbookComponent} from "./careerbook/careerbook.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { mentor_profileComponent } from "./mentor_profile/mentor_profile.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
        mentor_profileComponent,
        CareerbookComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
