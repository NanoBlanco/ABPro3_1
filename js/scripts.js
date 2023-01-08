$('#info').hide();

$("area").hover(function () {
    $(this).toggleClass('arriba').siblings().toggleClass('abajo')
    $('#info').show();
    pinta($(this).index());
});

$("area").mouseleave(function(){
    $('#info').hide();
});

function pinta(region) {
    const nombre = ['Arica - Parinacota','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaiso','Región Metropolitana','O Higgins','al sur','mas al sur','mucho más al sur','casi fin de mundo','cerca del fin de mundo','mas cerca del fin de mundo','ahí del fin de mundo','fin de mundo'];
    let atrac = ''
    switch (region) { 
        case 0:
            atrac = `<li>A</li> <li>B</li> <li>C</li>`
            break;
        case 1:
            atrac = `<li>D</li> <li>E</li> <li>F</li>`
            break;
        case 2:
            atrac = `<li>G</li> <li>H</li> <li>I</li>`
            break;		
        case 3:
            atrac = `<li>J</li> <li>K</li> <li>L</li>`
            break;
        case 4:
            atrac = `<li>M</li> <li>N</li> <li>O</li>`
            break;
        case 5:
            atrac = `<li>P</li> <li>Q</li> <li>R</li>`
            break;
        case 6:
            atrac = `<li>S</li> <li>T</li> <li>U</li>`
            break;		
        case 7:
            atrac = `<li>V</li> <li>W</li> <li>X</li>`
            break;
        default:
            atrac = `<li>Y</li> <li>Z</li> <li>FO</li>`
    }
    $("#region").html('Region : '+nombre[region]);
    $("#atractivos").html(atrac);
}
