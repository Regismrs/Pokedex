import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'poke-paginator',
  templateUrl: './poke-paginator.component.html',
  styleUrls: ['./poke-paginator.component.scss']
})
export class PokePaginatorComponent{
  @Input() results: number = 1
  @Input() perpage: number = 10 
  @Input() offset: number = 0

  public pages:Array<any> = []

  constructor() { }

  ngOnInit() {
    this.paginator()
  }

  ngDoCheck() {
    console.log('Paginating...')
    this.paginator()
  }

  paginator() {
    this.pages = []
    if (this.perpage > 0) {
      const curPage = this.offset / this.perpage
      const totalPages = Math.ceil(this.results / this.perpage)
      let firstPage = 1
      let lastPage = totalPages

      if ( totalPages - curPage <= 6) {
        firstPage = lastPage - 10
      } else if ( curPage > 6) {
        firstPage = curPage - 4
        lastPage = curPage + 4
      } else {
        lastPage = 10
      }

      if (firstPage != 1) {
        this.pages.unshift(this.page(1))
      }

      for (let i = firstPage; i <= lastPage; i++) {
        this.pages.push( this.page(i) )
      }

      if (lastPage != totalPages) this.pages.push(this.page(totalPages))
      console.log(this.pages)

    }
  }

  page(page:number):object {
    return {page: page, limit: this.perpage, offset: page * this.perpage}
  }
}
