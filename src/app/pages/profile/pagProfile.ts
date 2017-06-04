import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
moduleId: module.id,
styleUrls: ['../pag-styles.css'],
template: `

<style>
  .ico-field {vertical-align: middle; color: darkgrey; padding-right: 10px}
  .marg-top {margin-top: 30px}
  .min-height {min-height: 0}
  .title {margin-top: 22px; font-size: large; color: black; font-weight: 500; position: absolute; margin-left: 86px}
  .height-70 {height: 70px}
  ml-card {margin-top: 30px}
  ml-textfield {margin: auto; display: block; width: 400px}
  ml-textfield-label {color: black}
</style>

<div class="page-scaleUpDown">

  <ml-card shadow="4" class="marg-top min-height">
    <ml-card-text>
      <div class="title">User Profile</div>
      <img src="assets/img/userprofile.png" class="height-70" />
    </ml-card-text>
  </ml-card>
  
  <ml-card shadow="4" class="marg-top">
    <ml-card-text>
      <ml-textfield floating-label>
        <ml-textfield-label><ml-icon class="ico-field">perm_identity</ml-icon>First Name</ml-textfield-label>
      </ml-textfield>
      <ml-textfield floating-label>
        <ml-textfield-label><ml-icon class="ico-field">perm_identity</ml-icon>Last Name</ml-textfield-label>
      </ml-textfield>
      <ml-textfield floating-label>
        <ml-textfield-label><ml-icon class="ico-field">business</ml-icon>Address</ml-textfield-label>
      </ml-textfield>
      <ml-textfield floating-label>
        <ml-textfield-label><ml-icon class="ico-field">contact_phone</ml-icon>Phone</ml-textfield-label>
      </ml-textfield>
      <ml-textfield floating-label>
        <ml-textfield-label><ml-icon class="ico-field">mail_outline</ml-icon>Email</ml-textfield-label>
      </ml-textfield>
        <ml-textfield type="password" floating-label>
          <ml-textfield-label><ml-icon class="ico-field">vpn_key</ml-icon>password</ml-textfield-label>
      </ml-textfield>
    </ml-card-text>
  </ml-card>

</div>

`//template
}) export class PagProfile{}
