import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  imports: [],
  templateUrl: './main-btn.html',
  styleUrl: './main-btn.css',
})
export class MainBtn {
  text = input<string>('Submit');
  icon = input<string>();
  iconPosition = input<'left' | 'right'>('right');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  onClick = output<Event>();
}
