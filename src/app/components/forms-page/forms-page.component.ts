import { AfterContentInit, Component } from '@angular/core';

export const DEFAULT_HEIGHT = 100;
export const DEFAULT_DRAWER_WIDTH = 300;

@Component({
    selector: 'app-forms-page',
    templateUrl: './forms-page.component.html',
    styleUrls: ['./forms-page.component.scss'],
})
export class FormsPageComponent implements AfterContentInit {
    drawerWidth = DEFAULT_DRAWER_WIDTH;

    ngAfterContentInit() {
        this.drawerWidth = 384;
    }
}
