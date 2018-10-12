import { Component } from '@angular/core';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
    selector : 'sandbox',
    templateUrl : `sandbox.component.html`,
    styleUrls : [`sandbox.component.css`]
})

export class sandboxComponent{
    hrDept = ['Dipesh','Parth','Sanket','TEST'];

    empName = [
        {
            firstname : 'Dipesh',
            lastname : 'Goswami'
        },
        {
            firstname : 'Parth',
            lastname : 'Jani'
        },
        {
            firstname : 'Sanket',
            lastname : 'Vagadiya'
        }
    ];

    constructor(){
        this.hrDept[3] = "Ishrat"
    }
}