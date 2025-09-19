
// document.addEventListener('DOMContentLoaded', ()=>{
// const askBtn=document.getElementById('askBtn');
// const queryInput=document.getElementById('query');
// const responseBox=document.getElementById('response');
// const langSelect=document.getElementById('lang');


// let kb=null;


// async function loadKB(){
// try{
// const res=await fetch('./diseases.json');
// if(res.ok){kb=await res.json();}
// }catch(e){console.error(e);}
// }
// loadKB();


// function detectLangAuto(text){
// const hindi=/[\u0900-\u097F]/;
// const punjabi=/[\u0A00-\u0A7F]/;
// if(hindi.test(text)) return 'hi';
// if(punjabi.test(text)) return 'pa';
// return 'en';
// }


// function extractIntent(text){
// const t=text.toLowerCase();
// if(/symptom|लक्षण|ਲੱਛਣ/.test(t)) return 'symptoms';
// if(/cause|कारण|ਕਾਰਣ/.test(t)) return 'causes';
// if(/remedy|उपचार|ਘਰੇਲੂ/.test(t)) return 'remedies';
// return 'symptoms';
// }


// function findDiseaseKey(text){
// if(!kb) return null;
// for(const key of Object.keys(kb)){
// if(text.toLowerCase().includes(key.toLowerCase())) return key;
// }
// return null;
// }


// askBtn.addEventListener('click', ()=>{
// const text=queryInput.value.trim();
// if(!text){responseBox.textContent='Please enter a disease or symptom.';return;}


// const chosenLang=langSelect.value==='auto'?detectLangAuto(text):langSelect.value;
// const intent=extractIntent(text);


// if(/doctor|medicine|hospital|pharmacy|दवा|ਡਾਕਟਰ|ਫਾਰਮੇਸੀ/.test(text.toLowerCase())){
// responseBox.textContent='undefined';return;
// }


// const key=findDiseaseKey(text);
// if(kb && key){
// const value=kb[key][intent][chosenLang];
// responseBox.textContent=value||'undefined';return;
// }


// responseBox.textContent='undefined';
// });


// queryInput.addEventListener('keydown',e=>{if(e.key==='Enter') askBtn.click();});
// });