import { Component } from '@angular/core';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
    selector : 'sandbox',
    templateUrl : `sandbox.component.html`,
    styleUrls : [`sandbox.component.css`]
})

export class sandboxComponent{
    name:string = 'Dipesh';
    showName:boolean = true;
    day:number = 0;
}