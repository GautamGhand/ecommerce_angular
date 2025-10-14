import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edituser',
  imports: [CommonModule,FormsModule],
  templateUrl: './edituser.html',
  styleUrl: './edituser.css',
})
export class Edituser {
  @Input() user: any;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  tempUser: any = {};

  ngOnChanges() {
    this.tempUser = { ...this.user };
  }

  onSave() {
    this.save.emit(this.tempUser);
  }

  onClose() {
    this.close.emit();
  }
}
