var C=Object.defineProperty;var $=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>($(e,typeof t!="symbol"?t+"":t,a),a);import{r as c,V as v,a as y,l as w,E as _,S as P,b as M,B as O,T as D,M as T,C as A,c as L,d as I,p as h,e as R,A as F,G as j,P as U,W as H,O as N,f as B,g as G,h as p,j as W,i as Y,n as q}from"./vendor.c43e6574.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}};V();const E={currentPage:{name:"HOME",activePage:"/"},username:"player1",player:void 0,container:void 0,controls:void 0,otherPlayers:{},socket:void 0,connected:!1,typing:!1,lastTypingTime:0,currentPlayerTyping:!1,camera:void 0,scene:void 0,renderer:void 0,orbitcontrols:void 0,currentChat:"",chatlog:[]},K={HOME:"/",EXAMPLE_FETCH:"/example-fetch"},Z={updateCurrentPage:c((e,t)=>{e.currentPage={name:t,activePage:K[t]}}),updateTyping:c((e,t)=>{e.currentPlayerTyping=t}),updateOrbitcontrols:c((e,t)=>{e.orbitcontrols=t}),updateConnected:c((e,t)=>{e.connected=t}),updateUsername:c((e,t)=>{e.username=t}),updateScene:c((e,t)=>{e.scene=t}),updateCamera:c((e,t)=>{e.camera=t}),updateCurrentPlayer:c((e,t)=>{e.player=t}),updateCurrentChat:c((e,t)=>{e.currentChat=t}),updateChatlog:c((e,t)=>{e.chatlog.push(t)}),saveSocket:c((e,t)=>{e.socket=t}),addOtherPlayer:c((e,t)=>{e.otherPlayers[t.id]=t.player})};class X{constructor(t,a,s,n,r){o(this,"player");o(this,"mesh");o(this,"scene");o(this,"controls");o(this,"camera");o(this,"socket");o(this,"domElement");o(this,"enabled");o(this,"center");o(this,"moveSpeed");o(this,"turnSpeed");o(this,"userZoom");o(this,"userZoomSpeed");o(this,"userRotate");o(this,"userRotateSpeed");o(this,"autoRotate");o(this,"autoRotateSpeed");o(this,"YAutoRotation");o(this,"minPolarAngle");o(this,"maxPolarAngle");o(this,"minDistance");o(this,"maxDistance");o(this,"EPS");o(this,"PIXELS_PER_ROUND");o(this,"rotateStart");o(this,"rotateEnd");o(this,"rotateDelta");o(this,"zoomStart");o(this,"zoomEnd");o(this,"zoomDelta");o(this,"phiDelta");o(this,"thetaDelta");o(this,"scale");o(this,"lastPosition");o(this,"playerIsMoving");o(this,"keyState");o(this,"STATE");o(this,"state");o(this,"orbitcontrols");o(this,"init",()=>{this.camera.position.x=this.player.position.x+2,this.camera.position.y=this.player.position.y+2,this.camera.position.z=this.player.position.x+2});o(this,"update",()=>{this.checkKeyStates(),this.center=this.player.position;let a=this.camera.position.clone().sub(this.center),s=Math.atan2(a.x,a.z),n=Math.atan2(Math.sqrt(a.x*a.x+a.z*a.z),a.y);s+=this.thetaDelta,n+=this.phiDelta,n=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,n)),n=Math.max(this.EPS,Math.min(Math.PI-this.EPS,n));let r=a.length()*this.scale;r=Math.max(this.minDistance,Math.min(this.maxDistance,r)),a.x=r*Math.sin(n)*Math.sin(s),a.y=r*Math.cos(n),a.z=r*Math.sin(n)*Math.cos(s),this.camera.lookAt(this.center),this.thetaDelta=0,this.phiDelta=0,this.scale=1,this.lastPosition.distanceTo(this.player.position)>0?this.lastPosition.copy(this.player.position):this.lastPosition.distanceTo(this.player.position)==0&&(this.playerIsMoving=!1)});o(this,"faceDown",()=>{});o(this,"faceRight",()=>{});o(this,"faceUp",()=>{});o(this,"faceLeft",()=>{});o(this,"checkKeyStates",()=>{this.keyState.ArrowLeft&&(this.playerIsMoving=!0,this.player.position.x-=this.moveSpeed*Math.sin(this.player.rotation.y),this.player.position.z-=this.moveSpeed*Math.cos(this.player.rotation.y)),this.keyState.ArrowRight&&(this.playerIsMoving=!0,this.player.position.x+=this.moveSpeed*Math.sin(this.player.rotation.y),this.player.position.z+=this.moveSpeed*Math.cos(this.player.rotation.y)),this.keyState.ArrowDown&&(this.playerIsMoving=!0,this.player.position.x-=this.moveSpeed*Math.cos(this.player.rotation.y),this.player.position.z+=this.moveSpeed*Math.sin(this.player.rotation.y)),this.keyState.ArrowUp&&(this.playerIsMoving=!0,this.player.position.x+=this.moveSpeed*Math.cos(this.player.rotation.y),this.player.position.z-=this.moveSpeed*Math.sin(this.player.rotation.y)),this.playerIsMoving&&(w.exports.get(i,"socket.emit")?i.socket.emit("player moved",{username:i.username,orientation:{position:{x:this.player.position.x,y:this.player.position.y,z:this.player.position.z},rotation:{x:this.player.rotation.x,y:this.player.rotation.y,z:this.player.rotation.z}}}):console.log("@player moved: no socket to emit too"))});o(this,"onKeyChange",(t,a,s)=>{t=t||window.event,a[t.key]=s});o(this,"prototype",()=>Object.create(_.prototype));this.camera=t,this.orbitcontrols=r,this.player=a,this.socket=n,this.domElement=s!==void 0?s:document,this.enabled=!0,this.center=new v(a.position.x,a.position.y,a.position.z),this.moveSpeed=.2,this.turnSpeed=.1,this.userZoom=!0,this.userZoomSpeed=1,this.userRotate=!0,this.userRotateSpeed=1.5,this.autoRotate=!1,this.autoRotateSpeed=.1,this.YAutoRotation=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minDistance=0,this.maxDistance=1/0,this.EPS=1e-6,this.PIXELS_PER_ROUND=1800,this.rotateStart=new y,this.rotateEnd=new y,this.rotateDelta=new y,this.zoomStart=new y,this.zoomEnd=new y,this.zoomDelta=new y,this.phiDelta=0,this.thetaDelta=0,this.scale=1,this.lastPosition=new v(a.position.x,a.position.y,a.position.z),this.playerIsMoving=!1,this.keyState={},document.addEventListener("keydown",u=>this.onKeyChange(u,this.keyState,!0),!1),document.addEventListener("keyup",u=>this.onKeyChange(u,this.keyState,!1),!1)}}function J(e,t){const a=new P({map:t,transparent:!1}),s=new M(a);s.position.y=4.5,s.position.z=0,s.position.x=0;const n=1;s.scale.set(n*1.5,n,n),e.add(s)}function Q(e,t,a){const s=document.createElement("canvas"),n=s.getContext("2d"),r=`${t}px bold sans-serif`;if(n){n.font=r;const u=e,x=50;return n.canvas.width=u,n.canvas.height=x,n.font=r,n.textBaseline="middle",n.textAlign="center",n.fillStyle="black",n.fillRect(0,0,u,x),n.translate(u/2,x/2),n.scale(1,1),n.fillStyle="white",n.fillText(a,0,0),document.body.appendChild(s),new I(n.canvas)}console.log("makeLabelCanvas")}let ee=new O;const te=new D().load("/textures/peep.png"),b=new T;b.emissiveMap=te;b.emissive=new A(1,1,1);class g{constructor(t,a,s,n){o(this,"username");o(this,"isMainPlayer",!1);o(this,"mesh");o(this,"scene");o(this,"controls");o(this,"camera");o(this,"container");o(this,"socket");o(this,"orbitcontrols");o(this,"init",()=>{const t=this,{username:a}=this;ee.load("/mesh/peep_one.json",function(s){try{const n=Q(a.length*20,24,a);t.mesh=new L(s,b),t.mesh.scale.set(.5,.5,.5),t.mesh.rotateY(0),J(t.mesh,n),i.scene.add(t.mesh),t.isMainPlayer&&(t.mesh.add(i.camera),t.controls=new X(i.camera,t.mesh,t.container,t.socket,t.orbitcontrols),t.controls.init())}catch(n){console.log(n)}}),console.log("Loading Peep Mesh...")});o(this,"setOrientation",t=>{const a=this;a.mesh&&a.mesh.position.copy(t.position)});this.username=t,this.container=a,this.socket=s,this.orbitcontrols=n}}function oe(){i._update("updateTyping",!0)}function ne(e){const t=e.target;e.which===13&&(i._update("updateChatlog",{username:i.username,message:i.currentChat}),i._update("updateCurrentChat",""),t.value=""),i._update("updateCurrentChat",t==null?void 0:t.value),i.currentChat.length>0?i._update("updateTyping",!0):i._update("updateTyping",!1)}function ie(e){const t=e.target;i._update("updateUsername",t==null?void 0:t.value),e.which===13&&h("/player-select")}function ae(){i.currentPage.name==="HOME"&&h("/player-select"),i.currentPage.name==="PLAYER_SELECT"&&h("/game")}function se(){i._update("updateTyping",!1)}function re(e,t,a,s,n){if(i.username){let r=new g(i.username,s,e,n);r.scene=t,r.camera=a,r.isMainPlayer=!0,r.init(),i._update("updateCurrentPlayer",r),i._update("updateOrbitcontrols",n),e&&e().emit("add user",{username:i.username,orientation:{}})}}function le(e){i._update("addNewChatMessage",e)}function ce(e){console.log("@player login",e),i._update("updateConnected",!0),Object.keys(i.otherPlayers).map(t=>{console.log("login",e),Object.keys(e.currentUsers).includes(t)||(i._update("addOtherPlayer",{id:t,player:new g(t,i.container,i.socket,i.orbitcontrols)}),i.otherPlayers[t].init())})}function ue(e){const t=i.otherPlayers;console.log("@player moved",e),Object.keys(t).includes(e.username)||(t[e.username]=new g(e.username,i.container,i.socket,i.orbitcontrols),t[e.username].init()),console.log(t),e.orientation&&e.username&&t[e.username].setOrientation(e.orientation)}function pe(e){console.log("User left "+e.username)}function de(e){console.log("@player joined",e),i.username!=e.username&&!i.otherPlayers[e.username]&&(i._update("addOtherPlayer",{id:e.username,player:new g(e.username,i.container,i.socket,i.orbitcontrols)}),i.otherPlayers[e.username].init())}let d,m,f;function he(){let e=document.querySelector("#container");m=new R;let t=new F(5);m.add(t);let a=new j(100,10);a.position.set(0,0,0),m.add(a),d=new U(50,window.innerWidth/window.innerHeight,1,1e3),d.position.z=5,f=new H({alpha:!0});let s=new M(ye("dash"));s.position.y=15,s.position.z=50,s.position.x=50,s.scale.set(1.6*30,1*30,1*30),m.add(s),f.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",fe,!1);const n=new N(d,f.domElement);re(window.io,m,d,f.domElement,n),e==null||e.appendChild(f.domElement),i._update("updateScene",m),i._update("updateCamera",d)}function k(){requestAnimationFrame(k),w.exports.get(i,"player.controls",!1)&&i.player.controls.update(),me()}function me(){f.render(m,d)}function fe(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}function ye(e){let t=document.getElementById(e);if(!w.exports.isNil(t)){let a=new B(t);return new P({map:a,transparent:!1})}console.log("createVideoTexture "+e)}function ge(){let e="https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";var t=G.MediaPlayer().create();t.initialize(document.querySelector("#dash"),e,!0)}const xe=()=>{i._update("updateCurrentPage","HOME")},we=()=>{i._update("updateCurrentPage","GAME"),setTimeout(()=>{ge(),he(),k()})},be=()=>{i._update("updateCurrentPage","PLAYER_SELECT")};h("/",xe);h("/game",we);h("/player-select",be);function Se(){h.start()}function ve(e="chumbucket_storage"){if(localStorage.getItem(e))try{return JSON.parse(localStorage.getItem(e))}catch(t){return console.warn(t),E}else return E}function Pe(e){return p`
  <div id="app">
        ${Me(e)}
    </div>
  `}function Me(e){switch(e.currentPage.name){case"HOME":return p`
        <section class="container circle">
        <header>
        <h1>Amico</h1>
        <h3>seperate together</h3>
        </header>
        <div>
          ${Ce(e)}
          ${z()}
          </div>
        </section>
      `;case"GAME":return p`
    <video muted id="dash" controls></video>
    ${$e(e)}
  `;case"PLAYER_SELECT":return p`
      <div class="container circle">
      <h2>Select a Peep</h2>
        ${z()}
      </div>
    `;default:return p`
       <h1>404 CHUM</h1>
  `}}function Ee(e){return p`<ul>
    ${e.map(t=>ke(t))}
  </ul>`}function ke(e){return p`<li><b>${e.username}:</b> <span>${e.message}</span></li>`}function ze(e){return p`<input 
    class="chat-input"
    placeholder="say something..."
    value=${e.currentChat}
    onkeyup=${ne}
  />`}function z(){return p`<button 
    class="button next"
    onclick=${ae}
  > ${"next"} </button>`}function Ce(e){return p`<input 
    class="username-input"
    placeholder="what is your disply name"
    value=${e.username}
    onkeyup=${ie}
  />`}function $e(e){return p`<div id="chat-ui">${Ee(e.chatlog)}${ze(e)}</div>`}function _e(e){e?(i._update("saveSocket",e),e.on("user left",pe),e.on("typing",oe),e.on("stop typing",se),e.on("new message",le),e.on("player moved",ue),e.on("user joined",de),e.on("login",ce)):console.log("No Client socket provided")}const l={fontFamily:{default:"Fira Mono, san-serif",alt:"'Staatliches', san-serif"},fontSizes:{sm:8,md:16,lg:24,xl:32,jumbo:100},gutters:{sm:8,md:16,lg:24,xl:32,jumbo:100},colors:{purple:"#8D58FD",pink:"#FD58B1",blue:"#58D5FD",blueLight:"#58D5FD",green:"#83FD58",white:"#FFFFFF",grey:"#efefef"}},S=new W;function Oe(){S.add("UIStyles",`
    input {
      border: 0px;
      font-size: ${l.fontSizes.lg}px;
      padding: ${l.gutters.sm}px;
      width: 100%;
      border-radius: ${l.gutters.sm/2}px;
      background: ${l.colors.grey};
    }
    #chat-ui input {
      background: ${l.colors.purple};
      color: #fff;
      border: 0px;
      border-radius: 30px;
      padding: 8px 14px 8px 14px;
    }
    #chat-ui ::placeholder {
      color: #000;
      opacity: 0.3;
    }
    

    #chat-ui {
      font-size: ${l.fontSizes.md}px;
      padding: ${l.gutters.md}px;
      position: absolute;
      left: 0px;
      top: 0px;
      height: 95vh;
      z-index: 3;
      flex-direction: column;
      display:flex;
      align-content: flex-end;
      justify-content: flex-end;
    }
    #chat-ui ul {
      display: flex;
      margin: 0;
      padding: ${l.gutters.md}px;
      list-style: none;
    }
    #chat-ui li * {
      font-size: ${l.fontSizes.lg}px;
    }
    #chat-ui li b {
      color: #000;
    }
 `)}function De(){S.add("introStyles",`
    .container {
      width: 50vw;
      height: 100vh;
      display:flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      align-items: center;
      background: radial-gradient(118.95% 118.95% at 50% 50%, #FFFFFF 0%, #EFEFEF 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .container h1 {
      font-size: ${l.fontSizes.jumbo*2}px;
      line-height: ${l.fontSizes.jumbo*1.5}px;
      margin: 0;
      padding: 0;
      color: ${l.colors.white};
      -webkit-text-stroke: ${l.gutters.sm}px  ${l.colors.pink};
      text-align:center;
    }
    .container h3 {
      font-size: ${l.fontSizes.jumbo/2}px;
      margin: 0 0 ${l.gutters.md}px 0;
      padding: 0;
      color: ${l.colors.white};
      -webkit-text-stroke: ${l.gutters.sm/3}px  ${l.colors.blue};
      text-align:center;
    }
    .container button.next {
      display:block;
      background: ${l.colors.green};
      border-radius:100%;
      border: 0px;
      height: 100px;
      width: 100px;
      font-size: ${l.fontSizes.lg}px;
      color: ${l.colors.white};
      font-weight:bold;
      position: absolute;
      bottom: ${l.gutters.lg}px;
      left: 0px;
      right: 0px;
      margin: 0 auto;
    }
    .circle {
      border-radius: 100%;
    }
    #app {
      background-image: url('textures/background-grid.png')
    }
  `)}function Te(){S.add("baseStyles",`
  * {
  font-family: franxurter;

  }
    html,body {
      margin: 0;
      padding: 0;
      background: ${l.colors.purple};
      color:  ${l.colors.blue};
      opacity: 1;
      font-family: franxurter;
    }

    #app {
      position: absolute;
      z-index: 10;
      width: 100vw;
      display:flex;
      align-content: center;
      justify-content: center;
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

    @keyframes notification {
      from {bottom: -120vh;}
      to { bottom: 5vh; }
    }
    @keyframes notification-out {
      to {bottom: -5vh; display:none;}
      from {bottom: 5vh; display:block;}
    }
  `)}const Ae=document.body.querySelector("#app"),Le=ve(),i=Y(Le,{renderer:Ie},Z);function Ie(e){q(Ae,Pe(e),{onBeforeElUpdated:function(t,a){return!t.isEqualNode(a)}})}Se();Te();De();Oe();window.io&&_e(io());
