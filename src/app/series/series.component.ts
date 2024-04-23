import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './Serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor( private SerieService: SerieService) { }
  series: Array<Serie> = [];
    //Initialize Average
    averageSeasons: number = 0;
  getSerieList():Array <Serie>{
    return dataSeries;
  }
  getSeries(){
    this.SerieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  ngOnInit() {
    this.series =  this.getSerieList();
    this.calculateAverageSeasons();
  }

  //Average Season function
  private  calculateAverageSeasons() : void{
    let totalSeasons = this.series.reduce((acc, curr) => acc + curr.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
}

}