import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prospector-sidebar',
  templateUrl: './prospector-sidebar.component.html',
  styleUrls: ['./prospector-sidebar.component.scss']
})
export class ProspectorSidebarComponent implements OnInit {
  segmentName: any = '';
  opened: boolean;

  @Output() segment: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  addSegment(){
    this.opened = true;
  }

  save(){
    this.segment.emit(this.segmentName);
    this.opened = false;
  }

  onClose(){
    this.opened = false;;
  }

}
