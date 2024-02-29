import { Component } from '@angular/core';
import { Students } from 'src/app/model/students';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent {

  students: Students[]=[];

  constructor(private c:StudentsService){}
  ngOnInit(): void {
      this.c.getStudentData().subscribe((d:Students[])=>{
        this.students=d;
      })
  }

  deleteData(id:number){
    this.c.deleteData(id).subscribe();
    window.location.reload();
  }


}
