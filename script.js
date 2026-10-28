// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 박희성(2058014)
const titles = ["인터스텔라", "오디세이", "분노의 질주: 더 세븐", "스타워즈 에피소드 8: 라스트 제다이", "아바타"];
const ratings = [8.49, 8.01, 7.2, 8.49, 7.61];
const years = [2014, 2026, 2015, 2017, 2009];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0; 
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        count++;
        
    }
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    let label;
    if(ratings[i] >= 8.5) {
        label = '명작';
    } else if(ratings[i] >= 7) {
        label = '추천';
    } else {
        label = '보통';
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}
console.log("8점 이상:", count + "편");

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);





/*
// document.write("외부 스크립트 방법");

console.log("콘솔창에 나와야 하는 내용");

var num = 10 + 20;
console.log(num);

let sum = 80 + 1234;
console.log(sum);

let string1 = "Hello World\n";
let string2 = '시네마 웹사이트 "Cinema Website"에 오신 것을 환영합니다.';
console.log(string1, string2);

let dan = 3;
let gugu = 8;
let string = `${dan} 곱하기 ${gugu}은/는 ${dan * gugu}입니다.`;
console.log(string);

let studentScore = [80, 70, 90, 60];

console.log(studentScore);
console.log(studentScore[2]);

let stdScore = {
    koreanScore: 80,
    englishScore: 70,
    mathScore: 90,
    scienceScore: 60
};
console.log(stdScore.koreanScore);
console.log(stdScore['englishScore']);


for (dan = 2; dan < 10; dan++) {
    for (let i = 1; i < 10; i++) {
        console.log(`${dan} X ${i} = ${dan * i}`);
    };
    console.log('');
}

*/


