import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PagProfile} from "./pagProfile";
import {MlChipMod} from "../../ml/components/chip/mlChipMod";
import {MlTextfieldMod} from "../../ml/components/controls/textfield/mlTextfieldMod";
import {MlValidationErrorMod} from "../../ml/components/controls/error/mlValidationErrorMod";
import {MlIconMod} from "../../ml/components/icon/mlIconMod";
import {MlCardMod} from "../../ml/components/card/mlCardMod";
@NgModule({
imports: [MlChipMod, MlCardMod, MlTextfieldMod, MlValidationErrorMod, MlIconMod,
RouterModule.forChild( [{path: '', component: PagProfile}] )],
declarations: [PagProfile]}) export class PagProfileMod{}
