import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.scss']
})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  success = false;
  submitted = false;
  submitedName = false;
  submitDOB = false;
  submitReason = false;
  submitCCTC = false;
  namePattern = "^[a-zA-Z]+$";
  numberPattern = "^[0-9]+$";
  allClear = false;
  flag1 = true;
  flag2 = true;
  flag3 = true;
  flag4 = true;

  data = this._dataService.getOption();


  constructor(private formbuilder: FormBuilder, public _dataService: DataService) {
    this.registerForm = this.formbuilder.group({
      firstName: ['', [Validators.pattern(this.namePattern), Validators.required]],
      dateOfBirth: ['', Validators.required],
      reasonForJobChange: ['', Validators.required],
      cctc: ['', Validators.required],
      ectc: [''],
      technicalExpertise: []
    })

  }

  ngOnInit() {

  }

  // Method to Validate entered Name is not Null & not contains number and storing value in dataService
  onEnterName(searchValue: string) {
    this._dataService.setOption('name', searchValue);
    if (!searchValue || searchValue.search(this.namePattern)) {
      this.submitedName = true;
      this.flag1 = true;
    } else {
      this.flag1 = false;
    }
    this.registerButton();
  }

  // Method to Validate entered DOB is not Null and storing value in dataService
  onEnterDOB(searchValue: Date) {
    this._dataService.setOption('dob', searchValue);
    if (!searchValue) {
      this.submitDOB = true;
      this.flag2 = true;
    }
    else {
      this.flag2 = false;
    }
    this.registerButton();
  }

  // Method to Validate entered reason for change is not Null and storing value in dataService
  onEnterReason(searchValue: string) {
    this._dataService.setOption('reasonForChange', searchValue);
    if (!searchValue) {
      this.submitReason = true;
      this.flag3 = true;
    } else {
      this.flag3 = false;
    }
    this.registerButton();
  }

  // Method to Validate entered reason for change is not Null and storing value in dataService
  onEnterCCTC(searchValue: number) {
    this._dataService.setOption('cctc', searchValue);
    if (!searchValue) {
      this.submitCCTC = true;
      this.flag4 = true;
    } else {
      this.flag4 = false;
    }
    this.registerButton();

  }

  // Method to store value in dataService
  onEnterECTC(searchValue: number) {
    this._dataService.setOption('ectc', searchValue);
  }

  // Method to store value in dataService
  onSelectingGender(searchValue: string) {
    this._dataService.setOption('gender', searchValue);
  }

  // Method to store value in dataService
  onEnterTechnicalExpertise(searchValue: string) {
    this._dataService.setOption('technicalExpertise', searchValue);
  }

  //Method to enable Register Button once all the validations are clear
  registerButton() {
    this.allClear = false;
    if (!this.flag1 && !this.flag2 && !this.flag3 && !this.flag4) {
      this.allClear = true;
    }
  }
}
