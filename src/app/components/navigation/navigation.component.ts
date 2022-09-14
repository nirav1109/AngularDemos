import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  firstName: any;
  constructor( private dialog:MatDialog,private getDataService:GetDataService) {}

  ngOnInit() {
    this.getDataService.getData();
    this.getDataService.userName.subscribe(uname=>{
      this.firstName=uname ;
    })

  }

  openConfirmDialog(){
    this.dialog.open(ConfirmDialogComponent);
  }

}
