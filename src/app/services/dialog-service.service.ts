import { Injectable, Inject } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'
import { DeleteConfirmDialogComponent } from '../components/delete-confirm-dialog/delete-confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(msg:any){
   return this.dialog.open(DeleteConfirmDialogComponent,{
      disableClose:true,
      data:{message:msg}
    })

    
  }
}
