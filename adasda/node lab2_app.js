// 실습 2: 반복·조건 렌더링
// 실행: node lab2_app.js
// /fruits 와 /empty 를 각각 접속해 비교해 볼 것

const express = require("express");
const app = express();  
const PORT = 3000;

app.set("view engine", "ejs");

const name = ["성은 '서'이고 이름은 '범구'입니다"];
const school = ["학과는 정보통신공학과이며 현재 2학년입니다"];
const animal = ["저는 개를 좋아하며 똘이라는 이름에 닥스훈트를 키우고 있습니다"];
const food = ["저는 음식 중에 치킨을 좋아하며 특별히 가리는 음식은 없으나 해산물은 선호하지 않습니다"];

// 데이터가 있는 경우
app.get("/name", (req, res) => {
  res.render("lab2", { title: "이름 : 서범구", items: name });
});

// 빈 배열인 경우 → 조건 렌더링 확인
app.get("/school", (req, res) => {
  res.render("lab2", { title: "학교 : 인하공업전문대학", items: school });
});

app.get("/animal", (req, res) => {
  res.render("lab2", { title: "좋아하는 동물", items: animal });
});

app.get("/food", (req, res) => {
  res.render("lab2", { title: "좋아하는 음식", items: food });
});

app.get("/", (req, res) => {
  res.send('<a href="/name">저는 서범구입니다!</a> | <a href="/school">인하공업전문대학</a> | <a href="/animal">좋아하는 동물</a> | <a href="/food">좋아하는 음식</a>');
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});