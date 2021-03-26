import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/http/movies.service";
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../services/util/storage.service";
import { Router} from "@angular/router";
import {RouterConstants} from "../../core/constants/router.constants";


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private active: ActivatedRoute,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private router: Router
  ) { }
  public auth = this.storageService.getGuestSessionId();
  public login = false;
  public movies = [];
  public recommendated = [];
  public page = 1;
  public filter = this.active.snapshot.params.filter;
  public formSearch: FormGroup;

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      search: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
    this.getMovies();
    this.getAuth();
    this.getRecommendations();
  }

  getAuth() {
    if (this.auth) {
      this.login = true;
    }
  }

  getRecommendations() {
    this.moviesService.getMoviesRecommendate().subscribe((res: any) => {
      console.log(res);
      if (res.data && res.success) {
        this.recommendated = res.data.results;
      }
    });
  }

  getMovies() {
    if (this.filter === 'all') {
      this.moviesService.getMoviesExplorer().subscribe((res: any) => {
        if (res.success && res.data) {
          this.movies = res.data;
        }
      });
    } else {
      this.moviesService.getMoviesQuery(this.filter).subscribe((res: any) => {
        if (res.success && res.data) {
          this.movies = res.data;
        }
      });
    }
  }

  goToDetails(id) {
    if (this.login) {
      this.router.navigate(['details', id]);
    } else {
      this.router.navigate([RouterConstants.LOGIN]);
    }
  }

  submit() {
    const query = this.formSearch.value.search;
    if (!query) {
      this.getMovies();
    } else {
      this.moviesService.getMoviesQuery(query).subscribe((res: any) => {
        if (res.success && res.data) {
          this.movies = res.data;
        }
      });
    }
  }

  handleChange($event) {
    this.page = $event;
  }

}
