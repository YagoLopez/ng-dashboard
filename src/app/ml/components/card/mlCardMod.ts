import {NgModule} from "@angular/core";
import {MlCard, MlCardTitle, MlCardSubtitle, MlCardMedia, MlCardText, MlCardActions, MlCardMenu} from "./mlCard";
@NgModule({
declarations: [MlCard, MlCardTitle, MlCardSubtitle, MlCardMedia, MlCardText, MlCardActions, MlCardMenu],
exports: [MlCard, MlCardTitle, MlCardSubtitle, MlCardMedia, MlCardText, MlCardActions, MlCardMenu]
})
export class MlCardMod{}