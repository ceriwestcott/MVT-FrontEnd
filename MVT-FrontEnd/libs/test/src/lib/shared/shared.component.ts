import { Component, OnInit } from '@angular/core';
import {ApplicationUser, UserModel, UserService} from "../../../../services/src/lib/api-client";
import {Observable} from "rxjs";

@Component({
  selector: 'mvt-front-end-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
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
    debugger;
    this.retVal = this.userService.apiUserPost(userModel);
  }

  getSubmitUser() {
    this.retVal = this.userService.apiUserGet("admin.ceri");
  }
}
