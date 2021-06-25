import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from '../../../services/eduction.services';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() res: any=[];

  // myForm !: FormGroup;
  // categoryFormArray !: FormArray;
  // arr: any = [];
  // res:any
  constructor(
    private courseService: CoursesService, private fb: FormBuilder
  ) { }
  id: any = "1233";
  ngOnInit() {
    // this.myForm = this.fb.group({
    //   catName: this.fb.array([])
    // });
    // this.categoryFormArray = <FormArray>this.myForm.controls.catName;
     this.getAllCourses()


  }
  courseDetails: any[] = []
 
  // filterNameHint: any;
  // filterNameAction: any;
  // filterForDetails: any = [];
  // filterName: any
  // caterioes: any = [
  //   { category: "Development" },
  //   { category: "Finance" },
  //   { category: "IT & Software" },
  //   { category: "Other" },
  // ]
  getAllCourses() {
     this.courseService.getCourses().subscribe(data => {
    //  console.log("gfg",this.Data)
    this.res = data

      this.courseDetails = []
      for (let i = 0; i < this.res.length; i++) {
     this.courseDetails.push({
         courseImg:this.res[i].CourseImg,
         courseLevel:this.res[i].courseLevel,
         courseDuration:this.res[i].CourseDuration,
         coursePrice:this.res[i].CoursePrice,
         availableSeats:this.res[i].AvailableSeats,
         courseName:this.res[i].CourseName
       })   
        //    if (this.categoryFormArray.length > 1) {
        //   for (let j = 0; j < this.categoryFormArray.length; j++) {
        //     if (this.res[i].CourseCategory == this.categoryFormArray.value[j]) {
        //       // this.courseDetails.push(this.res[i])
        //       this.courseDetails.push({
        //         courseImg: this.res[i].CourseImg,
        //         courseLevel: this.res[i].courseLevel,
        //         courseDuration: this.res[i].CourseDuration,
        //         coursePrice: this.res[i].CoursePrice,
        //         availableSeats: this.res[i].AvailableSeats,
        //         courseName: this.res[i].CourseName
        //       })
        //     }
        //   }
        // }

        // if (this.res[i].CourseCategory == this.categoryFormArray.value) {
        //   this.courseDetails.push({
        //     courseImg: this.res[i].CourseImg,
        //     courseLevel: this.res[i].courseLevel,
        //     courseDuration: this.res[i].CourseDuration,
        //     coursePrice: this.res[i].CoursePrice,
        //     availableSeats: this.res[i].AvailableSeats,
        //     courseName: this.res[i].CourseName
        //   })
        // }

      }

      console.log("servicesBox", this.courseDetails);

     });
  }
}
