// 타입별칭 생성
let user = {
    id: 1,
    name: "홍길동",
    nickname: "cromidi",
    birth: "2000.01.01",
    bio: "안녕",
    location: "서울시"
};
let countryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    UnitedKingdom: "uk"
};
let stringMap2 = {
    key: "string"
};
let KeyPair = {
    key: "key",
    value: 0
};
let stringMap3 = {
    key: "value"
};
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘못오셨슴다");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "엉덩이",
    profile: {
        type: "developer",
        skill: "typescript"
    }
};
const studentUser = {
    name: "통키",
    profile: {
        type: "student",
        school: "피식대학"
    }
};
export {};
