const date = new Date();

const hour: number = date.getHours();
const minutes: number = date.getMinutes();

let meridiem: string;
let hour2: number;

if(hour < 12) {
  meridiem = "오전";
  hour2 = hour;
} else {
  meridiem = "오후";
  hour2 = hour - 12;
};

const label = `${meridiem} ${hour2} 시 ${minutes}분 입니다.`
console.log(label);