import {NgModule} from "@angular/core";
import {MlTitleMod} from "../title/mlTitleMod";
import {MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly, MlSmallScreenOnly,
  MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive,
} from "./mlLayout";
@NgModule({
declarations: [MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive],
exports: [MlTitleMod, MlLayout, MlHeader, MlHeaderRow, MlDrawer, MlSpacer, MlNav, MlNavItem, MlLargeScreenOnly,
MlSmallScreenOnly, MlContent, MlHeaderTabs, MlHeaderTab, MlHeaderTabContent, MlHeaderTabActive]})
export class MlLayoutMod{}
