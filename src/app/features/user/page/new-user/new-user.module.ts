import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserPageComponent } from './new-user.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NewUserFormModule } from '../../components/new-user-form/new-user-form.module';
import { MatButtonModule } from '@angular/material/button';

const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MatCardModule,
  NewUserFormModule,
  MatButtonModule,
];

const COMMON_DECLARATIONS = [NewUserPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewUserPageModule {}
