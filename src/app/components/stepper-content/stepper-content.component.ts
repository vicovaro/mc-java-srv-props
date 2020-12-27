import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { default as ServerProperties } from '@assets/server-properties.json';
import { Observable } from 'rxjs';

export interface AutocompleteForms {
    value: string;
    options: Array<string>;
    filteredOptions: Observable<string[]>;
}
export interface SelectedForms {
    value: string;
    options: Array<string>;
}
export interface NumberRangeForms {
    value: number;
    min: number;
    max: number;
}
@Component({
    selector: 'app-stepper-content',
    templateUrl: './stepper-content.component.html',
    styleUrls: ['./stepper-content.component.scss'],
})
export class StepperContentComponent implements OnInit {
    checkBoxForms: Map<string, boolean> = new Map();
    regexForms: Map<string, FormControl> = new Map();
    autocompleteForms: Map<string, AutocompleteForms> = new Map();
    selectorForms: Map<string, SelectedForms> = new Map();
    numberRange: Map<string, NumberRangeForms > = new Map();

    constructor() {}

    ngOnInit() {
        const serverProperties = Object.entries(ServerProperties);
        console.log(serverProperties);
        serverProperties.forEach(property => {
            console.log(property);
        });
    }
}
