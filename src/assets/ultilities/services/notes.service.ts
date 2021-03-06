import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Note } from '../models/note.model';

type Response = {
  notes: Note[];
  snakeLink: number;
};

type SingleResponse = {
  note: Note;
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  getNotes(id: number): Observable<Note[]> {
    return this.http
      .get<Response>('https://colubrid-tracker.herokuapp.com/api/notes')
      .pipe(
        map((response) => response.notes.filter((note) => note.snakeLink == id))
      );
  }

  getLastNote(id: number): Observable<Note> {
    return this.getNotes(id).pipe(map((notes) => notes[notes.length - 1]));
  }

  addNote(note: Note): Observable<SingleResponse> {
    return this.http.post<SingleResponse>(
      'https://colubrid-tracker.herokuapp.com/api/notes',
      note,
      httpOptions
    );
  }
}
