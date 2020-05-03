import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public username = '';
  public password = '';
  public userDetails: any;
  public adminDetails: any;
  public findUser = false;
  public findAdmin = false;
  public invalidDisplay = "display: none;"

  constructor(private router: Router,
    private httpClient: HttpClient) { }

  writeData(data) {
    this.userDetails = data;
  }

  writeAdminData(data) {
    this.adminDetails = data
  }

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:5000/userDetails').toPromise().then(data => {
      this.userDetails = data;
    })

    this.httpClient.get('http://127.0.0.1:5000/adminDetails').toPromise().then(data => {
      this.adminDetails = data;
    })
  }

  onLogin() {

    for (let i = 0; i < this.adminDetails.length; i++) {
      let adminusername = this.adminDetails[i].username;
      let adminpassword = this.adminDetails[i].password;

      if(adminusername === this.username && adminpassword === this.password) {
        this.findAdmin = true;
        this.router.navigate(['/users-details'])
      }
    }

    if (this.findAdmin === false) {

      for(let i = 0; i < this.userDetails.length; i++) {
        let user = this.userDetails[i].username;
        let pass = this.userDetails[i].password;
        if(user === this.username && pass === this.password) {
          this.findUser = true;
          this.router.navigate(['/user-detail', this.username])
        }
      }
      if(this.findUser === false && this.findAdmin == false) {
        this.invalidDisplay = "display: block;"
      }
    }
  }

}
