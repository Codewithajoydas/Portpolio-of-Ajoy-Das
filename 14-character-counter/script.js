
const charCount = () => {
    let inp = document.getElementById("inp");
    let result = document.getElementById("result");
    let char = inp.value.length;
    result.innerHTML = inp.value.length; 
    console.log(char);
    
}