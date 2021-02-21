import { Component, OnInit } from '@angular/core';
import { NationInfoService } from 'src/app/services/nation-info.service';
import { NationSummary } from '../../models/nation-summary';

@Component({
  selector: 'app-nation-browser',
  templateUrl: './nation-browser.component.html',
  styleUrls: ['./nation-browser.component.scss'],
})
export class NationBrowserComponent implements OnInit {
  constructor(private nationInfoService: NationInfoService) {}

  loadedNations: NationSummary[];

  ngOnInit(): void {
    this.nationInfoService.getTestNations().subscribe((nations) => {
      this.loadedNations = nations;
    });
  }
}
