import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css'],
})
export class NgModelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack(){

    this.router.navigate(['/home']);

  }
}
