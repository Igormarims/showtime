import { Result } from './../../models/result.model';
import { Movie } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../service/movie-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    bannerResult: Movie[] = [];
    trendingMovieResult: Movie[] = [];
    actionMovieResult: any = [];
    adventureMovieResult: any = [];
    animationMovieResult: any = [];
    comedyMovieResult: any = [];
    documentaryMovieResult: any = [];
    sciencefictionMovieResult: any = [];
    thrillerMovieResult: any = [];


  constructor(private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.bannerDat();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  bannerDat(): void {
    this.movieApiService.bannerApiData()
    .subscribe((result:Result)=> {
      this.bannerResult = result.results;
      
    })
  }
  trendingData(): void {
    this.movieApiService.trendingMovieApiDate()
    .subscribe((result: Result)=> {
        this.trendingMovieResult = result.results;
    })
  }

  actionMovie() {
    this.movieApiService.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  adventureMovie() {
    this.movieApiService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
 
  animationMovie() {
    this.movieApiService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  comedyMovie() {
    this.movieApiService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  documentaryMovie() {
    this.movieApiService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  sciencefictionMovie() {
    this.movieApiService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  thrillerMovie() {
    this.movieApiService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
