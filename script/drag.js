jQuery(document).ready(function() {
    // Inputs
    // Selectors to hide the others Coverages
    const coverages = {
        cover1: document.querySelectorAll('.cover1'),
        cover2man: document.querySelectorAll('.cover2man'),
        cover2zone: document.querySelectorAll('.cover2zone'),
        cover3sky: document.querySelectorAll('.cover3sky')
    }
    const playershide = '#CB3,#LLB,#RLB,#CB2,#CB1';
    var coverinput = document.getElementById('cover');
    const allCoverages = Object.keys(coverages)


    // Variables

    // Spans 
    const playerDot = document.querySelectorAll('.drag, .dragcovero, .dragdl, .dragol');

    coverinput.addEventListener('change', function() {
            // Coverage value
    var valueSel = coverinput.value;
        // call the show coverage function
        showCoverages(valueSel);
        // call the set position function
        eachPosition(valueSel);
       
})
    // Functions
    // Button change click
   /* buttonChange.addEventListener('click', function() {*/


   /* });*/
playerDot.forEach((element, index, array) => {
    element.addEventListener('mousedown', function() {
        positions_data.forEach((el, index, array) => {
            if(el.position.toLowerCase().indexOf(jQuery(this).attr('name').toLowerCase()) !=-1){
        
            showPositionInfo(el,element.getAttribute('par-'+coverinput.value), coverinput.value,element.getAttribute('id'));
            
            }
          });
    });
});
    // show coverages
    var showCoverages = function(cover) {
        allCoverages.forEach((element, index, array) => {
            coverages[element].forEach((element_, index_, array_) => {
                element_.style.display = 'none';

            })
        });
        coverages[cover].forEach((element, index, array) => {
            coverages[cover][index].style.display = 'block';

        });
    }

    // Function to call set position for each element
    var eachPosition = function(cover) {
        const elementToSetPosition = document.querySelectorAll('[position-' + cover + ']:not([dragOLDL])');
        const oldlToSetPosition = document.querySelectorAll('[dragOLDL]');
        elementToSetPosition.forEach((element, index, array) => {

            var thisElement = elementToSetPosition[index],
                lineElement = thisElement.getAttribute('lineid-' + cover),thiselementhaveline;
                if(lineElement==null){
                thiselementhaveline=false;
              }
              else{
                thiselementhaveline=document.querySelector('#'+lineElement).getAttribute('default-position');
              }
            setPosition(cover, thisElement.getAttribute('position-' + cover), thisElement.getAttribute('id'), thiselementhaveline);
        })

        oldlToSetPosition.forEach((element, index, array) => {
            var thisOlDl = oldlToSetPosition[index];
            setPositionOlDl(cover, thisOlDl.getAttribute('id'), thisOlDl.getAttribute('position-' + cover));
        })

    }

    // Function setPosition
    var setPosition = function(cover, position, idelement, lineposition) {
        var positiontop = position.split('-')[0],
            positionleft = position.split('-')[1],
            lineattr;

            jQuery('#' + idelement).css('top', positiontop);
            jQuery('#' + idelement).css('left', positionleft);

        if (lineposition != 'none'&&lineposition!=false) {

            lineattr = lineposition;
            var lineid=document.querySelector('#'+idelement).getAttribute('lineid-'+cover);
            jQuery('#' + lineid).attr('x1', lineattr.split('_')[0].split('-')[0]);
            jQuery('#' + lineid).attr('y1', lineattr.split('_')[0].split('-')[1]);
            jQuery('#' + lineid).attr('x2', lineattr.split('_')[1].split('-')[0]);
            jQuery('#' + lineid).attr('y2', lineattr.split('_')[1].split('-')[1]);
        }

    }

    // Function setPositionOlDl
    var setPositionOlDl = function(cover, idelement, defaultposition) {

        var positiontop = defaultposition.split('-')[0],
            positionleft = defaultposition.split('-')[1];

        jQuery('#' + idelement).css('top', positiontop);
        jQuery('#' + idelement).css('left', positionleft);
    }

    // Function to drag elements
    var dragElements = function(cover) {

        // Draggable function on man covarage
        jQuery('.drag[field="offense"]').draggable({
            containment: '.offense-field'
        });
        jQuery('.drag[field="defense"], .dragcovero[field="defense"]').draggable({
            containment: '.defense-field'
        });

        jQuery('.' + cover + ' .dragcovero[field="defense"], .drag').draggable({
            scroll: false,
            disabled: false,
            drag: function() {

                putLineZone(jQuery(this).attr('par-' + cover), jQuery(this).attr('id'), cover, jQuery(this).attr('lineid-' + cover));

            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    function putLineZone(par, elementid, covertype, line) {
        if (par != undefined && par != 'none_none') {
            var positionElement = par.split('_')[0],
                parElement = par.split('_')[1],
                x1, y1, x2, y2, distance_selector = jQuery('#' + elementid).attr('distance'),
                distance1 = distance_selector.split('_')[0],
                distance2 = distance_selector.split('_')[1];


            if (positionElement == 'bottom') {


                x1 = jQuery('#' + parElement).position().left,
                    y1 = jQuery('#' + parElement).position().top,
                    x2 = jQuery('#' + elementid).position().left,
                    y2 = jQuery('#' + elementid).position().top
            } else if (positionElement == 'top') {

                x2 = jQuery('#' + parElement).position().left,
                    y2 = jQuery('#' + parElement).position().top,
                    x1 = jQuery('#' + elementid).position().left,
                    y1 = jQuery('#' + elementid).position().top
            }
            distancex1 = Number(distance1.split('-')[0]), distancey1 = Number(distance1.split('-')[1]), distancex2 = Number(distance2.split('-')[0]), distancey2 = Number(distance2.split('-')[1]);



            jQuery('#' + line).attr('x1', x1 +
                distancex1
            );
            jQuery('#' + line).attr('y1', y1 +
                distancey1
            );
            jQuery('#' + line).attr('x2', x2 +
                distancex2
            );
            jQuery('#' + line).attr('y2', y2 +
                distancey2
            );


        }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////
    var dragDLshow = function() {
        jQuery('#tech, #gaps').css('opacity','1');

    }

    var hidePositionInfo = function() {
   
        jQuery('#dl-desc, .st-text, #db-desc, #cover-description').hide();
        jQuery('.info-content h2').text('Clique em algum jogador');
        jQuery('.bg-prospect').css('background-image', 'url("https://larrybrownsports.com/wp-content/uploads/2022/01/tom-brady-qb-768x475.jpg")');
        jQuery('.bg-prospect').css('background-position', 'center center');

    }
    //////////////////////////////////////////////////////////////////////////////////////////////

    // OL drag
    var dragOL = function() {
        jQuery('.dragol').draggable({
            scroll: false,
            disabled: false,
            containment: '.offense-field'
        });
    }
    var showPositionInfo = function(element, par, cover, id){
    
      var hide_infos, show_infos;
        if(element.class=='DL'){
            hide_infos='#db-desc, #cover-description';
            show_infos='#dl-desc, .st-text';

            document.querySelector('.position-name-des').innerHTML=element.position;


        }
        else if(element.class=='LB'){
            show_infos='#db-desc, #cover-description, .st-text';
            hide_infos='#dl-desc';
            if(par=='none_none'||par==null||par==undefined){
                hide_infos='#dl-desc, #db-desc';
                document.querySelector('#cover-description').innerHTML='O Linebacker não está cobrindo nenhuma <b>zona</b> ou <b>jogador</b>, o que significa que sua função é <b>atacar o Quarterback</b>.'
            }
            else{
            document.querySelector('#db-desc').innerHTML='O <b>'+element.position+'</b> está cobrindo o <b>'+type_data[par.split('_')[1]][0]+'</b> '+type_data[par.split('_')[1]][1];
            document.querySelector('#cover-description').innerHTML=type_data[par.split('_')[1]][2];
            }
        }
        else if(element.class=='DB'){
            show_infos='#db-desc, #cover-description, .st-text';
            hide_infos='#dl-desc';
            document.querySelector('#db-desc').innerHTML='O <b>'+element.position+'</b> está cobrindo o <b>'+element[cover][0]+'</b> '+element[cover][1];
            document.querySelector('#cover-description').innerHTML=element[cover][2];
        }
        else if(element.class=='D_C'){
            show_infos='#db-desc, #cover-description, .st-text';
            hide_infos='#dl-desc';
            document.querySelector('#db-desc').innerHTML='O <b>'+element.position+'</b> está sendo coberto pelo <b>'+element[cover][0]+'</b> '+element[cover][1];
            document.querySelector('#cover-description').innerHTML=element[cover][2];
        }
        else if(element.class=='WR'||element.class=='TE') {
            show_infos='#db-desc, #cover-description, .st-text';
            hide_infos='#dl-desc';
            document.querySelector('#db-desc').innerHTML='O <b>'+element.position+'</b> está sendo coberto pelo <b>'+element[cover][0]+'</b> '+element[cover][1];
            document.querySelector('#cover-description').innerHTML=element[cover][2];
        }
        else if(element.class=='RB'){
            show_infos='#db-desc, #cover-description, .st-text';
            hide_infos='#dl-desc';
    
            document.querySelector('#db-desc').innerHTML='O <b>'+element.position+'</b> está sendo coberto pelo <b>'+element[cover][0]+'</b> '+element[cover][1];
            document.querySelector('#cover-description').innerHTML=element[cover][2];
        }
        else if(element.class=='OL'||element.class=='QB'){
            hide_infos='#db-desc, #cover-description, #dl-desc';
            show_infos='.st-text';

            document.querySelector('.position-name-des').innerHTML=element.position;

        }
      
      jQuery(show_infos).show();
      jQuery(hide_infos).hide();
      jQuery('.drag span, .dragol span, .dragdl span, .dragcovero span').removeClass('act');
      jQuery('#'+id).find('span').addClass('act')
      console.log(id);
      jQuery('.position-name-des, .info-content h2').text(element.position);


      jQuery('.bg-prospect').css('background-image', 'url("'+element.bgImg+'")');
      jQuery('.bg-prospect').css('background-position', element.bgPos);
      document.querySelector('.st-text').innerHTML = element.desc;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    // DLs drag function
    var dlDragDrop = function() {
        jQuery('.dragdl').draggable({
            scroll: false,
            disabled: false,
            containment: '.defense-field',
            start:
                function(){dragDLshow()},
            drag: function(){
                    document.querySelector('#gap-name-des').innerHTML='<b>'+jQuery('#gaps').find('.ui-droppable-hover').text()+'</b>';
                    document.querySelector('#tech-name-des').innerHTML='<b>'+jQuery('#tech').find('.ui-droppable-hover').text()+'</b>';
             },
            stop:
                function(){  jQuery('#tech, #gaps').css('opacity','0');}


        });
        jQuery("#tech div").droppable({
            accept: ".dragdl",
            classes: {
                "a-hover": "ui-state-hover",
                "a-active": "ui-state-active"
            },
            drop: function(event, ui) {

            }
        });
        jQuery("#gaps div").droppable({
            accept: ".dragdl",
            classes: {
                "a-hover": "ui-state-hover",
                "a-active": "ui-state-active"
            },
            drop: function(event, ui) {

            }
        });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    // Function to put color on the hover line
    jQuery('.drag span').hover(function() {

        jQuery(this).parent().parent().find('.line').addClass('hoverline')

    }, function() {

        jQuery(this).parent().parent().find('.line').removeClass('hoverline')

    });
    //////////////////////////////////////////////////////////////////////////////////////////////
    jQuery('.drag span, .dragcover > .dragcovero').on("contextmenu", function(event) {
        var linehide_cover1 = jQuery(this).parent().attr('lineidc1'),
            linehide_cover2man = jQuery(this).parent().attr('lineidc2m');
        var coverValue = jQuery('#cover').val();
        var lines = {
                'cover1': jQuery(this).parent().attr('lineidc1'),
                'cover2man': jQuery(this).parent().attr('lineidc2m')
            },
            line_especify;
        if (jQuery(this).attr('class').indexOf('dragcovero') != -1) {
            lines['cover1'] = jQuery(this).attr('lineidc1'), lines['cover2man'] = jQuery(this).attr('lineidc2m');


        }
        line_especify = lines[coverValue];
        setOpacityLine(coverValue, jQuery(this).attr('id'), line_especify);

        function setOpacityLine(coverValue, idelement, line_especify) {

            var line_selector = jQuery('#' + line_especify);

            if (line_selector.attr('class').indexOf('inactive') == -1) {
                line_selector.addClass('inactive');

                event.preventDefault();
            } else if (line_selector.attr('class').indexOf('inactive') != -1) {
                line_selector.removeClass('inactive');

                event.preventDefault();
            }

        }

    });
    //////////////////////////////////////////////////////////////////////////////////////////////
    // Function z-index hover
    jQuery('.field span').mouseenter(function() {
        jQuery(this).parent().css('z-index', '999999999999');
    }).mouseleave(function() {
        jQuery(this).parent().css('z-index', '');
    });


    // call the show coverage function
    showCoverages('cover1');
    // call the set position function
    eachPosition('cover1');

    // call the function to drag elements
    dragElements('cover1');

    // call the drop zone for tech and gaps
    dlDragDrop();
    dragOL();


});
