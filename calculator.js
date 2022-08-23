var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var buttonC = document.getElementById("buttonC");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var buttondivide = document.getElementById("buttondivide");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var buttonX = document.getElementById("buttonX");
var button0 = document.getElementById("button0");
var buttonplus = document.getElementById("buttonplus");
var buttonminus = document.getElementById("buttonminus");
var equal = document.getElementById("equal");
var backspace = document.getElementById("backspace");
var dataline = '';


const button0fun = (e) => {
    if ((dataline[dataline.length - 1] == '+' || dataline[dataline.length - 1] == '-' ||
        dataline[dataline.length - 1] == '*' || dataline[dataline.length - 1] == '/')
        && typeof (e) == 'string') {
        dataline = dataline.substring(0, dataline.length - 1);
        dataline = `${dataline}${e}`;
        let target = document.getElementById("answer");
        target.innerText = dataline;
    } else {
        dataline = `${dataline}${e}`
        let target = document.getElementById("answer");
        target.innerText = dataline;
    }
}
const equalfun = () => {
    
}
const buttonCfun = () => {
    let target = document.getElementById("answer");
    let target1 = document.getElementById("calculations");
    dataline = '';
    data = 0;
    target1.innerText = 0;
    target.innerText = 0;
}
const backspacefun = () => {
    dataline = dataline.substring(0, dataline.length - 1);
    let target = document.getElementById("answer");
    target.innerText = dataline;
}
const evalutaion = () => {
    let arry = [];
    let operator = [];
    let index = 0;
    let x = 0;
    let dummyarry = dataline;
    for (var i = 0; i < dataline.length; i++) {
        if (dataline[i] == '+' || dataline[i] == '-' || dataline[i] == '*'
            || dataline[i] == '/') {
            arry[x] = parseInt(dummyarry.slice(0, i));
            operator[x] = dataline.slice(i, i + 1);
            dummyarry = dataline.substring(i, dataline.length);
            x++;
            index = i;
        }
        if (i + 1 == dataline.length)
            arry[arry.length] = parseInt(dataline.substring(index + 1, dataline.length));
    }
    let answer = arry[0];
    try {
        for (let i = 1; i < arry.length; i++) {
            switch (operator[i - 1]) {
                case '+':
                    answer = answer + arry[i]
                    break
                case '-':
                    answer = answer - arry[i]
                    break
                case '/':
                    answer = answer / arry[i]
                    break
                case '*':
                    answer = answer * arry[i]
                    break
                default:
                    break
            }
        }
    }
    catch (err) {
        console.log('error', err);
    }
    let target = document.getElementById("answer");
    let target1 = document.getElementById("calculations");
    target1.innerText = dataline;
    target.innerText = answer;
    dataline = `${answer}`;
}









button0.addEventListener("click", (e) => button0fun(0));
button1.addEventListener("click", (e) => button0fun(1));
button2.addEventListener("click", (e) => button0fun(2));
button3.addEventListener("click", (e) => button0fun(3));
button4.addEventListener("click", (e) => button0fun(4));
button5.addEventListener("click", (e) => button0fun(5));
button6.addEventListener("click", (e) => button0fun(6));
button7.addEventListener("click", (e) => button0fun(7));
button8.addEventListener("click", (e) => button0fun(8));
button9.addEventListener("click", (e) => button0fun(9));
buttonplus.addEventListener("click", (e) => button0fun('+'));
buttonminus.addEventListener("click", (e) => button0fun('-'));
buttondivide.addEventListener("click", (e) => button0fun('/'));
buttonX.addEventListener("click", (e) => button0fun('*'));
buttonC.addEventListener("click", buttonCfun);
equal.addEventListener("click", ()=>{evalutaion()});
backspace.addEventListener("click", backspacefun);
