(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){e.exports=n(47)},24:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),i=n.n(r),c=(n(24),n(15),n(6)),l=n(7),s=n(9),u=n(8),p=n(10),h=n(11),d={position:"absolute",width:"100%",height:"100%"},m=function(e){function t(e){var n;Object(c.a)(this,t);var a=(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).props.initialCenter,o=a.lat,r=a.lng;return n.state={currentLocation:{lat:o,lng:r}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"recenterMap",value:function(){var e=this.map,t=this.state.currentLocation,n=this.props.google.maps;if(e){var a=new n.LatLng(t.lat,t.lng);e.panTo(a)}}},{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var n=t.coords;e.setState({currentLocation:{lat:n.latitude,lng:n.longitude}})})),this.loadMap()}},{key:"loadMap",value:function(){if(this.props&&this.props.google){var e=this.props.google.maps,t=this.refs.map,n=i.a.findDOMNode(t),a=this.props.zoom,o=this.state.currentLocation,r=o.lat,c=o.lng,l=new e.LatLng(r,c),s=Object.assign({},{center:l,zoom:a});this.map=new e.Map(n,s)}}},{key:"renderChildren",value:function(){var e=this,t=this.props.children;if(t)return o.a.Children.map(t,(function(t){if(t)return o.a.cloneElement(t,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})}))}},{key:"render",value:function(){var e=Object.assign({},d);return o.a.createElement("div",null,o.a.createElement("div",{style:e,ref:"map"},"Loading map..."),this.renderChildren())}}]),t}(o.a.Component);m.defaultProps={zoom:14,initialCenter:{lat:-1.2884,lng:36.8233},centerAroundCurrentLocation:!1,visible:!0};var g=m,f={width:"100%",height:"100%"},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},n.onMarkerClick=function(e,t,a){return n.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},n.onClose=function(e){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{centerAroundCurrentLocation:!0,google:this.props.google,zoom:14,style:f},o.a.createElement(h.Marker,{onClick:this.onMarkerClick,name:"current location"}),o.a.createElement(h.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},o.a.createElement("div",null,o.a.createElement("h4",null,this.state.selectedPlace.name)))))}}]),t}(a.Component),b=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyCVCnlvTmnjOYLcbHE6jKnPLq9hb1UtThY"})(v),k=(n(39),n(41));n(42),n(44);k.initializeApp({apiKey:"AIzaSyAj52JUY4jm-SQU5td6zPyiBNWyX0x-5l4",authDomain:"bucketlist-c95a0.firebaseapp.com",databaseURL:"https://bucketlist-c95a0.firebaseio.com",projectId:"bucketlist-c95a0",storageBucket:"bucketlist-c95a0.appspot.com",messagingSenderId:"300377193585",appId:"1:300377193585:web:b2d856768f2dc4f6d36fd0",measurementId:"G-GX1SX7KKYV"});k.database();var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{class:"header"},o.a.createElement("a",{href:"/",class:"title"},"bucketlist")),o.a.createElement("div",{class:"list"},o.a.createElement("ul",{class:"menu"},o.a.createElement("li",null,"Sign in"),o.a.createElement("li",null,"About"),o.a.createElement("li",null,"My Itinerary"))),o.a.createElement("div",null,o.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.847b1b97.chunk.js.map