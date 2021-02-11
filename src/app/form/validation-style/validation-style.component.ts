import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-style',
  templateUrl: './validation-style.component.html',
  styleUrls: ['./validation-style.component.css'],
})
export class ValidationStyleComponent {
  loading = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.loading = true;
    this.cd.detectChanges();
  }
}
