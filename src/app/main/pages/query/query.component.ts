import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Model/user';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
})
export class QueryComponent implements OnInit {

  query: string = ''
  results: User[] = [];
  subsciption: any;
  // results!: User[]
  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => this.query = params['q']
    )
    this.subsciption = this.searchService.getUsersByQuery(this.query).subscribe(
      (data) => this.results = data.map(response => response)
    )
  }

  ngOnDestroy(){
    return this.subsciption.unsubscribe()
  }

}
