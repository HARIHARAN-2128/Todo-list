let ptag = document.getElementById('line')
let text = document.getElementById('input')
let index = 0;

text.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adstxt();
  }
});


function adstxt() {
    const value = text.value;
    if (value.length === 0) return;
    text.value = '';
    ptag.innerHTML += `
      <div id="${index}" class="newlist">
      <i class="fa fa-check" id="fa-check-${index}" aria-hidden="true"></i>
      <li id="list-${index}" onclick="striking(${index})">${value} </li>
      <button class="delete" onclick='remove(${index})'><i class="fa fa-trash" aria-hidden="true"></i></button>
      <div>`;
    index += 1;
  };


  function striking(index) {
      let ltag = document.getElementById(`list-${index}`);
      let tickmark = document.getElementById(`fa-check-${index}`);
      let colortickmark = tickmark.style.color;
      let striketext = ltag.style.textDecoration;
      tickmark.style.color = colortickmark === "rgb(255, 255, 255)" || colortickmark === "" ? "#00FF00" : "#FFFFFF";
      ltag.style.textDecoration = striketext == 'none' ? 'line-through' : "none";
    }
    
    function remove(index) {
      let ltag = document.getElementById(index)
      ptag.removeChild(ltag)
    };
