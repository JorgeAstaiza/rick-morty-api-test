"use strict";(self.webpackChunkrick_and_morty_app=self.webpackChunkrick_and_morty_app||[]).push([[280],{5280:(j,u,c)=>{c.r(u),c.d(u,{LocationsModule:()=>Q});var l=c(6814),e=c(7133),t=c(5879),d=c(4221),x=c(7834);const m=(0,d.ZF)("locations"),f=(0,d.P1)(m,o=>o.loading),Z=(0,d.P1)(m,o=>({info:o.info,locations:o.locations}));var g=c(5940),$=c(2296),r=c(5195);function T(o,a){1&o&&(t.TgZ(0,"div"),t._UZ(1,"mat-spinner"),t.qZA())}const U=function(){return["/location-characters"]};function F(o,a){if(1&o){const s=t.EpF();t.TgZ(0,"div",2)(1,"mat-card",3)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"mat-card-actions")(11,"a",4),t.NdJ("click",function(){const p=t.CHM(s).$implicit,h=t.oxw();return t.KtG(h.getLocationCaracters(p))}),t._uU(12,"View location characters"),t.qZA()()()()}if(2&o){const s=a.$implicit;t.xp6(4),t.Oqu(s.name),t.xp6(3),t.hij("Dimension: ",s.dimension,""),t.xp6(2),t.hij("Tipo: ",s.type,""),t.xp6(2),t.Q6J("routerLink",t.DdM(4,U))}}let L=(()=>{var o;class a{constructor(){this.router=(0,t.f3M)(e.F0),this.charactersIds=new t.vpe}getLocationCaracters(n){this.charactersIds.emit(n)}}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ubications-list"]],inputs:{loading$:"loading$",locations:"locations"},outputs:{charactersIds:"charactersIds"},standalone:!0,features:[t.jDz],decls:3,vars:4,consts:[[4,"ngIf"],["class","container mx-auto flex ",4,"ngFor","ngForOf"],[1,"container","mx-auto","flex"],[1,"flex","flex-col","justify-around"],[1,"py-2","px-4","bg-lime-500","rounded-md","text-white",3,"routerLink","click"]],template:function(n,i){1&n&&(t.YNc(0,T,2,0,"div",0),t.ALo(1,"async"),t.YNc(2,F,13,5,"div",1)),2&n&&(t.Q6J("ngIf",t.lcZ(1,2,i.loading$)),t.xp6(2),t.Q6J("ngForOf",i.locations))},dependencies:[l.ez,l.sg,l.O5,l.Ov,g.Cq,g.Ou,$.ot,r.QW,r.a8,r.hq,r.dn,r.dk,r.n5,e.Bz,e.rH]}),a})(),M=(()=>{var o;class a{constructor(){this.store=(0,t.f3M)(d.yh),this.router=(0,t.f3M)(e.F0)}ngOnInit(){this.store.dispatch((0,x.hI)({page:1})),this.locations$=this.store.select(Z),this.loading$=this.store.select(f),this.locations$.subscribe(n=>{this.locations=n.locations})}getLocationCaracters(n){const i=n?.residents,p=[];if(i){for(const h of i){const y=h.split("/");p.push(y[y.length-1])}this.router.navigate(["/locations/characters"],{queryParams:{ids:p.join(",")}})}}}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-locations"]],decls:1,vars:2,consts:[[1,"grid","grid-cols-6","gap-4","px-5","h-screen","mt-4",3,"locations","loading$","charactersIds"]],template:function(n,i){1&n&&(t.TgZ(0,"app-ubications-list",0),t.NdJ("charactersIds",function(h){return i.getLocationCaracters(h)}),t.qZA()),2&n&&t.Q6J("locations",i.locations)("loading$",i.loading$)},dependencies:[L]}),a})();var b=c(5592),I=c(6230),A=c(1858),v=c(6095),C=c(617);const J=function(){return["/locations/list"]},O=[{path:"list",component:M},{path:"characters",component:(()=>{var o;class a{constructor(n){this.activatedRoute=n,this.store=(0,t.f3M)(d.yh),this.loading$=new b.y}ngOnInit(){const n=this.activatedRoute.snapshot.queryParams.ids;n&&this.store.dispatch((0,I.lc)({ids:n})),this.loading$=this.store.select(f),this.characters$=this.store.select(A.h$),this.characters$.subscribe(i=>{this.charactersList=i.characters})}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(e.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-location-characters"]],decls:6,vars:5,consts:[[1,"h-screen","flex","flex-col"],[1,"actions","mt-2","mb-2"],["mat-raised-button","","color","primary","mat-button","",1,"bg-lime-500","rounded-full","p-3",3,"routerLink"],[1,"grid","grid-cols-4","gap-4","px-5",3,"charactersList","loading$","showDetailButton"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"mat-card-actions",1)(2,"button",2)(3,"mat-icon"),t._uU(4,"keyboard_backspace"),t.qZA()()(),t._UZ(5,"app-characters-list",3),t.qZA()),2&n&&(t.xp6(2),t.Q6J("routerLink",t.DdM(4,J)),t.xp6(3),t.Q6J("charactersList",i.charactersList)("loading$",i.loading$)("showDetailButton",!1))},dependencies:[e.rH,v.F,r.hq,C.Hw]}),a})()}];let B=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.Bz.forChild(O),e.Bz]}),a})(),Q=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,B,L,v.F,r.QW,C.Ps]}),a})()}}]);