import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input () userId!: number;
  @Output() msgQuery = new EventEmitter
  visibility = false;

  constructor(
    private router: Router
    ) { }

  ngOnInit(  ): void {
  }

  search(query: string){
    const link = ['search/' + query]
    this.msgQuery.emit(query)
    this.router.navigate(link)
  }

  show(){
    this.visibility = !this.visibility;
  }
}
