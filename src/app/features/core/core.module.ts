import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CoreLayoutComponent } from '../core/core.layout';
import { MatBadgeModule } from '@angular/material/badge';

const COMMON_IMPORTS = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  RouterModule,
  FlexLayoutModule,
  MatBadgeModule,
];

const COMMON_DECLARATIONS = [CoreLayoutComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class CoreLayoutModule {}
