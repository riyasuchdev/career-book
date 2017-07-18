/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 
import { Component } from '@angular/core';

@Component({
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
})
export class AboutComponent {
    open: Boolean = false;

}*/

import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
})
export class AboutComponent {
    NewUserForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        about: new FormControl('')
    });
    submitted = false;
    onSubmit() {
        var newUser= this.NewUserForm.value;
        console.log(newUser);
        //make the database call
    }
    addNewEmployeeAddress() {
        //this.employeeAddressForm.reset();
        this.submitted = false;
    }
}
