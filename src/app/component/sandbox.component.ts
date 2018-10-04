import { Component } from '@angular/core';

@Component({
    selector : 'sandbox',
    template : `<h1>Hello World..</h1><br>
    my name is {{name}}, <br> i am {{age }} years old<br>
    My last name is {{fullname.lastname}}
    <ul>
        <li>{{ 'Hello World' }}</li>
        <li>{{ 2 * 2 + 4 - 8}}</li>
        <li>{{showAge()}}</li>
    </ul>

    `
})

export class sandboxComponent{
    name = "Dipesh";
    age = 25;
    fullname = {firstname:"Dipesh", lastname:"Goswami"};

    constructor(){
        console.log("Console is working"); 
        //this.age = 36;
        this.hasBirthday();
    }

    hasBirthday(){
            this.age += 1;
    }   

    showAge(){
        return this.age;
    }

}