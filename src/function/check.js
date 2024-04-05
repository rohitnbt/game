export const check = (secret, code) => {
  secret = secret.toString().split("");
  code = code.toString();
  console.log("secret :", typeof secret);
  console.log("code :", typeof code);
  let cow = 0;
  let bull = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === code[i]) {
      bull++;
      secret[i] = "*";
    }
    if (secret.includes(code[i])) {
      cow++;
    }
  }
  console.warn("Bull :" + bull);
  // console.warn("Count :"+count);
  console.warn("cow :" + cow);
  alert("Bull :" + bull + " cow :" + cow);
};
