import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from "../app.component";
import { Observable, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from '../models/course.model';
import { catchError, map, tap } from 'rxjs/operators';

//Defining the headers option such as content type: in our case it's JSON changing format
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public https: HttpClient, private sanitizer: DomSanitizer) { }

  getAllCourses(): Observable<Course[]> {
    return this.https.get<Course[]>(AppComponent.API_URL + 'courses',httpOptions)
      .pipe(
        map(courses => {
          const listOfCourses: Course[] = courses
          return listOfCourses;
        }))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
