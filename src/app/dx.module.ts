import {NgModule} from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import {
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
  } from 'devextreme-angular';
@NgModule({
  exports: [
    DxButtonModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
  ]
})
export class DxModule {}
