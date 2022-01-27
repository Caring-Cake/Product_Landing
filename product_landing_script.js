var state = 0;
function switchProduct(dir){
  var control = ["basic", "deluxe", "ultimate"];
  document.getElementById(control[state]).style = "display:none;";
  if(dir == "r"){
    state += 1;
  } else {
    state -= 1;
  }
  if(state > 2){
    state = 0;
  }
  if(state < 0){
    state = 2;
  }
  document.getElementById(control[state]).style = "display:block;"
}
function showMenu(){
  document.getElementById("l-product").style = "display:block;";
  document.getElementById("l-features").style = "display:block;";
  document.getElementById("l-pricing").style = "display:block;";
}
function hideMenu(){
  document.getElementById("l-product").style = "display:none;";
  document.getElementById("l-features").style = "display:none;";
  document.getElementById("l-pricing").style = "display:none;";
}
function toggleOptions(){
  if(document.getElementById("l-product").style.display != "none"){
    document.getElementById("open-menu").style.display = "block";
    document.getElementById("open-menu").style.opacity = "1";
    hideMenu();
  }else{
    document.getElementById("open-menu").style.display = "block";
    document.getElementById("open-menu").style.opacity = "0.5";
    showMenu();
  }
}
