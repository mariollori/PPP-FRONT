import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { YouProfile } from "./profile/you-profile";
import { EditPasswordComponent } from "./edit-password/edit-password";

@Component({
  standalone: true,
  selector: 'setting-user-page',
  templateUrl: './settings-user-page.html',
  imports: [CommonModule, YouProfile, EditPasswordComponent]
})
export class SettingsUserPageComponent {}
