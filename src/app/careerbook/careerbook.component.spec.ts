/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { CareerbookComponent } from './careerbook.component';


describe('CareerbookComponent', () => {

    let expectedMsg: string = 'Welcome to Career Book !';

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CareerbookComponent
            ],
            imports: [
                ClarityModule.forRoot()
            ]
        });

        fixture = TestBed.createComponent(CareerbookComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the home page', async(() => {
        expect(compiled).toBeTruthy();
    }));

    it(`should display: "${expectedMsg}"`, async(() => {
        expect(compiled.querySelector("p").textContent).toMatch(expectedMsg);
    }));


});
