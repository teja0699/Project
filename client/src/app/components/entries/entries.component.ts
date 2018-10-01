import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesService } from '../../services/entries.service';
@Component({
  selector: 'app-signup',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
    usersList: any;
    data:any;
    nameId:Number;
  public form = {
    user_id: null,
    comment: null
  };
  public error = [];
  public success = '';

  constructor(private entry: EntriesService, private router: Router) {
      this.getUsersList();
  }

  onSubmit() {
  this.entry.entries(this.form).subscribe(

      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
    handleResponse(response) {
        this.success = response.data;
        this.router.navigateByUrl('/signup');
      }
  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }
    getUsersList()
    {
       this.usersList = this.entry.getUsers();
       console.log(this.usersList);
    }


}
