import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user.routing';

@NgModule({
  exports: [],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
