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