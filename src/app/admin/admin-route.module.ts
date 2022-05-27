import { CommonModule } from '@angular/common';
import { AuthGuard } from './../services/auth-guard.service';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard], // add auth guard to protect this route (canActivate, canActivateChild)
    component: BaseLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [BaseLayoutComponent],
})
export class AdminRoutingModule {}
