import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments";
  formVisible = false;
  assignementSelectionne: Assignment = new Assignment;
  assignments: Assignment[] = [];

  constructor (private assignmentService:AssignmentsService) {}

  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments()
    .subscribe(assignments => this.assignments = assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of('Assignment ajouté');
  }

  onNouvelAssignment(event:Assignment) {
    this.assignmentService.addAssignment(event)
    .subscribe(message => console.log(message));

    this.formVisible = false;
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    return of("Assignment service: assignment modifié !")
  }

  // onSubmit() {
  //   const newAssignment = new Assignment();
  //   newAssignment.nom = this.nomDevoir;
  //   // newAssignment.dateDeRendu = this.dateDeRendu;
  //   newAssignment.rendu = false;
    
  //   this.assignments.push(newAssignment);
  // }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
}
