import { Movie } from "./movie.model";

 export type Result = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
 }