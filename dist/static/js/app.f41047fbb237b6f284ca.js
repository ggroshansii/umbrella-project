webpackJsonp([1],{"1IgI":function(e,t){},"51ql":function(e,t){},"6qyh":function(e,t){},"9M+g":function(e,t){},BRf2:function(e,t){},BuOL:function(e,t){},E3lE:function(e,t){},I050:function(e,t){},Jizd:function(e,t){},Jmt5:function(e,t){},K7Eb:function(e,t){},MAf5:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r=s("c/Tr"),i=s.n(r),o=s("Xxa5"),a=s.n(o),c=s("exGp"),l=s.n(c);function d(e){return window.movie_date_api_root+"/"+e}var u={data:function(){return{}},methods:{logout:function(){var e=this;return l()(a.a.mark(function t(){var s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d("logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")}});case 2:return s=t.sent,t.next=5,s.json();case 5:n=t.sent,$cookies.remove("csrf_access_token"),console.log(n),e.$router.push("/login"),e.$store.commit("setAuthStatus",!1);case 10:case"end":return t.stop()}},t,e)}))()},darkMode:function(){var e=document.getElementsByTagName("body")[0];i()(e.classList).includes("dark")?(e.classList.remove("dark"),this.$store.commit("setDarkMode",!1)):(e.classList.add("dark"),this.$store.commit("setDarkMode",!0))}},computed:{isLoggedIn:function(){return console.log(this.$store.getters.getAuthStatus),this.$store.getters.getAuthStatus},isDarkMode:function(){return this.$store.getters.getDarkMode}},created:function(){var e=document.getElementsByTagName("body")[0];this.isDarkMode?e.classList.add("dark"):e.classList.remove("dark")}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header-container"},[s("div",[s("b-navbar",{attrs:{type:"dark",variant:"dark"}},[s("b-navbar-nav",[e.isLoggedIn&&"Movies"!=this.$route.name&&"Genres"!=this.$route.name&&"EmptyStack"!=this.$route.name?s("b-nav-item",{staticClass:"nav-item-container",attrs:{href:"#"}},[s("router-link",{staticClass:"nav-router-link",attrs:{to:"/movies"}},[s("b-icon",{attrs:{icon:"arrow-left"}}),e._v(" Back to Search\n          ")],1)],1):e._e(),e._v(" "),e.isLoggedIn&&"Genres"!=this.$route.name?s("b-nav-item",{staticClass:"nav-item-container"},[s("router-link",{staticClass:"nav-router-link",attrs:{to:"/genres"}},[s("b-icon",{attrs:{icon:"plus"}}),e._v(" New Search\n          ")],1)],1):e._e(),e._v(" "),e.isLoggedIn&&"Genres"!=this.$route.name&&"Profile"!=this.$route.name?s("b-nav-item",{staticClass:"nav-item-container"},[s("router-link",{staticClass:"nav-router-link",attrs:{to:"/user/profile"}},[s("b-icon",{attrs:{icon:"list"}}),e._v(" Your Movies\n          ")],1)],1):e._e()],1),e._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("div",{staticClass:"d-flex justify-content-center align-items-center mr-4"},[s("div",[s("b-form-checkbox",{staticClass:"mb-1",attrs:{switch:"",size:"lg",checked:e.isDarkMode},on:{change:e.darkMode}})],1),e._v(" "),e.isDarkMode?e._e():s("b-icon",{staticClass:"sun-icon",attrs:{icon:"sun"}}),e._v(" "),e.isDarkMode?s("b-icon",{staticClass:"moon-icon",attrs:{icon:"moon"}}):e._e()],1),e._v(" "),e.isLoggedIn?s("b-nav-item-dropdown",{staticClass:"user-dropdown",attrs:{text:"User",right:"",icon:"person-fill"}},[s("b-dropdown-item",{attrs:{href:"#"}},[e.isLoggedIn?s("a",{on:{click:e.logout}},[s("b-icon",{attrs:{icon:"door-open"}}),e._v(" Logout")],1):e._e()])],1):e._e()],1)],1)],1),e._v(" "),s("h1",[e._v("Movie Date")])])},staticRenderFns:[]};var m={name:"App",components:{Header:s("VU/8")(u,v,!1,function(e){s("j2zl")},"data-v-39cda1d1",null).exports},computed:{darkMode:function(){return this.$store.getters.getDarkMode}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{filter:this.darkMode},attrs:{id:"app"}},[t("Header"),this._v(" "),t("h1"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var p=s("VU/8")(m,h,!1,function(e){s("w4/q")},null,null).exports,g=s("/ocq"),f=s("mvHQ"),_=s.n(f),b={data:function(){return{username:null,password:null,usernameError:null,passwordError:null}},methods:{submitLogin:function(){var e=this;return l()(a.a.mark(function t(){var s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fired"),t.next=3,fetch(d("login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:_()({username:e.username,password:e.password})});case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,e.handleResponse(n);case 8:case"end":return t.stop()}},t,e)}))()},handleResponse:function(e){e.error?e.error.username?(this.passwordError="",this.usernameError=e.error.username):e.error.password&&(this.usernameError="",this.passwordError=e.error.password):(console.log("response",e),this.$store.commit("setAuthStatus",!0),this.$router.push("genres"))}},beforeCreate:function(){this.$store.getters.getAuthStatus&&X.push("/genres")}},k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container mt-5"},[s("h1",[e._v("Login")]),e._v(" "),s("form",[s("div",{staticClass:"input-group form-group mb-0"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("b-icon",{attrs:{icon:"person-fill"}})],1)]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{"cy-test":"login-username",type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),e.usernameError?s("div",{staticClass:"username-error text-left"},[e._v("\n      "+e._s(e.usernameError)+"\n    ")]):e._e(),e._v(" "),s("div",{staticClass:"input-group form-group mt-3"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("b-icon",{attrs:{icon:"key-fill"}})],1)]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{"cy-test":"login-password",type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),e.passwordError?s("div",{staticClass:"password-error text-left"},[e._v("\n      "+e._s(e.passwordError)+"\n    ")]):e._e(),e._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary float-right",attrs:{"cy-test":"login-submit",value:"Login"},on:{click:function(t){return t.preventDefault(),e.submitLogin.apply(null,arguments)}}},[e._v("\n        Submit\n      ")])])]),e._v(" "),s("div",[s("p",[e._v("\n      Don't have any account?\n      "),s("router-link",{attrs:{to:"/register"}},[e._v("Register Here")])],1)])])},staticRenderFns:[]};var C=s("VU/8")(b,k,!1,function(e){s("E3lE")},"data-v-282f045e",null).exports,y={data:function(){return{username:null,password:null,errorMsg:null}},methods:{submitRegistration:function(){var e=this;return l()(a.a.mark(function t(){var s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fired"),t.next=3,fetch(d("register"),{method:"POST",headers:{"Content-Type":"application/json"},body:_()({username:e.username,password:e.password})});case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,e.handleResponse(n),console.log("response data",n);case 9:case"end":return t.stop()}},t,e)}))()},handleResponse:function(e){e.error?this.errorMsg=e.error:X.push("login")}},beforeCreate:function(){this.$store.getters.getAuthStatus&&X.push("/genres")}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container mt-5"},[s("h1",[e._v("Register")]),e._v(" "),s("form",[s("div",{staticClass:"input-group form-group mb-0"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("b-icon",{attrs:{icon:"person-fill"}})],1)]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{"cy-test":"register-username",type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),e.errorMsg?s("div",{staticClass:"error-message text-left"},[e._v("\n      "+e._s(e.errorMsg)+"\n    ")]):e._e(),e._v(" "),s("div",{staticClass:"input-group form-group mt-3"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[s("b-icon",{attrs:{icon:"key-fill"}})],1)]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{"cy-test":"register-password",type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary float-right",attrs:{"cy-test":"register-submit",type:"submit"},on:{click:function(t){return t.preventDefault(),e.submitRegistration.apply(null,arguments)}}},[e._v("\n        Submit\n      ")])])]),e._v(" "),s("div",[s("p",[e._v("\n      Already have an account?\n      "),s("router-link",{attrs:{to:"/login"}},[e._v("Log In Here")])],1)])])},staticRenderFns:[]};var $=s("VU/8")(y,w,!1,function(e){s("Jizd")},"data-v-5537911e",null).exports,M={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"row justify-content-center"},[t("router-link",{attrs:{to:"/login"}},[t("button",{staticClass:"btn btn-info",attrs:{"cy-test":"splash-login-btn"}},[this._v("Login")])])],1),this._v(" "),t("div",{staticClass:"row mt-3 justify-content-center"},[t("router-link",{attrs:{to:"/register"}},[t("button",{staticClass:"btn btn-info",attrs:{"cy-test":"splash-register-btn"}},[this._v("Register")])])],1)])},staticRenderFns:[]};s("VU/8")({beforeCreate:function(){this.$store.getters.getAuthStatus&&this.$router.push("/genres")}},M,!1,function(e){s("K7Eb")},"data-v-79b433c9",null).exports;var x=s("8FwK"),E={data:function(){return{isVisible:!0,movieList:[],matchModal:!1,swipedIds:[],currentGenres:this.$store.getters.getGenresQuery,fetchMoreMovies:!0}},components:{Vue2InteractDraggable:x.Vue2InteractDraggable},methods:{swipedRight:function(){var e=this;this.addSwipedId(),this.saveMovie(),setTimeout(function(){e.matchModal=!0,e.isVisible=!1},200)},swipedLeft:function(){var e=this;this.addSwipedId(),setTimeout(function(){e.movieList.shift(),e.validateMovie(),e.isVisible=!1,console.log(e.movieList)},200),setTimeout(function(){e.isVisible=!0},300)},onHidden:function(){this.movieList.shift(),this.validateMovie(),this.isVisible=!0,this.matchModal=!1},goToMoviePage:function(){this.$store.commit("setCurrentMovieObj",this.movieList[0]),this.$router.push({name:"Movie",params:{title:this.movieList[0].title.split(" ").join("")}})},saveMovie:function(){fetch(d("save_movie"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")},body:_()(this.movieList[0])})},addSwipedId:function(){fetch(d("swiped"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")},body:_()(this.movieList[0])})},validateMovie:function(){try{for(;this.swipedIds.includes(this.movieList[0].id);)this.movieList.shift();for(;""==this.movieList[0].overview||!this.movieList[0].poster_path;)this.movieList.shift()}catch(e){this.$router.push("/movies/emptystack")}}},beforeCreate:function(){var e=this;return l()(a.a.mark(function t(){var s,n,r,i,o,c,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.getters.getAuthStatus||(X.push("/"),$cookies.remove("access_token_cookie"),$cookies.remove("csrf_access_token")),t.next=3,fetch(d("genre_query"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")},body:_()({genres:e.$store.getters.getGenresQuery})});case 3:return s=t.sent,t.next=6,s.json();case 6:return"success"!=(n=t.sent).msg&&(console.log("LOGOUT TRIGGERED",n,n.msg),$cookies.remove("access_token_cookie"),$cookies.remove("csrf_access_token"),e.$store.commit("setAuthStatus",!1),e.$router.push("/login")),t.next=10,fetch(d("swiped"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")}});case 10:return r=t.sent,t.next=13,r.json();case 13:return i=t.sent,e.swipedIds=i,o=e.$loading.show({loader:"dots",color:"#653780",backgroundColor:"#fff",opacity:.5}),t.next=18,fetch(d("movie_list"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")},body:_()({genres:e.$store.getters.getGenresQuery})});case 18:return c=t.sent,t.next=21,c.json(l);case 21:"Token has expired"==(l=t.sent).msg&&($cookies.remove("access_token_cookie"),$cookies.remove("csrf_access_token"),e.$store.commit("setAuthStatus",!1),e.$router.push("/login")),console.log("CATEGORY LIST WHOLE",l),o.hide(),e.movieList=l.data.results,e.validateMovie();case 27:case"end":return t.stop()}},t,e)}))()},watch:{movieList:function(){var e=l()(a.a.mark(function e(){var t,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.movieList.length<=10&&this.fetchMoreMovies)){e.next=14;break}return e.next=3,fetch(d("increment_page"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")},body:_()({genres:this.$store.getters.getGenresQuery})});case 3:return e.sent,e.next=6,fetch(d("movie_list"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")},body:_()({genres:this.$store.getters.getGenresQuery})});case 6:return t=e.sent,e.next=9,t.json(s);case 9:"Token has expired"==(s=e.sent).msg?($cookies.remove("access_token_cookie"),$cookies.remove("csrf_access_token"),this.$store.commit("setAuthStatus",!1),this.$router.push("/login")):0==s.data.results.length&&0==this.movieList.length?this.$router.push("/movies/emptystack"):0==s.data.results.length&&(this.fetchMoreMovies=!1),console.log("CATEGORY LIST WHOLE",s),this.movieList=this.movieList.concat(s.data.results),console.log(this.movieList);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.movieList[0]?s("section",{staticClass:"card-container"},[s("div",{staticClass:"flex justify-content-center align-items-center",staticStyle:{"z-index":"3"}},[e.isVisible?s("Vue2InteractDraggable",{staticClass:"rounded-borders card",attrs:{"interact-out-of-sight-x-coordinate":1e3,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200},on:{draggedRight:e.swipedRight,draggedLeft:e.swipedLeft}},[s("div",{staticClass:"content-container"},[s("div",{staticClass:"genre-pill-container"},e._l(e.currentGenres,function(t){return s("b-badge",{key:t.id,staticClass:"genre-pill",attrs:{pill:"",variant:"dark"}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),1),e._v(" "),s("div",{staticClass:"movie-info"},[s("p",[e._v(e._s(e.movieList[0].overview))])])])]):e._e()],1)]):e._e(),e._v(" "),s("b-modal",{staticClass:"p-0",attrs:{"header-bg-variant":"dark","header-text-variant":"light","body-bg-variant":"light","body-text-variant":"dark","footer-bg-variant":"dark","footer-text-variant":"light"},on:{hidden:e.onHidden},model:{value:e.matchModal,callback:function(t){e.matchModal=t},expression:"matchModal"}},[s("div",{staticClass:"text-center mx-auto w-100",staticStyle:{"font-family":"'Lobster'"},attrs:{slot:"modal-title"},slot:"modal-title"},[e._v("\n      It's a Match!\n    ")]),e._v(" "),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("img",{staticClass:"img-fluid",staticStyle:{width:"100%","max-height":"475px"},attrs:{src:"https://image.tmdb.org/t/p/w500"+e.movieList[0].poster_path,alt:""}})]),e._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{variant:"danger"},on:{click:function(t){e.matchModal=!1}}},[e._v("Close")]),e._v(" "),s("b-button",{attrs:{variant:"success"},on:{click:e.goToMoviePage}},[e._v("Go to Movie Page")])],1)])],1)},staticRenderFns:[]};var T=s("VU/8")(E,S,!1,function(e){s("1IgI")},"data-v-74fb4c20",null).exports,L={data:function(){return{genres:[{id:28,name:"Action",selected:!1},{id:12,name:"Adventure",selected:!1},{id:16,name:"Animation",selected:!1},{id:35,name:"Comedy",selected:!1},{id:80,name:"Crime",selected:!1},{id:99,name:"Documentary",selected:!1},{id:18,name:"Drama",selected:!1},{id:10751,name:"Family",selected:!1},{id:14,name:"Fantasy",selected:!1},{id:36,name:"History",selected:!1},{id:27,name:"Horror",selected:!1},{id:10402,name:"Music",selected:!1},{id:9648,name:"Mystery",selected:!1},{id:10749,name:"Romance",selected:!1},{id:878,name:"Science Fiction",selected:!1},{id:10770,name:"TV Movie",selected:!1},{id:53,name:"Thriller",selected:!1},{id:10752,name:"War",selected:!1},{id:37,name:"Western",selected:!1}],selectedGenres:[]}},methods:{clickGenre:function(e){if(e.selected=!e.selected,0==e.selected){var t=this.selectedGenres.findIndex(function(t){return t.id==e.id});this.selectedGenres.splice(t,1),this.$store.commit("setGenresQuery",this.selectedGenres)}else{var s={};s.name=e.name,s.id=e.id,this.selectedGenres.push(s),this.$store.commit("setGenresQuery",this.selectedGenres)}}},created:function(){var e=this.$store.getters.getToken,t=this.$store.getters.getAuthStatus;console.log("TEST --",e),console.log("AUTH STATUS",t),t||this.$router.push("/")}},R={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"genre-pill-container",attrs:{"cy-test":"genre-pill-container"}},e._l(e.genres,function(t){return s("b-badge",{key:t.id,staticClass:"genre-pill",class:{selected:t.selected},attrs:{pill:"",variant:"outline-primary"},on:{click:function(s){return e.clickGenre(t)}}},[e._v(e._s(t.name))])}),1),e._v(" "),s("router-link",{attrs:{to:"/movies"}},[s("b-button",{staticClass:"submit-genres-btn",attrs:{"cy-test":"genre-submit",variant:"success"}},[e._v("Confirm Genres")])],1)],1)},staticRenderFns:[]};var j=s("VU/8")(L,R,!1,function(e){s("tzhD")},"data-v-3a88b0e8",null).exports,O={data:function(){return{genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}},methods:{genreNames:function(e){var t=this,s=[];return e.forEach(function(e){var n=t.genres.findIndex(function(t){return t.id==e});s.push(t.genres[n].name)}),s.join(", ")},generatePopularityBar:function(){return 10*this.getCurrentMovie.vote_average/100*200}},computed:{getCurrentMovie:function(){return this.$store.getters.getCurrentMovie}},created:function(){this.$store.getters.getAuthStatus||($cookies.remove("access_token_cookie"),$cookies.remove("csrf_access_token"),X.push("/"))}},D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{staticClass:"movie-cover",attrs:{src:"https://image.tmdb.org/t/p/w500"+e.getCurrentMovie.poster_path}})]),e._v(" "),s("div",{staticClass:"col movie-details-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"movie-detail-heading"},[e._v("Movie Title")]),e._v(" "),s("p",[e._v(e._s(e.getCurrentMovie.title))])]),e._v(" "),s("div",{staticClass:"col"},[s("h2",{staticClass:"movie-detail-heading"},[e._v("Release Date")]),e._v(" "),s("p",[e._v(e._s(e.getCurrentMovie.release_date))])])]),e._v(" "),s("h2",{staticClass:"movie-detail-heading text-center"},[e._v("Overview")]),e._v(" "),s("p",[e._v(e._s(e.getCurrentMovie.overview))]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"movie-detail-heading"},[e._v("Genre:")]),e._v(" "),s("p",[e._v(e._s(e.genreNames(e.getCurrentMovie.genre_ids)))])]),e._v(" "),s("div",{staticClass:"col"},[s("h2",{staticClass:"movie-detail-heading"},[e._v("Popularity:")]),e._v(" "),s("div",{staticClass:"progress-bar-container"},[s("div",{staticClass:"progress-bar",style:{height:"25px",width:e.generatePopularityBar()+"px",color:"green"}})])])]),e._v(" "),s("h2",{staticClass:"movie-detail-heading"},[e._v("Where can I watch?")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.justwatch.com/us/search?q="+e.getCurrentMovie.title}},[e._v("Streaming availability")])])])])])},staticRenderFns:[]};var A=s("VU/8")(O,D,!1,function(e){s("I050")},"data-v-a9137abe",null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("No more movies left in this specific search")])])}]};var G=s("VU/8")({},F,!1,function(e){s("MAf5")},"data-v-7d75dfce",null).exports,I={data:function(){return{}},props:{movie:Object},methods:{getDeletedMovieObj:function(){this.$emit("deletedMovieObj",this.movie),this.$root.$emit("bv::show::modal","delete-modal")},goToMoviePage:function(){this.$store.commit("setCurrentMovieObj",this.movie),this.$router.push({name:"Movie",params:{title:this.movie.title.split(" ").join("")}})}}},P={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("img",{attrs:{src:"https://image.tmdb.org/t/p/w500"+e.movie.poster_path,alt:""},on:{click:function(t){return e.goToMoviePage()}}})]),e._v(" "),s("b-icon",{staticClass:"close-icon",attrs:{icon:"x-square-fill"},on:{click:function(t){return e.getDeletedMovieObj()}}})],1)},staticRenderFns:[]};var U={data:function(){return{movieObj:null}},components:{UserMovie:s("VU/8")(I,P,!1,function(e){s("SHEK")},"data-v-28926179",null).exports},methods:{deleteMovie:function(e){var t=this;return l()(a.a.mark(function s(){var n,r,i;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n=t.movies.findIndex(function(t){return t.id==e}),t.movies.splice(n,1),t.$root.$emit("bv::hide::modal","delete-modal"),s.next=5,fetch(d("delete_movie"),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")},body:_()(e)});case 5:return r=s.sent,s.next=8,r.json();case 8:i=s.sent,console.log("DELETE RESPONSE DATA",i);case 10:case"end":return s.stop()}},s,t)}))()},closeModal:function(){this.$root.$emit("bv::hide::modal","delete-modal")}},computed:{movies:function(){return this.$store.getters.getUserMovieList}},created:function(){var e=this;return l()(a.a.mark(function t(){var s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d("user_movie_list"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")}});case 2:return s=t.sent,t.next=5,s.json();case 5:"Token has expired"==(n=t.sent).msg&&($cookies.remove("access_token_cookie"),$cookies.remove("csrf_access_token"),e.$store.commit("setAuthStatus",!1),e.$router.push("/login")),e.$store.commit("setUserMovieList",n),e.movies=e.$store.getters.getUserMovieList;case 9:case"end":return t.stop()}},t,e)}))()}},V={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Movies")]),e._v(" "),s("div",{staticClass:"movie-grid-container"},e._l(e.movies,function(t){return s("user-movie",{key:t.id,staticClass:"movie-grid-item",attrs:{id:t.id,movie:t},on:{deletedMovieObj:function(t){e.movieObj=t}}})}),1),e._v(" "),s("b-modal",{attrs:{id:"delete-modal",title:"BootstrapVue","header-bg-variant":"danger","header-text-variant":"light",size:"sm"}},[s("div",{staticClass:"delete-modal-title",attrs:{slot:"modal-title"},slot:"modal-title"},[s("strong",[e._v("Delete Confirmation")])]),e._v(" "),e.movieObj?s("p",{staticClass:"my-4"},[e._v("\n      Are you sure you want to delete "),s("br"),e._v('"'),s("strong",[e._v(e._s(e.movieObj.original_title))]),e._v('"?\n    ')]):e._e(),e._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{"button-size":"sm"},on:{click:e.closeModal}},[e._v("Cancel")]),e._v(" "),s("b-button",{staticClass:"btn btn-danger",attrs:{"button-size":"sm"},on:{click:function(t){return e.deleteMovie(e.movieObj.id)}}},[e._v("Delete")])],1)])],1)},staticRenderFns:[]};var N={data:function(){return{deleteSearches:!1,deleteEverything:!1}},methods:{deleteSearchesPrelim:function(){this.deleteEverything=!1,this.deleteSearches=!0,this.$root.$emit("bv::show::modal","reset-modal")},deleteEverythingPrelim:function(){this.deleteSearches=!1,this.deleteEverything=!0,this.$root.$emit("bv::show::modal","reset-modal")},deleteSearchesFinal:function(){var e=this;return l()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.deleteEverything=!1,e.deleteSearches=!1,t.next=4,fetch(d("delete_searches"),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")}});case 4:t.sent,e.$root.$emit("bv::hide::modal","reset-modal");case 6:case"end":return t.stop()}},t,e)}))()},deleteEverythingFinal:function(){var e=this;return l()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.deleteSearches=!1,e.deleteEverything=!1,e.$root.$emit("bv::hide::modal","reset-modal"),t.next=5,fetch(d("delete_everything"),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":$cookies.get("csrf_access_token")}});case 5:t.sent,e.$store.commit("setUserMovieList",[]);case 7:case"end":return t.stop()}},t,e)}))()},closeModal:function(){this.$root.$emit("bv::hide::modal","reset-modal")}},created:function(){}},H={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"reset-container"},[s("b-button",{staticClass:"reset-btn",attrs:{id:"tooltip-reset-searches",variant:"danger"},on:{click:e.deleteSearchesPrelim}},[e._v("Reset Search History")]),e._v(" "),s("b-tooltip",{attrs:{target:"tooltip-reset-searches",triggers:"hover"}},[e._v("\n    Resets only previously swiped movies and past searches! Your matches will remain saved.\n  ")]),e._v(" "),s("b-button",{staticClass:"reset-btn",attrs:{id:"tooltip-reset-everything",variant:"danger"},on:{click:e.deleteEverythingPrelim}},[e._v("Reset Everything")]),e._v(" "),s("b-tooltip",{attrs:{target:"tooltip-reset-everything",triggers:"hover"}},[e._v("\n    Resets previously swiped movies, past searches and your matched movie list!\n  ")]),e._v(" "),s("b-modal",{attrs:{id:"reset-modal",title:"BootstrapVue","header-bg-variant":"danger","header-text-variant":"light",size:"sm"}},[s("div",{staticClass:"delete-modal-title",attrs:{slot:"modal-title"},slot:"modal-title"},[s("strong",[e._v("Delete Confirmation")])]),e._v(" "),e.deleteSearches?s("p",{staticClass:"my-4 reset-modal-text"},[e._v("\n      Are you sure you want to reset"),s("br"),e._v(" "),s("strong",[e._v("all searches")]),e._v(" ?\n    ")]):e._e(),e._v(" "),e.deleteEverything?s("p",{staticClass:"my-4 reset-modal-text"},[e._v("\n      Are you sure you want to reset"),s("br"),e._v(" "),s("strong",[e._v("everything")]),e._v(" ?\n    ")]):e._e(),e._v(" "),s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{"button-size":"sm"},on:{click:e.closeModal}},[e._v("Cancel")]),e._v(" "),e.deleteSearches?s("b-button",{staticClass:"btn btn-danger",attrs:{"button-size":"sm"},on:{click:e.deleteSearchesFinal}},[e._v("Delete Searches")]):e._e(),e._v(" "),e.deleteEverything?s("b-button",{staticClass:"btn btn-danger",attrs:{"button-size":"sm"},on:{click:e.deleteEverythingFinal}},[e._v("Delete Everything")]):e._e()],1)])],1)},staticRenderFns:[]};var K={components:{UserMovies:s("VU/8")(U,V,!1,function(e){s("BRf2")},"data-v-277f7b30",null).exports,Reset:s("VU/8")(N,H,!1,function(e){s("6qyh")},"data-v-e0bbcf58",null).exports},methods:{},created:function(){this.$store.getters.getAuthStatus||($cookies.remove("access_token_cookie"),$cookies.remove("csrf_access_token"),X.push("/"))}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("user-movies"),this._v(" "),t("reset")],1)},staticRenderFns:[]};var Q=s("VU/8")(K,z,!1,function(e){s("pVUU")},"data-v-509ee86c",null).exports;n.default.use(g.a);var X=new g.a({routes:[{path:"/",name:"Login",component:C},{path:"/login",name:"Login",component:C},{path:"/register",name:"Register",component:$},{path:"/movies/",name:"Movies",component:T},{path:"/genres",name:"Genres",component:j},{path:"/movie/:title",name:"Movie",component:A},{path:"/user/profile",name:"Profile",component:Q},{path:"/movies/emptystack",name:"EmptyStack",component:G}]}),q=s("Tqaz"),B=(s("Jmt5"),s("9M+g"),s("51ql"),s("BuOL"),s("ZZvs")),W=s.n(B),Y=(s("SYh3"),s("GP3o")),J=s("NYxO"),Z=s("jcKD");n.default.use(J.a);var ee=new Z.a({storage:window.localStorage}),te=new J.a.Store({state:{currentMovieObj:{},authStatus:!1,genresQuery:{},userMovieList:{},darkMode:!1},getters:{getCurrentMovie:function(e){return e.currentMovieObj},getAuthStatus:function(e){return e.authStatus},getGenresQuery:function(e){return e.genresQuery},getUserMovieList:function(e){return e.userMovieList},getDarkMode:function(e){return e.darkMode}},mutations:{setCurrentMovieObj:function(e,t){e.currentMovieObj=t},setAuthStatus:function(e,t){e.authStatus=t},setGenresQuery:function(e,t){e.genresQuery=t},setUserMovieList:function(e,t){e.userMovieList=t},setDarkMode:function(e,t){e.darkMode=t}},plugins:[ee.plugin]}),se=s("ppUw"),ne=s.n(se);n.default.config.productionTip=!1,n.default.use(q.a),n.default.use(q.b),n.default.use(W.a),n.default.use(Y.a),n.default.use(ne.a),new n.default({el:"#app",store:te,router:X,components:{App:p},template:"<App/>"})},SHEK:function(e,t){},SYh3:function(e,t){},j2zl:function(e,t){},pVUU:function(e,t){},tzhD:function(e,t){},"w4/q":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f41047fbb237b6f284ca.js.map