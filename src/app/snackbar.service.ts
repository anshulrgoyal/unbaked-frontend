import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }
snack=(message,action)=>{
  this.snackBar.open('message', 'action', {
    duration: 2000,
  })
}
}
