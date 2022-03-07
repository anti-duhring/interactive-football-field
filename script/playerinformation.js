jQuery(document).ready(function(){


    const elements = document.querySelectorAll('.dragelement');

    elements.forEach((element, index, array) => {
        element.addEventListener('mousedown', function(){
            showPositionInfo(element.getAttribute('name'), element.getAttribute('id'))
        })
    });

    function showPositionInfo(name, id){
        const cover = document.querySelector('#cover').value;
        let player = players[name];
        let idElement = id;
        if(id.indexOf('_')!=-1) idElement=id.split('_')[1]
        let pairType = 0;
        let hideItens = 0; 
        let showItens = 0; 
        const description = player['description'];
        const bgImg = 'url("'+player['bgImg']+'")';
        const bgPosition = player['bgPos'];
        const descNoCover = 'O <b>{position}</b> não está cobrindo nenhum jogador ou zona, sua função é atacar o <b>Quarterback</b> na <b>blitz</b>.';
        const pairElementId = playersAttr[cover][idElement][5];

        if(pairElementId!=null){
            const pairElementName = document.querySelector('#'+pairElementId).getAttribute('name');
            const coverDesc = player[cover][3];
            hideItens=player[cover][1];
            showItens=player[cover][2];
            
            document.querySelector('#db-desc').innerHTML= coverDesc.replace('{position}', name).replace('{player_pair}', pairElementName).replace('{coverage_type}', player[cover][0]);

            if(player[cover][0]=='mano-à-mano'){
                document.querySelector('#cover-description').innerHTML = manCoverDescription;
            }
            else if(player[cover][0]=='de zona'){
                document.querySelector('#cover-description').innerHTML = zoneCoverDescription;
            }
        }
        else {
            hideItens='#db-desc, #cover-description, #dl-desc';
            showItens='';
            document.querySelector('#cover-description').innerHTML='';
            document.querySelector('#db-desc').innerHTML= descNoCover.replace('{position}', name);
        }

        jQuery(hideItens).hide()
        jQuery(showItens).show()
        document.querySelector('.st-text').innerHTML=description;
        document.querySelector('.bg-prospect').style.backgroundImage = bgImg;
        document.querySelector('.bg-prospect').style.backgroundPosition = bgPosition;

        document.querySelector('.info-content h2').textContent = name;


    }

    function hidePositionInfo(){
        jQuery('#dl-desc, .st-text, #db-desc, #cover-description').hide();
        jQuery('.info-content h2').text('Clique em algum jogador');
        jQuery('.bg-prospect').css('background-image', 'url("https://larrybrownsports.com/wp-content/uploads/2022/01/tom-brady-qb-768x475.jpg")');
        jQuery('.bg-prospect').css('background-position', 'center center');
    }
});