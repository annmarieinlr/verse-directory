import { Component, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';

@Component({
  selector: 'app-verse-list',
  standalone: true,
  imports: [],
  templateUrl: './verse-list.component.html',
  styleUrl: './verse-list.component.css'
})

export class VerseListComponent implements OnInit {
  verses: any[] | undefined;

  constructor(private verseService: VerseService) { }

  ngOnInit() {
    this.verseService.getVerses().subscribe(data => {
      this.verses = data;
    });
  }
  
  getVerses(): void {
    this.verseService.getVerses()
      .subscribe(verses => this.verses = verses);
  }

}
