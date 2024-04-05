export const check = (secret, code) => {
  secret = secret.toString();
  code = code.toString();
  console.log("secret :", typeof secret);
  console.log("code :", typeof code);
  let cow = 0;
  let bull = 0;
  let count = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === code[i]) {
      bull++;
    }
    if (secret.includes(code[i])) {
      count++;
    }
  }
  cow = count - bull;
  console.warn("Bull :" + bull);
  // console.warn("Count :"+count);
  console.warn("cow :" + cow);
  alert("Bull :" + bull + " cow :" + cow);
};
