import { Component } from '@angular/core';

@Component({
selector: 'app-property-binding-button',
templateUrl: './property-binding-button.component.html',
styleUrls: ['./property-binding-button.component.css']
})

export class PropertyBindingButtonComponent{
    canClick = true
    paragraphText = "Click Test"
    textBoxText = ""

    ngOnInit(){
    }

    onParagraphChange(){
        this.canClick = false;

        if(this.textBoxText.length === 0){
            this.paragraphText = "Type Something In First"
        }else{
            this.paragraphText = this.textBoxText;
        };


        setTimeout(()=>{
            this.canClick = true;
            this.paragraphText = "Click Again..."
        }, 3000)
    };

    onTextBoxText(elementData: any){
        this.textBoxText = elementData.target.value;
    };

    onEnterKey(eData: any){
        if(this.canClick === !true){
            return
        }else{
            this.onParagraphChange();
        }
    }
        
}