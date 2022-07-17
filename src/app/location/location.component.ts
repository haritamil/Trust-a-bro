import { Component, OnInit} from '@angular/core';
import { DisplayService } from '../services/display.service';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [DialogService, MessageService]
})
export class LocationComponent implements OnInit {
  locations:any = []
  apiUrl = "http://localhost:3000/location";
  dUrl!:string;

  constructor(private crud: DisplayService,  public dialogService: DialogService, public messageService: MessageService) {}

  ngOnInit(): void {
   this.loadData();
  }

  show() {
    const ref = this.dialogService.open(LocationMasterComponent, {
        header: 'Add the details',
        width: '70%'
    });

    ref.onClose.subscribe(() => {
        this.loadData();
    });

}

showEdit(Id:any) {
  const ref = this.dialogService.open(LocationEditComponent, {
      header: 'Edit the details',
      width: '70%',
      data: {
        id: Id
      }
  });

  ref.onClose.subscribe(() => {
      this.loadData();
  });

}

  
  loadData(){
    this.crud.get(this.apiUrl)
    .subscribe((res) => {
      this.locations = res;
      // console.log(this.details);
      
    })
    
  }

  onDelete(id:number){
    
    this.dUrl = `${this.apiUrl}/${id}`
    this.crud.delete(this.dUrl).subscribe(() => (this.locations = this.locations.filter((d:any) => d.id !== id)));
    
    
   }

}
