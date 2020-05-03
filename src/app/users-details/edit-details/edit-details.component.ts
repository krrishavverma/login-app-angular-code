import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  user= {myusername: '', mypassword: '', myfirstname: '', mylastname: '', myemail: '',
          mygender: '', mydateofbirth: '' ,myphone: null, myaddress: ''};

  public new_gender = '';

  public linkValue: any;

  new_user= {username: '', password: '', firstname: '', lastname: '', email: '',
    gender: '', dateofbirth: '' ,phone: null, address: ''};

  my_username= '';
  my_firstname= '';
  my_lastname = '';
  my_email = '';
  my_gender = '';
  my_dateofbirth = '';
  my_phone= null;
  my_address= '';

  public userData: any;
  public calStyle = "display: none; width: 40%;"
  public CurrentDate = new Date();

  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

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

    this.linkValue = '/edit-detail/' + this.route.snapshot.params['username']

    var url_name = 'http://127.0.0.1:5000/userDetails/' + this.route.snapshot.params['username']

    this.httpClient.get(url_name).toPromise().then(data => {
      this.userData = data;
      this.writeData(this.userData)
    })

  }

  onBack() {
    this.router.navigate(['/users-details'])
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

  onCalender() {
    this.calStyle = "display: block; width: 120%;"
  }
}
