import { Routes } from '@angular/router';
import { StudentListComponent } from './students/student-list/student-list.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';

export const routes = [
    { path: '', component: StudentListComponent },
    { path: 'add-student', component: AddStudentComponent },
    { path: 'edit-student/:id', component: EditStudentComponent },
];