(this["webpackJsonptm-weather-forecast"]=this["webpackJsonptm-weather-forecast"]||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){e.exports=a.p+"static/media/logo.cfb1e955.svg"},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=(a(83),a(24)),o=a(5),s=a(60),l=a(12),d=a(13),u=a(18),m=a(17),p=a(19),f=a(23),h=a(20),v=a(1),_=a.n(v),g=(_.a.string.isRequired,_.a.string.isRequired,_.a.string.isRequired,_.a.number.isRequired,_.a.number.isRequired,_.a.string,_.a.string,_.a.number,_.a.string,a(26)),w=a.n(g),E=a(36),y=a.n(E),b=null,N=function(){function e(){Object(l.a)(this,e),this.host="https://tm-weather-js-api.herokuapp.com"}return Object(d.a)(e,[{key:"findLocation",value:function(e){var t;return w.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.a.awrap(y.a.get("".concat(this.host,"/api/autocomplete/?q=").concat(e.trim())));case 3:if(!(200===(t=a.sent).status&&t.data instanceof Array)){a.next=6;break}return a.abrupt("return",t.data);case 6:return a.abrupt("return",[]);case 9:throw a.prev=9,a.t0=a.catch(0),a.t0;case 12:case"end":return a.stop()}}),null,this,[[0,9]])}},{key:"getForecast",value:function(e){var t;return w.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.a.awrap(y.a.get("".concat(this.host,"/api/forecast/"),{params:{lat:e.lat,lon:e.lon,limit:e.limit}}));case 3:if(t=a.sent,!Object.prototype.hasOwnProperty.call(t.data,"current")){a.next=6;break}return a.abrupt("return",t.data);case 6:return a.abrupt("return",[]);case 9:throw a.prev=9,a.t0=a.catch(0),a.t0;case 12:case"end":return a.stop()}}),null,this,[[0,9]])}},{key:"getCurrentInfo",value:function(e){var t,a;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={},e instanceof Object&&(t.params=e),n.prev=2,n.next=5,w.a.awrap(y.a.get("".concat(this.host,"/api/current/"),t));case 5:if(200!==(a=n.sent).status){n.next=8;break}return n.abrupt("return",a.data);case 8:return n.abrupt("return",[]);case 11:throw n.prev=11,n.t0=n.catch(2),n.t0;case 14:case"end":return n.stop()}}),null,this,[[2,11]])}}]),e}();function O(){return null===b&&(b=new N),b}var x="PROCESSING_REQUEST",j="REQUEST_LOCATIONS_FAILED",C="SET_LOCATION",k="SET_FORECAST_INFO",S=function(e){return{type:"REQUEST_LOCATIONS_SUCCESS",payload:e}};function T(){return function(e){e(S([]))}}function I(e){return function(t){t({type:C,payload:e})}}function M(e){return function(t){var a=O();return t({type:x}),console.log("msg from setForecasts func"),console.dir(e),a.getForecast({lat:e.lat,lon:e.lon,limit:7}).then((function(e){t({type:k,payload:e})})).catch((function(e){}))}}var F=a(28),P=function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))},L=(a(105),function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"autocomplete_input_btn_icon"},c.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))});var R=function(e){var t=e.searchOnInput,a=e.searchOnClear,r=e.onSelect,i=e.locations,o=Object(n.useState)(""),s=Object(F.a)(o,2),l=s[0],d=s[1],u=Object(n.useState)(!0),m=Object(F.a)(u,2),p=m[0],f=m[1],h=Object(n.useRef)();P(h,(function(){f(!1)}));var v=!0===p&&i.length>0,_=i.map((function(e,a){return c.a.createElement("li",{key:a,className:"autocomplete_dropdown_item",onClick:function(a){return n=e,a.stopPropagation(),t(""),d(""),f(!1),void r(n);var n},"data-testid":"ac_dropdown_item_".concat(a)},"".concat(e.name))}));return c.a.createElement("div",{className:"autocomplete_wrapper",ref:h},c.a.createElement("div",{className:"autocomplete_input_wrapper",role:"search"},c.a.createElement("input",{"data-testid":"ac_input",type:"text",placeholder:"M\u011bsto",value:l,onChange:function(e){return function(e){t(e.target.value),d(e.target.value),f(!0)}(e)},onFocus:function(){i.length>0&&f(!0)},className:"autocomplete_input"}),c.a.createElement("div",{className:"autocomplete_input_btn_wrapper"},c.a.createElement("div",{"data-testid":"ac_input_clear_btn",className:"autocomplete_input_icon",onClick:function(){return d(""),f(!1),void a()}},c.a.createElement(L,null)))),!0===v&&c.a.createElement("ul",{"data-testid":"ac_dropdown",className:"autocomplete_dropdown"},_))},D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).searchOnInput=function(e){a.setState({search:e});var t,n=a.props.dispatch;"string"===typeof e&&e.trim().length>1?n((t=e.trim(),function(e){return O().findLocation(t).then((function(t){console.dir(t),e(S(t))})).catch((function(){console.dir("error"),e({type:j,payload:[]})}))})):n(T())},a.searchOnClear=function(){a.setState({search:""}),a.props.dispatch(T())},a.listOnSelect=function(e){a.props.dispatch(I(e)),a.props.dispatch(M(e)),a.props.history.push("/")},a.state={search:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement(R,{search:this.state.search,searchOnInput:this.searchOnInput,onSelect:this.listOnSelect,searchOnClear:this.searchOnClear,locations:this.props.locationList})}}]),t}(c.a.Component),A=Object(o.b)((function(e){return{locationList:e.weather.locationList}}))(Object(h.f)(D)),z=a(62),U=a.n(z);a(107),a(108);var V=Object(o.b)((function(e){return{favoritesCount:e.favorites.all.length}}))((function(e){var t=e.favoritesCount;return c.a.createElement("nav",{className:"app-header px-2 py-2","data-testid":"navbar-top",role:"heading"},c.a.createElement("div",{className:"row mx-2 w-100 d-flex flex-column flex-md-row"},c.a.createElement("div",{className:"d-flex flex-shrink-1 flex-row justify-content-start align-items-start"},c.a.createElement("span",{className:"app-header-title ml-2"},"Po\u010das\xed")),c.a.createElement("div",{className:"flex-grow-1 justify-content-start align-items-start ml-2 ml-sm-1 ml-md-2 mr-1 mt-2 mt-sm-2 mt-md-0"},c.a.createElement("div",{className:"d-flex flex-row align-items-center "},c.a.createElement("div",{className:"flex-grow-1"},c.a.createElement(A,null)),c.a.createElement(f.b,{to:"/favorites"},c.a.createElement("div",{className:"bookmarked"},c.a.createElement("img",{src:U.a,width:"36",height:"36",alt:""}),c.a.createElement("span",{className:"bookmarked_count","data-testid":"nav-fv-count"},t)))))))})),q=a(32),B=a(63),H=a.n(B),Q=a(64),Z=a.n(Q),J=a(65),W=a.n(J),Y=a(66),G=a.n(Y),$=a(44),K=a.n($),X=a(45),ee=a.n(X),te=a(46),ae=a.n(te),ne=a(67),ce=a.n(ne),re=a(68),ie=a.n(re),oe=a(47),se=a.n(oe),le=a(30),de=a.n(le),ue=a(69),me=a.n(ue),pe=a(70),fe=a.n(pe),he=new Map;he.set("clear",{icon:H.a,condition:{cs:"Jasno",en:"Clear",ru:"\u042f\u0441\u043d\u043e"},getClassName:function(e){return"d"===e?"clear_day":"clear_night"}}),he.set("partly-cloudy",{icon:Z.a,condition:{cs:"Polojasno",en:"Partly cloudy",ru:"\u041c\u0430\u043b\u043e\u043e\u0431\u043b\u0430\u0447\u043d\u043e"},getClassName:function(e){return"d"===e?"cloudy_light_day":"cloudy_light_night"}}),he.set("cloudy",{icon:W.a,condition:{cs:"Polojasno",en:"Cloudy",ru:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e \u0441 \u043f\u0440\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f\u043c\u0438"},getClassName:function(e){return"d"===e?"cloudy_day":"cloudy_night"}}),he.set("overcast",{icon:G.a,condition:{cs:"Zata\u017eeno",en:"Overcast",ru:"\u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e"},getClassName:function(e){return"d"===e?"overcast":"cloudy_night"}}),he.set("partly-cloudy-and-light-rain",{icon:K.a,condition:{cs:"Polojasno a slab\xfd d\xe9\u0161\u0165",en:"Partly cloudy and light rain",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u043e\u0436\u0434\u044c"},getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}),he.set("partly-cloudy-and-rain",{icon:ee.a,condition:{cs:"Polojasno a  d\xe9\u0161\u0165",en:"Partly cloudy and rain",ru:"\u0414\u043e\u0436\u0434\u044c"},getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}),he.set("overcast-and-rain",{icon:ae.a,condition:{cs:"Zata\u017eeno a d\xe9\u0161\u0165",en:"Overcast and rain",ru:"C\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c"},getClassName:function(e){return"d"===e?"rain_day":"rain_night"}}),he.set("overcast-thunderstorms-with-rain",{icon:ce.a,condition:{cs:"Siln\xfd d\xe9\u0161\u0165, bou\u0159ka",en:"Overcast thunderstorms and rain",ru:"C\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c, \u0433\u0440\u043e\u0437\u0430"},getClassName:function(e){return"thunderstorm"}}),he.set("cloudy-and-light-rain",{icon:K.a,condition:{cs:"Polojasno a slab\xfd d\xe9\u0161\u0165",en:"Partly cloudy and light rain",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u043e\u0436\u0434\u044c",getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}}),he.set("overcast-and-light-rain",{icon:ee.a,condition:{cs:"Polojasno a  d\xe9\u0161\u0165",en:"Partly cloudy and rain",ru:"\u0414\u043e\u0436\u0434\u044c"},getClassName:function(e){return"d"===e?"light_rain_day":"light_rain_night"}}),he.set("cloudy-and-rain",{icon:ae.a,condition:{cs:"Zata\u017eeno a d\xe9\u0161\u0165",en:"Overcast and rain",ru:"C\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c"},getClassName:function(e){return"d"===e?"rain_day":"rain_night"}}),he.set("overcast-and-wet-snow",{icon:ie.a,condition:{cs:"D\xe9\u0161\u0165 se sn\u011bhem",en:"Overcast and wet snow",ru:"\u0414\u043e\u0436\u0434\u044c \u0441\u043e \u0441\u043d\u0435\u0433\u043e\u043c"},getClassName:function(e){return"rain_snow"}}),he.set("partly-cloudy-and-light-snow",{icon:se.a,condition:{cs:"Polojasno a slab\xfd sn\xedh",en:"Partly cloudy and snow",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433"},getClassName:function(e){return"snow_night"}}),he.set("partly-cloudy-and-snow",{icon:se.a,condition:{cs:"Sn\xedh",en:"Snow",ru:"C\u043d\u0435\u0433"},getClassName:function(e){return"snow_night"}}),he.set("overcast-and-snow",{icon:de.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snowfall",ru:"C\u043d\u0435\u0433\u043e\u043f\u0430\u0434"},getClassName:function(e){return"snow_night"}}),he.set("cloudy-and-light-snow",{icon:de.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snowy",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433"},getClassName:function(e){return"snow_night"}}),he.set("overcast-and-light-snow",{icon:de.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snowy",ru:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u043d\u0435\u0433"},getClassName:function(e){return"snow_night"}}),he.set("cloudy-and-snow",{icon:de.a,condition:{cs:"Sn\u011b\u017een\xed",en:"Snow",ru:"C\u043d\u0435\u0433"},getClassName:function(e){return"snow_night"}}),he.set("haze",{icon:me.a,condition:{cs:"Mlha",en:"Fog",ru:"\u0422\u0443\u043c\u0430\u043d"},getClassName:function(e){return"d"===e?"clear_day":"clear_night"}}),he.set("tornado",{icon:fe.a,condition:{cs:"Torn\xe1do",en:"Tornado",ru:"\u0422\u043e\u0440\u043d\u0430\u0434\u043e"},getClassName:function(e){return"d"===e?"overcast":"cloudy_night"}});var ve=he;a(109);function _e(e){var t=e.forecast,a=ve.get(t.cond);return c.a.createElement("div",{className:"hour_card"},c.a.createElement("div",{className:"text-white"},t.hour,"h"),c.a.createElement("span",{className:"text-white"},Math.round(t.temp),"\xb0"),c.a.createElement("div",null,c.a.createElement("img",{src:a.icon,width:"24",height:"24",alt:""})))}var ge=function(e){var t=e.hourly.map((function(e){return c.a.createElement(_e,{forecast:e})}));return c.a.createElement("div",{style:{height:"100px"}},c.a.createElement(q.a,{config:{stiffness:160,damping:110}},t))},we=(a(110),a(25)),Ee=a(73),ye=a(71),be=a.n(ye),Ne=a(39),Oe=a.n(Ne),xe=a(40),je=a.n(xe),Ce=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=(this.props||"#fcc603").fill,t=(this.props||"24").width,a=(this.props||"24").height;return!0===this.props.isFavorite?c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,viewBox:"0 0 24 24","data-testid":"w_current_svg_favorites",className:"isFavorite"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:e})):c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,viewBox:"0 0 24 24","data-testid":"w_current_svg_favorites"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",fill:e}))}}]),t}(c.a.Component),ke=a(72),Se=a.n(ke),Te="ADD_LOCATION_TO_FAVORITES",Ie="REMOVE_LOCATION_FROM_FAVORITES";function Me(e,t){return e.findIndex((function(e){return e.name===t.name&&e.country===t.country&&e.region===t.region}))}var Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).addToFav=function(){var e;a.props.dispatch((e=a.props.location,function(t){t({type:Te,payload:e})}))},a.state={isFavorite:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.favorites,a=e.location;this.setState({isFavorite:-1!==Me(t,a)})}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,c=n.favorites,r=n.location;if(e.location!==r)this.setState({isFavorite:-1!==Me(c,r)});else{var i=-1!==Me(c,r);i!==t.isFavorite&&this.setState({isFavorite:i})}}},{key:"getLocationDateTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,a=60*t.getTimezoneOffset()+60*e;return Object(Ee.a)(t,a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.localeOptions,n=t.location,r=t.fact;console.dir(r);var i=ve.get(r.condition),o=i.condition.cs,s="-",l="-",d="-";if("dateinfo"in r){var u=this.getLocationDateTime(r.dateinfo.offset);s=Object(we.a)(u,"EEEE",a),l=Object(we.a)(u,"dd MMMM yyyy",a),d=Object(we.a)(u,"HH:mm",a)}var m="card current-card "+i.getClassName(r.day_part);return c.a.createElement("div",{className:m,id:"id_current_weather_layout","data-testid":"w_current_wrapper"},c.a.createElement("div",{className:"card-body card-canvas"},c.a.createElement("div",{className:"d-flex flex-row justify-content-between"},c.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center"},c.a.createElement("h5",{className:"card-title text-white",id:"w_current_loc_title","data-testid":"w_current_loc_title"},"".concat(n.name,", ").concat(n.country)),c.a.createElement("span",{id:"w_current_add_to_fav_btn",className:"current_favorite_icon mb-2 ml-2","data-testid":"w_current_add_to_fav_btn",onClick:this.addToFav},c.a.createElement(Ce,{isFavorite:this.state.isFavorite,fill:"#fcc603",width:"24",height:"24"}))),function(){if(!0===e.props.processing)return c.a.createElement("span",null,c.a.createElement("img",{id:"w_current_update_icon",src:Se.a,alt:"update icon",width:"24",height:"24",className:"processing","data-testid":"w_current_update_icon"}))}()),c.a.createElement("h6",{id:"w_current_today_title",className:"card-subtitle mb-2 text-white","data-testid":"w_current_today_title"},"Dnes ","".concat(s,", ").concat(l,", ").concat(d)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-8"},c.a.createElement("div",{className:"row mx-0"},c.a.createElement("span",{id:"w_current_fact_temp",className:"current_temp text-white","data-testid":"w_current_fact_temp"},Math.round(r.temp)," \xb0\u0421"),c.a.createElement("div",{className:"current_img ml-3"},c.a.createElement("img",{src:i.icon,width:"48",height:"48",alt:""})))),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-4"},c.a.createElement("div",{className:"row mx-0 d-flex flex-column justify-content-center mt-2"},c.a.createElement("span",{id:"w_current_condition",className:"text-white","data-testid":"w_current_condition"},o),c.a.createElement("span",{id:"w_current_feels_like",className:"text-white","data-testid":"w_current_feels_like"},"Pocitov\u011b ",r.feels_like,"\xb0\u0421")))),c.a.createElement("div",{className:"d-flex flex-row justify-content-between mt-2 addInfo"},c.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center mr-2"},c.a.createElement("span",{className:"text-white"},"V\xedtr"),c.a.createElement("img",{src:be.a,width:"24",height:"24",alt:""}),c.a.createElement("span",{id:"w_current_wind_speed",className:"text-white ml-1","data-testid":"w_current_wind_speed"},r.wind_speed," m/sec")),c.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center mr-2"},c.a.createElement("span",{className:"text-white"},"Vlhkost"),c.a.createElement("img",{src:Oe.a,width:"24",height:"24",alt:"humidity icon"}),c.a.createElement("span",{id:"w_current_humidity",className:"text-white ml-1","data-testid":"w_current_humidity"},r.humidity," %")),c.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center mr-2"},c.a.createElement("span",{className:"text-white"},"Tlak"),c.a.createElement("img",{src:je.a,width:"24",height:"24",alt:"pressure icon"}),c.a.createElement("span",{id:"w_current_pressure_mm",className:"text-white ml-1","data-testid":"w_current_pressure_mm"},r.pressure_mm," mm"))),c.a.createElement("div",{className:""},c.a.createElement(ge,{hourly:r.hourly}))))}}]),t}(c.a.Component),Pe=a(76),Le=a(74),Re=a.n(Le),De=a(75),Ae=a.n(De);a(111);var ze=function(e){var t=e.fact,a=t.sunrise_hh_mm,n=t.sunset_hh_mm,r=t.day_duration,i="",o="card duration-card w-100 mt-3 mb-3 py-1";o+=" day";var s=a.split(":"),l=n.split(":"),d=(Object(Pe.a)(new Date(2020,1,1,parseInt(l[0],10),parseInt(l[1],10)),new Date(2020,1,1,parseInt(s[0],10),parseInt(s[1],10))),r.h),u=r.m;return i="D\xe9lka dne: ".concat(d," h ").concat(u," min"),c.a.createElement("div",{className:o},c.a.createElement("div",{className:"row mx-0 d-flex flex-row"},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center mx-2"},function(){return!1===(arguments.length>0&&void 0!==arguments[0]&&arguments[0])?c.a.createElement("img",{src:Re.a,alt:"sun icon",width:68,height:68}):c.a.createElement("img",{src:Ae.a,alt:"sun icon",width:68,height:68})}(!1)),function(e,t,a){return c.a.createElement("div",{className:"d-flex flex-column ml-1"},c.a.createElement("h6",{className:"card-title"},e),c.a.createElement("span",{className:"card-text"},"V\xfdchod slunce - ".concat(t)),c.a.createElement("span",{className:"card-text"},"Z\xe1pad slunce - ".concat(a)))}(i,a,n)))};var Ue=Object(o.b)((function(e){return{localeOptions:e.weather.localeOptions,location:e.weather.location,info:e.weather.info,processing:e.weather.processing,favorites:e.favorites.all,fcSelectedDay:e.weather.fcSelected}}),null)((function(e){var t,a=e.localeOptions,n=e.location,r=e.info,i=e.favorites,s=(e.fcSelectedDay,e.processing),l=e.dispatch,d=Object(o.c)((function(e){return e.weather.fact}));return console.dir(d),c.a.createElement("div",null,c.a.createElement("div",{className:"row mx-0"},c.a.createElement(Fe,{localeOptions:a,location:n,info:r,fact:d,favorites:i,processing:s,dispatch:l})),c.a.createElement("div",{className:"row mx-0"},"sunrise_hh_mm"in(t=d)?c.a.createElement(ze,{fact:t}):""))})),Ve=a(115),qe=a(35);a(58);function Be(e){var t=e.weather,a=t.title,n=t.data;return c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"d-flex flex-column justify-content-start align-items-center"},c.a.createElement("span",null,a),c.a.createElement("span",null,Math.round(n.temp)," \xb0\u0421")))}var He=function(e){var t=e.forecast,a={locale:qe.a},n={morning:{title:"R\xe1no",data:t.morning},day:{title:"Den",data:t.day},evening:{title:"Ve\u010der",data:t.evening},night:{title:"Noc",data:t.night}},r=Object(Ve.a)(t.dt),i=Object(we.a)(r,"EE",a);i=i.charAt(0).toUpperCase()+i.slice(1);var o=Object(we.a)(r,"dd.MM",a),s=ve.get(t.condition),l=s.condition.cs,d=[];return Object.keys(n).forEach((function(e){d.push(c.a.createElement(Be,{key:e,weather:n[e]}))})),c.a.createElement("div",{className:"forecast_day_wrapper"},c.a.createElement("div",{className:"mb-1 w-100"},c.a.createElement("span",{className:"fc_day_part__title"},"".concat(i,", ").concat(o)),c.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center mt-4"},c.a.createElement("div",null,c.a.createElement("img",{src:s.icon,width:"48",height:"48",alt:""})),c.a.createElement("span",null,l),c.a.createElement("span",{id:"w_current_fact_temp",className:"fc_temp_day","data-testid":"w_current_fact_temp"},Math.round(t.temp_max)," \xb0\u0421"),c.a.createElement("span",{id:"w_current_fact_temp",className:"fc_temp_night","data-testid":"w_current_fact_temp"},Math.round(t.temp_min)," \xb0\u0421"),c.a.createElement("hr",null),c.a.createElement("div",{className:"day_info"},c.a.createElement("div",{className:"day_info_row"},c.a.createElement("span",{className:"fc_info_title"},"V\xedtr"),c.a.createElement("span",{className:"fc_info_value"},t.wind_speed," m/sec")),c.a.createElement("div",{className:"day_info_row"},c.a.createElement("span",{className:"fc_info_title"},"Vlhkost"),c.a.createElement("span",{className:"fc_info_value"},t.humidity,"%")),c.a.createElement("div",{className:"day_info_row"},c.a.createElement("span",{className:"fc_info_title"},"Tlak"),c.a.createElement("span",{className:"fc_info_value"},t.pressure_mm,"%")),c.a.createElement("div",{className:"day_info_row"},c.a.createElement("span",{className:"fc_info_title"},"Uvi"),c.a.createElement("span",{className:"fc_info_value"},t.uvi,"%"))))))};var Qe=Object(o.b)((function(e){return{forecasts:e.weather.forecasts}}))((function(e){var t=e.forecasts.map((function(e){return c.a.createElement(He,{forecast:e})}));return c.a.createElement("div",{"data-testid":"fc_card_wrapper",className:"forecast_wrapper ml-2"},c.a.createElement("h5",{className:"card-title ml-2"},"P\u0159edpov\u011b\u010f na 7 dny"),c.a.createElement("div",{style:{height:"22.7em"}},c.a.createElement(q.a,null,t)))}));var Ze=Object(o.b)((function(e){return{location:e.weather.location,info:e.weather.info}}))((function(e){return e.location?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6"},c.a.createElement(Ue,null)),c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 mt-2 mt-md-0"})),c.a.createElement("div",{className:"row mt-2"},c.a.createElement(Qe,null))):c.a.createElement("div",{className:"alert alert-primary",role:"alert"},"Data se na\u010d\xedtaj\xed...")}));a(112);var Je=function(e){var t=e.showModal,a=e.qParams,n=e.onYes,r=e.onCancel,i=!0===t?"modal bd-example-modal-sm":"modal fade bd-example-modal-sm",o={};return!0===t&&(o.display="block"),c.a.createElement("div",{className:i,style:o,id:"staticBackdrop","data-backdrop":"static",tabIndex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-sm",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-body"},a.text),c.a.createElement("div",{className:"modal-footer py-0"},c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:n},"Ano"),c.a.createElement("button",{type:"button",className:"btn",onClick:r},"Zru\u0161en\xed")))))};var We=Object(o.b)((function(e){return{favorites:e.favorites.all}}))(Object(h.f)((function(e){var t=Object(n.useState)(!1),a=Object(F.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)({text:"",subj:null}),s=Object(F.a)(o,2),l=s[0],d=s[1],u=e.favorites,m=e.dispatch,p=function(){d({text:"",subj:null}),i(!1)},h=function(){var e;m((e=l.subj,console.log("removing..."),console.dir(e),function(t){t({type:Ie,payload:e})})),p()},v=0,_=u.map((function(t){return v+=1,c.a.createElement("div",{className:"card favorites_item",key:"fav_item_".concat(v),onClick:function(){return a=t,e.dispatch(I(a)),e.dispatch(M(a)),void e.history.push("/");var a}},c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"mr-2 close",onClick:function(e){return function(e,t){e.stopPropagation();var a="Do you want to remove ".concat(t.name," from favorites?");d({text:a,subj:t}),i(!0)}(e,t)}},c.a.createElement("span",{className:"text-white"},"\xd7"))),c.a.createElement("div",{className:"card-body pt-0"},c.a.createElement("h5",{className:"card-title text-white"},t.name),c.a.createElement("h6",{className:"card-subtitle mb-2 text-white"},"".concat(t.country,", ").concat(t.region))))})),g=null;return 0===u.length&&(g=c.a.createElement("div",{className:"alert alert-warning",role:"alert"},"Jejda, zd\xe1 se, \u017ee nem\xe1te vybran\xe1 m\xedsta!",c.a.createElement(f.b,{to:"/"},"P\u0159ejd\u011bte na domovskou str\xe1nku"),"a zjist\u011bte p\u0159edpov\u011b\u010f po\u010das\xed ve va\u0161em obl\xedben\xe9m m\u011bst\u011b!")),c.a.createElement("div",{className:"container mt-2 h-100"},g,c.a.createElement("div",{className:"favorites_row"},_),c.a.createElement(Je,{showModal:!0===r,qParams:l,onCancel:function(){p()},onYes:function(){return h()}}))}))),Ye=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.dispatch;t||a((function(e){return O().getCurrentInfo().then((function(t){e(M(t)),e({type:C,payload:t})}))}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid app-container px-0"},c.a.createElement(f.a,null,c.a.createElement(V,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:Ze}),c.a.createElement(h.a,{path:"/favorites",component:We}))))}}]),t}(c.a.Component);Ye.defaultProps={location:null};var Ge=Object(o.b)((function(e){return{location:e.weather.location}}))(Ye);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=a(27),Ke=a(22),Xe={coordinates:{lat:null,lon:null},localeOptions:{locale:qe.a},processing:!1,locationList:[],location:null,info:null,fact:{temp:-0,feels_like:-0,condition:"cloudy",wind_speed:-1,pressure_mm:0,humidity:0,hourly:[]},current:null,forecasts:[],fcSelected:null},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(Ke.a)({},e,{processing:!0});case"START_REQUEST_LOCATIONS":return e;case"REQUEST_LOCATIONS_SUCCESS":return Object(Ke.a)({},e,{locationList:t.payload});case j:return e;case C:return Object(Ke.a)({},e,{location:t.payload});case"SET_COORDINATES":return Object(Ke.a)({},e,{coordinates:t.payload});case k:return console.dir("print drom reducer SET_FORECAST_INFO"),console.dir(t.payload),Object(Ke.a)({},e,{processing:!1,info:t.payload.info,fact:t.payload.current,forecasts:Object($e.a)(t.payload.daily)});default:return e}},tt={all:[]};var at=Object(i.c)({weather:et,favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return-1===Me(e.all,t.payload)?Object(Ke.a)({},e,{all:[].concat(Object($e.a)(e.all),[t.payload])}):e;case Ie:var a=Me(e.all,t.payload);return-1===a?this.state:{all:[].concat(Object($e.a)(e.all.slice(0,a)),Object($e.a)(e.all.slice(a+1)))};default:return e}}}),nt=Object(i.d)(at,Object(i.a)(s.a));Object(r.render)(c.a.createElement(o.a,{store:nt},c.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,t,a){e.exports=a.p+"static/media/overcast-and-snow.b3673467.svg"},39:function(e,t,a){e.exports=a.p+"static/media/humidity.55d1c59d.svg"},40:function(e,t,a){e.exports=a.p+"static/media/pressure_light.20964ed5.svg"},44:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-and-light-rain.418c454c.svg"},45:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-and-rain.075febfd.svg"},46:function(e,t,a){e.exports=a.p+"static/media/overcast-and-rain.ef559ac7.svg"},47:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-and-light-snow.29c5f202.svg"},58:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/bookmark.eb2c4a38.svg"},63:function(e,t,a){e.exports=a.p+"static/media/clear.346b346f.svg"},64:function(e,t,a){e.exports=a.p+"static/media/partly-cloudy.e9ee5d2d.svg"},65:function(e,t,a){e.exports=a.p+"static/media/cloudy.7ee70f9f.svg"},66:function(e,t,a){e.exports=a.p+"static/media/overcast.bd652b9e.svg"},67:function(e,t,a){e.exports=a.p+"static/media/overcast-thunderstorms-with-rain.f50dfdb7.svg"},68:function(e,t,a){e.exports=a.p+"static/media/overcast-and-wet-snow.9d8867ee.svg"},69:function(e,t,a){e.exports=a.p+"static/media/haze.6c4a03a5.svg"},70:function(e,t,a){e.exports=a.p+"static/media/tornado.d82015ef.svg"},71:function(e,t,a){e.exports=a.p+"static/media/wind.51bb01ca.svg"},72:function(e,t,a){e.exports=a.p+"static/media/update.8d36acbb.svg"},74:function(e,t,a){e.exports=a.p+"static/media/sun.dd42591b.svg"},75:function(e,t,a){e.exports=a.p+"static/media/moon.5039864c.svg"},78:function(e,t,a){e.exports=a(113)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.977168bd.chunk.js.map