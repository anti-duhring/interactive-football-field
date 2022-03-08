jQuery(document).ready(function(){


    const playerElements = document.querySelectorAll('.dragelement:not(.DL)');
    const zoneElements = document.querySelectorAll('.zonedrag');
    const dlPlayersElements = document.querySelectorAll('.dragelement.DL');
    const fieldInformation = document.querySelectorAll('.field-legend')
    const buttonFieldInformation = document.querySelector('.show-field-information');
    let btnFieldLegend = 'Mostrar informações do campo'

    buttonFieldInformation.addEventListener('click',function() {
        if(btnFieldLegend == 'Mostrar informações do campo') btnFieldLegend = 'Esconder informações do campo'
        else if(btnFieldLegend == 'Esconder informações do campo') btnFieldLegend = 'Mostrar informações do campo'

        buttonFieldInformation.textContent = btnFieldLegend
        fieldInformation.forEach(element => {
        element.classList.toggle('hide');
       })
       

      })

    dlPlayersElements.forEach((element, index, array) => {
        element.addEventListener('mousedown', function(){
            showDLInfo(element.getAttribute('name'), element.getAttribute('id').split('_')[1])
        })
    });

    playerElements.forEach((element, index, array) => {
        element.addEventListener('mousedown', function(){
            showPositionInfo(element.getAttribute('name'), element.getAttribute('id'), players[element.getAttribute('name')])
        })
    });
    zoneElements.forEach((element, index, array) => {
        element.addEventListener('mousedown', function(){
            showPositionInfo(element.getAttribute('name'), element.getAttribute('id'), zones[element.getAttribute('name')])
        })
    });

    function showPositionInfo(name, id, player){
        const cover = document.querySelector('#cover').value;
        let idElement = id;
        if(id.indexOf('_')!=-1) idElement=id.split('_')[1]
        let pairType = 0;
        let hideItens = 0; 
        let showItens = 0;
        console.log(player) 
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

    function showDLInfo(name, id){
        const player = players[name];
        const cover = document.querySelector('#cover').value;
        const tech = DLplayers[cover][id][0];
        const gap = DLplayers[cover][id][1]
        const textDescription = player['textInfo'].replace('{player_name}', '<b>'+name+'</b>').replace('{gap}', '<b>'+gap+'</b>').replace('{tech}', '<b>'+tech+'</b>').replace('{gap}', '<b>'+gap+'</b>');
        jQuery('#db-desc, #cover-description').hide()
        jQuery('#dl-desc').show()

        document.querySelector('.st-text').innerHTML= player['description'];
        document.querySelector('#dl-desc').innerHTML= textDescription;
        document.querySelector('.bg-prospect').style.backgroundImage = 'url("'+player['bgImg']+'")';
        document.querySelector('.bg-prospect').style.backgroundPosition = player['bgPosition'];
        document.querySelector('.info-content h2').textContent = name;

        console.log(player['bgImg'])

    }
});
