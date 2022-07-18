import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-vann',
  templateUrl: './vann.component.html',
  styleUrls: ['./vann.component.css'],
  providers: [DialogService, MessageService]
})
export class VannComponent implements OnInit {
  details:any = [];
  apiUrl = "http://localhost:3000/van";
  dUrl!:string;

  constructor(private crud: DisplayService, public dialogService: DialogService, public messageService: MessageService) { 
   
  }

  ngOnInit(): void {
    this.loadData();
  }

  show() {
    const ref = this.dialogService.open(AddComponent, {
        header: 'Add the details',
        width: '50%'
    });

    ref.onClose.subscribe(() => {
        this.loadData();
    });

}

showEdit(Id:any) {
  const ref = this.dialogService.open(UpdateComponent, {
      header: 'Edit the details',
      width: '50%',
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
      this.details = res;
      // console.log(this.details);
      
    })
    
  }

  onDelete(id:number){
    
    this.dUrl = `${this.apiUrl}/${id}`
    this.crud.delete(this.dUrl).subscribe(() => (this.details = this.details.filter((d:any) => d.id !== id)));
    
    
   }

}
