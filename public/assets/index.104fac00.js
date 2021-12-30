var k=Object.defineProperty;var z=(e,t,i)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var o=(e,t,i)=>(z(e,typeof t!="symbol"?t+"":t,i),i);import{r as c,V as b,a as y,l as w,E as _,S as x,b as P,B as O,T as D,M as T,C as $,c as A,d as I,p as f,e as L,A as R,G as U,P as H,W as j,O as N,f as F,g as G,h as p,j as B,i as q,n as V}from"./vendor.71d19bd2.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}};W();const M={currentPage:{name:"HOME",activePage:"/"},username:"player1",player:void 0,container:void 0,controls:void 0,otherPlayers:{},socket:void 0,connected:!1,typing:!1,lastTypingTime:0,currentPlayerTyping:!1,camera:void 0,scene:void 0,renderer:void 0,orbitcontrols:void 0,currentChat:"",chatlog:[]},K={HOME:"/",EXAMPLE_FETCH:"/example-fetch"},X={updateCurrentPage:c((e,t)=>{e.currentPage={name:t,activePage:K[t]}}),updateTyping:c((e,t)=>{e.currentPlayerTyping=t}),updateOrbitcontrols:c((e,t)=>{e.orbitcontrols=t}),updateConnected:c((e,t)=>{e.connected=t}),updateUsername:c((e,t)=>{e.username=t}),updateScene:c((e,t)=>{e.scene=t}),updateCamera:c((e,t)=>{e.camera=t}),updateCurrentPlayer:c((e,t)=>{e.player=t}),updateCurrentChat:c((e,t)=>{e.currentChat=t}),updateChatlog:c((e,t)=>{e.chatlog.push(t)}),saveSocket:c((e,t)=>{e.socket=t}),addOtherPlayer:c((e,t)=>{e.otherPlayers[t.id]=t.player})};class Z{constructor(t,i,s,n,r){o(this,"player");o(this,"mesh");o(this,"scene");o(this,"controls");o(this,"camera");o(this,"socket");o(this,"domElement");o(this,"enabled");o(this,"center");o(this,"moveSpeed");o(this,"turnSpeed");o(this,"userZoom");o(this,"userZoomSpeed");o(this,"userRotate");o(this,"userRotateSpeed");o(this,"autoRotate");o(this,"autoRotateSpeed");o(this,"YAutoRotation");o(this,"minPolarAngle");o(this,"maxPolarAngle");o(this,"minDistance");o(this,"maxDistance");o(this,"EPS");o(this,"PIXELS_PER_ROUND");o(this,"rotateStart");o(this,"rotateEnd");o(this,"rotateDelta");o(this,"zoomStart");o(this,"zoomEnd");o(this,"zoomDelta");o(this,"phiDelta");o(this,"thetaDelta");o(this,"scale");o(this,"lastPosition");o(this,"playerIsMoving");o(this,"keyState");o(this,"STATE");o(this,"state");o(this,"orbitcontrols");o(this,"init",()=>{this.camera.position.x=this.player.position.x+2,this.camera.position.y=this.player.position.y+2,this.camera.position.z=this.player.position.x+2});o(this,"update",()=>{this.checkKeyStates(),this.center=this.player.position;let i=this.camera.position.clone().sub(this.center),s=Math.atan2(i.x,i.z),n=Math.atan2(Math.sqrt(i.x*i.x+i.z*i.z),i.y);s+=this.thetaDelta,n+=this.phiDelta,n=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,n)),n=Math.max(this.EPS,Math.min(Math.PI-this.EPS,n));let r=i.length()*this.scale;r=Math.max(this.minDistance,Math.min(this.maxDistance,r)),i.x=r*Math.sin(n)*Math.sin(s),i.y=r*Math.cos(n),i.z=r*Math.sin(n)*Math.cos(s),this.camera.lookAt(this.center),this.thetaDelta=0,this.phiDelta=0,this.scale=1,this.lastPosition.distanceTo(this.player.position)>0?this.lastPosition.copy(this.player.position):this.lastPosition.distanceTo(this.player.position)==0&&(this.playerIsMoving=!1)});o(this,"faceDown",()=>{});o(this,"faceRight",()=>{});o(this,"faceUp",()=>{});o(this,"faceLeft",()=>{});o(this,"checkKeyStates",()=>{this.keyState.ArrowLeft&&(this.playerIsMoving=!0,this.player.position.x-=this.moveSpeed*Math.sin(this.player.rotation.y),this.player.position.z-=this.moveSpeed*Math.cos(this.player.rotation.y)),this.keyState.ArrowRight&&(this.playerIsMoving=!0,this.player.position.x+=this.moveSpeed*Math.sin(this.player.rotation.y),this.player.position.z+=this.moveSpeed*Math.cos(this.player.rotation.y)),this.keyState.ArrowDown&&(this.playerIsMoving=!0,this.player.position.x-=this.moveSpeed*Math.cos(this.player.rotation.y),this.player.position.z+=this.moveSpeed*Math.sin(this.player.rotation.y)),this.keyState.ArrowUp&&(this.playerIsMoving=!0,this.player.position.x+=this.moveSpeed*Math.cos(this.player.rotation.y),this.player.position.z-=this.moveSpeed*Math.sin(this.player.rotation.y)),this.playerIsMoving&&(w.exports.get(a,"socket.emit")?a.socket.emit("player moved",{username:a.username,orientation:{position:{x:this.player.position.x,y:this.player.position.y,z:this.player.position.z},rotation:{x:this.player.rotation.x,y:this.player.rotation.y,z:this.player.rotation.z}}}):console.log("@player moved: no socket to emit too"))});o(this,"onKeyChange",(t,i,s)=>{t=t||window.event,i[t.key]=s});o(this,"prototype",()=>Object.create(_.prototype));this.camera=t,this.orbitcontrols=r,this.player=i,this.socket=n,this.domElement=s!==void 0?s:document,this.enabled=!0,this.center=new b(i.position.x,i.position.y,i.position.z),this.moveSpeed=.2,this.turnSpeed=.1,this.userZoom=!0,this.userZoomSpeed=1,this.userRotate=!0,this.userRotateSpeed=1.5,this.autoRotate=!1,this.autoRotateSpeed=.1,this.YAutoRotation=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minDistance=0,this.maxDistance=1/0,this.EPS=1e-6,this.PIXELS_PER_ROUND=1800,this.rotateStart=new y,this.rotateEnd=new y,this.rotateDelta=new y,this.zoomStart=new y,this.zoomEnd=new y,this.zoomDelta=new y,this.phiDelta=0,this.thetaDelta=0,this.scale=1,this.lastPosition=new b(i.position.x,i.position.y,i.position.z),this.playerIsMoving=!1,this.keyState={},document.addEventListener("keydown",u=>this.onKeyChange(u,this.keyState,!0),!1),document.addEventListener("keyup",u=>this.onKeyChange(u,this.keyState,!1),!1)}}function Y(e,t){const i=new x({map:t,transparent:!1}),s=new P(i);s.position.y=4.5,s.position.z=0,s.position.x=0;const n=1;s.scale.set(n*1.5,n,n),e.add(s)}function J(e,t,i){const s=document.createElement("canvas"),n=s.getContext("2d"),r=`${t}px bold sans-serif`;if(n){n.font=r;const u=e,v=50;return n.canvas.width=u,n.canvas.height=v,n.font=r,n.textBaseline="middle",n.textAlign="center",n.fillStyle="black",n.fillRect(0,0,u,v),n.translate(u/2,v/2),n.scale(1,1),n.fillStyle="white",n.fillText(i,0,0),document.body.appendChild(s),new I(n.canvas)}console.log("makeLabelCanvas")}let Q=new O;const ee=new D().load("/textures/peep.png"),S=new T;S.emissiveMap=ee;S.emissive=new $(1,1,1);class g{constructor(t,i,s,n){o(this,"username");o(this,"isMainPlayer",!1);o(this,"mesh");o(this,"scene");o(this,"controls");o(this,"camera");o(this,"container");o(this,"socket");o(this,"orbitcontrols");o(this,"init",()=>{const t=this,{username:i}=this;Q.load("/mesh/peep_one.json",function(s){try{const n=J(i.length*20,24,i);t.mesh=new A(s,S),t.mesh.scale.set(.5,.5,.5),t.mesh.rotateY(0),Y(t.mesh,n),a.scene.add(t.mesh),t.isMainPlayer&&(t.mesh.add(a.camera),t.controls=new Z(a.camera,t.mesh,t.container,t.socket,t.orbitcontrols),t.controls.init())}catch(n){console.log(n)}}),console.log("Loading Peep Mesh...")});o(this,"setOrientation",t=>{const i=this;i.mesh&&i.mesh.position.copy(t.position)});this.username=t,this.container=i,this.socket=s,this.orbitcontrols=n}}function te(){a._update("updateTyping",!0)}function oe(e){const t=e.target;e.which===13&&(a._update("updateChatlog",{username:a.username,message:a.currentChat}),a._update("updateCurrentChat",""),t.value=""),a._update("updateCurrentChat",t==null?void 0:t.value),a.currentChat.length>0?a._update("updateTyping",!0):a._update("updateTyping",!1)}function ne(e){const t=e.target;a._update("updateUsername",t==null?void 0:t.value),e.which===13&&f("/game")}function ie(){a._update("updateTyping",!1)}function ae(e,t,i,s,n){if(a.username){let r=new g(a.username,s,e,n);r.scene=t,r.camera=i,r.isMainPlayer=!0,r.init(),a._update("updateCurrentPlayer",r),a._update("updateOrbitcontrols",n),e&&e().emit("add user",{username:a.username,orientation:{}})}}function se(e){a._update("addNewChatMessage",e)}function re(e){console.log("@player login",e),a._update("updateConnected",!0),Object.keys(a.otherPlayers).map(t=>{console.log("login",e),Object.keys(e.currentUsers).includes(t)||(a._update("addOtherPlayer",{id:t,player:new g(t,a.container,a.socket,a.orbitcontrols)}),a.otherPlayers[t].init())})}function le(e){const t=a.otherPlayers;console.log("@player moved",e),Object.keys(t).includes(e.username)||(t[e.username]=new g(e.username,a.container,a.socket,a.orbitcontrols),t[e.username].init()),console.log(t),e.orientation&&e.username&&t[e.username].setOrientation(e.orientation)}function ce(e){console.log("User left "+e.username)}function ue(e){console.log("@player joined",e),a.username!=e.username&&!a.otherPlayers[e.username]&&(a._update("addOtherPlayer",{id:e.username,player:new g(e.username,a.container,a.socket,a.orbitcontrols)}),a.otherPlayers[e.username].init())}let h,d,m;function pe(){let e=document.querySelector("#container");d=new L;let t=new R(5);d.add(t);let i=new U(100,10);i.position.set(0,0,0),d.add(i),h=new H(50,window.innerWidth/window.innerHeight,1,1e3),h.position.z=5,m=new j({alpha:!0});let s=new P(me("dash"));s.position.y=15,s.position.z=50,s.position.x=50,s.scale.set(1.6*30,1*30,1*30),d.add(s),m.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",de,!1);const n=new N(h,m.domElement);ae(window.io,d,h,m.domElement,n),e==null||e.appendChild(m.domElement),a._update("updateScene",d),a._update("updateCamera",h)}function E(){requestAnimationFrame(E),w.exports.get(a,"player.controls",!1)&&a.player.controls.update(),he()}function he(){m.render(d,h)}function de(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}function me(e){let t=document.getElementById(e);if(!w.exports.isNil(t)){let i=new F(t);return new x({map:i,transparent:!1})}console.log("createVideoTexture "+e)}function ye(){let e="https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";var t=G.MediaPlayer().create();t.initialize(document.querySelector("#dash"),e,!0)}const fe=()=>{a._update("updateCurrentPage","HOME")},ge=()=>{a._update("updateCurrentPage","GAME"),setTimeout(()=>{ye(),pe(),E()})};f("/",fe);f("/game",ge);function ve(){f.start()}function we(e="chumbucket_storage"){if(localStorage.getItem(e))try{return JSON.parse(localStorage.getItem(e))}catch(t){return console.warn(t),M}else return M}function Se(e){return p`
  <div id="app">
      <div class="page">
        ${be(e)}
      </div>
    </div>
  `}function be(e){switch(e.currentPage.name){case"HOME":return Ee(e);case"GAME":return p`
    <video muted id="dash" controls></video>
    ${Ce(e)}
  `;case"EXAMPLE_FETCH":return p`
      <h1>Fetching no?</h1>
        <textarea>（*＾3＾）/～  </textarea>
    `;default:return p`
       <h1>404 CHUM</h1>
  `}}function xe(e){return p`<ul>
    ${e.map(t=>Pe(t))}
  </ul>`}function Pe(e){return p`<li><b>${e.username}</b><span>${e.message}</span></li>`}function Me(e){return p`<input 
    class="chat-input"
    placeholder="Type here..."
    value=${e.currentChat}
    onkeyup=${oe}
  />`}function Ee(e){return p`<input 
    class="username-input"
    placeholder="Username here..."
    value=${e.username}
    onkeyup=${ne}
  />`}function Ce(e){return p`<div id="chat-ui">${xe(e.chatlog)}${Me(e)}</div>`}function ke(e){e?(a._update("saveSocket",e),e.on("user left",ce),e.on("typing",te),e.on("stop typing",ie),e.on("new message",se),e.on("player moved",le),e.on("user joined",ue),e.on("login",re)):console.log("No Client socket provided")}const l={fontFamily:{default:"Fira Mono, san-serif",alt:"'Staatliches', san-serif"},fontSizes:{sm:8,md:16,lg:24,xl:32},gutters:{sm:8,md:16,lg:24,xl:32},colors:{purple:"#8D58FD",blue:"#58D5FD",green:"#83FD58"}},ze=new B;function C(){return`
  background: ${l.colors.blue};
  color:  ${l.colors.purple};
  box-sizing: border-box;
  font-size: ${l.fontSizes.lg}px;
  padding: ${l.gutters.md}px;
  border: 0;
  text-decoration: none;
  `}function _e(){ze.add("baseStyles",`
    html,body {
      margin: 0;
      padding: 0;
      background: ${l.colors.purple};
      color:  ${l.colors.blue};
      opacity: 1;
    }
    textarea,
    button {
      display: block;
      clear:both;
      margin: ${l.gutters.sm}px auto ${l.gutters.sm}px auto;
      ${C()}
    }
    textarea {
      width: 100%;
      min-height: 300px;
      font-size: ${l.fontSizes.xl}px;
    }
    .nav {
      margin-top: ${l.gutters.xl}px;
    }
    .nav li {
      display:inline-block;
    }
    .nav li.active a {
      background: ${l.colors.green};
      color:  ${l.colors.purple};
    }
    .nav li a {
      ${C()}
      margin-right: ${l.gutters.sm}px;
    }
    #app {
      position: absolute;
      z-index: 10;
    }
    #game-container {
      background: #fff;
      position: absolute;
      z-index: 9;
      height: 100vh;
      top:0px;
      width: 100vw;
    }
    video {
      width: 100vw;
      height: auto;
      position: absolute;
      z-index: 0;
      top: -100vh;
      left: -100vw;
    }
    .username-input {
      position: absolute;
      top: 50vh;
      width: 50vw;
      font-size: 24;
    }
    @keyframes notification {
      from {bottom: -120vh;}
      to { bottom: 5vh; }
    }
    @keyframes notification-out {
      to {bottom: -5vh; display:none;}
      from {bottom: 5vh; display:block;}
    }
  `)}const Oe=document.body.querySelector("#app"),De=we(),a=q(De,{renderer:Te},X);function Te(e){V(Oe,Se(e),{onBeforeElUpdated:function(t,i){return!t.isEqualNode(i)}})}ve();_e();window.io&&ke(io());
