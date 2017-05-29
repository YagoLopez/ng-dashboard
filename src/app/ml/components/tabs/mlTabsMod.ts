import {NgModule} from "@angular/core";
import {MlTabs, MlTabsBar, MlTab, MlTabPanel, MlActive} from "./mlTabs";
@NgModule({declarations: [MlTabs, MlTabsBar, MlTab, MlTabPanel, MlActive],
exports: [MlTabs, MlTabsBar, MlTab, MlTabPanel, MlActive]})
export class MlTabsMod{}