import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
template: `

<style>
  .bg-gray {background: lightgray; padding: 30px}
  .pad-right {padding-right: 5px}
  .cell-pad {padding-left: 10px; border-bottom-color: lightgrey; border-bottom-style: solid; border-bottom-width: 1px}
  .img-profile {height: 80px}
  .centered {text-align: center}
  .bg-lightgrey {background: #e0e1e4}
  .row-width {width: 100%}
  .ico-pass {vertical-align: middle}
  @media (min-width: 700px) {table {width: 80%}}
  table {border: 1px solid lightgrey; margin-top: 25px !important; display: block; 
    margin-left: auto; margin-right: auto; margin-bottom: 50px}
  ml-textfield {width: 160px}
</style>

<div class="page-fade">

  <h5 class="centered">User Profile</h5>
  
  <table>
    <tr>
      <td class="bg-gray"></td>
      <td class="bg-lightgrey row-width"><img src="assets/img/userprofile.png" class="img-profile"></td>
    </tr>
    <tr>
      <td class="bg-gray">First Name</td>
      <td class="cell-pad">First Name 1</td>
    </tr>
    <tr>
      <td class="bg-gray">Last Name</td>
      <td class="cell-pad">Last Name 1</td>
    </tr>
    <tr>
      <td class="bg-gray">Address</td>
      <td class="cell-pad">Address 1</td>
    </tr>
    <tr>
      <td class="bg-gray">Password</td>
      <td class="cell-pad">
        <ml-textfield type="password" floating-label>
          <ml-textfield-label><ml-icon class="ico-pass">vpn_key</ml-icon> password</ml-textfield-label>
      </ml-textfield>
      </td>
    </tr>
    <tr>
      <td class="bg-gray">Preferences</td>
      <td class="cell-pad">
        <ml-chip letter="1" deletable="true" class="pad-right">Preference 1</ml-chip>
        <ml-chip letter="2" deletable="true" background="cornflowerblue" class="pad-right">Preference 2</ml-chip>
        <ml-chip letter="3" deletable="true" background="navy" class="pad-right">Preference 3</ml-chip>
      </td>
    </tr>
  </table>

</div>

`//template
}) export class PagProfile{}
