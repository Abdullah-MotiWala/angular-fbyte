import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditIconComponent } from './component/edit-icon/edit-icon.component';
import { DeleteIconComponent } from './component/delete-icon/delete-icon.component';

@NgModule({
  declarations: [EditIconComponent, DeleteIconComponent],
  imports: [CommonModule],
  exports: [EditIconComponent, DeleteIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
