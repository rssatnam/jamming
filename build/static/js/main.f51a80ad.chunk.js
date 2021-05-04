(this.webpackJsonpjamming=this.webpackJsonpjamming||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n,s=a(1),i=a.n(s),c=a(8),r=a.n(c),o=(a(13),a(3)),l=a(4),h=a(2),u=a(6),d=a(5),p=(a(14),a(15),a(0)),j=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={term:""},n.search=n.search.bind(Object(h.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(t){this.setState({term:t.target.value})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchBar",children:[Object(p.jsx)("input",{onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),Object(p.jsx)("button",{className:"SearchButton",onClick:this.search,children:"SEARCH"})]})}}]),a}(i.a.Component),m=(a(17),a(18),a(19),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?Object(p.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(p.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"addTrack",value:function(t){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(t){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Track",children:[Object(p.jsxs)("div",{className:"Track-information",children:[Object(p.jsx)("h3",{children:this.props.track.name}),Object(p.jsxs)("p",{children:[this.props.track.artists," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(i.a.Component)),b=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(p.jsx)(m,{track:e,onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval},e.id)}))})}}]),a}(i.a.Component),v=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchResults",children:[Object(p.jsx)("h2",{children:"Results"}),Object(p.jsx)(b,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(i.a.Component),f=(a(20),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(t){this.props.onNameChange(t.target.value)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Playlist",children:[Object(p.jsx)("input",{defaultValue:this.props.playlistName,value:this.props.playlistName,onChange:this.handleNameChange}),Object(p.jsx)(b,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(p.jsx)("button",{onClick:this.props.onSave,className:"Playlist-save",children:"SAVE TO SPOTIFY"})]})}}]),a}(i.a.Component)),O=(a(21),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"loading-screen",style:this.props.isLoading?{display:"flex"}:{display:"none"},children:Object(p.jsx)("div",{className:"loadingImage"})})}}]),a}(i.a.Component)),k={getAccessToken:function(){if(n)return n;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);if(t&&e){n=t[1];var a=Number(e[1]);return setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}window.location="https://accounts.spotify.com/authorize?client_id=".concat("cf758774d4f245c99a41b69725f98df5","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000/")},search:function(t){var e=k.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).then((function(t){return t.tracks?t.tracks.items.map((function(t){return{id:t.id,name:t.name,artists:t.artists[0].name,album:t.album.name,uri:t.uri}})):[]}))},savePlaylist:function(t,e){if(t&&e.length){var a,n=k.getAccessToken(),s={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(t){return t.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:s,method:"POST",body:JSON.stringify({name:t})}).then((function(t){return t.json()})).then((function(t){var n=t.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:s,method:"POST",body:JSON.stringify({uris:e})})}))}))}}},y=k,T=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[],isLoading:!1},n.addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(h.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(h.a)(n)),n.search=n.search.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(t){var e=this;y.search(t).then((function(t){e.setState({searchResults:t})}))}},{key:"savePlaylist",value:function(){var t=this;this.setState({isLoading:!0});var e=this.state.playlistTracks.map((function(t){return t.uri}));y.savePlaylist(this.state.playlistName,e).then((function(){t.setState({playlistName:"New Playlist",playlistTracks:[],searchResults:[],isLoading:!1})}))}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"addTrack",value:function(t){var e=this.state.playlistTracks;e.find((function(e){return e.id===t.id}))||(e.push(t),this.setState({playlistTracks:e}))}},{key:"removeTrack",value:function(t){var e=this.state.playlistTracks;e=e.filter((function(e){return e.id!==t.id})),this.setState({playlistTracks:e})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{isLoading:this.state.isLoading}),Object(p.jsxs)("h1",{children:["Ja",Object(p.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{onSearch:this.search}),Object(p.jsxs)("div",{className:"App-playlist",children:[Object(p.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(p.jsx)(f,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(i.a.Component),g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),g()}],[[22,1,2]]]);
//# sourceMappingURL=main.f51a80ad.chunk.js.map