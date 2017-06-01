import {NgModule} from "@angular/core";
import {MlRippleMod} from "../ripple/mlRippleMod";
import {MlIconMod} from "../icon/mlIconMod";
import {MlList, MlItem, MlItemContent, MlItemAction, MlItemTitle, MlItemIcon, MlItemSubtitle, MlItemDesc,
  MlIconAvatar, MlIconItem, MlEllipsis} from "./mlList";
@NgModule({
declarations: [MlList, MlItem, MlItemContent, MlItemAction, MlItemIcon, MlItemTitle, MlItemSubtitle, MlItemDesc,
MlIconAvatar, MlIconItem, MlEllipsis],
exports: [MlRippleMod, MlIconMod, MlList, MlItem, MlItemContent, MlItemAction, MlItemIcon, MlItemTitle,
MlItemSubtitle, MlItemDesc, MlIconAvatar, MlIconItem, MlEllipsis]})
export class MlListMod{}
