import { Component } from '@angular/core';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
    selector : 'sandbox',
    templateUrl : `sandbox.component.html`,
    styleUrls : [`sandbox.component.css`]
})

export class sandboxComponent{
     imageUrl :string = "https://dummyimage.com/300x200/"; 
     isUnChanged : boolean = false;  
}