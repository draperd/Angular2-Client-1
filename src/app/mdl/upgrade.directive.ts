// See http://stackoverflow.com/questions/34421919/integrating-material-design-lite-with-angular2
import { Directive, AfterViewInit, AfterViewChecked } from '@angular/core';

declare let componentHandler;

@Directive({
    selector: "[mdl]"
})
export class MdlUpgrade implements AfterViewInit, AfterViewChecked {
    ngAfterViewInit() {
        componentHandler.upgradeDom();
    }

    ngAfterViewChecked() {
        componentHandler.upgradeDom();
    }
}