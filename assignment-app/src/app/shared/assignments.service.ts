import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom:"TP1",
      dateDeRendu: new Date('2020-01-17'),
      rendu: true
    },
    {
      nom:"TP2",
      dateDeRendu: new Date('2020-12-15'),
      rendu: false
    },
    {
      nom:"TP3",
      dateDeRendu: new Date('2020-01-04'),
      rendu: false
    }
  ];

  constructor(private loggingService:LoggingService) {}

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    return of('Assignment ajouté');
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos,1);

    return of("Assignment service: assignment supprimé !")
  }
}
