import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', children: authRoutes }])],
  exports: [RouterModule],
})
export class AuthModule {}
