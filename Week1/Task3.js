  const scores = new Array(57,68,72,88,55,97,52);

  const sLength = scores.length;

  let totalScores =0;


  for (let i = 0; i < sLength; i++) {
     totalScores += scores[i];
  }
  let avarageScore = (totalScores/ sLength);

  console.log(totalScores);
  console.log(avarageScore);
  document.getElementById("display").innerHTML =  "The avarage score: " + avarageScore;