import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrl: './edit-icon.component.css',
})
export class EditIconComponent {
  @Output() onPerformAction: EventEmitter<any> = new EventEmitter();

  triggerAction() {
    this.onPerformAction.emit();
  }
}
