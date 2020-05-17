(this["webpackJsonptm-weather-forecast"]=this["webpackJsonptm-weather-forecast"]||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=(a(88),a(18)),o=a(59),s=a(8),l=a(61),d=a(22),u=a(20),m=a(24),f=a.n(m),p=a(26),h=a(27),g=a(38),v=a.n(g),_=null,w=function(){function e(){Object(p.a)(this,e),this.host="https://tm-weather-js-api.herokuapp.com"}return Object(h.a)(e,[{key:"findLocation",value:function(e){var t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(v.a.get("".concat(this.host,"/api/autocomplete/?q=").concat(e.trim())));case 3:if(!(200===(t=a.sent).status&&t.data instanceof Array)){a.next=6;break}return a.abrupt("return",t.data);case 6:return a.abrupt("return",[]);case 9:throw a.prev=9,a.t0=a.catch(0),a.t0;case 12:case"end":return a.stop()}}),null,this,[[0,9]])}},{key:"getForecast",value:function(e){var t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.awrap(v.a.get("".concat(this.host,"/api/forecast/"),{params:{lat:e.lat,lon:e.lon,limit:e.limit}}));case 3:if(t=a.sent,!Object.prototype.hasOwnProperty.call(t.data,"current")){a.next=6;break}return a.abrupt("return",t.data);case 6:return a.abrupt("return",[]);case 9:throw a.prev=9,a.t0=a.catch(0),a.t0;case 12:case"end":return a.stop()}}),null,this,[[0,9]])}},{key:"getCurrentInfo",value:function(e){var t,a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={},e instanceof Object&&(t.params=e),n.prev=2,n.next=5,f.a.awrap(v.a.get("".concat(this.host,"/api/current/"),t));case 5:if(200!==(a=n.sent).status){n.next=8;break}return n.abrupt("return",a.data);case 8:return n.abrupt("return",[]);case 11:throw n.prev=11,n.t0=n.catch(2),n.t0;case 14:case"end":return n.stop()}}),null,this,[[2,11]])}}]),e}();function y(){return null===_&&(_=new w),_}var E="PROCESSING_REQUEST",b="REQUEST_LOCATIONS_FAILED",N="SET_LOCATION",x="SET_FORECAST_INFO",O=function(e){return{type:"REQUEST_LOCATIONS_SUCCESS",payload:e}};function j(){return function(e){e(O([]))}}function C(e){return function(t){t({type:N,payload:e})}}function k(e){return function(t){var a=y();return t({type:E}),console.log("msg from setForecasts func"),console.dir(e),a.getForecast({lat:e.lat,lon:e.lon,limit:7}).then((function(e){t({type:x,payload:e})})).catch((function(e){}))}}var S=a(36),T=a(32),P=a(37),D=a(17),I=a(2),L=a.n(I),R=(L.a.string.isRequired,L.a.string.isRequired,L.a.string.isRequired,L.a.number.isRequired,L.a.number.isRequired,L.a.string,L.a.string,L.a.number,L.a.string,function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))}),M=(a(111),function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"autocomplete_input_btn_icon"},r.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),A={title:"\u041f\u043e\u0433\u043e\u0434\u0430",search:{placeholder:"\u0413\u043e\u0440\u043e\u0434",loadingPlaceholder:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f..."},locale:a(80).a,weatherDic:{today:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f",temp:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",feelsLike:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a",pressure:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435",wind:"\u0412\u0435\u0442\u0435\u0440",humidity:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",wind_um:"\u043c/\u0441\u0435\u043a",pressure_um:"\u043c\u043c",uvi:"\u0423\u0424"},time:{h:"\u0447",m:"\u043c",min:"\u043c\u0438\u043d"},dayParts:{morning:"\u0423\u0442\u0440\u043e",day:"\u0414\u0435\u043d\u044c",evening:"\u0412\u0435\u0447\u0435\u0440",night:"\u041d\u043e\u0447\u044c"},dayDuration:{duration:"\u0414\u043b\u0438\u043d\u0430 \u0434\u043d\u044f",sunrise:"\u0412\u043e\u0441\u0445\u043e\u0434",sunset:"\u0417\u0430\u043a\u0430\u0442"},forecast:{title:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 7 \u0434\u043d\u0435\u0439"}},F=a(35),z={ru:A,cs:{title:"Po\u010das\xed",search:{placeholder:"M\u011bsto",loadingPlaceholder:"Data se na\u010d\xedtaj\xed..."},locale:F.a,weatherDic:{today:"Dnes",temp:"Teplota",feelsLike:"Pocitov\u011b",pressure:"Tlak",wind:"V\xedtr",humidity:"Vlhkost",wind_um:"m/sec",pressure_um:"mm",uvi:"uvi"},time:{h:"h",m:"m",min:"min"},dayParts:{morning:"R\xe1no",day:"Den",evening:"Ve\u010der ",night:"Noc"},dayDuration:{duration:"D\xe9lka dne",sunrise:"V\xfdchod slunce",sunset:"Z\xe1pad slunce"},forecast:{title:"P\u0159edpov\u011b\u010f na 7 dny"}},de:{title:"Das Wetter",search:{placeholder:"Stadt",loadingPlaceholder:"Daten werden geladen..."},locale:a(81).a,weatherDic:{today:"Heute",temp:"Temperatur",feelsLike:"Lust haben auf",pressure:"Druck",wind:"Wind",humidity:"Feuchtigkeit",wind_um:"m/sec",pressure_um:"mm",uvi:"uvi"},time:{h:"uhr",m:"m",min:"min"},dayParts:{morning:"Morgens",day:"Morgens",evening:"Mittags",night:"Abends"},dayDuration:{duration:"Tagesl\xe4nge",sunrise:"Sonnenaufgang",sunset:"Sonnenuntergang"},forecast:{title:"7 Tage Vorhersage"}}},B=[{id:"ru",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{id:"cs",text:"\u010de\u0161tina"},{id:"de",text:"Deutsch"}];var H=Object(n.createContext)(function(){var e=function(){if(!window)return B[0];var e=localStorage.getItem("lang")||navigator.language.slice(0,2);return B.find((function(t){return t.id===e}))||B[0]}();return{language:e,dictionary:z[e.id]}}());function q(e){var t=Object(n.useContext)(H),a=Object(n.useState)(t.language),c=Object(D.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)(t.dictionary),l=Object(D.a)(s,2),d=l[0],u=l[1],m={language:i,dictionary:d,setLanguage:function(e){console.log("set lang"),console.dir(e),function(e){localStorage.setItem("lang",e.id)}(e),o(e),u(z[e.id])}};return r.a.createElement(H.Provider,{value:m},e.children)}var U=function(e){var t=e.searchOnInput,a=e.searchOnClear,c=e.onSelect,i=e.locations,o=Object(n.useState)(""),s=Object(D.a)(o,2),l=s[0],d=s[1],u=Object(n.useState)(!0),m=Object(D.a)(u,2),f=m[0],p=m[1],h=Object(n.useRef)(),g=Object(n.useContext)(H).dictionary;R(h,(function(){p(!1)}));var v=!0===f&&i.length>0,_=i.map((function(e,a){return r.a.createElement("li",{key:a,className:"autocomplete_dropdown_item",onClick:function(a){return n=e,a.stopPropagation(),t(""),d(""),p(!1),void c(n);var n},"data-testid":"ac_dropdown_item_".concat(a)},"".concat(e.name))}));return r.a.createElement("div",{className:"autocomplete_wrapper",ref:h},r.a.createElement("div",{className:"autocomplete_input_wrapper",role:"search"},r.a.createElement("input",{"data-testid":"ac_input",type:"text",placeholder:g.search.placeholder,value:l,onChange:function(e){return function(e){t(e.target.value),d(e.target.value),p(!0)}(e)},onFocus:function(){i.length>0&&p(!0)},className:"autocomplete_input"}),r.a.createElement("div",{className:"autocomplete_input_btn_wrapper"},r.a.createElement("div",{"data-testid":"ac_input_clear_btn",className:"autocomplete_input_icon",onClick:function(){return d(""),p(!1),void a()}},r.a.createElement(M,null)))),!0===v&&r.a.createElement("ul",{"data-testid":"ac_dropdown",className:"autocomplete_dropdown"},_))},V=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(S.a)(this,Object(T.a)(t).call(this,e))).searchOnInput=function(e){a.setState({search:e});var t,n=a.props.dispatch;"string"===typeof e&&e.trim().length>1?n((t=e.trim(),function(e){return y().findLocation(t).then((function(t){console.dir(t),e(O(t))})).catch((function(){console.dir("error"),e({type:b,payload:[]})}))})):n(j())},a.searchOnClear=function(){a.setState({search:""}),a.props.dispatch(j())},a.listOnSelect=function(e){a.props.dispatch(C(e)),a.props.dispatch(k(e)),a.props.history.push("/")},a.state={search:""},a}return Object(P.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(U,{search:this.state.search,searchOnInput:this.searchOnInput,onSelect:this.listOnSelect,searchOnClear:this.searchOnClear,locations:this.props.locationList})}}]),t}(r.a.Component),W=Object(s.b)((function(e){return{locationList:e.weather.locationList}}))(Object(u.f)(V)),Q=a(63),Z=a.n(Q),J=a(48);a(113);var G=function(e){var t=e.language,a=function(e,t){return e.map((function(e){return r.a.createElement(J.a.Item,{key:e.id,className:"dropdown_item",onClick:t.bind(null,e)},e.text)}))}(e.options,e.onChange);"dropdown_title_".concat(t.id);return r.a.createElement(J.a,{title:t.text,className:"dropdown_title",id:"lang-selector"},a)};function Y(){var e=Object(n.useContext)(H),t=e.language;console.log("render language selector"),console.dir(t);return r.a.createElement(G,{language:t,options:B,onChange:function(t){e.setLanguage(t)}})}a(115);var $=Object(s.b)((function(e){return{favoritesCount:e.favorites.all.length}}))((function(e){var t=e.favoritesCount,a=Object(n.useContext)(H).dictionary;return r.a.createElement("nav",{className:"app-header px-2 py-2","data-testid":"navbar-top",role:"heading"},r.a.createElement("div",{className:"row mx-2 w-100 d-flex flex-column flex-md-row"},r.a.createElement("div",{className:"d-flex flex-shrink-1 flex-row justify-content-start align-items-start"},r.a.createElement("span",{className:"app-header-title ml-2"},a.title)),r.a.createElement("div",{className:"flex-grow-1 justify-content-start align-items-start ml-2 ml-sm-1 ml-md-2 mr-1 mt-2 mt-sm-2 mt-md-0"},r.a.createElement("div",{className:"d-flex flex-row align-items-center "},r.a.createElement("div",{className:"flex-grow-1"},r.a.createElement(W,null)),r.a.createElement(d.b,{to:"/favorites"},r.a.createElement("div",{className:"bookmarked"},r.a.createElement("img",{src:Z.a,width:"36",height:"36",alt:""}),r.a.createElement("span",{className:"bookmarked_count","data-testid":"nav-fv-count"},t)))),r.a.createElement("div",{className:"row"},r.a.createElement(Y,null)))))})),K=(a(116),function(e){var t=e.condClassName,a=e.children,n="card current-card ".concat(t);return r.a.createElement("div",{className:n,id:"id_current_weather_layout","data-testid":"w_current_wrapper"},r.a.createElement("div",{className:"card-body card-canvas"},a))}),X=function(e){function t(){return Object(p.a)(this,t),Object(S.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=(this.props||"#fcc603").fill,t=(this.props||"24").width,a=(this.props||"24").height;return!0===this.props.isFavorite?r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,viewBox:"0 0 24 24","data-testid":"w_current_svg_favorites",className:"isFavorite"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:e})):r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,viewBox:"0 0 24 24","data-testid":"w_current_svg_favorites"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",fill:e}))}}]),t}(r.a.Component),ee=a(65),te=a.n(ee),ae=a(23),ne=a(66);function re(e){return!0===e.processing?r.a.createElement("span",null,r.a.createElement("img",{id:"w_current_update_icon",src:te.a,alt:"update icon",width:"24",height:"24",className:"processing","data-testid":"w_current_update_icon"})):""}var ce=function(e){var t=e.location,a=e.dateinfo,n=e.processing,c=e.addToFavorite,i=e.isFavorite,o=e.dic,s="-",l="-",d="-";if(a instanceof Object){var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,a=60*t.getTimezoneOffset()+60*e;return Object(ne.a)(t,a)}(a.offset);s=Object(ae.a)(u,"EEEE",{locale:o.locale}),l=Object(ae.a)(u,"dd MMMM yyyy",{locale:o.locale}),d=Object(ae.a)(u,"HH:mm",{locale:o.locale})}return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-row justify-content-between"},r.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center"},r.a.createElement("h5",{className:"card-title text-white",id:"w_current_loc_title","data-testid":"w_current_loc_title"},"".concat(t.name,", ").concat(t.country)),r.a.createElement("span",{id:"w_current_add_to_fav_btn",className:"current_favorite_icon mb-2 ml-2","data-testid":"w_current_add_to_fav_btn",onClick:c},r.a.createElement(X,{isFavorite:i,fill:"#fcc603",width:"24",height:"24"}))),r.a.createElement(re,{processing:n})),r.a.createElement("h6",{id:"w_current_today_title",className:"card-subtitle mb-2 text-white","data-testid":"w_current_today_title"},"".concat(o.weatherDic.today," ").concat(s,", ").concat(l,", ").concat(d)))},ie=a(67),oe=a.n(ie),se=a(68),le=a.n(se),de=a(69),ue=a.n(de),me=function(e){var t=e.fact,a=e.cond,n=e.dic,c=e.language,i=a.condition[c.id],o=n.weatherDic;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},r.a.createElement("div",{className:"row mx-0"},r.a.createElement("span",{id:"w_current_fact_temp",className:"current_temp text-white","data-testid":"w_current_fact_temp"},Math.round(t.temp)," \xb0\u0421"),r.a.createElement("div",{className:"current_img ml-3"},r.a.createElement("img",{src:a.icon,width:"48",height:"48",alt:""})))),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},r.a.createElement("div",{className:"row mx-0 d-flex flex-column justify-content-center mt-2"},r.a.createElement("span",{id:"w_current_condition",className:"text-white","data-testid":"w_current_condition"},i),r.a.createElement("span",{id:"w_current_feels_like",className:"text-white","data-testid":"w_current_feels_like"},o.feelsLike," ",Math.round(t.feels_like),"\xb0\u0421")))),r.a.createElement("div",{className:"d-flex flex-row justify-content-between mt-2 addInfo"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center mr-2"},r.a.createElement("span",{className:"text-white"},o.wind),r.a.createElement("img",{src:oe.a,width:"24",height:"24",alt:""}),r.a.createElement("span",{id:"w_current_wind_speed",className:"text-white ml-1","data-testid":"w_current_wind_speed"},t.wind_speed," ",o.wind_um)),r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center mr-2"},r.a.createElement("span",{className:"text-white"},o.humidity),r.a.createElement("img",{src:le.a,width:"24",height:"24",alt:"humidity icon"}),r.a.createElement("span",{id:"w_current_humidity",className:"text-white ml-1","data-testid":"w_current_humidity"},t.humidity," %")),r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center mr-2"},r.a.createElement("span",{className:"text-white"},o.pressure),r.a.createElement("img",{src:ue.a,width:"24",height:"24",alt:"pressure icon"}),r.a.createElement("span",{id:"w_current_pressure_mm",className:"text-white ml-1","data-testid":"w_current_pressure_mm"},t.pressure_mm," ",o.pressure_um))))},fe=a(70),pe=a.n(fe),he=a(71),ge=a.n(he),ve=a(72),_e=a.n(ve),we=a(73),ye=a.n(we),Ee=a(44),be=a.n(Ee),Ne=a(45),xe=a.n(Ne),Oe=a(46),je=a.n(Oe),Ce=a(74),ke=a.n(Ce),Se=a(75),Te=a.n(Se),Pe=a(47),De=a.n(Pe),Ie=a(30),Le=a.n(Ie),Re=a(76),Me=a.n(Re),Ae=a(77),Fe=a.n(Ae),ze=new Map;ze.set("clear",{icon:pe.a,condition:{cs:"Jasno",en:"Clear",ru:"\u042f\u0441\u043d\u043e",de:"klar"},getClassName:function(e){return"d"===e?"clear_day":"clear_night"}}),ze.set("partly-cloudy",{icon:ge.a,condition:{cs:"Polojasno",en:"Partly cloudy",ru:"\u041c\u0430\u043b\u043e\u043e\u0431\u043b\u0430\u0447\u043d\u043e",de:"bew\xf6lkt"},getClassName:function(e){return"d"===e?"cloudy_light_day":"cloudy_light_night"}}),ze.set("cloudy",{icon:_e.a,condition:{cs:"Polojasno",en:"Cloudy",ru:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e \u0441 \u043f\u0440\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f\u043c\u0438",de:"bew\xf6lkt, manchmal klar"},getClassName:function(e){return"d"===e?"cloudy_day":"cloudy_night"}}),ze.set("overcast",{icon:ye.a,condition:{cs:"Zata\u017eeno",en:"Overcast",ru:"\u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e",de:"bedeckt"},getClassName:function(e){return"d"===e?"overcast":"cloudy_night"}}),ze.set("partly-cloudy-and-light-rain",{icon:be.a,condition:{cs:"Polojasno a slab\xfd d\xe9\u0161\u0165",en:"Partly cloudy and light rain",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u043e\u0436\u0434\u044c",de:"Teilweise bew\xf6lkt und leichter Regen"},getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}),ze.set("partly-cloudy-and-rain",{icon:xe.a,condition:{cs:"Polojasno a  d\xe9\u0161\u0165",en:"Partly cloudy and rain",ru:"\u0414\u043e\u0436\u0434\u044c",de:"Teilweise bew\xf6lkt und Regen"},getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}),ze.set("overcast-and-rain",{icon:je.a,condition:{cs:"Zata\u017eeno a d\xe9\u0161\u0165",en:"Overcast and rain",ru:"C\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",de:"Bedeckt und Regen"},getClassName:function(e){return"d"===e?"rain_day":"rain_night"}}),ze.set("overcast-thunderstorms-with-rain",{icon:ke.a,condition:{cs:"Siln\xfd d\xe9\u0161\u0165, bou\u0159ka",en:"Overcast thunderstorms and rain",ru:"C\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c, \u0433\u0440\u043e\u0437\u0430",de:"Bedeckte Gewitter und Regen"},getClassName:function(e){return"thunderstorm"}}),ze.set("cloudy-and-light-rain",{icon:be.a,condition:{cs:"Polojasno a slab\xfd d\xe9\u0161\u0165",en:"Partly cloudy and light rain",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u043e\u0436\u0434\u044c",de:"Teilweise bew\xf6lkt und leichter Regen"},getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}),ze.set("overcast-and-light-rain",{icon:xe.a,condition:{cs:"Polojasno a  d\xe9\u0161\u0165",en:"Partly cloudy and rain",ru:"\u0414\u043e\u0436\u0434\u044c",de:"Teilweise bew\xf6lkt und Regen"},getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}),ze.set("cloudy-and-rain",{icon:je.a,condition:{cs:"Zata\u017eeno a d\xe9\u0161\u0165",en:"Overcast and rain",ru:"C\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",de:"Bedeckt und Regen"},getClassName:function(e){return"d"===e?"rain_day":"rain_night"}}),ze.set("overcast-and-wet-snow",{icon:Te.a,condition:{cs:"D\xe9\u0161\u0165 se sn\u011bhem",en:"Overcast and wet snow",ru:"\u0414\u043e\u0436\u0434\u044c \u0441\u043e \u0441\u043d\u0435\u0433\u043e\u043c",de:"Bedeckter und nasser Schnee"},getClassName:function(e){return"rain_snow"}}),ze.set("partly-cloudy-and-light-snow",{icon:De.a,condition:{cs:"Polojasno a slab\xfd sn\xedh",en:"Partly cloudy and snow",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433",de:"Teilweise bew\xf6lkt und Schnee"},getClassName:function(e){return"snow_night"}}),ze.set("partly-cloudy-and-snow",{icon:De.a,condition:{cs:"Sn\xedh",en:"Snow",ru:"C\u043d\u0435\u0433",de:"Schnee"},getClassName:function(e){return"snow_night"}}),ze.set("overcast-and-snow",{icon:Le.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snowfall",ru:"C\u043d\u0435\u0433\u043e\u043f\u0430\u0434",de:"Schneefall"},getClassName:function(e){return"snow_night"}}),ze.set("cloudy-and-light-snow",{icon:Le.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snowy",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433",de:"Schneebedeckt"},getClassName:function(e){return"snow_night"}}),ze.set("overcast-and-light-snow",{icon:Le.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snowy",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433",de:"Schneebedeckt"},getClassName:function(e){return"snow_night"}}),ze.set("cloudy-and-snow",{icon:Le.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snow",ru:"C\u043d\u0435\u0433",de:"Schnee"},getClassName:function(e){return"snow_night"}}),ze.set("haze",{icon:Me.a,condition:{cs:"Mlha",en:"Fog",ru:"\u0422\u0443\u043c\u0430\u043d",de:"Nebel"},getClassName:function(e){return"d"===e?"clear_day":"clear_night"}}),ze.set("tornado",{icon:Fe.a,condition:{cs:"Torn\xe1do",en:"Tornado",ru:"\u0422\u043e\u0440\u043d\u0430\u0434\u043e",de:"Tornado"},getClassName:function(e){return"d"===e?"overcast":"cloudy_night"}});var Be=ze,He=a(34),qe=a.n(He);a(117);function Ue(e){var t=e.forecast,a=e.dic,n=Be.get(t.cond);return r.a.createElement("div",{className:"hour_card"},r.a.createElement("div",{className:"text-white"},t.hour,a.time.h),r.a.createElement("span",{className:"text-white"},Math.round(t.temp),"\xb0"),r.a.createElement("div",null,r.a.createElement("img",{src:n.icon,width:"24",height:"24",alt:""})))}var Ve=function(e){var t=e.hourly,a=e.dic,n=function(e){var t=e.text,a=e.className;return r.a.createElement("div",{className:a},t)},c=n({text:"<",className:"arrow-prev"}),i=n({text:">",className:"arrow-next"});console.log("hourly"),console.dir(t);var o=0,s=t.map((function(e){return o++,r.a.createElement(Ue,{forecast:e,dic:a,key:"h_".concat(o)})}));return r.a.createElement("div",{style:{height:"100px"}},r.a.createElement(qe.a,{data:s,wheel:!1,transition:.3,translate:0,alignCenter:!0,clickWhenDrag:!1,dragging:!0,hideArrows:!0,hideSingleArrow:!0,scrollBy:1,arrowLeft:c,arrowRight:i}))},We=a(82),Qe=a(78),Ze=a.n(Qe),Je=a(79),Ge=a.n(Je);a(118);var Ye=function(e){var t=e.fact,a=e.dic,n=a.dayDuration,c=a.time,i=t.sunrise_hh_mm,o=t.sunset_hh_mm,s=t.day_duration,l="",d="card duration-card w-100 mt-3 mb-3 py-1";d+=" day";var u=i.split(":"),m=o.split(":"),f=(Object(We.a)(new Date(2020,1,1,parseInt(m[0],10),parseInt(m[1],10)),new Date(2020,1,1,parseInt(u[0],10),parseInt(u[1],10))),s.h),p=s.m;return l="".concat(n.duration,": ").concat(f," ").concat(c.h," ").concat(p," ").concat(c.min),r.a.createElement("div",{className:d},r.a.createElement("div",{className:"row mx-0 d-flex flex-row"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center mx-2"},function(){return!1===(arguments.length>0&&void 0!==arguments[0]&&arguments[0])?r.a.createElement("img",{src:Ze.a,alt:"sun icon",width:68,height:68}):r.a.createElement("img",{src:Ge.a,alt:"sun icon",width:68,height:68})}(!1)),function(e,t,a,n){return r.a.createElement("div",{className:"d-flex flex-column ml-1"},r.a.createElement("h6",{className:"card-title"},e),r.a.createElement("span",{className:"card-text"},"".concat(n.sunrise," - ").concat(t)),r.a.createElement("span",{className:"card-text"},"".concat(n.sunset," - ").concat(a)))}(l,i,o,n)))},$e="ADD_LOCATION_TO_FAVORITES",Ke="REMOVE_LOCATION_FROM_FAVORITES";function Xe(e,t){return e.findIndex((function(e){return e.name===t.name&&e.country===t.country&&e.region===t.region}))}var et=function(){var e=Object(n.useContext)(H),t=e.dictionary,a=e.language,c=Object(s.d)(),i=Object(s.e)((function(e){return{fact:e.weather.fact,currentHourly:e.weather.currentHourly,location:e.weather.location,favorites:e.favorites.all,processing:e.weather.processing}}),s.c),o=i.fact,l=i.location,d=i.currentHourly,u=i.favorites,m=i.processing,f=Be.get(o.condition),p=f.getClassName(o.day_part),h=-1!==Xe(u,l);return r.a.createElement("div",null,r.a.createElement("div",{className:"row mx-0"},r.a.createElement(K,{condClassName:p},r.a.createElement(ce,{location:l,dateinfo:o.dateinfo,processing:m,addToFavorite:function(){return c(function(e){return function(t){t({type:$e,payload:e})}}(l))},isFavorite:h,dic:t}),r.a.createElement(me,{fact:o,dic:t,language:a,cond:f}),r.a.createElement(Ve,{hourly:d,dic:t}))),r.a.createElement("div",{className:"row mx-0"},function(e,t){return"sunrise_hh_mm"in e?r.a.createElement(Ye,{fact:e,dic:t}):""}(o,t)))},tt=a(127);a(119);var at=function(e){var t=e.forecast,a=e.dic,n=e.language,c=a.weatherDic,i={locale:a.locale},o=(t.morning,t.day,t.evening,t.night,Object(tt.a)(t.dt)),s=Object(ae.a)(o,"EE",i);s=s.charAt(0).toUpperCase()+s.slice(1);var l=Object(ae.a)(o,"dd.MM",i),d=Be.get(t.condition),u=d.condition[n.id],m="forecast_day_wrapper ".concat(function(e){var t=e.temp_max;return t<=-10?"freezy":t>-10&&t<=5?"cool":t>5&&t<=20?"warm":"hot"}(t));return r.a.createElement("div",{className:m},r.a.createElement("div",{className:"w-100 h-100 flex-grow-1 flex-fill"},r.a.createElement("span",{className:"fc_day_part__title"},"".concat(s,", ").concat(l)),r.a.createElement("div",{className:"d-flex flex-column justify-content- align-items-center mt-4"},r.a.createElement("div",null,r.a.createElement("img",{src:d.icon,width:"48",height:"48",alt:""})),r.a.createElement("span",{id:"w_current_fact_temp",className:"fc_temp_day","data-testid":"w_current_fact_temp"},Math.round(t.temp_max)," \xb0\u0421"),r.a.createElement("span",{id:"w_current_fact_temp",className:"fc_temp_night","data-testid":"w_current_fact_temp"},Math.round(t.temp_min)," \xb0\u0421"),r.a.createElement("span",{className:"text-center"},u))),r.a.createElement("div",{className:"day_info"},r.a.createElement("div",{className:"day_info_row"},r.a.createElement("span",{className:"fc_info_title"},c.wind),r.a.createElement("span",{className:"fc_info_value"},t.wind_speed," ",c.wind_um)),r.a.createElement("div",{className:"day_info_row"},r.a.createElement("span",{className:"fc_info_title"},c.humidity),r.a.createElement("span",{className:"fc_info_value"},t.humidity,"%")),r.a.createElement("div",{className:"day_info_row"},r.a.createElement("span",{className:"fc_info_title"},c.pressure),r.a.createElement("span",{className:"fc_info_value"},t.pressure_mm," ",c.pressure_um)),r.a.createElement("div",{className:"day_info_row"},r.a.createElement("span",{className:"fc_info_title"},c.uvi),r.a.createElement("span",{className:"fc_info_value"},t.uvi,"%"))))};a(120);var nt=Object(s.b)((function(e){return{forecasts:e.weather.forecasts}}))((function(e){var t=e.forecasts,a=Object(n.useContext)(H),c=a.dictionary,i=a.language,o=function(e){var t=e.text,a=e.className;return r.a.createElement("div",{className:a},t)},s=o({text:"<",className:"arrow-prev"}),l=o({text:">",className:"arrow-next"}),d=t.map((function(e){return console.dir(e),r.a.createElement(at,{forecast:e,key:e.dt,dic:c,language:i})}));return r.a.createElement("div",{"data-testid":"fc_card_wrapper",className:"forecast_wrapper ml-2"},r.a.createElement("h5",{className:"card-title ml-2"},c.forecast.title),r.a.createElement(qe.a,{data:d,wheel:!1,transition:.3,translate:0,alignCenter:!0,clickWhenDrag:!1,dragging:!0,hideArrows:!0,hideSingleArrow:!0,scrollBy:1,arrowLeft:s,arrowRight:l}))})),rt=function(e){var t=e.message;return r.a.createElement("div",{className:"alert alert-primary",role:"alert"},t)};var ct=function(){var e=Object(s.e)((function(e){return e.weather.location}),s.c),t=Object(n.useContext)(H).dictionary;return e?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6"},r.a.createElement(et,null)),r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 mt-2 mt-md-0"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement(nt,null))):r.a.createElement(rt,{message:t.search.loadingPlaceholder})};a(121);var it=function(e){var t=e.showModal,a=e.qParams,n=e.onYes,c=e.onCancel,i=!0===t?"modal bd-example-modal-sm":"modal fade bd-example-modal-sm",o={};return!0===t&&(o.display="block"),r.a.createElement("div",{className:i,style:o,id:"staticBackdrop","data-backdrop":"static",tabIndex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-sm",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},a.text),r.a.createElement("div",{className:"modal-footer py-0"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:n},"Ano"),r.a.createElement("button",{type:"button",className:"btn",onClick:c},"Zru\u0161en\xed")))))};var ot=Object(s.b)((function(e){return{favorites:e.favorites.all}}))(Object(u.f)((function(e){var t=Object(n.useState)(!1),a=Object(D.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)({text:"",subj:null}),s=Object(D.a)(o,2),l=s[0],u=s[1],m=e.favorites,f=e.dispatch,p=function(){u({text:"",subj:null}),i(!1)},h=function(){var e;f((e=l.subj,console.log("removing..."),console.dir(e),function(t){t({type:Ke,payload:e})})),p()},g=0,v=m.map((function(t){return g+=1,r.a.createElement("div",{className:"card favorites_item",key:"fav_item_".concat(g),onClick:function(){return a=t,e.dispatch(C(a)),e.dispatch(k(a)),void e.history.push("/");var a}},r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"mr-2 close",onClick:function(e){return function(e,t){e.stopPropagation();var a="Do you want to remove ".concat(t.name," from favorites?");u({text:a,subj:t}),i(!0)}(e,t)}},r.a.createElement("span",{className:"text-white"},"\xd7"))),r.a.createElement("div",{className:"card-body pt-0"},r.a.createElement("h5",{className:"card-title text-white"},t.name),r.a.createElement("h6",{className:"card-subtitle mb-2 text-white"},"".concat(t.country,", ").concat(t.region))))})),_=null;return 0===m.length&&(_=r.a.createElement("div",{className:"alert alert-warning",role:"alert"},"Jejda, zd\xe1 se, \u017ee nem\xe1te vybran\xe1 m\xedsta!",r.a.createElement(d.b,{to:"/"},"P\u0159ejd\u011bte na domovskou str\xe1nku"),"a zjist\u011bte p\u0159edpov\u011b\u010f po\u010das\xed ve va\u0161em obl\xedben\xe9m m\u011bst\u011b!")),r.a.createElement("div",{className:"container mt-2 h-100"},_,r.a.createElement("div",{className:"favorites_row"},v),r.a.createElement(it,{showModal:!0===c,qParams:l,onCancel:function(){p()},onYes:function(){return h()}}))})));var st=function(){var e=Object(s.e)((function(e){return e.weather.location}),s.c),t=Object(s.d)();return e||t((function(e){return y().getCurrentInfo().then((function(t){e(k(t)),e({type:N,payload:t})}))})),r.a.createElement(q,null,r.a.createElement("div",{className:"container-fluid app-container px-0"},r.a.createElement(d.a,null,r.a.createElement($,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:ct}),r.a.createElement(u.a,{path:"/favorites",component:ot})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var lt=a(28),dt=a(21),ut={coordinates:{lat:null,lon:null},localeOptions:{locale:F.a},processing:!1,locationList:[],location:null,info:null,fact:{temp:-0,feels_like:-0,condition:"cloudy",wind_speed:-1,pressure_mm:0,humidity:0,hourly:[]},currentHourly:[],current:null,forecasts:[],fcSelected:null},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(dt.a)({},e,{processing:!0});case"START_REQUEST_LOCATIONS":return e;case"REQUEST_LOCATIONS_SUCCESS":return Object(dt.a)({},e,{locationList:t.payload});case b:return e;case N:return Object(dt.a)({},e,{location:t.payload});case"SET_COORDINATES":return Object(dt.a)({},e,{coordinates:t.payload});case x:return Object(dt.a)({},e,{processing:!1,info:t.payload.info,fact:t.payload.current,currentHourly:t.payload.current.hourly,forecasts:Object(lt.a)(t.payload.daily)});default:return e}},ft={all:[]};var pt=Object(i.combineReducers)({weather:mt,favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:return-1===Xe(e.all,t.payload)?Object(dt.a)({},e,{all:[].concat(Object(lt.a)(e.all),[t.payload])}):e;case Ke:var a=Xe(e.all,t.payload);return-1===a?this.state:{all:[].concat(Object(lt.a)(e.all.slice(0,a)),Object(lt.a)(e.all.slice(a+1)))};default:return e}}}),ht=Object(i.createStore)(pt,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));Object(c.render)(r.a.createElement(s.a,{store:ht},r.a.createElement(st,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,t,a){e.exports=a.p+"static/media/overcast-and-snow.b3673467.svg"},44:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-and-light-rain.418c454c.svg"},45:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-and-rain.075febfd.svg"},46:function(e,t,a){e.exports=a.p+"static/media/overcast-and-rain.ef559ac7.svg"},47:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-and-light-snow.29c5f202.svg"},63:function(e,t,a){e.exports=a.p+"static/media/bookmark.eb2c4a38.svg"},65:function(e,t,a){e.exports=a.p+"static/media/update.8d36acbb.svg"},67:function(e,t,a){e.exports=a.p+"static/media/wind.51bb01ca.svg"},68:function(e,t,a){e.exports=a.p+"static/media/humidity.55d1c59d.svg"},69:function(e,t,a){e.exports=a.p+"static/media/pressure_light.20964ed5.svg"},70:function(e,t,a){e.exports=a.p+"static/media/clear.346b346f.svg"},71:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy.e9ee5d2d.svg"},72:function(e,t,a){e.exports=a.p+"static/media/cloudy.7ee70f9f.svg"},73:function(e,t,a){e.exports=a.p+"static/media/overcast.bd652b9e.svg"},74:function(e,t,a){e.exports=a.p+"static/media/overcast-thunderstorms-with-rain.f50dfdb7.svg"},75:function(e,t,a){e.exports=a.p+"static/media/overcast-and-wet-snow.9d8867ee.svg"},76:function(e,t,a){e.exports=a.p+"static/media/haze.6c4a03a5.svg"},77:function(e,t,a){e.exports=a.p+"static/media/tornado.d82015ef.svg"},78:function(e,t,a){e.exports=a.p+"static/media/sun.dd42591b.svg"},79:function(e,t,a){e.exports=a.p+"static/media/moon.5039864c.svg"},83:function(e,t,a){e.exports=a(122)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.cf78a92b.chunk.js.map