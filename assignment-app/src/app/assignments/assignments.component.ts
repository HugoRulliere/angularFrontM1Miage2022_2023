import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre = "Mon application sur les Assignments";
  ajoutActive = false;
  nomDevoir:string = "";
  
  assignementSelectionne: Assignment = new Assignment;
  assignments:Assignment[] = [
    {
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date('2022-10-10'),
      rendu:false
    }
  ];

  constructor() {
    
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true
    }, 2000);
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    // newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    
    this.assignments.push(newAssignment);
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
}
