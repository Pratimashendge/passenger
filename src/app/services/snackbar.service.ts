import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matsnackBar: MatSnackBar) { }
  openSnackBar(massage: string) {
    this._matsnackBar.open(massage, 'close', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 3000,
    });
  }
}

