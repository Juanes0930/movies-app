import { Component } from '@angular/core';
import { MoviesServicesService } from './services/movies-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';


  constructor(private moviesSrv : MoviesServicesService){
      this.moviesSrv.getMovies().subscribe(res=>{
        console.log(res);
      })
  }
}
