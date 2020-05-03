import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  userModel = new User('', '', '', '', '', '', null, null, '')

  public calStyle = "display: none; width: 40%;"
  public invalidDisplay = "display: none;"
  public message: any;
  public CurrentDate = new Date();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  writeMessage(data) {
    this.message = data;
    if (this.message === "username already exist") {
      this.invalidDisplay = "display: block; color: red;"
    }
  }

  onSubmit() {
    var head = {'Content-Type': 'application/json'}
    var httpHeader = new HttpHeaders(head);
    var url_req = 'http://127.0.0.1:5000/userDetails/' + this.userModel.username

    var userdata = {
      "password": this.userModel.password,
      "firstname": this.userModel.firstname,
      "lastname": this.userModel.lastname,
      "email": this.userModel.email,
      "gender": this.userModel.gender,
      "dateofbirth": this.userModel.dateofbirth,
      "phone": this.userModel.phone,
      "address": this.userModel.address
      }

    this.httpClient.post(url_req, JSON.stringify(userdata), {headers: httpHeader} ).subscribe(
      data => {
         this.writeMessage(data)
      }
    );
  }

}
