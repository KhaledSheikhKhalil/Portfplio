// متغيرات لحفظ العددين لاستخدامهما في الجمع والضرب وباقي القسمة
let leftCounter = 0;       // يحفظ آخر رقم وصلنا له في زر (1 إلى 10) الأيسر
let numbersText = "";      // يحفظ سلسلة الأرقام (1 2 3 4 ...)
let rightRandomNum = null; // يحفظ الرقم العشوائي (1 إلى 10) من الزر الأيمن

// متغير لحفظ اللون الحالي (يبدأ باللون الأصفر افتراضياً)
let currentColor = "أصفر";

// ======================== العمود الأيسر ========================

// 1. زر إضافة أرقام من 1 إلى 10
const btnAddNums = document.getElementById("btn-add-nums");
const resAddNums = document.getElementById("res-add-nums");

btnAddNums.addEventListener("click", function () {
    if (leftCounter < 10) {
        leftCounter++; // زيادة الرقم بمقدار 1
        numbersText += leftCounter + " ";
    } else {
        // إعادة العد من 1 إذا وصل إلى 10
        leftCounter = 1;
        numbersText = "1 ";
    }
    resAddNums.textContent = "الأرقام: " + numbersText;
});

// 2. زر تبديل اللون (إذا كان أصفر يقلب أزرق، وإذا كان أزرق يقلب أصفر)
const btnToggleColor = document.getElementById("btn-toggle-color");
const resToggleColor = document.getElementById("res-toggle-color");

btnToggleColor.addEventListener("click", function () {
    if (currentColor === "أصفر") {
        currentColor = "أزرق";
        btnToggleColor.classList.remove("yellow-bg");
        btnToggleColor.classList.add("blue-bg");
    } else {
        currentColor = "أصفر";
        btnToggleColor.classList.remove("blue-bg");
        btnToggleColor.classList.add("yellow-bg");
    }
    resToggleColor.textContent = "اللون الحالي: " + currentColor;
});

// 3. زر إظهار اللون الحالي في نافذة window.alert وتحت الزر
const btnShowColor = document.getElementById("btn-show-color");
const resShowColor = document.getElementById("res-show-color");

btnShowColor.addEventListener("click", function () {
    window.alert("اللون الحالي هو: " + currentColor);
    resShowColor.textContent = "تم عرض اللون: " + currentColor;
});

// 4. زر يعرض رقم عشوائي غير مقيد من 1 للـ 10
const btnRandFree = document.getElementById("btn-rand-free");
const resRandFree = document.getElementById("res-rand-free");

btnRandFree.addEventListener("click", function () {
    // توليد رقم عشوائي صحيح مثلاً بين 0 و 99999 بدون التقيد بـ 1 إلى 10
    const randomFree = Math.floor(Math.random() * 100000);
    resRandFree.textContent = "النتيجة: " + randomFree;
});


// ======================== العمود الأيمن ========================

// 1. زر يعطي رقم عشوائي من 1 إلى 10
const btnRand10 = document.getElementById("btn-rand-10");
const resRand10 = document.getElementById("res-rand-10");

btnRand10.addEventListener("click", function () {
    // معادلة توليد رقم عشوائي صحيح بين 1 و 10
    rightRandomNum = Math.floor(Math.random() * 10) + 1;
    resRand10.textContent = "النتيجة: " + rightRandomNum;
});

// دالة مساعدة للتأكد من أن المستخدم ضغط على الزرين العلويين قبل إجراء العمليات الحسابية
function checkNumbersReady() {
    if (leftCounter === 0 || rightRandomNum === null) {
        window.alert("يرجى الضغط على زر (إضافة أرقام) وزر (رقم عشوائي 1-10) أولاً!");
        return false;
    }
    return true;
}

// 2. زر يحسب مجموع العددين السابقين
const btnSum = document.getElementById("btn-sum");
const resSum = document.getElementById("res-sum");

btnSum.addEventListener("click", function () {
    if (checkNumbersReady()) {
        const sum = leftCounter + rightRandomNum;
        resSum.textContent = `المجموع (${leftCounter} + ${rightRandomNum}) = ${sum}`;
    }
});

// 3. زر ضرب العددين
const btnMul = document.getElementById("btn-mul");
const resMul = document.getElementById("res-mul");

btnMul.addEventListener("click", function () {
    if (checkNumbersReady()) {
        const mul = leftCounter * rightRandomNum;
        resMul.textContent = `الضرب (${leftCounter} × ${rightRandomNum}) = ${mul}`;
    }
});

// 4. زر باقي قسمة العددين
const btnMod = document.getElementById("btn-mod");
const resMod = document.getElementById("res-mod");

btnMod.addEventListener("click", function () {
    if (checkNumbersReady()) {
        const mod = rightRandomNum % leftCounter;
        resMod.textContent = `باقي قسمة (${rightRandomNum} % ${leftCounter}) = ${mod}`;
    }
});