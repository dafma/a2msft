import  {Component} from '@angular/core';

@Component({
    selector: 'tasks',
    templateUrl: './task.component.html' ,
    styles: [".red{color:red}", ".blue{color:blue}"]

})


export  class TasksComponent{
    constructor(){}
    toggle:boolean = true;
    //structural directives
    //*ngIf  solo se muestra su es true o la condicion es verdadera
    imTrue = false;
    tasks: Array<string>=["primert", "segundot", "tercert"];

    //Data flow interpolation
    myNumber = 7;
    //data flow - event binding
    doThis(){
        console.log("you clicked the button");
        alert("Button clicked");
    }
    num = "";
}