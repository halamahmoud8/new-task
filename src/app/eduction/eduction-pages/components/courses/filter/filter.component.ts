import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CoursesService } from '../../../services/eduction.services';

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.sass"],
})
export class FilterComponent implements OnInit {
  @Input() res: any=[];
  myForm !: FormGroup;
  categoryFormArray !: FormArray;
  arr: any = [];
  isOpen!: boolean;
  constructor(private fb: FormBuilder,private courseService: CoursesService) {}
  filterNameHint: any;
  filterNameAction: any;
  filterForDetails: any = [];
  filterName: any
  courseDetails: any[] = []

  caterioes: any = [
    { category: "Development" },
    { category: "Finance" },
    { category: "IT & Software" },
    { category: "Other" },
  ]
  openFilter() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      catName: this.fb.array([])
    });
    this.categoryFormArray = <FormArray>this.myForm.controls.catName;
     this.getAllCourses()

    if (window.innerWidth > 768) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
    let getStudentCourses = this.courseService.getStudentCourses(1239);
    console.log("***",getStudentCourses);
    let getCoursesByID = this.courseService.getCoursesByID(125);
    console.log("++++",getCoursesByID);
  }
  onChange(category: string, event: any) {
    let isChecked = event.srcElement.checked
    if (isChecked) {
      this.categoryFormArray.push(new FormControl(category));
    } else {
      let index = this.categoryFormArray.controls.findIndex(x => x.value == category);
      this.categoryFormArray.removeAt(index);
    }
    console.log("form", this.categoryFormArray.value);
    this.getAllCourses()
  }
  getAllCourses() {
  

     this.courseDetails = []
     for (let i = 0; i < this.res?.length; i++) {
      if (this.res[i].CourseDuration <=2) {
        this.courseDetails.push({
          courseImg: this.res[i].CourseImg,
          courseLevel: this.res[i].courseLevel,
          courseDuration: this.res[i].CourseDuration,
          coursePrice: this.res[i].CoursePrice,
          availableSeats: this.res[i].AvailableSeats,
          courseName: this.res[i].CourseName
        })
      }
          if (this.categoryFormArray.length > 1) {
         for (let j = 0; j < this.categoryFormArray.length; j++) {
           if (this.res[i].CourseCategory == this.categoryFormArray.value[j]) {
             // this.courseDetails.push(this.res[i])
             this.courseDetails.push({
               courseImg: this.res[i].CourseImg,
               courseLevel: this.res[i].courseLevel,
               courseDuration: this.res[i].CourseDuration,
               coursePrice: this.res[i].CoursePrice,
               availableSeats: this.res[i].AvailableSeats,
               courseName: this.res[i].CourseName
             })
           }
         }
       }

       if (this.res[i].CourseCategory == this.categoryFormArray.value) {
         this.courseDetails.push({
           courseImg: this.res[i].CourseImg,
           courseLevel: this.res[i].courseLevel,
           courseDuration: this.res[i].CourseDuration,
           coursePrice: this.res[i].CoursePrice,
           availableSeats: this.res[i].AvailableSeats,
           courseName: this.res[i].CourseName
         })
       }

     }

     console.log("servicesBox", this.courseDetails);

    // });
 }
 onClickLessThanTwo(){
this.getAllCourses();
 }
}
