import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'app-stepper-content',
    templateUrl: './stepper-content.component.html',
    styleUrls: ['./stepper-content.component.scss'],
})
export class StepperContentComponent {
    formsServerProperties: FormControl[] = [];

    private readonly propertyNameIndex: number = 0;
    private readonly propertyTypeIndex: number = 1;
    private serverProperties: [string, string][] = []; // parsed JSON

    constructor(private http: HttpClient) {
        this.http.get('assets/server-properties.json').subscribe((res) => {
            this.serverProperties = Object.entries(res);
            this.serverProperties.forEach((property) => {
                console.log(property[this.propertyNameIndex]);
                console.log(property[this.propertyTypeIndex]);
            });
        });
    }
}
