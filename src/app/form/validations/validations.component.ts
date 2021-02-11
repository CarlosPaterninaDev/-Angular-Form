import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements AfterViewChecked {

  loading = false;

  constructor(private cd: ChangeDetectorRef) { }


  ngAfterViewChecked()
  {
    this.loading = true;
    this.cd.detectChanges();
  }



}
