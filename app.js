const K='vitalia.v1';
const PRO_LINK='';
const E={sleep:0,water:0,mood:0,spent:0,task:'',done:false};
const $=s=>document.querySelector(s);
const ds=d=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
const today=()=>ds(new Date());
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let db;
try{db=JSON.parse(localStorage.getItem(K))}catch(e){db=null}
if(!db||!db.days)db={days:{},goal:{sleep:8,water:8,budget:30}};
const save=()=>localStorage.setItem(K,JSON.stringify(db));
const day=d=>db.days[d]||(db.days[d]={...E});
const pro=()=>localStorage.getItem('vitalia.pro')==='1';
if(/[?&]pro=1/.test(location.search)){localStorage.setItem('vitalia.pro','1');history.replaceState(null,'',location.pathname)}
function score(x){const g=db.goal;let s=0;s+=Math.min(x.sleep/g.sleep,1)*25;s+=Math.min(x.water/g.water,1)*25;s+=(x.mood/5)*20;if(x.spent>0)s+=x.spent<=g.budget?15:5;if(x.done)s+=15;return Math.round(s)}
function streak(){let n=0;const d=new Date();for(let i=0;i<3650;i++){const x=db.days[ds(d)];if(x&&score(x)>=50)n++;else if(i>0)break;d.setDate(d.getDate()-1)}return n}
function msg(s){return s>=80?'Gran dia. Sigue asi.':s>=50?'Buen ritmo. Un pequeno ajuste y llegas.':'Empieza por un vaso de agua y tu prioridad.'}
function render(){
  const t=today(),x=day(t),sc=score(x);
  const keys=Object.keys(db.days).sort().reverse();
  const shown=keys.slice(0,pro()?3650:7);
  const last7=[...Array(7)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return ds(d)});
  $('#app').innerHTML=`<header><h1>Vitalia</h1><p>Tu dia en un minuto: sueno, agua, animo, gasto y prioridad.</p></header>
  <section class="card score" aria-live="polite"><div class="ring" id="ring">${sc}</div><div><h2>Equilibrio de hoy</h2><p>${msg(sc)}</p><p>Racha: ${streak()} dias</p></div></section>
  <section class="card"><h2>Check-in de hoy</h2>
  <label>Horas de sueno <input type="number" min="0" max="14" step="0.5" value="${x.sleep}" data-k="sleep"></label>
  <label>Vasos de agua <input type="number" min="0" max="20" value="${x.water}" data-k="water"></label>
  <label>Animo (1 a 5) <input type="number" min="0" max="5" value="${x.mood}" data-k="mood"></label>
  <label>Gasto de hoy <input type="number" min="0" step="0.5" value="${x.spent}" data-k="spent"></label>
  <label>Tu prioridad de hoy <input type="text" maxlength="80" value="${esc(x.task)}" data-k="task"></label>
  <label>Prioridad hecha <input type="checkbox" ${x.done?'checked':''} data-k="done"></label></section>
  <section class="card"><h2>Ultimos 7 dias</h2><div class="chart" role="img" aria-label="Grafico de equilibrio de los ultimos 7 dias">${last7.map(k=>`<i style="height:${score(db.days[k]||E)}%"></i>`).join('')}</div></section>
  <section class="card"><h2>Historial</h2>${shown.map(d=>`<div class="row"><span>${d}</span><b>${score(db.days[d])}</b></div>`).join('')}
  ${pro()?'<p><button data-act="csv">Exportar CSV</button></p>':'<p>Plan gratis: ultimos 7 dias. Pro: historial ilimitado y exportar tus datos.</p><button data-act="pro">Conseguir Pro</button>'}</section>
  <footer><p>Tus datos se guardan solo en tu dispositivo. Vitalia no sustituye el consejo medico.</p></footer>`}
document.addEventListener('input',e=>{const k=e.target.dataset&&e.target.dataset.k;if(!k)return;const x=day(today());const t=e.target.type;x[k]=t==='checkbox'?e.target.checked:t==='number'?Math.max(0,+e.target.value||0):e.target.value;save();$('#ring').textContent=score(x)});
document.addEventListener('click',e=>{const a=e.target.dataset&&e.target.dataset.act;if(a==='pro'){if(PRO_LINK)window.open(PRO_LINK,'_blank');else alert('Pro estara disponible pronto.')}if(a==='csv')exportCsv()});
function exportCsv(){const r=['fecha,sueno,agua,animo,gasto,prioridad,hecha,puntos'].concat(Object.keys(db.days).sort().map(d=>{const x=db.days[d];return [d,x.sleep,x.water,x.mood,x.spent,'"'+String(x.task).replace(/"/g,'""')+'"',x.done,score(x)].join(',')}));const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([r.join(String.fromCharCode(10))],{type:'text/csv'}));a.download='vitalia.csv';a.click()}
render();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js');
