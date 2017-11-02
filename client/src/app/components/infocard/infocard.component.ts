import { Component, OnInit, Input } from '@angular/core';
import { InfoCardItem } from '../../classes/infocarditem.class';

@Component({
  selector: 'infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {
  @Input() infoCardItem: InfoCardItem;

  constructor() { }

  ngOnInit() {
  }

}