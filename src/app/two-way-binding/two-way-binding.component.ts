import { Component } from '@angular/core';

@Component({
    selector: 'app-two-way-binding',
    templateUrl: './two-way-binding.component.html',
    styleUrls: ['./two-way-binding.component.css']
})

export class TwoWayBindingComponent{

    typedText = "";

    test(e:any){
        console.log(e.target.value)
        this.typedText = e.target.value;
    };
};