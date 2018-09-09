export class CourseDetails{
    
   public static course_id:number=0;
    author: string ;
    next_start: string;
    next_start_formatted: string;
    title: string;
    url: string;
    uri: string='./assets/img/uxdesigner/1.png';

    constructor(){

        CourseDetails.course_id= CourseDetails.course_id++;
    }
 }
