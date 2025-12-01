const modules = {
  "brainstem/core": {
    v: {ground:"Grounded", flight:"Creative Flight"},
    h: {generation:"Tired with purpose", evolution:"Charged and ready"},
    reflect:(v,h)=>`Core rhythm: vertical=${v}, horizontal=${h}`
  },
  "proprioceptive/gymit": {
    v:{ground:"Physical Load", flight:"Precision & Form"},
    h:{generation:"Fatigue cycle", evolution:"Peak strength"},
    reflect:(v,h)=>`Gym: ${v} / ${h}`
  },
  "enteric/diet": {
    v:{ground:"Heavy digestion", flight:"Light digestion"},
    h:{generation:"Deficit", evolution:"Metabolic clarity"},
    reflect:(v,h)=>`Diet: ${v} / ${h}`
  }
};

const sel = document.getElementById('module-select');
Object.keys(modules).forEach(k=>{
  const o=document.createElement('option'); o.value=k; o.textContent=k; sel.appendChild(o);
});

function updateLabels(){
  const m = modules[sel.value];
  const v = Number(document.getElementById('vertical').value);
  const h = Number(document.getElementById('horizontal').value);
  document.getElementById('vertical-label').textContent = v<0? m.v.ground : v>0? m.v.flight : "Center";
  document.getElementById('horizontal-label').textContent = h<0? m.h.generation : h>0? m.h.evolution : "Neutral";
}
document.querySelectorAll('input[type=range]').forEach(r=>r.addEventListener('input',updateLabels));
sel.addEventListener('change',updateLabels);

document.getElementById('log-btn').addEventListener('click',()=>{
  const m = modules[sel.value];
  const v = Number(document.getElementById('vertical').value);
  const h = Number(document.getElementById('horizontal').value);
  const vLabel = v<0? m.v.ground : v>0? m.v.flight : "Center";
  const hLabel = h<0? m.h.generation : h>0? m.h.evolution : "Neutral";
  document.getElementById('reflection').textContent = m.reflect(vLabel,hLabel);
});

updateLabels();
