import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data/data.service';
import { IngModel } from 'src/app/data/ng-model';

@Component({
  selector: 'app-form-http',
  templateUrl: './form-http.component.html',
  styleUrls: ['./form-http.component.css'],
})
export class FormHttpComponent implements OnInit {
  formularioOriginal: IngModel = {
    email: 'me@carlycode.com',
    textarea: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur odit suscipit obcaecati aspernatur dolorum blanditiis facere, recusandae sed maxime omnis quas vel assumenda ut tempora quasi praesentium quam aut`,
    check1: true,
    check2: false,
    ciudad: 'Cartagena',
    theme: 'dark',
  };
  cities: any;
  copyForm: IngModel = { ...this.formularioOriginal };
  postError = false;
  postErrorMessage = '';


  constructor(private router: Router, private _data: DataService) {}

  ngOnInit(): void {
    console.log(this.copyForm);
    this.cities = this._data.getCities();
  }

  onBack() {
    this.router.navigate(['/home']);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this._data.postUserSettingForm(this.copyForm).subscribe({
        next: (next) => {
          console.log(next);
          alert(`Respuesta: ${JSON.stringify(next)}`);
        },
        error: (error) => this.catchHttpError(error),
      });
    }else{
      this.postError = true;
      this.postErrorMessage = "Formulario Inválido Verifique los datos"
    }
  }

  catchHttpError(errorResponse: any) {
    this.postError = true;
    console.log(errorResponse.message);

    this.postErrorMessage = errorResponse.message;
  }
}
