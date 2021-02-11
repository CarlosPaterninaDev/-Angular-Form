import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-control-events',
  templateUrl: './control-events.component.html',
  styleUrls: ['./control-events.component.css'],
})
export class ControlEventsComponent {
  loading = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.loading = true;
    this.cd.detectChanges();
  }

  onSumbit(form: NgForm) {
    console.log(form.valid);
  }

  onBlur(field: NgModel) {
  
    console.log('blur');
  }
}
