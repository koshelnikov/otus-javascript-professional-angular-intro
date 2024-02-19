import { Component } from '@angular/core';
import {AbstractRoleService} from "../../services/roles.service";

@Component({
  selector: 'app-role-sub-item',
  templateUrl: './role-sub-item.component.html',
  styleUrls: ['./role-sub-item.component.css'],
  standalone: true
})
export class RoleSubItemComponent {

  constructor(public rolesService: AbstractRoleService) {

    console.log(rolesService)
  }

}
