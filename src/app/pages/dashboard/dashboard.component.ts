import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  modalData: any;
  opened: boolean
  segmentData: Array<any> = [];
  segementDataItem: any;
  index: number;

  constructor(
    private idb: NgxIndexedDBService
  ) { }

  ngOnInit(): void {
    this.getDataFromIndexedDB();
  }

  getDataFromIndexedDB(){
    this.idb.getAll('segmentData').subscribe((data) => {
      this.segmentData = data;
    });
  }

  addEmoji(event){
    this.data = event.emoji.native;  
  }

  modalOpenObj(event, index){
    this.index = index;
   if(event){
    this.opened = true;
   }
  }

  openModal(){
    this.modalData = [];
   this.opened = true;
  }

  onModalClose(e){
    if(e){
      this.opened = false;
    }
  }

  onAddSegment(event){
    let obj = {
      name: event,
      segmentItem: []
    }
    this.segmentData.push(obj);
  }

  modalDataObj(event){
    if(!this.segmentData[this.index].segmentItem.length){
        this.addData(event)
    }else{
      this.updateData(event);
    }
  }

  addData(event){
    this.segmentData[this.index].segmentItem.push(event);
    this.idb.add('segmentData', this.segmentData[this.index]).subscribe(res => {
      this.getDataFromIndexedDB();
    });
  }


  updateData(event){
    this.segmentData[this.index].segmentItem.push(event);
    this.idb
  .update('segmentData', {
    id: this.index + 1,
    segmentItem: this.segmentData[this.index].segmentItem,
    name: this.segmentData[this.index].name,
  })
  .subscribe((storeData) => {
    this.getDataFromIndexedDB();
  });
  }

}
