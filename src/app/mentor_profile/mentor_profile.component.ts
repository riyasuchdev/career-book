/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
    styleUrls: ['./mentor_profile.component.scss'],
    templateUrl: './mentor_profile.component.html'
})
export class mentor_profileComponent {
    open: Boolean = false;
    validateLoading: boolean = false;

    validateDemo() {
    this.validateLoading = true;
    console.log("Welcome!");
    var self = this;

    setTimeout(function() {
        self.validateLoading = false;
    }, 4000)
    
  }

}
