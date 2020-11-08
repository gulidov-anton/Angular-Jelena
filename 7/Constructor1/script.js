"use strict";

let mainTextAddY = document.getElementById("mainTextAddY");
let mainTextAddN = document.getElementById("mainTextAddN");
let mainText = document.getElementById("mainText");

mainTextAddY.onclick = function(){
    mainText.removeAttribute('disabled');
};

mainTextAddN.onclick = function(){
    mainText.setAttribute('disabled', 'disabled');
    mainText.style.opacity(0.5);
};

function getData(){
    let newHTML;
    //приём данных из формы
    let title = title.value;// название
    let description = description.value;// слоган
    let menu = menu.value;// меню навигации
    let LogoImg = logoImg.value;// логотип
    let mainText = mainText.value;// основной текст
    let colorTheme = colorTheme.value;// цветовая тема
    let colorText = colorText.value;// цвет текста

    document.body.style.backgroundColor = colorTheme;

    //cоздание итоговой строки
    newHTML = '<div id="main"><header><img src="' + LogoImg + '" alt="logo">';
    newHTML += '<h1>' + title + '</h1>';
    newHTML += '<h2>' + description + '</h2></header>';

    //создание строки пунктов меню
    let list = document.constructor.list;
    let listItems = [];
    let li = '';
    
    for (let i = 0; list[i]; ++i){
        if(list[i].checked){
            listItems[i] = list[i].value;
            li += '<li><a href = "#">' + listItems[i] + ' ' + '</a></li>';
        };
    };
    
    let menuItem;

    //выбор шаблона
    switch(menu) {
        case 'horizontal':
            menuItem = `<section class="finalPlacementVertical"><nav id="navHorizontal">${ul}</nav>`
            break;
        case 'verticalLeft':
            menuItem = `<section class="finalPlacementLeft"><nav id="navVerticalLeft">${ul}</nav>`;
            break;
        case 'verticalRight':
            menuItem = `<section class="finalPlacementRight"><nav id="navVerticalRight">${ul}</nav>`;
            break;
        default:
            menuItem = `<section class="finalPlacement"><nav id="navHorizontal">${ul}</nav>`;
    };
    newHTML += menuItem;

    //основной текстовый блок
    let p = `<p class = "paragraph" style="color:${colorText}">${mainText}</p></section></div>`;
    newHTML += p;

    document.body.innerHTML = newHTML;
};