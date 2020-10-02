import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreLayoutComponent } from './features/core/core.layout';
import { CoreLayoutModule } from './features/core/core.module';

const routes: Routes = [
  {
    path: '',
    component: CoreLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
