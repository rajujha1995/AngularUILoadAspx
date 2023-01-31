import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {

  menus = [{
    "userID": "tst-perks-fso",
    "officeID": "24590",
    "menuOptions": [
      {
        "id": "mnuhome",
        "text": "Home",
        "url": "~/Home.aspx",
        "enabled": true,
        "options": null
      },
      {
        "id": "mnu100",
        "text": "Loan Products",
        "url": "",
        "enabled": true,
        "options": [
          {
            "id": "mnu111",
            "text": "Em Adv Pay Down Consent",
            "url": "~/EAPayDownStep1.aspx",
            "enabled": true,
            "options": null
          },
          {
            "id": "mnu112",
            "text": "Emerald Advance Reset Request",
            "url": "~/EAResetStep1.aspx",
            "enabled": true,
            "options": null
          }
        ]
      },
      {
        "id": "mnu200",
        "text": "Emerald Card",
        "url": "",
        "enabled": true,
        "options": [
          {
            "id": "mnu210",
            "text": "Issuance/Reissuance",
            "url": "~/ECIssueStart.aspx",
            "enabled": true,
            "options": null
          },
          {
            "id": "mnu213",
            "text": "Direct Deposit Form",
            "url": "~/ECDirDepositStart.aspx",
            "enabled": true,
            "options": null
          }
        ]
      },
      {
        "id": "mnu300",
        "text": "Emerald Savings",
        "url": "",
        "enabled": true,
        "options": [
          {
            "id": "mnu310",
            "text": "Open Emerald Savings Account",
            "url": "~/OpenEmrSavAccount.aspx",
            "enabled": true,
            "options": null
          }
        ]
      },
      {
        "id": "mnu400",
        "text": "Debt Submission",
        "url": "",
        "enabled": true,
        "options": [
          {
            "id": "mnu410",
            "text": "Debt Dispute Form",
            "url": "~/DebtDispute",
            "enabled": true,
            "options": null
          },
          {
            "id": "mnu411",
            "text": "Tax Prep Debt Removal Form",
            "url": "~/DebtRemoval",
            "enabled": true,
            "options": null
          }
        ]
      },
      {
        "id": "mnu500",
        "text": "Bank Product (Revealed) Audits",
        "url": "~/AuditCheck",
        "enabled": true,
        "options": null
      }
    ]
  }]


  constructor(private authService: MsalService, private _router:Router) { }

  ngOnInit(): void {
  }

  getComponentName(url: any) 
  {   
    url = url.substring(2, url.lastIndexOf("."));
    // alert(url);
    if(url=="EAPayDownStep1")
      this._router.navigate(['sidenav/paydownconsent']);  
      else if(url=="EAResetStep1")
      this._router.navigate(['sidenav/resetreq']);
    
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: "/"
      });
    } else {
      this.authService.logoutRedirect();
    }
  }
}



// function getComponentName(arg0: string) {
//   throw new Error('Function not implemented.');
// }

