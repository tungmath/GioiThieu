//import {} from 'https://cdn.jsdelivr.net/npm/katex@0.16.19/dist/katex.min.js';

function gcd(a,b) {
    let num=1;
    if (a!==0 && b!==0) {
        let num1=Math.abs(a);
        let num2=Math.abs(b);
        if (num1<num2){
            num =gcd(num2,num1);
        }else{
            if (num1%num2===0) {
                num=num2;
            }else{
                num=gcd(num2,num1%num2);
            }
        }
    }else{
        if (a+b!=0){
            num = Math.abs(a)+Math.abs(b);
        }
    }
    return num;
};

class Fraction {
    constructor(n,d){
        let uoc=gcd(n,d);
        n=n/uoc;
        d=d/uoc;
        this.numer=n;
        this.denom=d;
        if (this.denom<0){
            this.denom = -this.denom;
            this.numer = -this.numer;
        }
    }
}

function randomSign(){
    let sign = 1;
    if (Math.round(Math.random())===0) {
        sign=-1;
    };
    return sign;
}

function trinomial(a,b,c) {
    let string=``;
    if (a===1){
        string+=`x^2`;
    }else{
        if (a==-1) {
            string+='-x^2';
        }else{
            if (a!=0){
                string+=`${a}x^2`;
            }
        }
    }
    if (b===-1){
        string+=`-x`;
    }else{
        if (b===1){
            string+=`+x`;
        }else{
            if (b>1){
                string+=`+${b}x`;
            }else{
                if (b<-1) {
                    string+=`${b}x`;
                }
            }
        }
    }
    if (c>0){
        string+=`+${c}`;
    }else{
        if (c<0){
            string+=`${c}`;
        }
    }
    return string;
}

function binomial(a,b){
    let string=``;
    if (a===1){
        string+=`x`;
    }else{
        if (a===-1){
            string+=`-x`;
        }else{
            if (a!=0){
                string+=`${a}x`;
            }
        }
    }
    if (b>0){
        string+=`+${b}`;
    }else{
        if (b<0){
            string+=`${b}`;
        }
    }
//trường hợp đặc biệt ghi dạng b+ax:
    if(a<0 && b>0){
        string=``;
        string+=`${b}`;
        if (a===1){
            string+=`+x`;
        }else{
            if (a===-1){
                string+=`-x`;
            }else{
                if (a<1){
                    string+=`${a}x`;
                }else{
                    if (a>1){
                        string += `+${a}`;
                    }
                }
            }
        }
    }
    
// hết trường hợp đặc biệt
    return string;
}

function square_cd(a,b,c){
    let num=gcd(a,gcd(b,c));
    let scd=1;
    for (let i=2 ; i < Math.floor(Math.sqrt(num)) ; i++){
        if (num%(i*i)===0){
            scd=i*i;
        }
    }
    return scd;
}

function phuongtrinh_canbangcan() {
    let nice=0;
    while (nice!=1) {
        let a=(Math.round(Math.random()*10)+1)*randomSign();
        let b=(Math.round(Math.random()*40))*randomSign();
        let c=(Math.round(Math.random()*80))*randomSign();
        let d=(Math.round(Math.random()*10)+1)*randomSign();
        let e=(Math.round(Math.random()*40))*randomSign();
        let f=(Math.round(Math.random()*80))*randomSign();
        let A=a-d;
        let B=b-e;
        let C=c-f;
        if (A!=0) {
            let Delta=B*B-4*A*C;
            if (Delta>0){
                Delta = Math.sqrt(Delta);
                if (Delta === Math.floor(Delta)) {
                    
                    let x_1 = (-B + Delta)/(2*A);
                    let x_2 = (-B - Delta)/(2*A);
                    let zeroindex=0;
                    if (a*x_1*x_1+b*x_1+c >= 0 && d*x_1*x_1+e*x_1+f >=0) {
                        zeroindex+=1;
                    }
                    if (a*x_2*x_2+b*x_2+c >= 0 && d*x_2*x_2+e*x_2+f >=0) {
                        zeroindex+=2;
                    }
                    nice=1;
                    let mathstring=``;
                    let scd=square_cd(a,b,c);
                    if (scd>1){
                        mathstring = katex.renderToString(`${Math.sqrt(scd)}\\sqrt{${trinomial(a/scd,b/scd,c/scd)}}=\\sqrt{${trinomial(d,e,f)}}`, {
                            throwOnError: false // Optional: prevent errors from halting script execution
                        });
                    }else{
                        mathstring = katex.renderToString(`\\sqrt{${trinomial(a,b,c)}}=\\sqrt{${trinomial(d,e,f)}}`, {
                            throwOnError: false // Optional: prevent errors from halting script execution
                        });
                    }
                    question.innerHTML = mathstring; 
                    let x1 = new Fraction( -B + Delta , 2*A );
                    let x2 = new Fraction( -B - Delta , 2*A );
                    choices = [];
                    choices.push("Vô nghiệm");
                    if (x1.denom===1){
                        x_1=`${x1.numer}`;
                    }else{
                        x_1=`\\frac{${x1.numer}}{${x1.denom}}`;
                    };
                    choices.push(katex.renderToString(`${x_1}`));
                    if (x2.denom===1){
                       x_2=`${x2.numer}`;
                    }else{
                        x_2=`\\frac{${x2.numer}}{${x2.denom}}`;
                    };
                    choices.push(katex.renderToString(`${x_2}`));
                    choices.push(katex.renderToString(`${x_1}`)+`  và  `+katex.renderToString(`${x_2}`));
                    choicesElement.innerHTML = '';
                    let i=0;
                    for (const choice of choices){
                        choicesElement.innerHTML += `<button class="choice" id="choice${i}"><li>${choice}</li></button><br>`;
                        i++;
                    }
                    const correctAnswer = document.getElementById('choice'+zeroindex);
                    resultButton.addEventListener('click', () => {
                        correctAnswer.classList.add('correct');
                    });
                }                
            }
        }
    }
};

function phuongtrinh_canbangnhithuc() {
    let nice=0;
    while (nice!=1) {
        let a=(Math.round(Math.random()*10)+1)*randomSign();
        let b=(Math.round(Math.random()*40)+1)*randomSign();
        let c=(Math.round(Math.random()*80)+1)*randomSign();
        let d=(Math.round(Math.random()*10)+1)*randomSign();
        let e=(Math.round(Math.random()*40)+1)*randomSign();
        let A=a-d*d;
        let B=b-2*d*e;
        let C=c-e*e;
        if (A!=0) {
            let Delta=B*B-4*A*C;
            if (Delta>0){
                Delta = Math.sqrt(Delta);
                if (Delta === Math.floor(Delta)) {
                    let x_1 = (-B + Delta)/(2*A);
                    let x_2 = (-B - Delta)/(2*A);
                    let zeroindex=0;
                    if (a*x_1*x_1+b*x_1+c >= 0 && d*x_1+e >=0) {
                        zeroindex+=1;
                    }
                    if (a*x_2*x_2+b*x_2+c >= 0 && d*x_2+e>=0) {
                        zeroindex+=2;
                    }
                    nice=1;
                    let scd=square_cd(a,b,c);
                    gcdde=gcd(d,e);
                    let mathstring=``;
                    if (scd>1){
                        mathstring = katex.renderToString(`${Math.sqrt(scd)}\\sqrt{${trinomial(a/scd,b/scd,c/scd)}}=${binomial(d,e)}`, {
                            throwOnError: false // Optional: prevent errors from halting script execution
                        });
                    }else{
                        if (gcdde>1){
                            if (d<0 && e<0){ gcdde=-gcdde;}
                            mathstring = katex.renderToString(`\\sqrt{${trinomial(a,b,c)}}=${gcdde}(${binomial(d/gcdde,e/gcdde)})`, {
                                throwOnError: false // Optional: prevent errors from halting script execution
                            });
                        }else{
                            mathstring = katex.renderToString(`\\sqrt{${trinomial(a,b,c)}}=${binomial(d,e)}`, {
                                throwOnError: false // Optional: prevent errors from halting script execution
                            });
                        }
                    }
                    question.innerHTML = mathstring; 
                    let x1 = new Fraction( -B + Delta , 2*A );
                    let x2 = new Fraction( -B - Delta , 2*A );
                    choices = [];
                    choices.push("Vô nghiệm");
                    if (x1.denom===1){
                        x_1=`${x1.numer}`;
                    }else{
                        x_1=`\\frac{${x1.numer}}{${x1.denom}}`;
                    };
                    choices.push(katex.renderToString(`${x_1}`));
                    if (x2.denom===1){
                       x_2=`${x2.numer}`;
                    }else{
                        x_2=`\\frac{${x2.numer}}{${x2.denom}}`;
                    };
                    choices.push(katex.renderToString(`${x_2}`));
                    choices.push(katex.renderToString(`${x_1}`)+`  và  `+katex.renderToString(`${x_2}`));
                    choicesElement.innerHTML = '';
                    let i=0;
                    for (const choice of choices){
                        choicesElement.innerHTML += `<button class="choice" id="choice${i}"><li>${choice}</li></button><br>`;
                        i++;
                    }
                    const correctAnswer = document.getElementById('choice'+zeroindex);
                    resultButton.addEventListener('click', () => {
                        correctAnswer.classList.add('correct');
                    });
                }                
            }
        }
    }
};

let question = document.querySelector(".question");
let choicesElement = document.querySelector(".choices");
let resultButton = document.getElementById('result');

let restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", () => {
    if (Math.round(Math.random())===1) {
        phuongtrinh_canbangcan();
    }else{
        phuongtrinh_canbangnhithuc();
    }
  });