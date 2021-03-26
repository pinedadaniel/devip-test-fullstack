import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import {RouterConstants} from "../../core/constants/router.constants";
import { Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from "../../services/http/movies.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private active: ActivatedRoute,
    private moviesService: MoviesService,

  ) {}
  public formSearch: FormGroup;
  public movieId = this.active.snapshot.params.id;
  public urlImage: string;
  public data: any;
  public va = [];
  public recommendated = [];

  ngOnInit(): void {
    this.getMovie();
    this.getRecommendations();
    this.formSearch = this.formBuilder.group({
      search: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
  }

  getRecommendations() {
    this.moviesService.getMoviesRecommendate().subscribe((res: any) => {
      console.log(res);
      if (res.data && res.success) {
        this.recommendated = res.data.results;
      }
    });
  }

  goToDetails(id) {
    location.href = `/details/${id}`;
  }

  getMovie() {
    this.moviesService.getDetailsMovie(this.movieId).subscribe((res: any) => {
      if (res.success && res.data) {
        this.data = res.data;
        this.urlImage =  res.data.poster_path;
        console.log(this.data.genres);
      }
    });
  }

  submit() {
    const query = this.formSearch.value.search;
    if (!query) {
      this.router.navigate(['explorer', 'all']);
    } else {
      this.router.navigate(['explorer', query]);
    }
  }

}
