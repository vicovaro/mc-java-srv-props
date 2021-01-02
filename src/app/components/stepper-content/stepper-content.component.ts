import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-stepper-content',
    templateUrl: './stepper-content.component.html',
    styleUrls: ['./stepper-content.component.scss'],
})
export class StepperContentComponent {
    spawnProtection = new FormControl(16, [Validators.min(0), Validators.max(100)]);
    maxTickTime = new FormControl(60000, [Validators.min(1000), Validators.max(60000)]);
    queryPort = new FormControl(25565, [Validators.min(1), Validators.max(65535)]);
    generatorSettings = '';
    syncChunkWrites = true;

    constructor() {
    }
}
