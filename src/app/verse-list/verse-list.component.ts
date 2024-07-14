import { Component, OnInit } from '@angular/core';
import { VerseService } from '../verse.service';

@Component({
  selector: 'app-verse-list',
  //standalone: true,
  //imports: [],
  templateUrl: './verse-list.component.html',
  styleUrl: './verse-list.component.css'
})

export class VerseListComponent implements OnInit {
  verses: any[] | undefined;
  //selectedVerse: any = null;

  constructor(private verseService: VerseService) { }

  ngOnInit(): void {
    this.verseService.getVerses().subscribe(data => {
      this.verses = data;
    });
  }
  
  selectedVerse(verse: any): void {
    this.selectedVerse = verse;
  }

}
