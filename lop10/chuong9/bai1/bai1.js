// Lớp 10, chương 9, bài 1. Tọa độ của vec tơ trong mặt phẳng tọa độ.
// 1. TỌA ĐỘ TRUNG ĐIỂM.
// 2. TỌA ĐỘ TRỌNG TÂM TAM GIÁC.
// 3. TỌA ĐỘ VEC TƠ BIẾT TỌA ĐỘ 2 ĐẦU MÚT.
// 4. TỌA ĐỘ ĐIỂM BIẾT TỌA ĐỘ VEC TƠ VÀ 1 ĐẦU MÚT.
// 5. TỌA ĐỘ ĐIỂM BIẾT TỌA ĐỘ 1 ĐẦU MÚT VÀ TRUNG ĐIỂM.
// 6. ĐỘ DÀI VEC TƠ.
// 7. TỌA ĐỘ VEC TƠ CÓ DẠNG TỔNG 2 VEC TƠ CƠ SỞ.
// 8. GÓC GIỮA 2 VEC TƠ.
// 9. 



// 1. XÁC ĐỊNH TỌA ĐỘ TRUNG ĐIỂM CỦA ĐOẠN THẲNG.

function taoTracNghiem_HoiToaDoTrungDiem(){
    // tạo 2 cặp tọa độ.
    let a_x = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let a_y = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let b_x = new Fraction( a_x.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let b_y = new Fraction( a_y.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let a = [ a_x , a_y  ];
    let b = [ b_x , b_y ];
    
    // hàm ghi tọa độ 2 điểm a, b ngẫu nhiên.
    function toaDo2DiemTen(A,B,a,b){
        string = ``;
        if (Math.random()<0.5){
            string = `${A}( ${ghiPhanSo(a[0])} , ${ghiPhanSo(a[1])} ),\\quad ${B}( ${ghiPhanSo(b[0])} , ${ghiPhanSo(b[1])} )`;
        }else{
            string = `${B}( ${ghiPhanSo(b[0])} , ${ghiPhanSo(b[1])} ),\\quad ${A}( ${ghiPhanSo(a[0])} , ${ghiPhanSo(a[1])} )`;
        }
        return string;
    }

    // lấy tên điểm ngẫu nhiên
    let tenDiem = [`A`,`B`,`C`,`D`,`F`,`E`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`];
    let A = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
    tenDiem.splice(tenDiem.indexOf(A),1);
    let B = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];

    content.innerHTML = `Trung điểm của đoạn thẳng ${katex.renderToString(`${A}${B}`)} có tọa độ là cặp số nào sau đây? Biết:`;
    equation.innerHTML = katex.renderToString( `${toaDo2DiemTen(A,B,a,b)}` );

    //tạo các lựa chọn.
    let hai = new Fraction(2,1);

    let dung = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(a[0],b[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(a[1],b[1]), hai ) ) } \\right)`)}`; //

    let sai1 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( truPhanSo(a[0],b[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( truPhanSo(a[1],b[1]), hai ) ) } \\right)` )}`; //
    
    let sai2 = `${katex.renderToString( `\\left( ${ ghiPhanSo( congPhanSo(a[0],b[0]) ) }, ${ ghiPhanSo( congPhanSo(a[1],b[1]) ) } \\right)` )}`; //
    
    let sai3 = `${katex.renderToString( `\\left( ${ ghiPhanSo( truPhanSo(a[0],b[0]) ) }, ${ ghiPhanSo( truPhanSo(a[1],b[1]) ) } \\right)` )}`; //
    // hết tạo lựa chọn.

    // hiện các đáp án và hiệu ứng chọn.
    hienTracNghiem4LuaChon(dung,sai1,sai2,sai3);
}

// 2. HỎI TRỌNG TÂM CỦA TAM GIÁC.
function taoTracNghiem_HoiToaDoTrongTam(){
    // tạo 3 cặp tọa độ không thẳng hàng.
    let nice =0;
    let a_x =0, a_y =0, b_x=0,b_y=0,c_x=0,c_y=0;
    let a=[], b=[], c=[];

    while (nice!=1){
        a_x = new Fraction( (Math.floor(Math.random()*30))*randomSign() , 1);
        a_y = new Fraction( (Math.floor(Math.random()*30))*randomSign() , 1);
        b_x = new Fraction( a_x.numer + (Math.floor(Math.random()*60)+1)*randomSign() , 1);
        b_y = new Fraction( a_y.numer + (Math.floor(Math.random()*60)+1)*randomSign() , 1);
        c_x = new Fraction( b_x.numer + (Math.floor(Math.random()*60)+1)*randomSign() , 1);
        c_y = new Fraction( b_y.numer + (Math.floor(Math.random()*60)+1)*randomSign() , 1);
        a = [ a_x , a_y ];
        b = [ b_x , b_y ];
        c = [ c_x , c_y ];
        // kiểm tra 3 điểm thẳng hàng.
        if ( nhanPhanSo( truPhanSo(a[0],b[0]),truPhanSo(a[1],c[1]) ).numer != nhanPhanSo( truPhanSo(a[0],c[0]),truPhanSo(a[1],b[1]) ).numer ) {
            nice = 1;
        }
    }
    
    // hàm ghi tọa độ 3 điểm a, b, c ngẫu nhiên.
    function toaDo3DiemTen(A,B,C,a,b,c){
        string = `${A}( ${ghiPhanSo(a[0])} , ${ghiPhanSo(a[1])} ), \\quad `;
        string +=  `${B}( ${ghiPhanSo(b[0])} , ${ghiPhanSo(b[1])} ), \\quad ${C}( ${ghiPhanSo(c[0])} , ${ghiPhanSo(c[1])} )`;
        return string;
    }

    // lấy tên điểm ngẫu nhiên
    let tenDiem = [`A`,`B`,`C`,`D`,`F`,`E`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`];
    let A = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
    tenDiem.splice(tenDiem.indexOf(A),1);
    let B = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
    tenDiem.splice(tenDiem.indexOf(B),1);
    let C = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
 

    content.innerHTML = `Trọng tâm của tam giác ${katex.renderToString(`${A}${B}${C}`)} có tọa độ là cặp số nào sau đây? Biết:`;
    equation.innerHTML = katex.renderToString( `${toaDo3DiemTen(A,B,C,a,b,c)}` );

    //tạo các lựa chọn.
    let hai = new Fraction(2,1);
    let ba = new Fraction(3,1);

    let dung = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(congPhanSo(a[0],b[0]),c[0]), ba ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(congPhanSo(a[1],b[1]),c[1]), ba ) ) } \\right)` )}`; //

    let sai1 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(congPhanSo(a[0],b[0]),c[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(congPhanSo(a[1],b[1]),c[1]), hai ) ) } \\right)` )}`; //
    
    let sai2 = `${katex.renderToString( `\\left( ${ ghiPhanSo( congPhanSo(congPhanSo(a[0],b[0]),c[0]) ) }, ${ ghiPhanSo( congPhanSo(congPhanSo(a[1],b[1]),c[1]) ) } \\right)` )}`; //
    
    let sai3 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(a[0],b[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(a[1],b[1]), hai ) ) } \\right)` )}`; //
    // hết tạo lựa chọn.

    // hiện các đáp án và hiệu ứng chọn.
    hienTracNghiem4LuaChon(dung,sai1,sai2,sai3);
}

// 3. HỎI TỌA ĐỘ VEC TƠ BIẾT 2 ĐẦU MÚT
function taoTracNghiem_HoiToaDoVectorBiet2Diem(){
    // tạo 2 cặp tọa độ.
    let a_x = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let a_y = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let b_x = new Fraction( a_x.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let b_y = new Fraction( a_y.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let a = [ a_x , a_y  ];
    let b = [ b_x , b_y ];
    
    // hàm ghi tọa độ 2 điểm a, b ngẫu nhiên.
    function toaDo2DiemTen(A,B,a,b){
        string = ``;
        if (Math.random()<0.5){
            string = `${A}( ${ghiPhanSo(a[0])} , ${ghiPhanSo(a[1])} ),\\quad  ${B}( ${ghiPhanSo(b[0])} , ${ghiPhanSo(b[1])} )`;
        }else{
            string = `${B}( ${ghiPhanSo(b[0])} , ${ghiPhanSo(b[1])} ),\\quad ${A}( ${ghiPhanSo(a[0])} , ${ghiPhanSo(a[1])} )`;
        }
        return string;
    }

    // lấy tên điểm ngẫu nhiên
    let tenDiem = [`A`,`B`,`C`,`D`,`F`,`E`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`];
    let A = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
    tenDiem.splice(tenDiem.indexOf(A),1);
    let B = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];

    content.innerHTML = `Tọa độ của véc tơ ${katex.renderToString(`\\overrightarrow{${A}${B}}`)} có tọa độ là cặp số nào sau đây? Biết:`;
    equation.innerHTML = katex.renderToString( `${toaDo2DiemTen(A,B,a,b)}` );

    //tạo các lựa chọn.
    let hai = new Fraction(2,1);

    let dung = `${katex.renderToString( `\\left( ${ ghiPhanSo( truPhanSo(b[0],a[0]) ) }, ${ ghiPhanSo( truPhanSo(b[1],a[1]) ) } \\right)` )}`; 

    // sai do tổng chia 2 là trung điểm
    let sai1 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(a[0],b[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(a[1],b[1]), hai ) ) } \\right)` )}`; //

    // sai do lấy đầu trừ cuối
    let sai2 = `${katex.renderToString( `\\left( ${ ghiPhanSo( truPhanSo(a[0],b[0]) ) }, ${ ghiPhanSo( truPhanSo(a[1],b[1]) ) } \\right)` )}`; //
    
    // sai do lấy tổng
    let sai3 = `${katex.renderToString( `\\left( ${ ghiPhanSo( congPhanSo(a[0],b[0]) ) }, ${ ghiPhanSo( congPhanSo(a[1],b[1]) ) } \\right)` )}`; //
    
    // hết tạo lựa chọn.

    // hiện các đáp án và hiệu ứng chọn.
    hienTracNghiem4LuaChon(dung,sai1,sai2,sai3);
}

// 4. TỌA ĐỘ ĐIỂM BIẾT TỌA ĐỘ VEC TƠ VÀ 1 ĐẦU MÚT.
function taoTracNghiem_HoiToaDoDiemBietVectoVa1DauMut(){
    // tạo 2 cặp tọa độ.
    let a_x = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let a_y = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let b_x = new Fraction( a_x.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let b_y = new Fraction( a_y.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let a = [ a_x , a_y  ];
    let b = [ b_x , b_y ];
    
    
    // hàm ghi tọa độ vec tơ  và 1 đầu mút.
    function toaDoVectoVa1DauMut(A,B,a,b,biet){
        let vector_x = truPhanSo(b[0],a[0]);
        let vector_y = truPhanSo(b[1],a[1]);
        let vector = [ vector_x, vector_y ];
        let string = `\\overrightarrow{${A}${B}}=(${ghiPhanSo(vector[0])},${ghiPhanSo(vector[1])}) , \\quad `;
        if (biet===0){
            string += `${A}(${ghiPhanSo(a[0])} , ${ghiPhanSo(a[1])})`;
        }else{
            string += `${B}(${ghiPhanSo(b[0])} , ${ghiPhanSo(b[1])})`;
        }
        return string;
    }

    // lấy tên điểm ngẫu nhiên
    let tenDiem = [`A`,`B`,`C`,`D`,`F`,`E`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`];
    let A = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
    tenDiem.splice(tenDiem.indexOf(A),1);
    let B = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
   
    let biet = Math.round(Math.random());
  
    if (biet===0){// biết 0 hỏi 1.
        content.innerHTML = `Điểm ${katex.renderToString(`${B}`)} có tọa độ là cặp số nào sau đây? Biết:`;
    }else{// biết 1 hỏi 0.
        content.innerHTML = `Điểm ${katex.renderToString(`${A}`)} có tọa độ là cặp số nào sau đây? Biết:`;
    }
    
    equation.innerHTML = katex.renderToString( `${toaDoVectoVa1DauMut(A,B,a,b,biet)}.` );


    // tạo các lựa chọn.
    let dung = ``;
    if (biet===1){ // biết 1 hỏi 0, và ngược lại.
        dung = `${katex.renderToString(`\\left( ${ghiPhanSo(a[0])}, ${ghiPhanSo(a[1])} \\right)`)}`;
    }else{
        dung = `${katex.renderToString(`\\left( ${ghiPhanSo(b[0])}, ${ghiPhanSo(b[1])} \\right)`)}`;
    }

    let hai = new Fraction(2,1);
    let sai1 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(b[0],a[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(b[1],a[1]), hai ) ) } \\right)` )}`; //
    
    let sai2 = `${katex.renderToString( `\\left( ${ ghiPhanSo( congPhanSo(nhanPhanSo(b[0],hai),a[0]) ) }, ${ ghiPhanSo( congPhanSo(nhanPhanSo(b[1],hai),a[1]) ) } \\right)` )}`; //
    
    let sai3 = `${katex.renderToString( `\\left( ${ ghiPhanSo( truPhanSo(b[0],nhanPhanSo(a[0],hai)) ) }, ${ ghiPhanSo( truPhanSo(b[1],nhanPhanSo(a[1],hai)) ) } \\right)` )}`; //
    // hết tạo lựa chọn.

    // hiện các đáp án và hiệu ứng chọn.
    hienTracNghiem4LuaChon(dung,sai1,sai2,sai3);   
}

// 5. TỌA ĐỘ ĐIỂM BIẾT TỌA ĐỘ 1 ĐẦU MÚT VÀ TRUNG ĐIỂM.
function taoTracNghiem_HoiToaDoDiemBietTrungDiemVa1DauMut(){
    // tạo 2 cặp tọa độ.
    let a_x = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let a_y = new Fraction( (Math.floor(Math.random()*30))*randomSign(), 1);
    let b_x = new Fraction( a_x.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let b_y = new Fraction( a_y.numer + (Math.floor(Math.random()*60)+1)*randomSign(), 1);
    let a = [ a_x , a_y ];
    let b = [ b_x , b_y ];
    let hai = new Fraction(2,1);
    let mid_x = chiaPhanSo(congPhanSo(b[0],a[0]),hai);
    let mid_y = chiaPhanSo(congPhanSo(b[1],a[1]),hai);
    let mid = [ mid_x, mid_y ];
    
    // hàm ghi tọa độ trung điểm và 1 đầu mút.
    function toaDoTrungDiemVa1DauMut(A,B,M,a,b,m,biet){
        let string = `${M}(${ghiPhanSo(m[0])},${ghiPhanSo(m[1])}) , \\quad `;
        if (biet===0){
            string += `${A}(${ghiPhanSo(a[0])} , ${ghiPhanSo(a[1])})`;
        }else{
            string += `${B}(${ghiPhanSo(b[0])} , ${ghiPhanSo(b[1])})`;
        }
        return string;
    }

    // lấy tên điểm ngẫu nhiên
    let tenDiem = [`A`,`B`,`C`,`D`,`F`,`E`,`G`,`H`,`J`,`K`,`L`,`N`,`O`,`P`,`Q`,`R`,`S`];
    let trungDiem = [`I`,`M`];
    let A = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
    tenDiem.splice(tenDiem.indexOf(A),1);
    let B = tenDiem[ Math.floor( Math.random()*tenDiem.length ) ];
    let M = trungDiem[ Math.floor( Math.random()*2) ];

    let biet = Math.round(Math.random());
  
    if (biet===0){// biết 0 hỏi 1.
        content.innerHTML = `Cho ${katex.renderToString(`${M}`)} là trung điểm của đoạn thẳng ${katex.renderToString(`${A}${B}`)}. Điểm ${katex.renderToString(`${B}`)} có tọa độ là cặp số nào sau đây? Biết:`;
    }else{// biết 1 hỏi 0.
        content.innerHTML = `Cho ${katex.renderToString(`${M}`)} là trung điểm của đoạn thẳng ${katex.renderToString(`${A}${B}`)}. Điểm ${katex.renderToString(`${A}`)} có tọa độ là cặp số nào sau đây? Biết:`;
    }
    
    equation.innerHTML = katex.renderToString( `${toaDoTrungDiemVa1DauMut(A,B,M,a,b,mid,biet)}.` );

    // tạo các lựa chọn.
    let dung = ``;
    let sai1 = ``, sai2 =``, sai3 = ``;
    if (biet===1){ // biết 1 hỏi 0, và ngược lại.
        dung =`${katex.renderToString( `\\left( ${ghiPhanSo(a[0])}, ${ghiPhanSo(a[1])} \\right)` )}`;

        sai1 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( truPhanSo(mid[0],b[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( truPhanSo(mid[1],b[1]), hai ) ) } \\right)` )}`; //
        
        sai2= `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(mid[0],b[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(mid[1],b[1]), hai ) ) } \\right)` )}`; //
        
        sai3 = `${katex.renderToString( `\\left( ${ ghiPhanSo(congPhanSo(mid[0],b[0])) }, ${ ghiPhanSo( congPhanSo(mid[0],b[0])) } \\right)` )}`; //
    }else{
        dung =`${katex.renderToString( `\\left( ${ghiPhanSo(b[0])}, ${ghiPhanSo(b[1])} \\right)` )}`; //

        sai1 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( truPhanSo(mid[0],a[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( truPhanSo(mid[1],a[1]), hai ) ) } \\right)` )}`; //
        
        sai2 = `${katex.renderToString( `\\left( ${ ghiPhanSo( chiaPhanSo( congPhanSo(mid[0],a[0]), hai ) ) }, ${ ghiPhanSo( chiaPhanSo( congPhanSo(mid[1],a[1]), hai ) ) } \\right)` )}`; //
        
        sai3 = `${katex.renderToString( `\\left( ${ ghiPhanSo(congPhanSo(mid[0],a[0])) }, ${ ghiPhanSo( congPhanSo(mid[0],a[0])) } \\right)` )}`; //
    }    
    // hết tạo lựa chọn.

    // hiện các đáp án và hiệu ứng chọn.
    hienTracNghiem4LuaChon(dung,sai1,sai2,sai3);
}

// 6. ĐỘ DÀI VEC TƠ.

function taoTracNghiem_HoiDoDaiVecToBietToaDo(){
    let x = Math.round(Math.random()*20)*randomSign();
    let y = Math.round(Math.random()*20+1)*randomSign();
    let doDaiBinhPhuong = x*x+y*y;

    content.innerHTML = `Độ dài của vec tơ cho dưới đây bằng bao nhiêu?`;
    equation.innerHTML = `${katex.renderToString(`\\vec{a}=(${x};${y})`)}`;
    
    // tạo các lựa chọn.
    let dung = `${katex.renderToString(`${ghiCanBacHai(doDaiBinhPhuong)}`)}`;
    let sai1 = `${katex.renderToString(`${ghiCanBacHai(Math.abs(x*x-y*y))}`)}`;
    let sai2 = `${katex.renderToString(`${x*x+y*y}`)}`;
    let sai3 = `${katex.renderToString(`${ghiCanBacHai(Math.abs(x+y))}`)}`;
    // hết các lựa chọn.

    // hiện các đáp án và hiệu ứng chọn.
    hienTracNghiem4LuaChon(dung,sai1,sai2,sai3);
}
let content = document.querySelector(".content");
let equation = document.querySelector(".equation");
let choicesElement = document.querySelector(".choices");
let resultButton = document.querySelector('#result');

let restartButton = document.querySelector("#restart");

restartButton.addEventListener("click", () => {
    switch (Math.floor(Math.random()*6)+1) { // Tự động chọn dạng câu hỏi: DÙNG FLOOR ĐỂ LÀM TRÒN XUỐNG
        case 1:
            taoTracNghiem_HoiToaDoTrungDiem();
            break;
        case 2:
            taoTracNghiem_HoiToaDoTrongTam();
            break;
        case 3:
            taoTracNghiem_HoiToaDoVectorBiet2Diem();
            break;
        case 4:
            taoTracNghiem_HoiToaDoDiemBietVectoVa1DauMut();
            break;
        case 5:
            taoTracNghiem_HoiToaDoDiemBietTrungDiemVa1DauMut();
            break;
        case 6:
            taoTracNghiem_HoiDoDaiVecToBietToaDo();
            break;
    }
});
