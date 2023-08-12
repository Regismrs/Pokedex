import { Component, Input, DoCheck, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'poke-paginator',
  templateUrl: './poke-paginator.component.html',
  styleUrls: ['./poke-paginator.component.scss']
})
export class PokePaginatorComponent implements OnChanges{
  @Input() results:number = 0
  @Input() perpage: number = 10 
  @Input() offset: number = 0

  @Output() emmitChangePage:EventEmitter<{page:number, limit:number, offset:number}> = new EventEmitter()
  
  public pages:Array<any> = []
  public curPage:number = 1
  public numPages:number = 1

  constructor() { }

  ngOnInit() {
    this.paginator()
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes['results']) {
      this.first()
      this.paginator()
    } 
  }

  paginator() {
    this.numPages = Math.ceil(this.results / this.perpage)
    //alert(this.numPages)
  }

  next() {
    this.curPage++
    this.changePage()
  }

  previous() {
    this.curPage--
    this.changePage()
  }

  first() {
    this.curPage = 1
    this.changePage()
  }

  last() {
    this.curPage = this.numPages
    this.changePage()
  }

  changePage() {
    this.emmitChangePage.emit({page: this.curPage, limit: this.perpage, offset: this.perpage * (this.curPage - 1)})
  }

}
