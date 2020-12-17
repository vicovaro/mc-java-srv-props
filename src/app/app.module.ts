import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FormsPageComponent } from './components/forms-page/forms-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [AppComponent, FormsPageComponent],
    exports: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ScullyLibModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
