function checkWeight(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;

  this.getInfo = function() {
    let str = "";
    str += "이름 : " + this.userName + ", ";
    str += "키 : " + this.userHeight + ", ";
    str += "몸무게 : " + this.userWeight + "<br />";
    return str;
  }
  
  this.getResult = function() {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;
  
    if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
      return "정상 체중입니다."
    } else if(this.userWeight < this.minWeight) {
      return "살 좀 찌우셔야겠어요ㅠ"
    } else {
      return "살 좀 빼셔야겠어요ㅠ"
    }
  }
}

let jang = new checkWeight("장보리", 168, 62);
let oh = new checkWeight("오건희", 175, 74);

document.write(jang.getInfo());
document.write(jang.getResult(), "<br /><br />");

document.write(oh.getInfo());
document.write(oh.getResult(), "<br /><br />");