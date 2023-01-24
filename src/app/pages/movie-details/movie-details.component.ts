import { MovieApiService } from 'src/app/service/movie-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    
    getMovieDetailResult?: any;
    getMovieVideoResult?: any;
    getMovieCastResult?:any;

  constructor(private movieApiService: MovieApiService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // let getParamId = this.activatedRouter.snapshot.paramMap.get('id')
      this.activatedRouter.params.subscribe((getParam)=>{
        const getParamId = getParam['id']
        this.getMovie(getParamId)
        this.getVideo(getParamId);
        this.getMovieCast(getParamId);
      })
      }
      
   

   getMovie(id:any) {
    this.movieApiService.getMovieDetails(id).subscribe((result)=>{
      this.getMovieDetailResult = result;
      
    })
   }

   getVideo(id: any) {
    this.movieApiService.getMovieVideo(id).subscribe((result)=> {
       result.results.forEach((element: any) => {
         if(element.type === 'Trailer'){
           this.getMovieVideoResult = element.key;
           }
          
       });
    })
   }
   
   getMovieCast(id: any) {
      this.movieApiService.getMovieCast(id)
      .subscribe((result)=>{ 
          this.getMovieCastResult = result.cast;
      })
   }

}
