function tronThuTu(danhSach){// danh sách có thứ tự. các phần tử đều khác nhau. kết quả là danh sách đã trộn.
    let doDai = danhSach.length;
    let danhSachTam = danhSach;
    let danhSachMoi = [];// đặt lại danh sách.
    for (let i=0; i<doDai; i++){
        let chon = Math.floor( Math.random()*(doDai-i) );
        danhSachMoi.push( danhSachTam[chon] );
        danhSachTam.splice(chon,1);
    }
    return danhSachMoi;
}

function gcd(a,b) {// tìm ước chung lớn nhất, nếu có đúng 1 số khác 0 thì ước là số lớn hơn. cả hai là 0 thì ước là 1.
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

    ghiPhanSo(phanSo){// phương thức ghi phân số ra thành chuỗi ký tự latex. ????? Đúng chưa ta ?????
        if (phanSo.denom===1){
            return `${phanSo.numer}`;
        }else{
            if (phanSo.numer<0){// khi tử âm và mẫu khác 1, đổi dấu trừ ra ngoài
                return `-\\dfrac{${-phanSo.numer}}{${phanSo.denom}}`;
            }else{
                return `\\dfrac{${phanSo.numer}}{${phanSo.denom}}`;
            }
        };
    }
}

function congPhanSo(a,b){
    return new Fraction(a.numer*b.denom + a.denom*b.numer , a.denom*b.denom);
}

function truPhanSo(a,b){
    return new Fraction(a.numer*b.denom - a.denom*b.numer , a.denom*b.denom);
}

function nhanPhanSo(a,b){
    return new Fraction(a.numer*b.numer , a.denom*b.denom);
}

function chiaPhanSo(a,b){
    if (b.numer !=0){
        return new Fraction(a.numer*b.denom , a.denom*b.numer);
    }else{
        return `Không thể chia cho 0!`;
    }
}


function ghiPhanSo(phanSo){// hàm ghi phân số
    if (phanSo.denom===1){
        string=`${phanSo.numer}`;
    }else{
        if (phanSo.numer<0){// khi tử âm và mẫu khác 1, đổi dấu trừ ra ngoài
            string =`-\\dfrac{${-phanSo.numer}}{${phanSo.denom}}`;
        }else{
            string =`\\dfrac{${phanSo.numer}}{${phanSo.denom}}`;
        }
    };
    return string;
}

function randomSign(){
    let sign = 1;
    if (Math.round(Math.random())===0) {
        sign=-1;
    };
    return sign;
}

function trinomial(a,b,c) { // a, b, c với a khác 0.
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

function ghiCanBacHai(a){
    let string =`0`;
    let uocCanNguyen =1;
    // tìm ước là số chính phương
    if (a>=0){
        for (let i=1; i<=Math.sqrt(a);i++){ // quét hết các ước để tìm ước chính phương.
            if (a%(i*i)===0){
                uocCanNguyen=i;
            }
        }
    }
    // tìm được căn của ước chính phương thì ghi ra dạng căn bậc hai.
    if (a===1){
        string =`1`;
    }else{
        if (a>1){
            if ((a/uocCanNguyen)/uocCanNguyen===1){ // a chính phương
                string = `${uocCanNguyen}`;
            }else{ // a không chính phương
                if (uocCanNguyen===1){ // và không có ước chính phương
                    string = `\\sqrt{${a}}`;
                }else{ // nhưng có ước chính phương
                    string = `${uocCanNguyen}\\sqrt{${(a/uocCanNguyen)/uocCanNguyen}}`;
                }
            }
        }
    }
    return string;
}

function hienTracNghiem4LuaChon(dung,sai1,sai2,sai3){
    // trộn
    map = tronThuTu([0,1,2,3]);
    let newChoices = [dung,sai1,sai2,sai3];
    choices =[];
    for (let i=0;i<4; i++){
        choices.push( newChoices[ map[i] ] );
    }
    // hết trộn.

    // hiện đáp án ra.
    choicesElement.innerHTML = '';
    let i=0;

    for (const choice of choices){
        choicesElement.innerHTML += `<button class="choice" id="choice${i}"><li>${choice}</li></button><br>`;
        i++;
    }
    // hết hiện đáp án.

    // người dùng chọn đáp án nào thì đáp án đó xanh lá, các đáp án khác về bình thường.
    let userChoice=[];
    let userChoiceIndex=0; // biến lưu thứ tự câu người dùng chọn
    for (let a=0 ; a<4 ; a++){
        userChoice.push(document.getElementById('choice'+a));
        userChoice[a].addEventListener('click', () => {
            userChoice[a].classList.add('userchoice');
            userChoiceIndex=a+1; //lấy thứ tự câu người dùng chọn
            for (let i=0 ; i<4 ; i++){
                if (i!=a){
                    userChoice[i].classList.remove('userchoice');
                }
            }
        });
    }

    // lấy chỉ số câu đúng sau khi trộn.
    cauDung = map.indexOf(0); // câu đúng luôn ở đầu tiên.
    // hết lấy chỉ số đáp án đúng.

    // gán câu đúng.
    const correctChoice = document.getElementById(`choice${cauDung}`); // chỉ số của lựa chọn đúng tích nghiệm.
    resultButton.addEventListener('click', () => {
        correctChoice.classList.remove('userchoice');
        correctChoice.classList.add('correct');
        if (userChoiceIndex-1!=cauDung && userChoiceIndex!=''){
                userChoice[userChoiceIndex-1].classList.add('wrong');
        }
    });
}