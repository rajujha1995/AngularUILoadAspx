import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-common-aspx-display',
  templateUrl: './common-aspx-display.component.html',
  styleUrls: ['./common-aspx-display.component.scss']
})
export class CommonAspxDisplayComponent implements OnInit {

  @Input() _URL: string | undefined;

   urlSafe: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
     this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this._URL!);
  }

}
