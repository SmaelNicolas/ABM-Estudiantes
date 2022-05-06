import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './auth/admin.guard';
import { UserGuard } from './auth/user.guard';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [UserGuard], component: HomeComponent },
  {
    path: 'estudiantes',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./core/components/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
  {
    path: 'cursos',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./core/components/courses/courses.module').then(
        (m) => m.CoursesModule
      ),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
