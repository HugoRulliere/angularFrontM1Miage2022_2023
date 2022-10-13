import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignementTransmis: Assignment = new Assignment;

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    this.assignementTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignementTransmis)
      .subscribe(message => console.log(message));
  }

  onDelete() {
    this.assignmentsService.deleteAssignment(this.assignementTransmis)
    .subscribe((message) => console.log(message));

    this.assignementTransmis = null;
  }
}
