import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';
MovieApiService
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   searchResult: any = [];
   searchForm = new FormGroup({
    'movieName': new FormControl(null)
   })
  constructor(private movieApiService: MovieApiService) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.searchForm.value, 'dados');
    this.movieApiService.getSearchMovie(this.searchForm.value).subscribe(
      (result)=> {
        console.log(result, 'Search api');
        this.searchResult = result.results;
      }
    )
  }
}
