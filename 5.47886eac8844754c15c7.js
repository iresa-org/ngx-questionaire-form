(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Xgxm:function(e,o,t){"use strict";t.r(o),t.d(o,"BasicUsageComponent",function(){return m}),t.d(o,"BasicUsageModule",function(){return p});var n=t("ofXK"),a=t("PCNd"),i=t("fXoL"),r=t("sNXi"),l=t("xtLb"),u=t("QibW"),c=t("bTqV");function s(e,o){if(1&e&&(i.Rb(0,"mat-radio-button",5),i.yc(1),i.Qb()),2&e){const e=o.$implicit;i.fc("value",e.value),i.zb(1),i.Ac(" ",e.label," ")}}function b(e,o){if(1&e){const e=i.Sb();i.Rb(0,"div"),i.Rb(1,"p"),i.yc(2),i.Qb(),i.Rb(3,"mat-radio-group",3),i.Yb("change",function(t){i.nc(e);const n=o.index;return i.ac().questionChange(t,n)}),i.wc(4,s,2,2,"mat-radio-button",4),i.Qb(),i.Qb()}if(2&e){const e=o.$implicit;i.zb(2),i.Ac("Question: ",e.question,""),i.zb(2),i.fc("ngForOf",e.options)}}function f(e,o){if(1&e){const e=i.Sb();i.Rb(0,"p"),i.Rb(1,"strong"),i.yc(2,"You have completed the survey!"),i.Qb(),i.Rb(3,"button",6),i.Yb("click",function(){return i.nc(e),i.ac().resetForm()}),i.yc(4,"Reset Form"),i.Qb(),i.Qb()}}let m=(()=>{class e{constructor(){this.formConfig=[{question:"What is your favorite color?",options:[{label:"Red",value:"red"},{label:"Yellow",value:"yellow"},{label:"Blue",value:"blue"},{label:"Orange",value:"orange"}]},{question:"What is your favorite pet?",options:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Fish",value:"fish"},{label:"Snake",value:"snake"}]},{question:"What time do you wake up?",options:[{label:"5 AM",value:"5am"},{label:"6 AM",value:"6am"},{label:"7 AM",value:"7am"},{label:"8 AM",value:"8am"}]}]}get completed(){return this.formApi.selectedIndex>=this.formConfig.length}onFormInit(e){this.formApi=e}questionChange(e,o){this.formApi.setValue(e.value,o),o===this.formApi.selectedIndex&&this.formApi.next()}resetForm(){this.formApi.reset()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-basic-usage"]],decls:3,vars:2,consts:[[3,"formConfig","formInit"],[4,"questionaireTemplate"],[4,"ngIf"],[1,"example-radio-group",3,"change"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],[1,"example-radio-button",3,"value"],["mat-button","","color","primary",3,"click"]],template:function(e,o){1&e&&(i.Rb(0,"ngx-questionaire-form",0),i.Yb("formInit",function(e){return o.onFormInit(e)}),i.wc(1,b,5,2,"div",1),i.Qb(),i.wc(2,f,5,0,"p",2)),2&e&&(i.fc("formConfig",o.formConfig),i.zb(2),i.fc("ngIf",o.completed))},directives:[r.a,l.a,n.k,u.b,n.j,u.a,c.b],styles:[".example-radio-button[_ngcontent-%COMP%]{margin:15px 25px}"]}),e})(),p=(()=>{class e{}return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(o){return new(o||e)},imports:[[n.c,a.a]]}),e})()}}]);