import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-down-consent',
  templateUrl: './pay-down-consent.component.html',
  styleUrls: ['./pay-down-consent.component.scss']
})
export class PayDownConsentComponent implements OnInit {

  _URL:string= "https://localhost:44310/About.aspx";

  constructor() { }

  ngOnInit(): void {
  }

}
