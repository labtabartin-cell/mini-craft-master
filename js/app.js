const root=document.querySelector("#ui");
const status=document.querySelector("#status");
const canvas=document.querySelector("#game");
const gl=canvas.getContext("webgl2",{antialias:false,alpha:false});

function fit(){
  const dpr=Math.min(devicePixelRatio||1,2);
  const w=Math.floor(innerWidth*dpr),h=Math.floor(innerHeight*dpr);
  if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h}
  gl?.viewport(0,0,w,h);
}
addEventListener("resize",fit);
fit();

if(gl){
  gl.clearColor(.04,.04,.04,1);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

async function loadOriginalData(){
  const items=await fetch("data/items.json").then(r=>r.ok?r.text():null);
  let ui=null;
  const response=await fetch("data/ui/start_screen.json");
  if(response.ok) ui=await response.text();

  const itemCount=items?(items.match(/"name"\s*:/g)||[]).length:0;
  const uiLoaded=ui!==null;

  status.textContent=`Original data: items=${itemCount}, start_screen=${uiLoaded?"loaded":"missing"}`;

  // The JSON UI dialect and native engine are intentionally not replaced
  // with a fake implementation. Runtime modules are added incrementally.
}

loadOriginalData().catch(err=>{
  status.textContent=`Port bootstrap error: ${err.message}`;
  console.error(err);
});
