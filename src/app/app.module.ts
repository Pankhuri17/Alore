import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileSidebarComponent } from './component/profile-sidebar/profile-sidebar.component';
import { ProspectorSidebarComponent } from './component/prospector-sidebar/prospector-sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { SegmentCardComponent } from './component/segment-card/segment-card.component';
import { ModalComponent } from './component/modal/modal.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'segmentData',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: true } },
      { name: 'segmentItem', keypath: 'segmentItem', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileSidebarComponent,
    ProspectorSidebarComponent,
    HeaderComponent,
    SegmentCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
