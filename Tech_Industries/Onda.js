// modo onda no texto
function nextSize(i,incMethod,textLength)
{
if (incMethod == 1) { return (22*Math.abs(Math.sin(i/(textLength/3.14))) );
}
if (incMethod == 2) { return (255*Math.abs(Math.cos(i/(textLength/3.14))));
}
return(0)
}
function sizeCycle(text,method,dis)
{
var output = "";
for (i = 0; i < text.length; i++) {
size = parseInt(nextSize(i +dis,method,text.length));
output += "<font style='font-size: "+ size +"pt'>" +text.substring(i,i+1)+ "</font>";
}
if (document.all)
theDiv.innerHTML = output;
else if (document.getElementById){
rng = document.createRange();
el = document.getElementById('theDiv');
rng.setStartBefore(el);
htmlFrag = rng.createContextualFragment(output);
while (el.hasChildNodes()) el.removeChild(el.lastChild);
el.appendChild(htmlFrag);}
else if (document.layers){

document.theDiv.document.write("<font face='Verdana'point-size=11>"+output+"</font>");
document.theDiv.document.close();}


}
//coloque seu texto aqui

function doWave(n) {
var theText = 'Be Creative, Be Yourself!!!';

sizeCycle(theText,1,n);
if (n > theText.length) {
n=0
}
setTimeout("doWave(" + (n+1) + ")", 50);
}