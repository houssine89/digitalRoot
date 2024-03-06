function digitalRoot(n){

  let nString = n.toString();
  let sum = 0;
  for (let i = 0; i < nString.length; i++){
    sum += parseInt(nString[i]);
  }
  if(sum >= 10){
    return digitalRoot(sum);
  } else {
    return sum;
  }
  }
  let result = digitalRoot(942);
  console.log(result);


