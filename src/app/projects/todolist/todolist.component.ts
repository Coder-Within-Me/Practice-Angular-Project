import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  list :any[] = [];
  color : string='black';

  AddTask(task:string,priority:string){
    if(task === '' || task === null)
    {
      alert('Please Add Proper Task...!');
    }
    else
    {     
      switch(priority){
        case '1': this.color = 'Yellow';
        break;
        case '2': this.color = 'Orange';
        break;
        case '3': this.color = 'Red';
        break;
        case 'default' : this.color = 'Black';
        break;
      }
      this.list.push({id:this.list.length,task:task,priority:this.color});
    }
    
  }

  Remove(id : number){
    this.list = this.list.filter(x => x.id != id);
  }
}
