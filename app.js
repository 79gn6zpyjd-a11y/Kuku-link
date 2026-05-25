function openGoogle(){window.open('https://google.com/search?q=poultry+near+me')}
function openMaps(){window.open('https://maps.google.com')}
const upload=document.getElementById('upload');
const preview=document.getElementById('preview');
if(upload){
upload.addEventListener('change',function(){
const file=this.files[0];
if(file){preview.src=URL.createObjectURL(file);}
});
}
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
