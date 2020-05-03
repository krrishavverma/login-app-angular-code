import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  public source = "";
  public userDetails: any;

  constructor(private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:5000/userDetails').toPromise().then(data => {
      this.userDetails = data;
    })
  }

  onEdit(editUserName) {
    this.router.navigate(['/edit-detail', editUserName]);
  }

  refreshPage() {
    window.location.reload();
  }

  onDelete(deleteUserName) {

    var url_name = 'http://127.0.0.1:5000/userDetails/' + deleteUserName

    this.httpClient.delete(url_name).toPromise().then(data => {
      this.refreshPage()
    })
  }

}
