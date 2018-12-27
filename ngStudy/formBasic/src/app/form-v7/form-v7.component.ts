import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyFormService} from './my-form.service';

@Component({
  selector: 'app-form-v7',
  templateUrl: './form-v7.component.html',
  styleUrls: ['./form-v7.component.scss']
})
export class FormV7Component implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
              public myFormService: MyFormService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm = () => {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  dataChnaged = event => {
    console.log(event);
  }

}
