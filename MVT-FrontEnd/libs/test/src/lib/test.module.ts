import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import {NbButtonModule, NbCardModule, NbInputModule} from "@nebular/theme";
@NgModule({
  imports: [CommonModule, NbCardModule, NbButtonModule, NbInputModule],
  declarations: [SharedComponent],
  exports: [
    SharedComponent
  ]
})
export class TestModule {}
