import { Component, Input, OnInit } from '@angular/core';
import { NationSummary } from 'src/app/models/nation-summary';

@Component({
  selector: 'app-nation-summary',
  templateUrl: './nation-summary.component.html',
  styleUrls: ['./nation-summary.component.scss']
})
export class NationSummaryComponent implements OnInit {
  @Input() nation: NationSummary;

  constructor() { }

  ngOnInit(): void {
  }

}
