(function(){"use strict";var e={980:function(e,t,r){var i=r(963),l=r(252);const n={class:"box-border w-full px-[30px]"};function s(e,t,r,i,s,o){const a=(0,l.up)("NavBar"),c=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(a),(0,l.Wm)(c)])}const o={class:"mt-5 mb-14 flex justify-between items-center h-[35px]"},a={class:"flex gap-2 text-lg"},c=(0,l.Uk)("Главная"),d=(0,l.Uk)(" Избранное ");function u(e,t){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("nav",o,[(0,l._)("ul",a,[(0,l._)("li",null,[(0,l.Wm)(r,{"active-class":"active-link",to:"/"},{default:(0,l.w5)((()=>[c])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(r,{"active-class":"active-link",to:"/favorite"},{default:(0,l.w5)((()=>[d])),_:1})])])])}var m=r(744);const p={},f=(0,m.Z)(p,[["render",u]]);var h,g,v,y=f,w=r(482);function x(e,t){return Math.round(e-.5+Math.random()*(t-e+1))}(function(e){e[e["TOP_250_BEST_FILMS"]=0]="TOP_250_BEST_FILMS",e[e["TOP_100_POPULAR_FILMS"]=1]="TOP_100_POPULAR_FILMS"})(h||(h={})),function(e){e[e["Топ фильмов"]=0]="Топ фильмов",e[e["Популярные фильмы"]=1]="Популярные фильмы"}(g||(g={}));class _{constructor(){(0,w.Z)(this,"apiKey","72075446-58b7-4b51-a057-afce97d78d33")}removeExtraFields(e){return{nameRu:e.nameRu,nameEn:e.nameEn,posterUrlPreview:e.posterUrlPreview,year:e.year,filmId:e.kinopoiskId||e.filmId,rating:e.ratingKinopoisk||e.rating}}async searchByKeyword(e,t){const r="number"===typeof t?String(t):t;return console.log("запрос","https://kinopoiskapiunofficial.tech/api/v2.2/films?"+new URLSearchParams({keyword:e,page:r||"1"})),fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films?"+new URLSearchParams({keyword:e,page:r||"1"}),{method:"GET",headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.items.map(this.removeExtraFields))).catch((e=>console.log(e)))}async getRandomFilmsFromTop(){const e=13,t=x(0,1),r=h[t],i=x(0,e).toString();return fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?"+new URLSearchParams({type:r,page:i}),{method:"GET",headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>({films:e.films.map(this.removeExtraFields).sort((()=>Math.random()-.5)),title:g[t]}))).catch((e=>console.log(e)))}}(function(e){e["SET_NEW_LAST_UPDATE"]="SET_NEW_LAST_UPDATE",e["ADD_NEW_SLIDES"]="ADD_NEW_SLIDES",e["LOADING_TOGGLE"]="LOADING_TOGGLE"})(v||(v={}));const S={slides:JSON.parse(localStorage.getItem("slides"))?.slides||[],title:JSON.parse(localStorage.getItem("slides"))?.title||"",lastUpdate:localStorage.getItem("lastUpdate")?new Date(+localStorage.getItem("lastUpdate")):void 0,isLoading:!1},b={checkIfMoreDayHasPassed(e){return e.lastUpdate.getTime()+864e5<=(new Date).getTime()}},D={[v.SET_NEW_LAST_UPDATE](e){const t=new Date;e.lastUpdate=t,localStorage.setItem("lastUpdate",t.getTime().toString())},[v.ADD_NEW_SLIDES](e,t){e.slides=t.films,e.title=t.title,localStorage.setItem("slides",JSON.stringify({slides:t.films,title:t.title}))},[v.LOADING_TOGGLE](e,t){e.isLoading=t}},k={[v.ADD_NEW_SLIDES]({commit:e}){e(v.LOADING_TOGGLE,!0),(new _).getRandomFilmsFromTop().then((t=>{console.log("res --\x3e",t),e(v.ADD_NEW_SLIDES,t),e(v.LOADING_TOGGLE,!1)}))}},L={state:S,getters:b,actions:k,mutations:D};var A=(0,l.aZ)({components:{NavBar:y},data:()=>({counter:1}),mounted(){this.$store.state.slides.lastUpdate||(this.$store.commit(v.SET_NEW_LAST_UPDATE),this.$store.dispatch(v.ADD_NEW_SLIDES))}});const E=(0,m.Z)(A,[["render",s]]);var I,O=E,T=r(907);(function(e){e["SEARCH_FILMS"]="SEARCH_FILMS",e["SET_FILMS"]="SET_FILMS",e["LOADED_ON"]="LOADED_ON",e["LOADED_OFF"]="LOADED_OFF"})(I||(I={}));const F={searchArray:void 0,filmNamesArray:["Остров проклятых","Эйфория","Адвокат дьявола","Три секунды","Выживший","Матрица","Линкольн для адвоката","Интерстеллар","Человек-паук: нет пути домой"],isLoading:!1},N={getRandomFilmName(e){return e.filmNamesArray[x(0,e.filmNamesArray.length-1)]}},C={[I.SET_FILMS](e,t){e.searchArray=t},[I.LOADED_ON](e){e.isLoading=!0},[I.LOADED_OFF](e){e.isLoading=!1}},G={[I.SEARCH_FILMS]:({commit:e},t)=>{e(I.LOADED_ON),(new _).searchByKeyword(t).then((t=>{console.log("res --\x3e",t),e(I.LOADED_OFF),e(I.SET_FILMS,t)}))}},P={state:F,mutations:C,actions:G,getters:N},M={modules:{search:P,slides:L}};var j=new T.ZP.Store(M);const U={class:"flex items-center justify-center flex-col xl:flex-row"},Z={class:"my-6"},$={class:"flex items-center justify-between flex-col md:flex-row"},W=(0,l._)("h2",{class:"text-2xl md:text-4xl xl:text-5xl font-normal md:font-light with-line pl-[60px] mb-2 mb:mb-0"}," Ищете что-то конкретное? ",-1),R={key:0,ref:"loader",class:"w-full flex justify-center my-40"},B={key:1,ref:"filmGreed"};function q(e,t,r,i,n,s){const o=(0,l.up)("AppLogo"),a=(0,l.up)("AppSlider"),c=(0,l.up)("AppSearch"),d=(0,l.up)("AppLoader"),u=(0,l.up)("FilmsGrid");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",U,[(0,l.Wm)(o),(0,l.Wm)(a,{films:e.sliderFilms,title:e.title},null,8,["films","title"])]),(0,l._)("section",Z,[(0,l._)("div",$,[W,(0,l.Wm)(c,{"random-film-name":e.randomFilmName,onSearch:e.search},null,8,["random-film-name","onSearch"])])]),e.filmsGreedLoading?((0,l.wg)(),(0,l.iD)("div",R,[(0,l.Wm)(d)],512)):e.filmsArray?((0,l.wg)(),(0,l.iD)("div",B,[(0,l.Wm)(u,{"films-array":e.filmsArray,keyword:e.keyword,class:"mb-6"},null,8,["films-array","keyword"])],512)):(0,l.kq)("",!0)],64)}const K={class:"block max-w-[400px] flex direction flex-col items-center mb-6 xl:mb-0",href:"/"},H=(0,l._)("span",{class:"text-7xl md:text-9xl font-bold text-green-700 font-[Bitter]"},"Talkiee",-1),z=(0,l._)("div",{class:"text-md md:text-xl"},"Все фильмы и сериалы в одном месте",-1),Y=[H,z];function J(e,t,r,i,n,s){return(0,l.wg)(),(0,l.iD)("a",K,Y)}var V=(0,l.aZ)({});const X=(0,m.Z)(V,[["render",J]]);var Q=X,ee=r(577);const te={class:"px-3 mx-20"},re={class:"mb-4 md:mb-2 text-2xl text-center md:text-left"},ie={class:"xl:-mr-[200px] mr-0 flex justify-center relative h-[480px] overflow-hidden w-[300px] md:w-[680px]"},le={class:"h-10 flex items-center"},ne=["disabled"],se=["disabled"];function oe(e,t,r,i,n,s){const o=(0,l.up)("SliderCard");return(0,l.wg)(),(0,l.iD)("div",te,[(0,l._)("p",re,(0,ee.zw)(e.title),1),(0,l._)("div",ie,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.films,((t,r)=>((0,l.wg)(),(0,l.j4)(o,{ref_for:!0,ref:"items",key:t.filmId,"current-slide":e.currentSlide,index:r,"element-order":r-e.currentSlide,"prev-slide":r<e.currentSlide,film:t},null,8,["current-slide","index","element-order","prev-slide","film"])))),128))]),(0,l._)("div",le,[(0,l._)("button",{disabled:0===e.currentSlide,class:"disabled:cursor-not-allowed h-full arrow arrow-prev mr-3",onClick:t[0]||(t[0]=(...t)=>e.prevSlide&&e.prevSlide(...t))},null,8,ne),(0,l._)("button",{disabled:e.currentSlide===e.films.length-3,class:"disabled:cursor-not-allowed h-full arrow arrow-next",onClick:t[1]||(t[1]=(...t)=>e.nextSlide&&e.nextSlide(...t))},null,8,se)])])}function ae(e,t,r,i,n,s){const o=(0,l.up)("FilmComponent");return(0,l.wg)(),(0,l.iD)("div",{class:(0,ee.C_)(["hover:opacity-100 transition-all duration-[.3s] opacity-80 rounded-lg bg-gray-300 h-full absolute left-0",{["opacity-100"]:e.mainSlide}]),style:(0,ee.j5)({width:e.width+"px",zIndex:3-e.elementOrder,left:e.isPrevSlide?"-"+1.1*e.width+"px":Math.round(.5*e.width*(e.index-e.currentSlide))+"px",transform:e.isPrevSlide?"scale(1.1)":`scale(${1-.1*(e.index-e.currentSlide)})`,opacity:e.index-e.currentSlide-2>0||e.isPrevSlide?"0":null})},[(0,l.Wm)(o,{"no-title":"","slide-mode":"",film:e.film},null,8,["film"])],6)}const ce=["src","alt"],de=(0,l._)("div",{class:"transition-opacity duration-[300ms] h-full w-full absolute top-0 left-0 bg-black group-hover:opacity-60 opacity-0"},null,-1),ue=(0,l._)("button",null,"Смотреть",-1),me=(0,l._)("button",null,"Добавить в избранное",-1),pe=[ue,me],fe={key:0,class:"text-lg truncate"},he={key:1,class:"absolute top-[10px] right-[10px] bg-white rounded-lg p-2"};function ge(e,t,r,i,n,s){return(0,l.wg)(),(0,l.iD)("div",{class:(0,ee.C_)(["group cursor-pointer h-full relative",{"w-full":e.slideMode,"w-[220px] ":!e.slideMode}]),onClick:t[0]||(t[0]=(...t)=>e.goToFilm&&e.goToFilm(...t))},[(0,l._)("div",{class:(0,ee.C_)(["relative rounded-lg w-full bg-green-700 overflow-hidden",[e.slideMode?"h-full":"h-[90%] mb-1"]])},[(0,l._)("img",{src:e.film.posterUrlPreview,alt:e.filmName,class:"transition-transform min-h-[330px] duration-[300ms] ease-in-out h-full w-full object-cover group-hover:scale-105 with-before"},null,8,ce),de,(0,l._)("div",{class:(0,ee.C_)(["transition-transform duration-[300ms] group-hover:translate-y-0 absolute bottom-0 w-full p-2 flex items-center flex-col justify-between rounded-lg bg-black text-white translate-y-full",[e.slideMode?"h-1/6":"h-1/4"]])},pe,2)],2),e.noTitle?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("p",fe,(0,ee.zw)(e.filmName),1)),e.film.rating?((0,l.wg)(),(0,l.iD)("div",he," ⭐️ "+(0,ee.zw)(e.film.rating),1)):(0,l.kq)("",!0)],2)}var ve=(0,l.aZ)({props:{noTitle:{type:Boolean,default:!1},slideMode:{type:Boolean,default:!1},film:{type:Object}},computed:{filmName(){return this.film.nameRu||this.film.nameEn}},methods:{goToFilm(){this.$router.push({path:`/movie/${this.film.filmId}`,query:{filmName:this.filmName}})}}});const ye=(0,m.Z)(ve,[["render",ge]]);var we=ye,xe=(0,l.aZ)({components:{FilmComponent:we},props:{elementOrder:{type:Number||String},mainSlider:{type:Boolean,require:!0},prevSlide:{type:Boolean},currentSlide:{type:Number},index:{type:Number},film:{type:Object}},data(){return{width:300}},computed:{isPrevSlide(){return this.index<this.currentSlide},mainSlide(){return this.index===this.currentSlide}}});const _e=(0,m.Z)(xe,[["render",ae]]);var Se=_e,be=(0,l.aZ)({components:{SliderCard:Se},props:{films:{type:Array,default:()=>[],require:!0},title:{type:String,default:"",require:!0}},data(){return{currentSlide:0}},mounted(){console.log("colors:",this.$refs.items)},methods:{nextSlide(){this.currentSlide<this.films.length-3&&this.currentSlide++},prevSlide(){this.currentSlide>0&&this.currentSlide--}}});const De=(0,m.Z)(be,[["render",oe],["__scopeId","data-v-a411f7ce"]]);var ke=De;const Le={key:0,class:"my-20 text-2xl flex justify-center items-center"},Ae=(0,l._)("span",{class:"text-8xl"},"😵",-1),Ee=(0,l.Uk)(" По запросу "),Ie={class:"text-green-700 font-bold"},Oe=(0,l.Uk)(" ничего не найдено "),Te={key:1},Fe={class:"ml-6 mb-6 text-xl"},Ne=(0,l.Uk)(" Результат поиска по запросу: "),Ce={class:"text-green-700 font-bold"},Ge={class:"flex flex-wrap grid-rows-[362px] justify-evenly gap-x-3 gap-y-6 lg:gap-y-12 mb-5"};function Pe(e,t,r,i,n,s){const o=(0,l.up)("FilmComponent");return r.filmsArray.length?((0,l.wg)(),(0,l.iD)("div",Te,[(0,l._)("p",Fe,[Ne,(0,l._)("span",Ce,(0,ee.zw)(r.keyword),1)]),(0,l._)("div",Ge,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filmsArray,(e=>((0,l.wg)(),(0,l.j4)(o,{key:e,film:e},null,8,["film"])))),128))])])):((0,l.wg)(),(0,l.iD)("div",Le,[Ae,(0,l._)("span",null,[Ee,(0,l._)("span",Ie,(0,ee.zw)(r.keyword),1),Oe])]))}var Me={components:{FilmComponent:we},props:{filmsArray:{type:Array,default:()=>[]},keyword:{type:String,default:""}}};const je=(0,m.Z)(Me,[["render",Pe]]);var Ue=je;const Ze={class:"flex items-center"},$e=["placeholder"];function We(e,t,r,n,s,o){const a=(0,l.up)("SvgIcons");return(0,l.wg)(),(0,l.iD)("div",Ze,[(0,l.Wm)(i.uT,{name:"search-input"},{default:(0,l.w5)((()=>[(0,l._)("form",{onSubmit:t[1]||(t[1]=(0,i.iM)(((...t)=>e.search&&e.search(...t)),["prevent"]))},[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchInput=t),ref:"searchInput",class:"border-2 h-auto mr-2 border-green-700 px-3 py-2 rounded-lg text-black placeholder:text-black w-[300px] placeholder:text-gray-400",placeholder:e.randomFilmName,type:"text"},null,8,$e),[[i.nr,e.searchInput]])],32)])),_:1}),(0,l.Wm)(a,{class:"w-[35px] h-[35px] mr-2 cursor-pointer",svg:"search",onClick:e.search},null,8,["onClick"])])}const Re={key:0,fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"35px",height:"35px"},Be=(0,l._)("path",{d:"M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"},null,-1),qe=[Be],Ke={key:1},He=(0,l._)("symbol",{id:"stars-full-star",viewBox:"0 0 102 18"},[(0,l._)("path",{d:"M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"})],-1),ze=[He];function Ye(e,t,r,i,n,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,["search"===e.svg?((0,l.wg)(),(0,l.iD)("svg",Re,qe)):(0,l.kq)("",!0),"star"===e.svg?((0,l.wg)(),(0,l.iD)("svg",Ke,ze)):(0,l.kq)("",!0)],64)}var Je=(0,l.aZ)({props:{svg:{default:null,require:!0}}});const Ve=(0,m.Z)(Je,[["render",Ye]]);var Xe=Ve,Qe=(0,l.aZ)({props:{searchArray:{type:Array,default:()=>[]},randomFilmName:{type:String,default:""}},components:{SvgIcons:Xe},data(){return{searchInput:""}},computed:{filmsGreedRef(){return this.$store.search.filmsGreedRef}},methods:{search(){this.$emit("search",this.searchInput)}}});const et=(0,m.Z)(Qe,[["render",We]]);var tt=et;const rt=e=>((0,l.dD)("data-v-f7d5e3a6"),e=e(),(0,l.Cn)(),e),it={class:"container"},lt=rt((()=>(0,l._)("span",{class:"circle"},null,-1))),nt=rt((()=>(0,l._)("span",{class:"circle"},null,-1))),st=rt((()=>(0,l._)("span",{class:"circle"},null,-1))),ot=rt((()=>(0,l._)("span",{class:"circle"},null,-1))),at=[lt,nt,st,ot];function ct(e,t){return(0,l.wg)(),(0,l.iD)("div",it,at)}const dt={},ut=(0,m.Z)(dt,[["render",ct],["__scopeId","data-v-f7d5e3a6"]]);var mt=ut,pt=(0,l.aZ)({components:{AppLoader:mt,AppSearch:tt,FilmsGrid:Ue,AppSlider:ke,AppLogo:Q},data(){return{keyword:""}},methods:{search(e){this.$store.dispatch(I.SEARCH_FILMS,e),this.keyword=e}},watch:{filmsGreedLoading(e){e||this.$nextTick((()=>{console.log("this.$refs.filmGreed --\x3e",this.$refs.filmGreed),this.$refs.filmGreed.scrollIntoView({block:"start",behavior:"smooth"})}))}},computed:{filmsArray(){return this.$store.state.search.searchArray},randomFilmName(){return this.$store.getters.getRandomFilmName},filmsGreedLoading(){return this.$store.state.search.isLoading},sliderFilms(){return this.$store.state.slides.slides},title(){return this.$store.state.slides.title}}});const ft=(0,m.Z)(pt,[["render",q]]);var ht=ft;const gt={class:"absolute left-0 top-0 w-full h-full bg-reg-200 flex flex-col"},vt=["data-kinopoisk"];function yt(e,t,r,i,n,s){return(0,l.wg)(),(0,l.iD)("div",gt,[(0,l._)("div",{ref:"wrap",style:{width:"100%","flex-grow":"1"},id:"yohoho","data-kinopoisk":e.filmId},null,8,vt)])}var wt=(0,l.aZ)({computed:{filmId(){return this.$route.params.id},filmName(){return this.$route.query.filmName}},mounted(){const e=document.createElement("script");e.setAttribute("src","//yohoho.cc/yo.js"),e.async=!0,document.head.appendChild(e),this.$nextTick((()=>{this.$refs.wrap.style.position="absolute",this.$refs.wrap.style.left="0",this.$refs.wrap.style.top="0"}))}});const xt=(0,m.Z)(wt,[["render",yt]]);var _t=xt,St=r(201);const bt=[{path:"/",component:ht},{path:"/movie/:id",component:_t}],Dt=(0,St.p7)({history:(0,St.r5)(),routes:bt});(0,i.ri)(O).use(j).use(Dt).mount("#app")}},t={};function r(i){var l=t[i];if(void 0!==l)return l.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,i,l,n){if(!i){var s=1/0;for(d=0;d<e.length;d++){i=e[d][0],l=e[d][1],n=e[d][2];for(var o=!0,a=0;a<i.length;a++)(!1&n||s>=n)&&Object.keys(r.O).every((function(e){return r.O[e](i[a])}))?i.splice(a--,1):(o=!1,n<s&&(s=n));if(o){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,l,n]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,n,s=i[0],o=i[1],a=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(a)var d=a(r)}for(t&&t(i);c<s.length;c++)n=s[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},i=self["webpackChunktalkiee"]=self["webpackChunktalkiee"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(980)}));i=r.O(i)})();
//# sourceMappingURL=app.e28d0465.js.map