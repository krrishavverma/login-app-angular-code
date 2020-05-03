import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-single-user-details',
  templateUrl: './single-user-details.component.html',
  styleUrls: ['./single-user-details.component.css']
})
export class SingleUserDetailsComponent implements OnInit {
  user= {myusername: '', mypassword: '', myfirstname: '', mylastname: '', myemail: '',
    mygender: '', mydateofbirth: '' ,myphone: null, myaddress: ''};

  public new_gender = '';

  new_user= {username: '', password: '', firstname: '', lastname: '', email: '',
    gender: '', dateofbirth: '' , phone: null, address: ''};

  show_password = "password"
  password_disabled = true;
  firstname_disabled = true;
  lastname_disabled = true;
  email_disabled = true;
  gender_disabled = true;
  dateOfbirth_disabled = true;
  phone_disabled = true;
  address_disabled = true;
  male_disabled = true;
  female_disabled = true;
  other_disabled = true;
  public passwordDisplay = "display: none;"
  public CurrentDate = new Date();

  public userDetail: any;
  public userData: any;
  public linkValue: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient) { }

  writeData(data) {
    this.userData = data;
    this.user = {
      myusername: this.route.snapshot.params['username'],
      mypassword: this.userData.password,
      myfirstname: this.userData.firstname,
      mylastname: this.userData.lastname,
      myemail: this.userData.email,
      mygender: this.userData.gender,
      mydateofbirth: this.userData.dateofbirth,
      myphone: this.userData.phone,
      myaddress: this.userData.address
    }
  }

  ngOnInit(): void {

    this.linkValue = '/user-detail/' + this.route.snapshot.params['username']

    var url_name = 'http://127.0.0.1:5000/userDetails/' + this.route.snapshot.params['username']

    this.httpClient.get(url_name).toPromise().then(data => {
      this.userDetail = data;
      this.writeData(this.userDetail)
    })

  }

  refreshPage() {
    window.location.reload();
  }

  onUpdateDetail() {

    this.new_user['username'] = this.user.myusername
    this.new_user['password'] = this.user.mypassword;
    this.new_user['firstname'] = this.user.myfirstname;
    this.new_user['lastname'] = this.user.mylastname;
    this.new_user['email'] = this.user.myemail;
    this.new_user['gender'] = this.user.mygender;
    this.new_user['dateofbirth'] = this.user.mydateofbirth;
    this.new_user['phone'] = this.user.myphone;
    this.new_user['address'] = this.user.myaddress;

    var head = {'Content-Type': 'application/json'}
    var httpHeader = new HttpHeaders(head);
    var url_req = 'http://127.0.0.1:5000/userDetails/' + this.user.myusername

    this.httpClient.put(url_req, JSON.stringify(this.new_user), {headers: httpHeader} ).subscribe(
      data => {
         this.refreshPage();
      }
    );

  }

  onChangeAll() {
    this.password_disabled = false;
    this.show_password = 'text';
    this.firstname_disabled = false;
    this.lastname_disabled = false;
    this.email_disabled = false;
    this.gender_disabled = false;
    this.dateOfbirth_disabled = false;
    this.phone_disabled = false;
    this.address_disabled = false;
  }

  changePassword() {
    this.password_disabled = false
    this.show_password = "text"
    this.passwordDisplay = "display: block;"
  }

  changeFirstName() {
    this.firstname_disabled = false
  }
  changeLastName() {
    this.lastname_disabled = false
  }
  changeEmail() {
    this.email_disabled = false
  }
  changeGender() {
    this.male_disabled = false;
    this.female_disabled = false;
    this.other_disabled = false;
  }
  changeDateOfBirth() {
    this.dateOfbirth_disabled = false;
  }
  changePhone() {
    this.phone_disabled = false
  }
  changeAddress() {
    this.address_disabled = false
  }

}
