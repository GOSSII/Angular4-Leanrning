import { Component } from '@angular/core';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
    selector : 'sandbox',
    template : `<h1>Data Types</h1>
    {{name }} <br />
    {{age }} <br />
    {{hasChildren }} <br />
    {{city }} <br />
    {{myNumberArray }} <br />
    {{myStringArray}} <br />
    {{unusable }} <br />
    {{u }} <br />
    {{n }} <br />
    `
})

export class sandboxComponent{
   name: string = "Dipesh Goswami";
   age:number =25;
   hasChildren:boolean = false;
   city:any = "m1g 3s5";
   myNumberArray:number[] = [1,2,3];
   myStringArray:any[] = ['Hello','World'];
   unusable:void = undefined;
   u: undefined = undefined;
   n: null = null;

}