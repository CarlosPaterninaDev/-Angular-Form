import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngModel } from '../../data/ng-model';

@Component({
  selector: 'app-ng-model-two-way',
  templateUrl: './ng-model-two-way.component.html',
  styleUrls: ['./ng-model-two-way.component.css'],
})
export class NgModelTwoWayComponent implements OnInit {
  formularioOriginal: IngModel = {
    email: 'me@carlycode.com',
    textarea: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur odit suscipit obcaecati aspernatur dolorum blanditiis facere, recusandae sed maxime omnis quas vel assumenda ut tempora quasi praesentium quam aut`,
    check1: true,
    check2: false,
    ciudad: 'ctg',
    theme: 'dark',
  };

  copyForm: IngModel = { ...this.formularioOriginal };

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.copyForm);
  }

  onBack() {
    this.router.navigate(['/home']);
  }
}
