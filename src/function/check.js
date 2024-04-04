export const check = (secret, code) => {
    console.warn("secret :"+secret);
    console.warn("code :"+code);
    let cow = 0;
    let bull = 0;
    let count = 0;
    for(let i = 0; i<secret.length; i++) {
        if(parseInt(secret.charAt(i))===parseInt(code.charAt(i)))
        {
            bull++;
        }
        for(let j=0; j<secret.length; j++) {
            if(parseInt(secret.charAt(i))===parseInt(code.charAt(j)))
                {
                    count++;
                    break;
                }
        }
    }
    cow = count - bull;
    console.warn("Bull :"+bull);
    // console.warn("Count :"+count);
    console.warn("cow :"+cow);
}