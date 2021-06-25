import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/eduction.services';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {

  isOpen!: boolean;
  myForm !: FormGroup;
  categoryFormArray !: FormArray;
  arr: any = [];
  courseDetails: any[] = []
  res: any
  filterNameHint: any;
  filterNameAction: any;
  filterForDetails: any = [];
  filterName: any
  caterioes: any = [
    { category: "Development" },
    { category: "Finance" },
    { category: "IT & Software" },
    { category: "Other" },
  ]
  constructor(
    private courseService: CoursesService, private fb: FormBuilder
  ) { }
  id: any = "1233";  openFilter() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    if (window.innerWidth > 768) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
    this.myForm = this.fb.group({
      catName: this.fb.array([])
    });
    this.categoryFormArray = <FormArray>this.myForm.controls.catName;
    // this.getAllCourses()
  }
  // getAllCourses() {
  //   this.courseService.getCourses().subscribe(data => {
  //     this.res = data
  //     console.log("services", this.res);
    
  //   });
  // }
}
