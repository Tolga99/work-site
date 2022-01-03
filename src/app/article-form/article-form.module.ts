import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleFormRoutingModule } from './article-form-routing.module';

import { ArticleForm } from './article-form';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleFormRoutingModule,
    SharedModule
  ],
  declarations: [ArticleForm]
})
export class ArticleFormModule {}
