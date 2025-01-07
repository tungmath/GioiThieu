//import {} from 'https://cdn.jsdelivr.net/npm/katex@0.16.19/dist/katex.min.js';

function gcd(a,b) {
    let num=1;
    if (a!=0 && b!=0) {
        let num1=Math.abs(a);
        let num2=Math.abs(b);
        if (num1<num2){
            let num =gcd(num2,num1);
        }           
        if (num1%num2===0) {
            let num=num2;
        } else {
            let num=gcd(num2,num1%num2);
        }
    }
    return num;
};

class Fraction {
    constructor(num,den){
        let gcd=gcd(num,den);
        this.numer=num/gcd;
        this.denom=den/gcd;
    }
};

function phuongtrinh_canbangcan() {
    let nice=0;
    while (nice!=1) {
        let a=Math.round(Math.random()*40)+1;
        let b=Math.round(Math.random()*15)+1;
        let c=Math.round(Math.random()*80)+1;
        let d=Math.round(Math.random()*40)+1;
        let e=Math.round(Math.random()*15)+1;
        let f=Math.round(Math.random()*80)+1;
        let A=a-d;
        let B=b-e;
        let C=c-f;
        if (A!=0) {
            let Delta=B*B-4*A*C;
            if (Delta>0){
                Delta = Math.sqrt(Delta);
                if (Delta === Math.floor(Delta)) {
                    
                    let x_1 = (-B + Math.sqrt(Delta))/(2*A);
                    let x_2 = (-B - Math.sqrt(Delta))/(2*A);
                    let zeroindex=0;
                    if (a*x_1*x_1+b*x_1+c >= 0 && d*x_1*x_1+e*x_1+f >=0) {
                        zeroindex+=1;
                    }
                    if (a*x_2*x_2+b*x_2+c >= 0 && d*x_2*x_2+e*x_2+f >=0) {
                        zeroindex+=2;
                    }
                    nice=1;
                    //question.textContent = "Tìm nghiệm của phương trình:"+Delta + " "+ a +" "+b+" "+c+" "+d+" "+e+" "+f +" " +x_1+" " + x_2;
                    //var mathstring = katex.renderToString(`Tìm nghiệm của phương trình : \(\\sqrt{${a}x^2}\)`, element, {
                    //    throwOnError: false
                    //});
                    let mathstring = katex.renderToString(`\\sqrt{${a}x^2+${b}x+${C}}=\\sqrt{${d}x^2+${e}x+${f}}`, {
                        throwOnError: false // Optional: prevent errors from halting script execution
                    });
                    question.innerHTML = mathstring;
                    //let string_x1 = Fraction( -B + Math.sqrt(Delta) , 2*A );
                    //let string_x2 = Fraction( -B - Math.sqrt(Delta) , 2*A );
                }                
            }
        }
    }
};



let question = document.querySelector("p");
let myButton = document.querySelector("button");
myButton.addEventListener("click", () => {
    phuongtrinh_canbangcan();
  });