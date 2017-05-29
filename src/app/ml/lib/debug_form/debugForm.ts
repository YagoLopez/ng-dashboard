import {Component, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
selector: 'debug-form',
template:`
<style>
.inner-div {margin-left: 10px}
.value {color: cornflowerblue}
.code-block {background: aliceblue; font-size: 13px; margin: auto;
  border: 1px solid lightgray; border-radius: 4px; overflow-x: auto}
</style>

<pre class="code-block">
  <div class="inner-div">
    <b>FORM DEBUGGER:</b>
    ➠ Form values: <span class="value">{{ formName.value | json }}</span>
    ➠ Form valid : <span class="value">{{ formName.valid }}</span>
  </div>
</pre>
`//template
}) export class DebugForm {
  @Input('name') formName: FormGroup;
}
