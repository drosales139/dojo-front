import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserPageModule } from './page/new-user/new-user.module';
import { NewUserPageComponent } from './page/new-user/new-user.page';

const routes: Routes = [
  {
    path: 'new-user',
    component: NewUserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NewUserPageModule],
})
export class UserRoutingModule {}
