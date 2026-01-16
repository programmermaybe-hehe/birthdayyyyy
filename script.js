const music=document.getElementById("bgMusic");
document.body.addEventListener("click",()=>music.play(),{once:true});
// Attach this code after your page loads (e.g., at the end of <body> or inside DOMContentLoaded event)
document.addEventListener('DOMContentLoaded', function() {
    // Select the candle element by its id
    const candle = document.getElementById('candle');
    if (!candle) {
        console.warn('Candle element not found!');
        return;
    }

    // Define what should happen when candle is "blown out"
    function goNextStep() {
        // Example animation: fade out the candle flame
        const flame = candle.querySelector('.flame'); // if you use a flame sub-element
        if (flame) {
            flame.style.transition = "opacity 0.7s";
            flame.style.opacity = 0;
        }
        // 1 second later, show a message or go to another page
        setTimeout(() => {
            // You could show a message:
            // document.getElementById('message').style.display = 'block';

            // Or redirect:
            window.location.href = "nextpage.html"; // or your next step URL
        }, 900);
    }

    // Attach event handlers
    candle.addEventListener('click', goNextStep);
    candle.addEventListener('touchstart', goNextStep);
});

function showScene(hide,show){
  hide.classList.add("hidden");
  setTimeout(()=>{
    hide.style.display="none";
    show.style.display="flex";
    show.classList.remove("hidden");
  },800);
}

function blowCake(){
  showScene(scene1,scene2);
}

noBtn.onclick=()=>{
  runner.classList.add("run");
  noBtn.style.display="none";
  forceText.classList.remove("hidden");
  showGift();
};

function showGift(){
  document.querySelector(".gift").classList.remove("hidden");
}

function openGift(){
  document.querySelector(".gift").classList.add("open");
  letterMain.style.opacity=1;
  letterMain.style.transform="translate(0,-150px)";
}

function openLetter(){
  showScene(scene2,scene3);
  typeWish();
}

function typeWish(){
  let txt="HAPPY BIRTHDAYY CHIKUUUU ❤️\nMake a wish 🤗\nBest memories.";
  let i=0;
  letterWish.innerHTML="";
  let t=setInterval(()=>{
    letterWish.innerHTML+=txt.charAt(i++);
    if(i>=txt.length) clearInterval(t);
  },50);
}

function showSecondLetter(){
  showScene(scene3,scene2);
  letterMain.style.display="none";
  letterSecond.style.opacity=1;
  letterSecond.style.transform="translate(0,-150px)";
}

function openBouquet(){
  showScene(scene2,scene4);
}

function finalScene(){
  showScene(scene4,scene5);
  let msg="Asli gift mil jaayega jald hi 😭🤭";
  let i=0;
  let t=setInterval(()=>{
    finalText.innerHTML+=msg.charAt(i++);
    if(i>=msg.length){
      clearInterval(t);
      setTimeout(()=>hugBox.classList.remove("hidden"),1200);
    }
  },60);
}
