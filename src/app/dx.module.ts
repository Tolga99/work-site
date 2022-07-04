import {NgModule} from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import {
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxiItemModule,
  } from 'devextreme-angular';
@NgModule({
  exports: [
    DxButtonModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxiItemModule,
  ]
})
export class DxModule {}
