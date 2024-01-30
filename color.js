function Color() {
  let randomcolor = Math.floor(Math.random() * 16777215);
  //   console.log(randomcolor)
  let randomc = "#" + randomcolor.toString(16);
  // console.log(randomc)
  document.getElementById("add1").style.backgroundColor = randomc;
  document.getElementById("add").innerText = randomc;

  navigator.clipboard.writeText(randomc)
}
document.getElementById("btn").addEventListener("click", Color);
Color();
