import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  public formSearch: FormGroup;

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      search: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
  }

  submit() {
    const query = this.formSearch.value.search;
    console.log(query);
    this.router.navigate(['explorer', query]);
  }
}
