import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CourseDetails } from '../../models/course-detailts.model';
import { Course } from '../../models/course.model';
import { RouterModule, Routes } from '@angular/router';

//importing the browser modules for manageing the DOM
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  //To handle the first click on the button 
  isShowen: boolean = false;

  //The list of courses retrieved from the API
  coursesList: Array<Course>;
//the list of courses
  courseDetailsList: Array<CourseDetails>;

  i: number;

  // Get the elements with class="column" from the DOM
  elements = document.getElementsByClassName("column") as HTMLCollectionOf<HTMLElement>;

  //Get the safe URL for Image to by pass the Browser security
  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  constructor(private courseService: CourseService, private router :RouterModule, private _sanitizer: DomSanitizer) {
    //Instantiating variables
    this.courseDetailsList = new Array<CourseDetails>();
  }

  ngOnInit() {
    this.getAllCourses();
  }

  //Getting the image safe url
  photoURL(course: CourseDetails) {
    return this._sanitizer.bypassSecurityTrustStyle(course.uri);
  }

  //this function is calling the getAllCourses of course service 
  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe(courses => {
      this.coursesList = courses["courses"];
    });
  }

  // Perform the click button to show list of courses
  showCourses() {
    if (this.isShowen === false) {

      if (this.coursesList != undefined && this.coursesList != null) {
        //Lets push courses into the course Detailled list
        this.courseDetailsList.push(this.coursesList["become-a-ui-designer"]);
        this.courseDetailsList.push(this.coursesList["become-a-ux-designer"]);
        this.courseDetailsList.push(this.coursesList["become-a-web-developer"]);
        this.courseDetailsList.push(this.coursesList["frontend-development-for-designers"]);
        this.courseDetailsList.push(this.coursesList["ui-for-ux-designers"]);
        this.courseDetailsList.push(this.coursesList["ux-fundamentals"]);
        this.courseDetailsList.push(this.coursesList["voice-user-interface-design-with-amazon-alexa"]);
        this.isShowen = true;
      }
    }
  }

  showCourseDetails(course: CourseDetails) {
    console.log("Clickedd item");

    console.log("Title = " + course.title + " Author = " + course.author);
  }




  // List View
  listView() {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "100%";
    }
  }

  // Grid View
  gridView() {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "50%";
    }
  }
}
