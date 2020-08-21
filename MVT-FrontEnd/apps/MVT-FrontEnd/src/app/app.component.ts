import {Component, OnInit} from '@angular/core';
import {ApplicationUser, UserModel, UserService} from "../../../../libs/services/src/lib/api-client";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  retVal: Observable<ApplicationUser>;
  getUser() {
     this.retVal = this.userService.apiUserGet("ceri.westcott");
  }

  ngOnInit(): void {
    this.getUser();
  }



  submit ()  {
    let userModel = {
      username:"admin.ceri",
      password:"Thewii12!"
    } as UserModel;
    this.userService.apiUserPost(userModel);
  }

}
