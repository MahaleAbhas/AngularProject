import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/service/students.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  editstu:any;
  updateForm = new FormGroup({
    id: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    phoneno: new FormControl(),
    pwd: new FormControl(),
    subject: new FormControl()
  })

  constructor(private location: Location, private c:StudentsService, private route:Router){}
  ngOnInit(): void{

    this.editstu = this.location.getState();
    this.updateForm.patchValue({
     id: this.editstu.id,
     fname: this.editstu.fname,
     lname: this.editstu.lname,
     gender: this.editstu.gender,
     email: this.editstu.email,
     phoneno: this.editstu.phoneno,
     pwd: this.editstu.pwd,
     subject: this.editstu.subject
    })

  }

  update(){
      this.c.updateData(this.updateForm.value).subscribe();
      this.route.navigate(['view']);
    }

}
