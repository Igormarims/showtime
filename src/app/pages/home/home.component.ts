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


  constructor(private movieApiService: MovieApiService) { }

  ngOnInit(): void {
    this.bannerDat();
    this.trendingData();
  }

  bannerDat(): void {
    this.movieApiService.bannerApiData()
    .subscribe((result:Result)=> {
      console.log(result.results);
      this.bannerResult = result.results;
      
    })
  }
  trendingData(): void {
    this.movieApiService.trendingMovieApiDate()
    .subscribe((result: Result)=> {
        console.log(result, 'trending');
        this.trendingMovieResult = result.results;
    })
  }

}
