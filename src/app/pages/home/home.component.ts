import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService,private title:Title,private meta:Meta) { 
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});
  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();


  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    })
  }

  // action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.actionMovieResult = result.results;
    })
  }

  // adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'adventuremovies#');
      this.adventureMovieResult = result.results;
    })
  }

// animation 
animationMovie() {
  this.service.fetchAnimationMovies().subscribe((result) => {
    this.animationMovieResult = result.results;
  });
}

  // comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedymovies#');
      this.comedyMovieResult = result.results;
    })
  }

  // documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'documentarymovies#');
      this.documentaryMovieResult = result.results;
    })
  }

  // science-fiction
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'sciencefictionmovies#');
      this.sciencefictionMovieResult = result.results;
    })
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'thrillermovies#');
      this.thrillerMovieResult = result.results;
    })
  }
}
