import{a as S}from"./chunk-O4ZEGTQC.js";import{Ga as e,H as d,Ha as i,N as s,O as p,Ob as l,Wa as n,Xa as m,bb as h,db as y,eb as g,ja as a,ka as c,ub as x,va as f,xb as v,za as u,zb as E}from"./chunk-G3MFEUCG.js";function N(t,C){if(t&1&&(e(0,"tr")(1,"td"),n(2),i(),e(3,"td"),n(4),i(),e(5,"td"),n(6),i(),e(7,"td"),n(8),i(),e(9,"td"),n(10),i(),e(11,"td"),n(12),i()()),t&2){let o=C.$implicit;a(2),m(o.id),a(2),m(o.firstName),a(2),m(o.lastName),a(2),m(o.email),a(2),m(o.hoursWorked),a(2),m(o.hourlyWage)}}var I=(()=>{class t{constructor(o){this.employeeLstServ=o}ngOnInit(){this.getEmployeeList()}getEmployeeList(){this.employeeList$=this.employeeLstServ.getAllEmpoyees()}static{this.\u0275fac=function(r){return new(r||t)(c(S))}}static{this.\u0275cmp=s({type:t,selectors:[["app-admin"]],standalone:!0,features:[h],decls:20,vars:3,consts:[[1,"container-fluid",2,"position","relative","top","75px"],[1,"row"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"]],template:function(r,F){r&1&&(e(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead")(4,"tr")(5,"th"),n(6,"#"),i(),e(7,"th"),n(8,"First Name"),i(),e(9,"th"),n(10,"Last Name"),i(),e(11,"th"),n(12,"Email"),i(),e(13,"th"),n(14,"Hourly Works"),i(),e(15,"th"),n(16,"Hourly Wages"),i()()(),e(17,"tbody"),f(18,N,13,6,"tr",3),y(19,"async"),i()()()()),r&2&&(a(18),u("ngForOf",g(19,1,F.employeeList$)))},dependencies:[E,x,v,l],changeDetection:0})}}return t})();var L=[{path:"",children:[{path:"",component:I},{path:"",redirectTo:"/login",pathMatch:"full"}]}],A=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=p({type:t})}static{this.\u0275inj=d({imports:[l.forChild(L),l]})}}return t})();var k=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=p({type:t})}static{this.\u0275inj=d({imports:[A]})}}return t})();export{k as AdministrationModule};
