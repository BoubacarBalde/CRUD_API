import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  students:Student[] = []

  constructor(private service:StudentService, private router:Router){}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.service.getStudent().subscribe({
      next:(response)=>{
        this.students = response
        console.log(response)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  editStudent(id_student:number){
    this.router.navigateByUrl(`edit-student/${id_student}`)
  }

  deleteStudent(id_student:number){
    const dialog = confirm("Voulez vous supprimer cet étudiant ");
    if(dialog){
      this.service.delStudent(id_student).subscribe({
        next:(response)=>{
          console.log("etudiant supprime ");
          this.getStudents()
        },
        error:(error)=>console.log(error)

      })
    }
  }

  


}
