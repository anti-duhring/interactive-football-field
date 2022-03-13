jQuery(document).ready(function(){ 
    
    const lines = document.querySelectorAll('#cover1 .line')
    const select = document.querySelector('#cover');

    setDefaultPositionLines(lines);
    jQuery('.dragelement:not(.DL), .zonedrag').draggable({
        scroll: false,
        disabled: false,
        drag: function(){
            if(jQuery(this).attr('line')=='true'){
            moveLine(jQuery(this).attr('id'));
            }
        }
    });
    jQuery('.dragelement[containment="offense"]').draggable({containment:'#offense_area'});
    jQuery('.dragelement[containment="defense"], .zonedrag').draggable({containment:'#defense_area'});
    jQuery('#tech, #gaps').hide();
    jQuery('.dragelement.DL').draggable({
        containment:'#defense_area', 
        start: function() {
            jQuery('#tech, #gaps').fadeIn(200);
        },
        drag: function(){
            const gap = jQuery('#gaps .ui-droppable-hover').text();
            const tech = jQuery('#tech .ui-droppable-hover').text();
            jQuery('#tech div, #gaps div').removeClass('a-highlight')
            DLplayers[document.querySelector('#cover').value][jQuery(this).attr('id').split('_')[1]][0] = tech;
            DLplayers[document.querySelector('#cover').value][jQuery(this).attr('id').split('_')[1]][1] = gap;
            jQuery('.gap-name').text(gap);
            if(jQuery('#tech .ui-droppable-hover').length>0) jQuery('.tech-name').text(tech); 
        },
        stop: function() {
            jQuery('#tech, #gaps').fadeOut(200);
        },
    });
    jQuery( "#tech div, #gaps div" ).droppable({
        accept: ".DL",
        classes: {
            "a-hover": "ui-state-hover",
            "a-active": "ui-state-active"
        },
        drop: function( event, ui ) {
          jQuery(this)
            .addClass('a-highlight');
            console.log('drop')
        }
      });

    select.addEventListener('change', function(){
        jQuery('#cover1, #cover2man, #cover2zone, #cover3sky, #cover4').hide();
        jQuery('#'+select.value).show();
        jQuery('.WR[containment="offense"], .RB[containment="offense"], .TE[containment="offense"]').attr('line', playersAttr[select.value]['haveLineOnOffense']);
        setDefaultPositionElements(select.value);
        setDefaultPositionLines(document.querySelectorAll('#'+select.value+' .line'));
    })

    function setDefaultPositionElements(cover){
        
        document.querySelectorAll('#'+cover+' .dragelement, #offense_field .dragelement, #'+cover+' .zonedrag').forEach((element, index, array) => {
            let elementId = 0;
            if(element.getAttribute('id').includes('_')){
                elementId = element.getAttribute('id').split('_')[1];
            }else{
                elementId = element.getAttribute('id');
            }
             
            if(playersAttr[cover][elementId]){

                element.style.top=playersAttr[cover][elementId][3];
                element.style.left=playersAttr[cover][elementId][4];
            }
        })
    }

    function moveLine(idElement){
        const cover = select.value;
        var line, lineId;

        if(idElement.indexOf(cover)!=-1){
            line = document.querySelector('#'+cover+'_'+playersAttr[cover][idElement.split('_')[1]][2]);
            lineId = playersAttr[cover][idElement.split('_')[1]][2];
        }
        else {
            line = document.querySelector('#'+cover+'_'+playersAttr[cover][idElement][2]);
            lineId = playersAttr[cover][idElement][2];
        }
      
        const Dot1 = linesAttr[cover][lineId][0];
        const Dot2 = linesAttr[cover][lineId][1];
        const x1Position = jQuery('#'+cover+'_'+Dot1).position().left;
        const y1Position = jQuery('#'+cover+'_'+Dot1).position().top;
        var x2Position, y2Position;

        if(linesAttr[cover][lineId][2]=='man'){
             x2Position = jQuery('#'+Dot2).position().left;
             y2Position = jQuery('#'+Dot2).position().top;
        }
        else{
             x2Position = jQuery('#'+cover+'_'+Dot2).position().left;
             y2Position = jQuery('#'+cover+'_'+Dot2).position().top;
        }

        const separationx1 = playersAttr[cover][Dot1][0];
        const separationy1 = playersAttr[cover][Dot1][1];
        const separationx2 = playersAttr[cover][Dot2][0];
        const separationy2 = playersAttr[cover][Dot2][1];

        line.setAttribute('x1', x1Position + separationx1)
        line.setAttribute('y1', y1Position + separationy1)
        line.setAttribute('x2', x2Position + separationx2)
        line.setAttribute('y2', y2Position + separationy2)

   
       
    }

   function setDefaultPositionLines(linesArray){
        linesArray.forEach((element, index, array) => { 
        const cover = document.querySelector('#cover').value;
        const line = element;
        const lineId = line.getAttribute('id').split('_')[1];
        const Dot1 = linesAttr[cover][lineId][0];
        const Dot2 = linesAttr[cover][lineId][1];
        const x1Position = jQuery('#'+cover+'_'+Dot1).position().left;
        const y1Position = jQuery('#'+cover+'_'+Dot1).position().top;
        var x2Position, y2Position;

        if(linesAttr[cover][lineId][2]=='man'){
             x2Position = jQuery('#'+Dot2).position().left;
             y2Position = jQuery('#'+Dot2).position().top;
        }
        else{
             x2Position = jQuery('#'+cover+'_'+Dot2).position().left;
             y2Position = jQuery('#'+cover+'_'+Dot2).position().top;
        }

        const separationx1 = playersAttr[cover][Dot1][0];
        const separationy1 = playersAttr[cover][Dot1][1];
        const separationx2 = playersAttr[cover][Dot2][0];
        const separationy2 = playersAttr[cover][Dot2][1];

        element.setAttribute('x1', x1Position + separationx1)
        element.setAttribute('y1', y1Position + separationy1)
        element.setAttribute('x2', x2Position + separationx2)
        element.setAttribute('y2', y2Position + separationy2)

        

 
        });
    }
});