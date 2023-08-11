const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
let meridiem;
let hour2;
if (hour < 12) {
    meridiem = "오전";
    hour2 = hour;
}
else {
    meridiem = "오후";
    hour2 = hour - 12;
}
;
const label = `${meridiem} ${hour2} 시 ${minutes}분 입니다.`;
console.log(label);
export {};
