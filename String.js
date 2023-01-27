function long() {
  let index = 0;
  let char;
  let str1 = "google";
  let str2 = "go";
  console.log(str1);
  do {
    let flag = null;

  
    for (let i = 0; i < str1.length; i++) {
      char = str1[i].charAt(index);
      if (!char) break;
      if (!flag) flag = char;
      else if (char != flag) break;
    }
  } while ((i = str1.length && index < str1.length && ++index));
  {
    return (str1[0] || "").slice(0, index);
  }
}
long();
