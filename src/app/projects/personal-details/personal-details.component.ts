import { Component, OnInit } from '@angular/core';
import { PersonalDetailServiceService } from '../../services/personal-detail-service.service'
import { ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  public details: any;
  totalrecords : number = 0;
  id : number = 0;
  name: any = '';
  age: number = 0;
  genderID: number = 0;
  pagenumber : number = 1;
  pagesize : number = 5;
  IsIdValid : boolean = true;

  constructor(public service: PersonalDetailServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllDetails();
  }

  getdetailsbyId(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.genderID = data.genderID;
    this.IsIdValid = false;
  }

  GetAllDetails(){
      this.service.GetAllDetails(this.pagenumber,this.pagesize).subscribe(result => {
      this.details = result.item1;
      this.totalrecords = result.item2;  
      }, 
      Error => {
        console.error('You are unauthorized');
      }
  )
  }

  GetPreviousPage(){
    if(this.pagenumber > 1){
      this.pagenumber = this.pagenumber - 1;
    }
    this.GetAllDetails();
  }

  GetNextPage(){
    if(this.pagenumber > 0){
      this.pagenumber = this.pagenumber + 1;
    }
    if(((this.pagenumber-1) * this.pagesize) < this.totalrecords){
      this.GetAllDetails();
    }
    else{
      this.pagenumber = this.pagenumber - 1;
    }  
  }

  DeleteDataById(id : number){
    if (confirm("Do you want to delete it ?")) {
        this.service.DeleteDataById(id).subscribe();
        alert('Data Deleted Successfully...!');
        this.GetAllDetails();
    } 
  }

  InsertAllData(data : NgForm){
    this.service.InsertAllData(data).subscribe();
    alert('Data Inserted Successfully...!'); 
    this.GetAllDetails();
  }
  
  UpdateData(data : NgForm,id : any){
    if(id > 0){
      this.service.UpdateData(data).subscribe();
      alert('Data Updated Successfully...!');
      this.GetAllDetails();
    }
    else{
      alert('Entered ID is not proper.');
    }  
  }

  // enableUpdateButton(id : any){
  //   console.log(id);
  //   if(id > 0){
  //     this.IsIdValid = false;
  //   }
  // }
}

