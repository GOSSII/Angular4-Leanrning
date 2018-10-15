import { Component } from '@angular/core';

@Component({
    selector : 'sandbox',
    templateUrl : `sandbox.component.html`,
    styleUrls : [`sandbox.component.css`]
})

export class sandboxComponent{
    isSpecial: Boolean = true;
    isTransform : boolean =true;
    club  = {};

    constructor(){
        this.setClubClasses();
    }

   setClubClasses(){
    this.club = {
        special : this.isSpecial,
        transform : this.isTransform
    }
   }
}