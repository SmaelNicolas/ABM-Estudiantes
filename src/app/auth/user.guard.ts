import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../services/admin.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(
    private autenticacion: AutenticacionService,
    private router: Router
  ) {}
  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.autenticacion.getUserIn().rol !== '') {
      return true;
    } else {
      Swal.fire('Error', 'Debes logearte para acceder', 'warning').then(
        (result) => {
          if (result.value) {
            this.router.navigate(['login']);
          }
        }
      );
      return false;
    }
  }
}
