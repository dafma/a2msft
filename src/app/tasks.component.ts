import  {Component} from '@angular/core';
import {ProviderCrudService} from './provider-crud.service';

@Component({
    selector: 'tasks',
    providers: [ProviderCrudService],
    templateUrl: './task.component.html' ,
    styles: [".red{color:red}", ".blue{color:blue}"]

})


export  class TasksComponent{
    constructor(public taskService: ProviderCrudService){}
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