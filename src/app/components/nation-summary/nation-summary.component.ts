import { Component, Input, OnInit } from '@angular/core';
import { NationSummary } from 'src/app/models/nation-summary';

@Component({
  selector: 'app-nation-summary',
  templateUrl: './nation-summary.component.html',
  styleUrls: ['./nation-summary.component.scss']
})
export class NationSummaryComponent implements OnInit {
  static ideologyColors = new Map([
    ['democracy', '#223544'],
    ['monarchy', '#2f2244'],
    ['dictatorship', '#443022'],
    ['oligarchy', '#442222'],
  ]);

  @Input() nation: NationSummary;


  politicalStyles: {
    color: string
  };
  economicStyles: {
    color: string
  };
  socialStyles: {
    color: string
  };

  politicalDesc: string;
  economicDesc: string;
  socialDesc: string;

  constructor() { }

  ngOnInit(): void {
    this.politicalStyles = { color: NationSummaryComponent.ideologyColors.get(this.nation.political_system) };
    this.politicalDesc = this.nation.political_system;
    this.politicalDesc = this.politicalDesc.charAt(0).toUpperCase() + this.politicalDesc.slice(1);
  }

}
