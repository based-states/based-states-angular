import { Component, Input, OnInit } from '@angular/core';
import { NationSummary } from 'src/app/models/nation-summary';

type descWithColor = [string, string];

@Component({
  selector: 'app-political-summary',
  templateUrl: './political-summary.component.html',
  styleUrls: ['./political-summary.component.scss']
})
export class PoliticalSummaryComponent implements OnInit {
  static politicalColors = new Map([
    ['democracy', '#223544'],
    ['monarchy', '#2f2244'],
    ['dictatorship', '#443022'],
    ['oligarchy', '#442222'],
  ]);

  static economicPresets: descWithColor[] = [
    ['Hyper-Capitalist', '#12330f'],
    ['Free Market', '#253323'],
    ['Mixed-Market', '#222'],
    ['Big Government', '#332323'],
    ['Communist', '#330e0e'],
  ];

  static socialPresets: descWithColor[] = [
    ['Very Traditional', '#323319'],
    ['Conservative', '#212318'],
    ['Socially Centrist', '#222'],
    ['Liberal', '#181b23'],
    ['Very Progressive', '#231933'],
  ];

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

  constructor() {
    this.economicStyles = {color: '#222'};
    this.socialStyles = {color: '#222'};
    this.economicDesc = '';
    this.socialDesc = '';
  }

  ngOnInit(): void {
    this.politicalStyles = { color: PoliticalSummaryComponent.politicalColors.get(this.nation.political_system) };
    this.politicalDesc = this.nation.political_system;
    this.politicalDesc = this.politicalDesc.charAt(0).toUpperCase() + this.politicalDesc.slice(1);

    const ecoAxis = this.nation.economic_axis;
    const socAxis = this.nation.social_axis;
    // later normalize from 1-100 range to 1-5 or 1-10 range

    [this.economicDesc, this.economicStyles.color] = PoliticalSummaryComponent.economicPresets[ecoAxis - 1];
    [this.socialDesc, this.socialStyles.color] = PoliticalSummaryComponent.socialPresets[socAxis - 1];
  }

}
