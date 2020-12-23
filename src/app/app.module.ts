import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FormsPageComponent } from './components/forms-page/forms-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DrawerContentComponent } from './components/drawer-content/drawer-content.component';
import { StepperContentComponent } from './components/stepper-content/stepper-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, FormsPageComponent, DrawerContentComponent, StepperContentComponent],
    exports: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ScullyLibModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
