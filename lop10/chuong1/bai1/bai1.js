// Lớp 10. Chương 1. Bài 1. Mệnh đề.

// 1. XÁC ĐỊNH MỆNH ĐỀ.
// 2. XÁC ĐỊNH MỆNH ĐỀ ĐÚNG, MỆNH ĐỀ SAI.
// 3. XÁC ĐỊNH MỆNH ĐỀ CHỨA BIẾN.
// 4. XÁC ĐỊNH MỆNH ĐỀ ĐẢO.
// 5. XÁC ĐỊNH DIỀU KIỆN CẦN, DIỀU KIỆN ĐỦ CỦA MỆNH ĐỀ KÉO THEO.
// 6. TÍNH ĐÚNG SAI CỦA MỆNH ĐỀ VỚI MỌI, TỒN TẠI.

let soLuongDung = menhDeDung.length;
let soLuongSai = menhDeSai.length;

// 2. XÁC ĐỊNH MỆNH ĐỀ ĐÚNG HOẶC SAI.
function hoiMenhDe_DungSai(){
     // nội dung câu hỏi:
    content.innerHTML = `Tìm mệnh đề đúng trong các mệnh đề sau:`;
    // Dữ kiện cho trong câu hỏi:
    equation.innerHTML = ``;

    // tạo các đáp án.
    let dapan1 = menhDeDung[Math.floor(Math.random()*soLuongDung)];
    let dapan2 = menhDeSai[Math.floor(Math.random()*soLuongSai)];
    let dapan3 = menhDeSai[Math.floor(Math.random()*soLuongSai)];
    let dapan4 = menhDeSai[Math.floor(Math.random()*soLuongSai)];

    // hiện các đáp án và hiệu ứng chọn.
    hienTracNghiem4LuaChon(dapan1,dapan2,dapan3,dapan4,1);
}
// HẾT HÀM 2

let content = document.querySelector(".content");
let equation = document.querySelector(".equation");
let choicesElement = document.querySelector(".choices");
let resultButton = document.querySelector('#result');

let restartButton = document.querySelector("#restart");

restartButton.addEventListener("click", () => {
    switch (Math.floor(Math.random())+1) { // Tự động chọn dạng câu hỏi: DÙNG FLOOR ĐỂ LÀM TRÒN XUỐNG
        case 1:
            hoiMenhDe_DungSai();
            break;
    }
});