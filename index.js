//1. 제목을 클릭시 글자 바꾸기 '자기소개 페이지' <-> '안녕하세요!'
let title = document.getElementById('introTitle');
title.addEventListener('click', function () {
    if (title.innerHTML == '자기소개 페이지') {
        title.innerHTML = '안녕하세요!';
    }
    else title.innerHTML = '자기소개 페이지';
});

//2. hover 소개 부분 색 반전
let intro = document.getElementById('introContent');
intro.addEventListener('mouseover', function () {
    intro.setAttribute('class', 'hover');
});
intro.addEventListener('mouseout', function () {
    intro.removeAttribute('class');
});

//3. 버튼 클릭시 dark mode <-> light mode
let dark = document.querySelector('body');
let isDakrMode = false // 다크모드 판별 식별자
let toggle = document.getElementById('darkModeToggle');

document.getElementById('darkModeToggle').addEventListener('click', function () {
    if (!isDakrMode ){ // 다크모드가 false일 때
        isDakrMode = true;
        dark.style.backgroundColor='#0000008d';
        dark.style.color='#efefef';
        toggle.innerHTML = "light mode";
    } else {
        isDakrMode = false;
        dark.style.backgroundColor= '#faebd7';
        dark.style.color = "#000"
        toggle.innerHTML = "dark mode";
    }
});

// document.getElementById('darkModeToggle').addEventListener('click', function () {
//     if (dark.getAttribute('class') != 'dark-mode') {
//         dark.setAttribute('class', 'dark-mode');
//         document.getElementById('darkModeToggle').innerHTML = "light mode";
//     }

//     else {
//         dark.removeAttribute('class');
//         document.getElementById('darkModeToggle').innerHTML = "dark mode";
//     }
// });

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
    document.getElementById('profileImg').setAttribute('class', 'hover');
});
img.addEventListener('mouseout', function () {
    img.src = "./face.jpg";
    document.getElementById('profileImg').removeAttribute('class');
});