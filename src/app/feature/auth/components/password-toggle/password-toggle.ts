import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-password-toggle',
  imports: [],
  templateUrl: './password-toggle.html',
  styleUrl: './password-toggle.css',
})
export class PasswordToggle {
  @Input() show = signal(false);

  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
