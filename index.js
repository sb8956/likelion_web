
//1. 제목을 클릭시 글자 바꾸기 '자기소개 페이지' <-> '안녕하세요!'
let title = document.getElementById('title');
title.addEventListener('click', function () {
    if (title.innerHTML == '자기소개 페이지') {
        title.innerHTML = '안녕하세요!';
    }
    else title.innerHTML = '자기소개 페이지';
});

//2. hover 소개 부분 색 반전
let intro = document.getElementById('intro');
intro.addEventListener('mouseover', function () {
    intro.setAttribute('class', 'hover');
});
intro.addEventListener('mouseout', function () {
    intro.removeAttribute('class');
});

//3. 버튼 클릭시 dark mode <-> light mode
let dark = document.querySelector('body');
document.getElementById('toggle').addEventListener('click', function () {
    if (dark.getAttribute('class') != 'dark-mode') {
        dark.setAttribute('class', 'dark-mode');
        document.getElementById('toggle').innerHTML = "light mode";
    }

    else {
        dark.removeAttribute('class');
        document.getElementById('toggle').innerHTML = "dark mode";
    }
});

// document.getElementById('toggle').addEventListener("click", function () {
//     if (document.querySelector('body').classList.contains('dark-mode')) {
//         document.body.classList.remove("dark-mode");
//         document.getElementById('toggle').innerHTML = "dark-mode";
//     } else {
//         document.body.classList.add("dark-mode");
//         document.getElementById('toggle').innerHTML = "light-mode";
//     }
// }, false);

//4. hover 이미지 변경 
let img = document.querySelector('img');
img.addEventListener('mouseover', function () {
    img.src = "./bingbing.png";
    document.getElementById('face').setAttribute('class', 'hover');
});
img.addEventListener('mouseout', function () {
    img.src = "./face.jpg";
    document.getElementById('face').removeAttribute('class');
});