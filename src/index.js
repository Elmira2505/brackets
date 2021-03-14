module.exports = function check(str, bracketsConfig) {
   let char;
    newArray = [];
    if (str.length%2 !== 0 ) return false;


    console.log(str);
    for (i = 0; i < str.length; i++) {
        char = str[i];
        
        for (j = 0; j < bracketsConfig.length; j++) {
            if (char == bracketsConfig[j][0]) {
                if ((bracketsConfig[j][0] == bracketsConfig[j][1]) &&
                    (newArray[newArray.length - 1] == bracketsConfig[j][1]) ) {
                   // console.log(newArray);  
                    newArray.pop();
                   
                } else {
                    newArray.push(char);
                }
               // console.log(" open", newArray);
            } else if (char == bracketsConfig[j][1]) {
                // console.log("cLose", newArray, newArray.length-1,                 newArray[newArray.lenght-1], bracketsConfig[j][0]);
                last = newArray[newArray.length - 1];
                //console.log("last", length, last, bracketsConfig[j][0], bracketsConfig[j][1]);
                if (newArray[newArray.length - 1] == bracketsConfig[j][0]) {
                    //console.log("pop", newArray);
                    newArray.pop();
                }
            }
           // console.log(newArray);
        }
    }
    console.log(newArray)
    console.log((newArray.length == 0) ? true : false);

    return (newArray.length == 0) ? true : false;

}
