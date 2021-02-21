import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NationSummary } from '../models/nation-summary';

@Injectable({
  providedIn: 'root'
})
export class NationInfoService {

  constructor() { }

  testNations: NationSummary[] = [
    {
      id: 1,
      name: 'Joe',
      description: 'Who\'s Joe',
      flag_url: 'https://api.time.com/wp-content/uploads/2019/09/joe-biden-ukraine-fundraising.jpg',
      political_system: 'democracy',
      economic_axis: 4,
      social_axis: 4
    },
    {
      id: 2,
      name: 'Kamala',
      description: 'Kamala Who?',
      flag_url: 'https://static.wikia.nocookie.net/althistory/images/8/8a/Union_of_American_Communist_States.png',
      political_system: 'dictatorship',
      economic_axis: 5,
      social_axis: 3
    },
    {
      id: 2,
      name: 'The Drumpfdom',
      description: 'we do a little trolling its called we do a little trolling',
      flag_url: 'http://www.gopclermont.org/wp-content/uploads/2020/09/Trump2020.jpg',
      political_system: 'monarchy',
      economic_axis: 1,
      social_axis: 2
    },
  ];

  getTestNations(): Observable<NationSummary[]> {
    return of(this.testNations);
  }
}
