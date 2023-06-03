"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[302],{372:(S,g,a)=>{a.r(g),a.d(g,{PagesModule:()=>A});var p=a(755),l=a(302),e=a(902);let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-details"]],decls:2,vars:0,template:function(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"details works!"),e.qZA())}}),t})();var m=a(505),f=a(4),d=a(616);let h=(()=>{class t{constructor(n){this.http=n,this.apiurl="https://pokeapi.co/api/v2/"}getPokemonsList(n=0,s=10){return this.http.get(`${this.apiurl}pokemon/?offset=${n}&limit=${s}`).pipe((0,m.b)(i=>i),(0,m.b)(i=>{i.results.map(r=>{this.http.get(r.url).pipe((0,f.U)(c=>c)).subscribe({next:c=>r.status=c})})}))}getPokemon(n){return console.log(n),this.http.get(n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["poke-header"]],decls:2,vars:0,consts:[["src","assets/logo.svg","alt","Logo Pokedex"]],template:function(n,s){1&n&&(e.TgZ(0,"header"),e._UZ(1,"img",0),e.qZA())},styles:["[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:2.5rem 0}"]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["poke-search"]],decls:3,vars:0,consts:[["type","text","placeholder","Buscar Pokemon..."],["src","assets/icons/search-icon.svg","alt","Buscar pokemon"]],template:function(n,s){1&n&&(e.TgZ(0,"form"),e._UZ(1,"input",0)(2,"img",1),e.qZA())},styles:["[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,.2);border-radius:10px;padding:.9375rem 1.25rem}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:95%;background:none;font-size:1.125rem;color:var(--branco)}"]}),t})();function C(t,o){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Oqu(null==n||null==n.type?null:n.type.name)}}function k(t,o){if(1&t&&(e.TgZ(0,"a",3)(1,"section",4)(2,"h2"),e._uU(3),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,C,2,1,"li",5),e.qZA()(),e.TgZ(6,"section",6),e._UZ(7,"img",7),e.qZA()()),2&t){const n=e.oxw().$implicit;e.xp6(3),e.Oqu(n.name),e.xp6(2),e.Q6J("ngForOf",null==n||null==n.status?null:n.status.types),e.xp6(2),e.s9C("src",n.status.sprites.front_default,e.LSH)}}function O(t,o){1&t&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA())}function M(t,o){if(1&t&&(e.YNc(0,k,8,3,"a",1),e.YNc(1,O,2,0,"ng-template",null,2,e.W1O)),2&t){const n=o.$implicit,s=e.MAs(2);e.Q6J("ngIf",n.status)("ngIfElse",s)}}let y=(()=>{class t{constructor(){this.pokemons=new Array(10)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["poke-list"]],inputs:{pokemons:"pokemons"},decls:1,vars:1,consts:[["ngFor","",3,"ngForOf"],["class","pokemon",4,"ngIf","ngIfElse"],["loading",""],[1,"pokemon"],[1,"pokemon__status"],[4,"ngFor","ngForOf"],[1,"pokemon__image"],["alt","",3,"src"],[1,"loading"],["src","assets/loading.gif","alt","Aguarde, carregando dados"]],template:function(n,s){1&n&&e.YNc(0,M,3,2,"ng-template",0),2&n&&e.Q6J("ngForOf",s.pokemons)},dependencies:[p.sg,p.O5],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;padding:1.25rem 0;flex-wrap:wrap}[_nghost-%COMP%]   .pokemon[_ngcontent-%COMP%]{position:relative;display:flex;width:calc(49% - 2.5rem);height:7.3125rem;background:var(--branco);padding:1.25rem;margin-bottom:.625rem;border-radius:.625rem}[_nghost-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.375rem;font-style:italic;font-weight:700;margin-bottom:.625rem;text-transform:capitalize}[_nghost-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#ccc;font-size:.625rem;display:flex;justify-content:center;align-items:center;border-radius:3.125rem;width:60px;margin-bottom:.3125rem;padding:.1875rem}[_nghost-%COMP%]   .pokemon__image[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;right:1.25rem;bottom:1.25rem;background:url(background-list-pokemons.75cac7ca69315d3e.svg)}[_nghost-%COMP%]   .pokemon__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7.5rem}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;width:49%;height:10rem;background:var(--branco);margin:.625rem 0;border-radius:.625rem}[_nghost-%COMP%]   .loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}"]}),t})();const x=function(){return["/"]},v=function(t,o){return{offset:t,limit:o}};function b(t,o){if(1&t&&(e.TgZ(0,"li")(1,"a",1),e._uU(2),e.qZA()()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("routerLink",e.DdM(3,x))("queryParams",e.WLB(4,v,n.offset,n.limit)),e.xp6(1),e.Oqu(n.page)}}let Z=(()=>{class t{constructor(){this.results=1,this.perpage=10,this.offset=0,this.pages=[]}ngOnInit(){this.paginator()}ngDoCheck(){console.log("Paginating..."),this.paginator()}paginator(){if(this.pages=[],this.perpage>0){const n=this.offset/this.perpage,s=Math.ceil(this.results/this.perpage);let i=1,r=s;s-n<=6?i=r-10:n>6?(i=n-4,r=n+4):r=10,1!=i&&this.pages.unshift(this.page(1));for(let c=i;c<=r;c++)this.pages.push(this.page(c));r!=s&&this.pages.push(this.page(s)),console.log(this.pages)}}page(n){return{page:n,limit:this.perpage,offset:n*this.perpage}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["poke-paginator"]],inputs:{results:"results",perpage:"perpage",offset:"offset"},decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink","queryParams"]],template:function(n,s){1&n&&(e.TgZ(0,"nav")(1,"ul"),e.YNc(2,b,3,7,"li",0),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngForOf",s.pages))},dependencies:[p.sg,l.rH],styles:["[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row;background:rgba(255,255,255,.2);padding:10px;border-radius:5px;margin:.3125rem}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;text-decoration:none;color:var(--branco)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:visited{color:#999}"]}),t})();const w=[{path:"",component:(()=>{class t{constructor(n,s){this.pokeService=n,this.activatedRoute=s,this.pokemons=[],this.limit=6,this.offset=0,this.activatedRoute.queryParams.subscribe(i=>{this.limit=i.limit?i.limit:6,this.offset=i.offset?i.offset:0,console.info(JSON.stringify({offset:this.offset,limit:this.limit})),this.getAllPokemons()})}ngOnInit(){}getAllPokemons(){this.pokeService.getPokemonsList(this.offset,this.limit).subscribe({next:n=>{this.pokemons=n.results},error:n=>console.warn(n)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h),e.Y36(l.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:5,vars:4,consts:[[3,"pokemons"],[3,"results","perpage","offset"]],template:function(n,s){1&n&&(e._UZ(0,"poke-header"),e.TgZ(1,"main"),e._UZ(2,"poke-search")(3,"poke-list",0)(4,"poke-paginator",1),e.qZA()),2&n&&(e.xp6(3),e.Q6J("pokemons",s.pokemons),e.xp6(1),e.Q6J("results",1e3)("perpage",s.limit)("offset",s.offset))},dependencies:[P,_,y,Z]}),t})()},{path:"details",component:u},{path:"**",redirectTo:""}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(w),l.Bz]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,l.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,T,F]}),t})()}}]);