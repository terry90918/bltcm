var MyLibrary=function(r,e){"use strict";const u="",_=(t,n)=>{const o=t.__vccOpts||t;for(const[l,c]of n)o[l]=c;return o},a=_({__name:"HelloWorld",setup(t){const n=e.ref(0),o=()=>{n.value++};return(l,c)=>(e.openBlock(),e.createElementBlock("button",{type:"button",onClick:o},"count is "+e.toDisplayString(n.value),1))}},[["__scopeId","data-v-8afefce5"]]),g="",i=_({__name:"BLDropdown",props:{list:{type:Array,default:()=>[]},selectedWidth:{type:Number,default:10}},setup(t){return(n,o)=>(e.openBlock(),e.createElementBlock("select",{style:e.normalizeStyle(`width: ${t.selectedWidth}%;`)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.list,l=>(e.openBlock(),e.createElementBlock("option",{key:l},e.toDisplayString(l),1))),128))],4))}},[["__scopeId","data-v-2f4b7c98"]]),h="",d={name:"Select",props:{"t-drop":Boolean},data(){return{list:["apple","cat","moon"],something:""}},computed:{newList(){let t=[];return this.something?t=this.list.filters(n=>n.indexOf(this.something)!==-1):t=this.list,t}}},p=["value"];function m(t,n,o,l,c,y){return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=s=>c.something=s)},null,512),[[e.vModelText,c.something]]),e.createElementVNode("select",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(y.newList,s=>(e.openBlock(),e.createElementBlock("option",{value:s},e.toDisplayString(s),9,p))),256))])],64)}const f=_(d,[["render",m],["__scopeId","data-v-999a2393"]]);return r.BlDropdown=i,r.HelloWord=a,r.TDropdown=f,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r}({},Vue);
