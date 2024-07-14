import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VerseService {
  private verses = [
    { reference: 'Proverbs 14:1', content: 'Every wise woman buildeth her house: but the foolish plucketh it down with her hands.'},
    { reference: 'Proverbs 3:5-6', content: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.'},
  ];

  getVerses(): Observable<any[]> {
    return of(this.verses);
  }

  constructor() { }
}
