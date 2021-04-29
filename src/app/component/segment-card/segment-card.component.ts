import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-segment-card',
  templateUrl: './segment-card.component.html',
  styleUrls: ['./segment-card.component.scss']
})
export class SegmentCardComponent implements OnInit {

  @Input() segementDataItem: any;

  @Output() modalOpenObj: EventEmitter<any> = new EventEmitter<any>();
  segementData: any;

  constructor() { }

  
  ngOnInit(): void {
    this.segementData = JSON.parse(localStorage.getItem("segement"));
    console.log(this.segementData);
  }

  addModalItem(){
    this.modalOpenObj.emit(true);
  }



}
