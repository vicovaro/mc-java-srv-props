import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Server } from 'http';
import * as ServerProperties from '../../../assets/server-properties.json';

@Component({
    selector: 'app-stepper-content',
    templateUrl: './stepper-content.component.html',
    styleUrls: ['./stepper-content.component.scss'],
})
export class StepperContentComponent implements OnInit {
    opPermissionLevel = new FormControl();

    ngOnInit() {
        console.log(ServerProperties.default);
        const object = JSON.parse(ServerProperties);
        console.log(object);
    }
}
