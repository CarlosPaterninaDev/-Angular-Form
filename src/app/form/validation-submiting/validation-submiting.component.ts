import { ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation-submiting',
  templateUrl: './validation-submiting.component.html',
  styleUrls: ['./validation-submiting.component.css'],
})
export class ValidationSubmitingComponent {
  loading = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.loading = true;
    this.cd.detectChanges();
  }

  onSumbit(form: NgForm){

        console.log(form.valid);

  }
}
