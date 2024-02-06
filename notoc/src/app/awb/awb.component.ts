import { Component } from '@angular/core';
import {AwbService} from "./awb.service";

@Component({
  selector: 'app-awb',
  templateUrl: './awb.component.html',
  styleUrls: ['./awb.component.css']
})
export class AwbComponent {
  constructor(private awbService: AwbService) {
    this.awbService.getBearerToken();
  }
}
