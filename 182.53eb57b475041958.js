"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[182],{1182:(ne,h,r)=>{r.r(h),r.d(h,{PagesModule:()=>ee});var l=r(4755),m=r(204),e=r(1902);let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-details"]],decls:2,vars:0,template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"details works!"),e.qZA())}}),n})();var M=r(9751),x=r(4742),y=r(8421),v=r(7669),d=r(5403),T=r(3268),S=r(1810),f=r(8505),P=r(4004),_=r(4482),b=r(2733),L=r(5026),w=r(3144);let N=(()=>{class n{constructor(t){this.http=t,this.apiurl="https://pokeapi.co/api/v2/"}getPokemonsList(t=0,o=10){return this.http.get(`${this.apiurl}pokemon/?offset=${t}&limit=${o}`).pipe((0,f.b)(),(0,f.b)(i=>{i.results.map(a=>{this.http.get(a.url).pipe((0,P.U)(c=>c)).subscribe({next:c=>a.status=c})})}))}getPokemonsListFiltered(t){const o=[];for(const i of t){const a=this.http.get(i.url).pipe((0,P.U)(c=>({...i,status:c})));o.push(a)}return function Z(...n){const s=(0,v.jO)(n),{args:t,keys:o}=(0,x.D)(n),i=new M.y(a=>{const{length:c}=t;if(!c)return void a.complete();const g=new Array(c);let k=c,C=c;for(let p=0;p<c;p++){let u=!1;(0,y.Xf)(t[p]).subscribe((0,d.x)(a,te=>{u||(u=!0,C--),g[p]=te},()=>k--,void 0,()=>{(!k||!u)&&(C||a.next(o?(0,S.n)(o,g):g),a.complete())}))}});return s?i.pipe((0,T.Z)(s)):i}(o)}getPokemonsListBasic(t=""){return t||(t=`${this.apiurl}pokemon/?offset=0&limit=500`),this.http.get(t)}getPokemon(t){return console.log(t),this.http.get(t)}getPokemonsListNames(t=""){return t||(t=`${this.apiurl}pokemon/?offset=0&limit=100`),this.http.get(t).pipe(function A(n,s=1/0,t){return s=(s||0)<1?1/0:s,(0,_.e)((o,i)=>(0,b.p)(o,i,n,s,void 0,!0,t))}(o=>this.http.get(o.next)),function F(n,s=!1){return(0,_.e)((t,o)=>{let i=0;t.subscribe((0,d.x)(o,a=>{const c=n(a,i++);(c||s)&&o.next(a),!c&&o.complete()}))})}(o=>o.next,!0),(0,L.R)((o,i)=>o.concat(...i.results),[]))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(w.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["poke-header"]],decls:2,vars:0,consts:[["src","assets/logo.svg","alt","Logo Pokedex"]],template:function(t,o){1&t&&(e.TgZ(0,"header"),e._UZ(1,"img",0),e.qZA())},styles:["[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:2.5rem 0}"]}),n})();function I(n,s){if(1&n&&(e.TgZ(0,"span",6),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.pokemonsFiltered.length," pokemons cont\xe9m... ")}}function H(n,s){1&n&&e._UZ(0,"option",9),2&n&&e.Q6J("value",s.$implicit.name)}function U(n,s){if(1&n&&(e.TgZ(0,"datalist",7),e.YNc(1,H,1,1,"option",8),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.pokemonsListNames)}}let j=(()=>{class n{constructor(){this.emmitSearch=new e.vpe,this.pokemonsListNames=[{name:"",url:""}],this.pokemonsFiltered=[],this.lastKeywordSearched=""}ngOnInit(){if(this.pokemonsListNames.length&&null!==localStorage.getItem("PokemonsListNamesUrls")){const t=localStorage.getItem("PokemonsListNamesUrls")||"";this.pokemonsListNames=JSON.parse(t).sort((o,i)=>o.name>i.name?1:o.name<i.name?-1:0),console.info("TOTAL: "+this.pokemonsListNames.length)}}filterNames(t){this.pokemonsFiltered=this.pokemonsListNames.filter(o=>-1!==o.name.indexOf(t.toLowerCase())),console.log(this.pokemonsFiltered)}search(t){t!==this.lastKeywordSearched&&(this.lastKeywordSearched=t,this.emmitSearch.emit(this.pokemonsFiltered))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["poke-search"]],outputs:{emmitSearch:"emmitSearch"},decls:7,vars:2,consts:[["class","search-hint",4,"ngIf"],["list","pokemons","placeholder","Buscar Pokemon...",3,"keydown.enter","input"],["keyword",""],[1,"search-button",3,"click"],["src","assets/icons/search-icon.svg","alt","Buscar pokemon"],["id","pokemons",4,"ngIf"],[1,"search-hint"],["id","pokemons"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"form"),e.YNc(1,I,2,1,"span",0),e.TgZ(2,"input",1,2),e.NdJ("keydown.enter",function(){return!1})("input",function(){e.CHM(i);const c=e.MAs(3);return e.KtG(o.filterNames(c.value))}),e.qZA(),e.TgZ(4,"span",3),e.NdJ("click",function(){e.CHM(i);const c=e.MAs(3);return e.KtG(o.search(c.value))}),e._UZ(5,"img",4),e.qZA(),e.YNc(6,U,2,1,"datalist",5),e.qZA()}2&t&&(e.xp6(1),e.Q6J("ngIf",o.pokemonsFiltered.length),e.xp6(5),e.Q6J("ngIf",o.pokemonsListNames))},dependencies:[l.sg,l.O5],styles:["[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;position:relative;justify-content:space-between;align-items:center;background:rgba(255,255,255,.2);border-radius:10px;padding:.9375rem 1.25rem}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:95%;background:none;font-size:1.125rem;color:var(--branco)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]{cursor:pointer;display:flex;background:#888;border-bottom:5px solid #666;border-radius:.625rem;padding:.625rem;color:#333}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]:hover{background:#999;border-bottom:5px solid #666}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .search-hint[_ngcontent-%COMP%]{position:absolute;top:6px;font-size:small;color:#232323}"]}),n})();function E(n,s){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.xp6(1),e.Oqu(null==t||null==t.type?null:t.type.name)}}const z=function(n){return["details",n]};function Q(n,s){if(1&n&&(e.TgZ(0,"a",5)(1,"section",6)(2,"h2"),e._uU(3),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,E,2,1,"li",7),e.qZA()(),e.TgZ(6,"section",8),e._UZ(7,"img",9),e.qZA()()),2&n){const t=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(4,z,t.status.id)),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Q6J("ngForOf",null==t||null==t.status?null:t.status.types),e.xp6(2),e.s9C("src",t.status.sprites.front_default,e.LSH)}}function Y(n,s){1&n&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA())}function q(n,s){if(1&n&&(e.YNc(0,Q,8,6,"a",3),e.YNc(1,Y,2,0,"ng-template",null,4,e.W1O)),2&n){const t=s.$implicit,o=e.MAs(2);e.Q6J("ngIf",t.status)("ngIfElse",o)}}let R=(()=>{class n{constructor(){this.pokemons=new Array(10),this.emmitSearch=new e.vpe}onSearch(t){this.emmitSearch.emit(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["poke-list"]],inputs:{pokemons:"pokemons"},outputs:{emmitSearch:"emmitSearch"},decls:3,vars:1,consts:[[3,"emmitSearch"],[1,"listagem"],["ngFor","",3,"ngForOf"],["class","pokemon",3,"routerLink",4,"ngIf","ngIfElse"],["loading",""],[1,"pokemon",3,"routerLink"],[1,"pokemon__status"],[4,"ngFor","ngForOf"],[1,"pokemon__image"],["alt","",3,"src"],[1,"loading"],["src","assets/loading.gif","alt","Aguarde, carregando dados"]],template:function(t,o){1&t&&(e.TgZ(0,"poke-search",0),e.NdJ("emmitSearch",function(a){return o.onSearch(a)}),e.qZA(),e.TgZ(1,"section",1),e.YNc(2,q,3,2,"ng-template",2),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.pokemons))},dependencies:[l.sg,l.O5,m.rH,j],styles:["[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1.25rem 0;flex-wrap:wrap}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]{position:relative;display:flex;width:calc(49% - 2.5rem);height:7.3125rem;background:var(--branco);padding:1.25rem;margin-bottom:.625rem;border-radius:.625rem;color:var(--primary-color);z-index:-2}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.375rem;font-style:italic;font-weight:700;margin-bottom:.625rem;text-transform:capitalize;z-index:10}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#ccc;font-size:.625rem;display:flex;justify-content:center;align-items:center;border-radius:3.125rem;width:60px;margin-bottom:.3125rem;padding:.1875rem}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__image[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;right:1.25rem;bottom:1.25rem;background:url(background-list-pokemons.75cac7ca69315d3e.svg);z-index:-1}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7.5rem}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;width:49%;height:9.25rem;background:var(--branco);margin:.625rem 0;border-radius:.625rem}[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}"]}),n})();function B(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.first())}),e._uU(1,"1"),e.qZA()}}function D(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.previous())}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.curPage-1)}}function K(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.next())}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.curPage+1)}}function $(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.last())}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.numPages)}}let G=(()=>{class n{constructor(){this.results=0,this.perpage=10,this.offset=0,this.emmitChangePage=new e.vpe,this.pages=[],this.curPage=1,this.numPages=1}ngOnInit(){this.paginator()}ngOnChanges(t){t.results&&(this.first(),this.paginator())}paginator(){this.numPages=Math.ceil(this.results/this.perpage)}next(){this.curPage++,this.changePage()}previous(){this.curPage--,this.changePage()}first(){this.curPage=1,this.changePage()}last(){this.curPage=this.numPages,this.changePage()}changePage(){this.emmitChangePage.emit({page:this.curPage,limit:this.perpage,offset:this.perpage*(this.curPage-1)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["poke-paginator"]],inputs:{results:"results",perpage:"perpage",offset:"offset"},outputs:{emmitChangePage:"emmitChangePage"},features:[e.TTD],decls:12,vars:6,consts:[[2,"display","flex","align-items","center"],[3,"click",4,"ngIf"],[1,"current"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"nav",0)(1,"div")(2,"code"),e._uU(3),e.qZA()(),e.TgZ(4,"ul"),e._uU(5," P\xe1ginas "),e.YNc(6,B,2,0,"li",1),e.YNc(7,D,2,1,"li",1),e.TgZ(8,"li",2),e._uU(9),e.qZA(),e.YNc(10,K,2,1,"li",1),e.YNc(11,$,2,1,"li",1),e.qZA()()),2&t&&(e.xp6(3),e.hij("Encontrados ",o.results," pokemons."),e.xp6(3),e.Q6J("ngIf",o.curPage>1),e.xp6(1),e.Q6J("ngIf",o.curPage>2),e.xp6(2),e.Oqu(o.curPage),e.xp6(1),e.Q6J("ngIf",o.curPage<o.numPages),e.xp6(1),e.Q6J("ngIf",o.numPages-o.curPage>1))},dependencies:[l.O5],styles:["[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:rgba(0,0,0,.3);margin-bottom:1.25rem;border-radius:.625rem;padding:.625rem;color:#efefef}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row;background:rgba(255,255,255,.2);padding:10px;border-radius:5px;margin:.3125rem}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]{background:#ee3f35;color:var(--branco)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;text-decoration:none;color:var(--branco)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:visited{color:#999}"]}),n})();const X=[{path:"",component:(()=>{class n{constructor(t,o){this.pokeService=t,this.activatedRoute=o,this.pokemons=[],this.pokemonsFilteredDataList=[],this.limit=6,this.resultsCount=0}ngOnInit(){this.getAllPokemonsBasicInfo()}getAllPokemonsBasicInfo(){this.pokeService.getPokemonsListNames().subscribe({next:t=>{localStorage.setItem("PokemonsListNamesUrls",JSON.stringify(t)),this.pokemonsFilteredDataList=t,this.resultsCount=t.length,this.onChangePage({page:1,limit:6,offset:0})},error:t=>console.warn(t)})}onSearch(t){this.resultsCount=t.length,console.warn("HOME: "+t.length),this.pokemonsFilteredDataList=t,this.pokemons=[].concat(this.pokemonsFilteredDataList.slice(0,Math.min(this.limit,t.length))),this.pokeService.getPokemonsListFiltered(this.pokemons).subscribe({next:o=>this.pokemons=o,error:o=>console.warn("ERRO RESEARCH: "+o)})}onChangePage(t){this.limit=t.limit,this.pokemons=[].concat(this.pokemonsFilteredDataList.slice(t.offset,t.offset+this.limit)),this.pokeService.getPokemonsListFiltered(this.pokemons).subscribe({next:o=>this.pokemons=o,error:o=>console.warn("ERRO RESEARCH: "+o)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N),e.Y36(m.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:4,vars:3,consts:[[3,"pokemons","emmitSearch"],[3,"results","perpage","emmitChangePage"]],template:function(t,o){1&t&&(e._UZ(0,"poke-header"),e.TgZ(1,"main")(2,"poke-list",0),e.NdJ("emmitSearch",function(a){return o.onSearch(a)}),e.qZA(),e.TgZ(3,"poke-paginator",1),e.NdJ("emmitChangePage",function(a){return o.onChangePage(a)}),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("pokemons",o.pokemons),e.xp6(1),e.Q6J("results",o.resultsCount)("perpage",o.limit))},dependencies:[J,R,G]}),n})()},{path:"details/:id",component:O},{path:"**",redirectTo:""}];let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(X),m.Bz]}),n})(),W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,m.Bz]}),n})(),ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,V,W]}),n})()}}]);