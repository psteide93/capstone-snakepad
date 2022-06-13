import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Note } from '../models/note.model';

type Response = {
  notes: Note[];
  snakeLink: number;
};

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  getNotes(id: number): Observable<Note[]> {
    return this.http
      .get<Response>('http://localhost:8081/api/notes')
      .pipe(
        map((response) => response.notes.filter((note) => note.snakeLink == id))
      );
  }

  getLastNote(id: number): Observable<Note> {
    return this.getNotes(id).pipe(map((notes) => notes[notes.length - 1]));
  }
}
