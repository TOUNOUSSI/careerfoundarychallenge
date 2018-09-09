# CareerFoundary

## about the author
Author: Tounoussi Youssef

Email: youssef.tounoussi@gmail.com

version : 1.0

Created date :  09/09/2018
##

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




## Description of the proposal

    The project is a serveless web landing application that consume a RESTful API of the Career Foundary inc.
    The end points consummed by the web application are :
      - https://careerfoundry.com/en/api/courses/ : here is the list of courses offred by the Career foundary web service. 
      - https://careerfoundry.com/en/api/courses/{course_slug}  : here is the course details end-point
            (example: https://careerfoundry.com/en/api/courses/become-a-web-developer) for the course  named become-a-web-developer.

    Technologies used :  
       Angular 6, JQuery, HTML, CSS and Bootstrap 


## Followed steps 

    Before i started the developement of the solution, it's necessary to understand the context first ,so 
    i gived 30 minutes to check what i am really in front of,and what are the requirements specifications that my landing page need to have?
    further more what are the expectations and what i need to have as assets?
    
     
    After that i started checking the RESTful API end-points and getting the JSON data to extract the design definition of the application
    and i used an online tool that helped me to have a Table view of the JSON data  => (http://json2table.com/)
    
    Technologies choosing :
           i choosen the Angular 6 (Based on Typescript ) because it's one of the frameworks trends that gives many features to UX and UI designers.
    
    - Creating a new Angular project using the ng new command, then giving the architecture for the project

    - Choosing the template of the landing page and customized it : 
        One of the most interesting step that i get used to do, is to find the best template that goes with the context, for this purpose 
        i choosen the Paper-kit template of the Creative Tim, and i started removing the unused staffs in it.

    - Migrating the template to the project and adding assets to angular.json:
        it's important to have assets localy and not depending in a web link, just to increase the website performce (Loading time)
  
    - developement of the components :
        each component for me is a small project that i need to define it clearly: He has variables, assets and dependencies

   - consuming the first RESTful API end-point 1:  https://careerfoundry.com/en/api/courses/
            - after getting the list of courses what i did, is to make it showen into the HTML file and i started optimizing the views with CSS and Bootstrap 
   - consuming the first RESTful API end-point 2:  https://careerfoundry.com/en/api/courses/{course_slug} 
   