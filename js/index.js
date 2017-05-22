function bnc(){
  var urlf="https://www.youtube.com/embed/"
  var videoid=document.getElementById("url").value.split("=")[1];
  document.getElementById("output").innerHTML="<iframe id=\"videoout\" width=\"560\" height=\"315\" src="+urlf+videoid+" frameborder=\"0\" allowfullscreen></iframe>";
}