import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { default as ServerProperties } from '@assets/server-properties.json';
@Component({
    selector: 'app-stepper-content',
    templateUrl: './stepper-content.component.html',
    styleUrls: ['./stepper-content.component.scss'],
})
export class StepperContentComponent implements OnInit {
    formsServerProperties: FormControl[] = [];

    private readonly propertyNameIndex: number = 0;
    private readonly propertyTypeIndex: number = 1;
    private serverProperties: [string, unknown][] = []; // parsed JSON

    ngOnInit() {
        this.serverProperties = Object.entries(ServerProperties);
    }
}
