import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'app-stepper-content',
    templateUrl: './stepper-content.component.html',
    styleUrls: ['./stepper-content.component.scss'],
})
export class StepperContentComponent {
    opPermissionLevel = new FormControl();

    constructor(private http: HttpClient) {
        this.http.get('assets/server-properties.json').subscribe(res => {
            const jsonHttp = Object.entries(res);
            console.log(jsonHttp);
        });
    }
}
