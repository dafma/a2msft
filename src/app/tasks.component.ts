import  {Component} from '@angular/core';

@Component({
    selector: 'tasks',
    template: " <h4 [class.red]='toggle' > it is a task component</h4>",
    styles: [".red{color:red}", ".blue{color:blue}"]

})


export  class TasksComponent{
    constructor(){}
    toggle:boolean = true;
}