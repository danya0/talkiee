(function(){"use strict";var e={823:function(e,t,r){var i=r(963),s=r(252);function l(e,t,r,i,l,a){const o=(0,s.up)("NavBar"),n=(0,s.up)("AppContainer"),c=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s.Wm)(o)])),_:1}),(0,s.Wm)(c)],64)}const a={class:"mt-5 mb-14 flex justify-between items-center h-[35px]"},o={class:"flex gap-2 text-lg"},n=(0,s.Uk)("Главная"),c=(0,s.Uk)(" Избранное ");function d(e,t){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",a,[(0,s._)("ul",o,[(0,s._)("li",null,[(0,s.Wm)(r,{"active-class":"active-link",to:"/"},{default:(0,s.w5)((()=>[n])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(r,{"active-class":"active-link",to:"/favorite"},{default:(0,s.w5)((()=>[c])),_:1})])])])}var u=r(744);const m={},p=(0,u.Z)(m,[["render",d]]);var f,h,g=p,v=r(482);function w(e,t){return Math.round(e-.5+Math.random()*(t-e+1))}function y(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}(function(e){e[e["TOP_250_BEST_FILMS"]=0]="TOP_250_BEST_FILMS",e[e["TOP_100_POPULAR_FILMS"]=1]="TOP_100_POPULAR_FILMS"})(f||(f={})),function(e){e[e["Топ фильмов"]=0]="Топ фильмов",e[e["Популярные фильмы"]=1]="Популярные фильмы"}(h||(h={}));class _{constructor(){(0,v.Z)(this,"apiKey","72075446-58b7-4b51-a057-afce97d78d33")}removeExtraFields(e){return{nameRu:e.nameRu,nameEn:e.nameEn,posterUrlPreview:e.posterUrlPreview,year:e.year,filmId:e.kinopoiskId||e.filmId,rating:e.ratingKinopoisk||e.rating,favorite:!1}}async searchByKeyword(e,t){const r="number"===typeof t?String(t):t;return console.log("запрос","https://kinopoiskapiunofficial.tech/api/v2.2/films?"+new URLSearchParams({keyword:e,page:r||"1"})),fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films?"+new URLSearchParams({keyword:e,page:r||"1"}),{method:"GET",headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>({totalPages:e.totalPages,films:e.items.map(this.removeExtraFields)}))).catch((e=>console.log(e)))}async getRandomFilmsFromTop(){const e=13,t=w(0,1),r=f[t],i=w(0,e).toString();return fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?"+new URLSearchParams({type:r,page:i}),{method:"GET",headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>({films:e.films.map(this.removeExtraFields).sort((()=>Math.random()-.5)),title:h[t]}))).catch((e=>console.log(e)))}async getTrailer(e){return fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${e}/videos`,{method:"GET",headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.items))}}class x{static getContext(){return this.context||(this.context=new _),this.context}}(0,v.Z)(x,"context",void 0);const S=e=>{if(!e||!e.length)return[];const t=[...e],r=JSON.parse(localStorage.getItem("favorite"))||[];return r.length?t.map((e=>{for(let t=0;t<r.length;t++)e.filmId===r[t].filmId&&(e.favorite=!0);return e})):t};var A;(function(e){e["SET_NEW_LAST_UPDATE"]="SET_NEW_LAST_UPDATE",e["ADD_NEW_SLIDES"]="ADD_NEW_SLIDES",e["LOADING_TOGGLE"]="LOADING_TOGGLE"})(A||(A={}));const T={slides:S(JSON.parse(localStorage.getItem("slides"))?.slides)||[],title:JSON.parse(localStorage.getItem("slides"))?.title||"",lastUpdate:localStorage.getItem("lastUpdate")?new Date(+localStorage.getItem("lastUpdate")):void 0,isLoading:!1},E={checkIfMoreDayHasPassed(e){return e.lastUpdate.getTime()+864e5<=(new Date).getTime()}},k={[A.SET_NEW_LAST_UPDATE](e){const t=new Date;e.lastUpdate=t,localStorage.setItem("lastUpdate",t.getTime().toString())},[A.ADD_NEW_SLIDES](e,t){e.slides=t.films,e.title=t.title,localStorage.setItem("slides",JSON.stringify({slides:t.films,title:t.title}))},[A.LOADING_TOGGLE](e,t){e.isLoading=t}},L={[A.ADD_NEW_SLIDES]({commit:e}){e(A.LOADING_TOGGLE,!0),(new _).getRandomFilmsFromTop().then((t=>{console.log("res --\x3e",t),e(A.ADD_NEW_SLIDES,t),e(A.LOADING_TOGGLE,!1)}))}},b={state:T,getters:E,actions:L,mutations:k,namespaced:!0},I={class:"container mx-auto px-6"};function O(e,t){return(0,s.wg)(),(0,s.iD)("div",I,[(0,s.WI)(e.$slots,"default")])}const D={},P=(0,u.Z)(D,[["render",O]]);var N=P,F=(0,s.aZ)({components:{AppContainer:N,NavBar:g},data:()=>({counter:1}),mounted(){this.$store.state.slides.lastUpdate&&!this.$store.getters["slides/checkIfMoreDayHasPassed"]||(this.$store.commit(`slides/${A.SET_NEW_LAST_UPDATE}`),this.$store.dispatch(`slides/${A.ADD_NEW_SLIDES}`))}});const G=(0,u.Z)(F,[["render",l]]);var C,M=G,R=r(907);(function(e){e["SEARCH_FILMS"]="SEARCH_FILMS",e["LOAD_NEXT_PAGE"]="LOAD_NEXT_PAGE",e["SEARCH_TRAILER"]="SEARCH_TRAILER",e["SET_FILMS"]="SET_FILMS",e["PUSH_FILMS"]="PUSH_FILMS",e["SET_TOTAL_PAGES"]="SET_TOTAL_PAGES",e["LOADED_ON"]="LOADED_ON",e["LOADED_OFF"]="LOADED_OFF",e["LOADING_NEXT_PAGE_TOGGLE"]="LOADING_NEXT_PAGE_TOGGLE"})(C||(C={}));const $={searchKeyword:"",kinopoiskApiInstance:new _,searchArray:void 0,totalPages:void 0,filmNamesArray:["Остров проклятых","Эйфория","Адвокат дьявола","Три секунды","Выживший","Матрица","Линкольн для адвоката","Интерстеллар","Человек-паук: нет пути домой"],isLoadingNextPage:!1,isLoading:!1,trailerFilmMap:{}},j={getRandomFilmName(e){return e.filmNamesArray[w(0,e.filmNamesArray.length-1)]},getTrailerById(e){return t=>e.trailerFilmMap[t]}},Z={[C.SET_FILMS](e,t){e.searchArray=S(t.items),e.searchKeyword=t.keyword},[C.LOADED_ON](e){e.isLoading=!0},[C.LOADED_OFF](e){e.isLoading=!1},[C.SET_TOTAL_PAGES](e,t){e.totalPages=t},[C.LOADING_NEXT_PAGE_TOGGLE](e,t){e.isLoadingNextPage=t},[C.PUSH_FILMS](e,t){e.searchArray=[...e.searchArray,...S(t.items)]},setTrailer(e,t){e.trailerFilmMap[t.filmId]=t.trailers}},U={[C.SEARCH_FILMS]:({commit:e,state:t},r)=>{e(C.LOADED_ON),x.getContext().searchByKeyword(r).then((t=>{e(C.LOADED_OFF),e(C.SET_FILMS,{items:t.films,keyword:r}),e(C.SET_TOTAL_PAGES,t.totalPages)}))},[C.LOAD_NEXT_PAGE]:({commit:e},t)=>{e(C.LOADING_NEXT_PAGE_TOGGLE,!0),x.getContext().searchByKeyword(t.keyword,t.page).then((t=>{console.log("res --\x3e",t),e(C.LOADING_NEXT_PAGE_TOGGLE,!1),e(C.PUSH_FILMS,{items:t.films})}))},[C.SEARCH_TRAILER]:async({commit:e},t)=>{const r=await x.getContext().getTrailer(t.filmId);e("setTrailer",{filmId:t.filmId,trailers:r})}},W={state:$,mutations:Z,actions:U,getters:j};var B;(function(e){e["FAVORITE_TOGGLE"]="FAVORITE_TOGGLE"})(B||(B={}));const H={favorite:JSON.parse(localStorage.getItem("favorite"))||[]},q={[B.FAVORITE_TOGGLE](e,t){if(t.favorite)t.film.favorite=!0,e.favorite.push(t.film);else{t.film.favorite=!1;const r=e.favorite.indexOf(t.film);e.favorite.splice(r,1)}localStorage.setItem("favorite",JSON.stringify(e.favorite))}},K={state:H,mutations:q,namespaced:!0},X={modules:{search:W,slides:b,favorite:K}};var z=new R.ZP.Store(X),V=r(577);const Y={class:"flex items-center justify-center flex-col xl:flex-row"},J={class:"my-6"},Q={class:"flex items-center justify-between flex-col md:flex-row"},ee=(0,s._)("h2",{class:"text-2xl md:text-4xl xl:text-5xl font-normal md:font-light with-line pl-[60px] mb-2 mb:mb-0"}," Ищете что-то конкретное? ",-1),te={ref:"gridLoaderWrap"},re={key:0,class:"w-full h-[420px] flex items-center justify-center"},ie={key:1,class:"mb-5 flex flex-col"},se=(0,s._)("span",{class:"text-8xl"},"😵",-1),le=(0,s.Uk)(" По запросу "),ae={class:"text-green-700 font-bold"},oe=(0,s.Uk)(" ничего не найдено "),ne=(0,s.Uk)(" Загрузить ещё ");function ce(e,t,r,i,l,a){const o=(0,s.up)("AppLogo"),n=(0,s.up)("AppSlider"),c=(0,s.up)("AppSearch"),d=(0,s.up)("AppLoader"),u=(0,s.up)("FilmsGrid"),m=(0,s.up)("AppButton"),p=(0,s.up)("AppContainer");return(0,s.wg)(),(0,s.j4)(p,null,{default:(0,s.w5)((()=>[(0,s._)("div",Y,[(0,s.Wm)(o),(0,s.Wm)(n,{films:e.sliderFilms,title:e.title},null,8,["films","title"])]),(0,s._)("section",J,[(0,s._)("div",Q,[ee,(0,s.Wm)(c,{"random-film-name":e.randomFilmName,onSearch:e.search},null,8,["random-film-name","onSearch"])])]),(0,s._)("div",te,[e.filmsGreedLoading?((0,s.wg)(),(0,s.iD)("div",re,[(0,s.Wm)(d)])):e.filmsArray?((0,s.wg)(),(0,s.iD)("div",ie,[(0,s.Wm)(u,{"films-array":e.filmsArray,keyword:e.keyword,class:"mb-6"},{"not-find-text":(0,s.w5)((()=>[se,(0,s._)("span",null,[le,(0,s._)("span",ae,(0,V.zw)(e.keyword),1),oe])])),_:1},8,["films-array","keyword"]),e.showNextPageButton?((0,s.wg)(),(0,s.j4)(m,{key:0,loaded:e.loadNextPage,disabled:e.loadNextPage,onClick:e.goToNextPage,class:"mx-auto"},{default:(0,s.w5)((()=>[ne])),_:1},8,["loaded","disabled","onClick"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)],512)])),_:1})}const de={class:"block max-w-[400px] flex direction flex-col items-center mb-6 xl:mb-0",href:"/"},ue=(0,s._)("span",{class:"text-7xl md:text-9xl font-bold text-green-700 font-[Bitter]"},"Talkiee",-1),me=(0,s._)("div",{class:"text-md md:text-xl"},"Все фильмы и сериалы в одном месте",-1),pe=[ue,me];function fe(e,t,r,i,l,a){return(0,s.wg)(),(0,s.iD)("a",de,pe)}var he=(0,s.aZ)({});const ge=(0,u.Z)(he,[["render",fe]]);var ve=ge;const we={class:"px-3 mx-20"},ye={class:"mb-4 md:mb-2 text-2xl text-center md:text-left"},_e={class:"xl:-mr-[200px] mr-0 flex justify-center relative h-[480px] overflow-hidden w-[300px] md:w-[680px]"},xe={class:"h-10 flex items-center"},Se=["disabled"],Ae=["disabled"];function Te(e,t,r,i,l,a){const o=(0,s.up)("SliderCard");return(0,s.wg)(),(0,s.iD)("div",we,[(0,s._)("p",ye,(0,V.zw)(e.title),1),(0,s._)("div",_e,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.films,((t,r)=>((0,s.wg)(),(0,s.j4)(o,{ref_for:!0,ref:"items",key:t.filmId,"current-slide":e.currentSlide,index:r,"element-order":r-e.currentSlide,"prev-slide":r<e.currentSlide,film:t},null,8,["current-slide","index","element-order","prev-slide","film"])))),128))]),(0,s._)("div",xe,[(0,s._)("button",{disabled:0===e.currentSlide,class:"disabled:cursor-not-allowed h-full arrow arrow-prev mr-3",onClick:t[0]||(t[0]=(...t)=>e.prevSlide&&e.prevSlide(...t))},null,8,Se),(0,s._)("button",{disabled:e.currentSlide===e.films.length-3,class:"disabled:cursor-not-allowed h-full arrow arrow-next",onClick:t[1]||(t[1]=(...t)=>e.nextSlide&&e.nextSlide(...t))},null,8,Ae)])])}function Ee(e,t,r,i,l,a){const o=(0,s.up)("FilmComponent");return(0,s.wg)(),(0,s.iD)("div",{class:(0,V.C_)(["hover:opacity-100 transition-all duration-[.3s] opacity-80 rounded-lg bg-gray-300 h-full absolute left-0",{["opacity-100"]:e.mainSlide}]),style:(0,V.j5)({width:e.width+"px",zIndex:3-e.elementOrder,left:e.isPrevSlide?"-"+1.1*e.width+"px":Math.round(.5*e.width*(e.index-e.currentSlide))+"px",transform:e.isPrevSlide?"scale(1.1)":`scale(${1-.1*(e.index-e.currentSlide)})`,opacity:e.index-e.currentSlide-2>0||e.isPrevSlide?"0":null})},[(0,s.Wm)(o,{"no-title":"","slide-mode":"",film:e.film},null,8,["film"])],6)}const ke={key:0,class:"peer hidden",type:"radio",name:"filmCard"},Le=["src","alt"],be=["href"],Ie={key:1,class:"text-center py-1"},Oe={key:0,class:"text-lg truncate"},De={key:1,class:"absolute top-[10px] right-[10px] bg-white rounded-lg p-2"};function Pe(e,t,r,l,a,o){return(0,s.wg)(),(0,s.iD)("label",{class:(0,V.C_)(["group cursor-pointer h-full relative",{"w-full":e.slideMode,"w-[220px] ":!e.slideMode}]),onMouseenter:t[5]||(t[5]=t=>e.mouseHere=!0),onMouseleave:t[6]||(t[6]=(...t)=>e.mouseLeave&&e.mouseLeave(...t)),onClick:t[7]||(t[7]=(...t)=>e.showFilmOrMenu&&e.showFilmOrMenu(...t))},[(0,s._)("div",{class:(0,V.C_)(["relative rounded-lg w-full bg-green-700 overflow-hidden",[e.slideMode?"h-full":"h-[90%] mb-1"]])},[e.isMobile?((0,s.wg)(),(0,s.iD)("input",ke)):(0,s.kq)("",!0),(0,s._)("img",{src:e.film.posterUrlPreview,alt:e.filmName,class:(0,V.C_)(["transition-transform min-h-[330px] duration-[300ms] ease-in-out h-full w-full object-cover with-before peer-checked:scale-105",{"group-hover:scale-105":!e.isMobile}])},null,10,Le),(0,s._)("div",{class:(0,V.C_)(["transition-opacity duration-[300ms] h-full w-full absolute top-0 left-0 bg-black opacity-0 peer-checked:opacity-60",{"group-hover:opacity-60":!e.isMobile}])},null,2),(0,s._)("div",{onClick:t[3]||(t[3]=(0,i.iM)((()=>{}),["stop"])),class:(0,V.C_)(["transition-transform duration-[300ms] h-auto gap-y-2 absolute bottom-0 w-full px-2 py-3 flex items-center flex-col justify-between rounded-lg bg-black text-white translate-y-full peer-checked:translate-y-0",{"group-hover:translate-y-0":!e.isMobile}])},[e.isMobile?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:t[0]||(t[0]=(...t)=>e.goToFilm&&e.goToFilm(...t))},"Смотреть онлайн")):(0,s.kq)("",!0),(0,s._)("button",{onClick:t[1]||(t[1]=(...t)=>e.toggleFavorite&&e.toggleFavorite(...t))},(0,V.zw)(e.favorite?"Удалить из избранного":"Добавить в избранное"),1),(0,s._)("button",{onClick:t[2]||(t[2]=(...t)=>e.getTrailer&&e.getTrailer(...t))},"Список трейлеров")],2),(0,s.Wm)(i.uT,{"enter-from-class":"translate-y-full","enter-to-class":"translate-y-0","leave-to-class":"translate-y-full"},{default:(0,s.w5)((()=>[e.showTrailer&&e.mouseHere?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"absolute max-h-full overflow-y-auto bottom-0 left-0 w-full px-2 py-3 bg-green-700 text-white flex flex-col items-center text-center gap-y-2 transition-transform duration-300",onClick:t[4]||(t[4]=(0,i.iM)((()=>{}),["stop"]))},[e.trailers.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(e.trailers,(e=>((0,s.wg)(),(0,s.iD)("a",{target:"_blank",key:e.url,href:e.url},(0,V.zw)(e.name),9,be)))),128)):((0,s.wg)(),(0,s.iD)("p",Ie," По данному запросу не нашлось трейлеров :( "))])):(0,s.kq)("",!0)])),_:1})],2),e.noTitle?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",Oe,(0,V.zw)(e.filmName),1)),e.film.rating?((0,s.wg)(),(0,s.iD)("div",De," ⭐️ "+(0,V.zw)(e.film.rating),1)):(0,s.kq)("",!0)],34)}var Ne=(0,s.aZ)({props:{noTitle:{type:Boolean,default:!1},slideMode:{type:Boolean,default:!1},film:{type:Object,required:!0}},data(e){return{showTrailer:!1,favorite:e.film.favorite,mouseHere:!1}},computed:{isMobile:y,filmName(){return this.film.nameRu||this.film.nameEn},trailers(){return this.$store.getters["getTrailerById"](this.film.filmId)}},methods:{showFilmOrMenu(){y()||this.goToFilm()},goToFilm(){this.$router.push({path:`/movie/${this.film.filmId}`,query:{filmName:this.filmName}})},...(0,R.OI)("favorite",[B.FAVORITE_TOGGLE]),toggleFavorite(){const e={film:this.film,favorite:!this.favorite};this[B.FAVORITE_TOGGLE](e),this.favorite=!this.favorite},mouseLeave(){this.mouseHere=!1,this.showTrailer=!1},async getTrailer(){this.trailers||await this.$store.dispatch(C.SEARCH_TRAILER,{filmId:this.film.filmId}),this.showTrailer=!0}}});const Fe=(0,u.Z)(Ne,[["render",Pe]]);var Ge=Fe,Ce=(0,s.aZ)({components:{FilmComponent:Ge},props:{elementOrder:{type:Number||String},mainSlider:{type:Boolean,require:!0},prevSlide:{type:Boolean},currentSlide:{type:Number},index:{type:Number},film:{type:Object}},data(){return{width:300}},computed:{isPrevSlide(){return this.index<this.currentSlide},mainSlide(){return this.index===this.currentSlide}}});const Me=(0,u.Z)(Ce,[["render",Ee]]);var Re=Me,$e=(0,s.aZ)({components:{SliderCard:Re},props:{films:{type:Array,default:()=>[],require:!0},title:{type:String,default:"",require:!0}},data(){return{currentSlide:0,canToggle:!0}},methods:{nextSlide(){this.currentSlide<this.films.length-3&&this.canToggle&&(this.cantToggle(),this.currentSlide++)},prevSlide(){this.currentSlide>0&&this.canToggle&&(this.cantToggle(),this.currentSlide--)},cantToggle(){this.canToggle=!1,setTimeout((()=>{this.canToggle=!0}),500)}}});const je=(0,u.Z)($e,[["render",Te],["__scopeId","data-v-73665c66"]]);var Ze=je;const Ue={key:0,class:"my-20 text-2xl flex justify-center items-center"},We={key:1},Be={key:0,class:"ml-6 mb-6 text-xl"},He=(0,s.Uk)(" Результат поиска по запросу: "),qe={class:"text-green-700 font-bold"},Ke={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-[362px] place-items-center gap-x-3 gap-y-6 lg:gap-y-12 mb-5"};function Xe(e,t,r,i,l,a){const o=(0,s.up)("FilmComponent");return r.filmsArray.length?((0,s.wg)(),(0,s.iD)("div",We,[r.justGrid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",Be,[He,(0,s._)("span",qe,(0,V.zw)(r.keyword),1)])),(0,s._)("div",Ke,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.filmsArray,(e=>((0,s.wg)(),(0,s.j4)(o,{key:e,film:e},null,8,["film"])))),128))])])):((0,s.wg)(),(0,s.iD)("div",Ue,[(0,s.WI)(e.$slots,"not-find-text")]))}var ze={components:{FilmComponent:Ge},props:{filmsArray:{type:Array,default:()=>[]},keyword:{type:String,default:""},justGrid:{type:Boolean,default:!1}}};const Ve=(0,u.Z)(ze,[["render",Xe]]);var Ye=Ve;const Je={class:"flex items-center"},Qe=["placeholder"];function et(e,t,r,l,a,o){const n=(0,s.up)("SvgIcons");return(0,s.wg)(),(0,s.iD)("div",Je,[(0,s.Wm)(i.uT,{name:"search-input"},{default:(0,s.w5)((()=>[(0,s._)("form",{onSubmit:t[1]||(t[1]=(0,i.iM)(((...t)=>e.search&&e.search(...t)),["prevent"])),class:"border-2 h-auto mr-2 border-green-700 px-3 py-2 rounded-lg text-black placeholder:text-black w-[300px] placeholder:text-gray-400 flex justify-between"},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchInput=t),ref:"searchInput",class:"outline-0 grow",placeholder:e.randomFilmName,type:"text"},null,8,Qe),[[i.nr,e.searchInput]]),(0,s._)("button",null,[(0,s.Wm)(n,{class:"w-[25px] h-[25px] mr-2 cursor-pointer",svg:"search","width-prop":"25","height-prop":"25",onClick:e.search},null,8,["onClick"])])],32)])),_:1})])}const tt=["width","height"],rt=(0,s._)("path",{d:"M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"},null,-1),it=[rt],st={key:1},lt=(0,s._)("symbol",{id:"stars-full-star",viewBox:"0 0 102 18"},[(0,s._)("path",{d:"M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"})],-1),at=[lt];function ot(e,t,r,i,l,a){return(0,s.wg)(),(0,s.iD)("div",null,["search"===e.svg?((0,s.wg)(),(0,s.iD)("svg",{key:0,fill:"#000000",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",viewBox:"0 0 50 50",width:e.widthProp+"px",height:e.heightProp+"px"},it,8,tt)):(0,s.kq)("",!0),"star"===e.svg?((0,s.wg)(),(0,s.iD)("svg",st,at)):(0,s.kq)("",!0)])}var nt=(0,s.aZ)({props:{svg:{default:null,require:!0},heightProp:{default:50},widthProp:{default:50}}});const ct=(0,u.Z)(nt,[["render",ot]]);var dt=ct,ut=(0,s.aZ)({props:{searchArray:{type:Array,default:()=>[]},randomFilmName:{type:String,default:""}},components:{SvgIcons:dt},data(){return{searchInput:""}},computed:{filmsGreedRef(){return this.$store.search.filmsGreedRef}},methods:{search(){this.$emit("search",this.searchInput)}}});const mt=(0,u.Z)(ut,[["render",et]]);var pt=mt;const ft=e=>((0,s.dD)("data-v-f7d5e3a6"),e=e(),(0,s.Cn)(),e),ht={class:"container"},gt=ft((()=>(0,s._)("span",{class:"circle"},null,-1))),vt=ft((()=>(0,s._)("span",{class:"circle"},null,-1))),wt=ft((()=>(0,s._)("span",{class:"circle"},null,-1))),yt=ft((()=>(0,s._)("span",{class:"circle"},null,-1))),_t=[gt,vt,wt,yt];function xt(e,t){return(0,s.wg)(),(0,s.iD)("div",ht,_t)}const St={},At=(0,u.Z)(St,[["render",xt],["__scopeId","data-v-f7d5e3a6"]]);var Tt=At;const Et={class:"rounded-xl border-2 border-green-700 px-3 py-2 transition-colors duration-200 hover:bg-gray-200"};function kt(e,t,r,i,l,a){const o=(0,s.up)("AppLoader");return(0,s.wg)(),(0,s.iD)("button",Et,[e.loaded?((0,s.wg)(),(0,s.j4)(o,{key:0})):(0,s.WI)(e.$slots,"default",{key:1})])}var Lt=(0,s.aZ)({components:{AppLoader:Tt},props:{loaded:Boolean}});const bt=(0,u.Z)(Lt,[["render",kt]]);var It=bt,Ot=(0,s.aZ)({components:{AppContainer:N,AppButton:It,AppLoader:Tt,AppSearch:pt,FilmsGrid:Ye,AppSlider:Ze,AppLogo:ve},data:()=>({keyword:"",currentPage:1}),methods:{search(e){this.$store.dispatch(C.SEARCH_FILMS,e),this.keyword=e,this.$nextTick((()=>{this.$refs.gridLoaderWrap.scrollIntoView({block:"start",behavior:"smooth"})}))},goToNextPage(){this.$store.dispatch(C.LOAD_NEXT_PAGE,{keyword:this.keyword,page:++this.currentPage})}},mounted(){const e=this.$store.state.search.searchKeyword;e&&(this.keyword=e)},computed:{filmsArray(){return this.$store.state.search.searchArray},randomFilmName(){return this.$store.getters.getRandomFilmName},filmsGreedLoading(){return this.$store.state.search.isLoading},sliderFilms(){return this.$store.state.slides.slides},title(){return this.$store.state.slides.title},totalPages(){return this.$store.state.search.totalPages},showNextPageButton(){return this.currentPage<this.totalPages&&this.totalPages>1},loadNextPage(){return this.$store.state.search.isLoadingNextPage}}});const Dt=(0,u.Z)(Ot,[["render",ce]]);var Pt=Dt;const Nt={class:"absolute left-0 top-0 w-full h-full bg-reg-200 flex flex-col"},Ft=["data-kinopoisk"];function Gt(e,t,r,i,l,a){return(0,s.wg)(),(0,s.iD)("div",Nt,[(0,s._)("div",{ref:"wrap",style:{width:"100%","flex-grow":"1"},id:"yohoho","data-kinopoisk":e.filmId},null,8,Ft)])}var Ct=(0,s.aZ)({computed:{filmId(){return this.$route.params.id},filmName(){return this.$route.query.filmName}},mounted(){const e=document.createElement("script");e.setAttribute("src","//yohoho.cc/yo.js"),e.async=!0,document.head.appendChild(e),this.$nextTick((()=>{this.$refs.wrap.style.position="absolute",this.$refs.wrap.style.left="0",this.$refs.wrap.style.top="0"}))}});const Mt=(0,u.Z)(Ct,[["render",Gt]]);var Rt=Mt;const $t=(0,s._)("p",{class:"text-xl flex items-center"},[(0,s._)("span",null,"В избранном пусто"),(0,s._)("span",{class:"text-8xl"},"😱")],-1);function jt(e,t,r,i,l,a){const o=(0,s.up)("FilmsGrid"),n=(0,s.up)("AppContainer");return(0,s.wg)(),(0,s.j4)(n,null,{default:(0,s.w5)((()=>[(0,s.Wm)(o,{"just-grid":"","films-array":e.favoriteFilms},{"not-find-text":(0,s.w5)((()=>[$t])),_:1},8,["films-array"])])),_:1})}var Zt=(0,s.aZ)({components:{AppContainer:N,FilmsGrid:Ye},computed:{...(0,R.rn)({favoriteFilms:e=>e.favorite.favorite})}});const Ut=(0,u.Z)(Zt,[["render",jt]]);var Wt=Ut,Bt=r(201);const Ht=[{path:"/",component:Pt,meta:{keepAlive:!0}},{path:"/movie/:id",component:Rt},{path:"/favorite",component:Wt}],qt=(0,Bt.p7)({history:(0,Bt.r5)(),routes:Ht});(0,i.ri)(M).use(z).use(qt).mount("#app")}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,r),l.exports}r.m=e,function(){var e=[];r.O=function(t,i,s,l){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],l=e[d][2];for(var o=!0,n=0;n<i.length;n++)(!1&l||a>=l)&&Object.keys(r.O).every((function(e){return r.O[e](i[n])}))?i.splice(n--,1):(o=!1,l<a&&(a=l));if(o){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[i,s,l]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,l,a=i[0],o=i[1],n=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(n)var d=n(r)}for(t&&t(i);c<a.length;c++)l=a[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},i=self["webpackChunktalkiee"]=self["webpackChunktalkiee"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(823)}));i=r.O(i)})();
//# sourceMappingURL=app.acaf0310.js.map