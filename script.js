const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;
const startTyping = () =>{
const nouns = ["cat", "dog", "house", "tree", "book"];
const verbs = ["runs", "jumps", "sleeps", "reads", "eats"];
const adjectives = ["happy", "big", "green", "beautiful", "loud"];
const adverbs = ["quickly", "happily", "silently", "carefully", "eagerly"];

function getRandomWord(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomSentence() {
  const noun = getRandomWord(nouns);
  const verb = getRandomWord(verbs);
  const adjective = getRandomWord(adjectives);
  const adverb = getRandomWord(adverbs);

  const sentence = `The ${adjective} ${noun} ${verb} ${adverb} in the garden, while the ${adjective} ${noun} ${verb} ${adverb} in the nearby park.`;
  return sentence;
}

const randomSentence = generateRandomSentence();
  show_sentence.innerHTML = randomSentence;

  let date = new Date();
  startTime = date.getTime();
  btn.innerHTML = "Done";
}

const calculateTypingSpeed = (time_taken) =>{
  let totalWords = typing_ground.value.trim();
  let actualWords = totalWords===""? 0 : totalWords.split(" ").length
  if(actualWords !== 0){
    let typing_speed = (actualWords/time_taken)*60;
    typing_speed = Math.round(typing_speed);
    score.innerHTML = `Your typing speed is ${typing_speed} words per mintutes & you wrote ${actualWords} words & time take ${time_taken} sec`;
  }
  else{
    score.innerHTML = `Your typing speed is 0 words per mintutes & time take ${time_taken} sec`;
  }
}
const endTypingTest = () =>{
  btn.innerHTML = "Start";
  let date = new Date();
  endTime = date.getTime();
  totalTimeTaken = (endTime - startTime)/1000;
  calculateTypingSpeed(totalTimeTaken);
  show_sentence.innerHTML = "";
  typing_ground.value = "";
}
btn.addEventListener('click', ()=>{
  switch(btn.innerHTML.toLowerCase()){
    case "start":
      typing_ground.removeAttribute('disabled');
      startTyping();
      break;
    case "done":
      typing_ground.setAttribute('disabled', true);
      endTypingTest();
      break;
  }
})