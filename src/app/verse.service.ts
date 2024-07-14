import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VerseService {
  private verses = [
    { ref: 'Proverbs 14:1', text: 'Every wise woman buildeth her house: but the foolish plucketh it down with her hands.'},
    { ref: 'Proverbs 3:5-6', text: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.'},
  ];

  getVerses(): Observable<any[]> {
    return of(this.verses);
  }

  constructor() { }
}
