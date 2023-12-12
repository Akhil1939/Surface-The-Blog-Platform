import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

 closeSnackbar() {
   this.data._snackbar.dismiss();
 }
}