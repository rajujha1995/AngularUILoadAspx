import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-req',
  templateUrl: './reset-req.component.html',
  styleUrls: ['./reset-req.component.scss']
})
export class ResetReqComponent implements OnInit {
  
  _URL:string= "https://localhost:44310/Contact.aspx";

  constructor() { }

  ngOnInit(): void {
  }

}
