import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrl: './delete-icon.component.css',
})
export class DeleteIconComponent {
  @Output() onPerformAction: EventEmitter<any> = new EventEmitter();

  triggerAction() {
    this.onPerformAction.emit();
  }
}
