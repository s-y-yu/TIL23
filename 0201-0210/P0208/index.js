const Z = document.querySelectorAll(".zzim");

const T = document.querySelectorAll(".title");
const G = document.querySelectorAll(".genre");
const A = document.querySelectorAll(".actor");
const R = document.querySelectorAll(".runningtime");
const ZL = document.querySelector(".zzimlist");
const NZ = document.querySelector(".nozzim");

Z.forEach((z, idx) => {
  z.addEventListener("click", (e) => {
    const result = {
      title: T[idx].textContent,
      genre: G[idx].textContent,
      actor: A[idx].textContent,
      runningTime: R[idx].textContent,
    };
    localStorage.setItem("Data" + idx, JSON.stringify(result));
    //객체 생성 및 JSON 문자열로 바꿔 로컬 스토리지에 저장

    const data = JSON.parse(localStorage.getItem("Data" + idx));
    const listItem = document.createElement("li");
    listItem.textContent = `제목: ${data.title}
     장르: ${data.genre}
     감독: ${data.actor}
     러닝타임: ${data.runningTime}`;
    //가져와서 문자열로 다시 파싱하고, 새로운 HTML 엘리멘트 만들어 텍스트 삽입
    NZ.textContent = "";
    ZL.prepend(listItem);
    //ul 안에 아래쪽부터 차례대로 삽입
  });
});
