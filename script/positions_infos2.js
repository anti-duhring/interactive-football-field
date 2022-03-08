var manCoverDescription = 'Cobertura <b>mano-à-mano</b> é aquela em que o defensor estará marcando um jogador em específico <b>independentemente</b> de pra onde ele for no campo.';
var zoneCoverDescription = 'Cobertura de <b>zona</b> é aquela em que o defensor estará marcando uma parte específica do campo, e deverá cobrir todo jogador que entrar na sua zona.'
var players = {
    
        'Cornerback': {
            'description': 'Faz parte da <b>secundária</b>, grupo de jogadores responsáveis primariamente por <b>marcar o passe</b>, seja <b>mano-à-mano</b> ou em <b>zona</b>. Normalmente ficam alinhados próximos dos recebedores do ataque.',
            'bgImg':'https://www.theplayoffs.com.br/wp-content/uploads/2021/07/Patriots-CB-J.C.-Jackson-768x432.jpg',
            'bgPos': 'top',
            'cover1': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2man': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.']
        },
        'Free Safety': {
            'description': 'Faz parte da <b>secundária</b>, grupo de jogadores responsáveis primariamente por <b>marcar o passe</b>, seja <b>mano-à-mano</b> ou em <b>zona</b>. Normalmente fica alinhado no fundo do campo cobrindo as zonas fundas.',
            'bgImg':'https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fstripehype.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2018%2F08%2F17412599-850x560.jpeg',
            'bgPos': 'center',
            'cover1': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2man': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.']
        },
        'Strong Safety': {
            'description': 'Faz parte da <b>secundária</b>, grupo de jogadores responsáveis primariamente por <b>marcar o passe</b>, seja <b>mano-à-mano</b> ou em <b>zona</b>. Normalmente fica alinhado no fundo do campo cobrindo as zonas fundas.',
            'bgImg':'http://www.10jardas.com/sites/default/files/adams_sea.jpg',
            'bgPos': 'top',
            'cover1': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2man': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.']
        },
        'Linebacker': {
            'description': 'É o segundo nível da defesa contra o <b>jogo corrido</b>. Além de ocupar os <b>gaps</b> contra a corrida também pode ser responsável pela cobertura contra o <b>passe</b> e até mesmo sendo usado na <b>blitz</b> pra atacar o Quarterback.',
            'bgImg':'https://i0.wp.com/profootball.com.br/wp-content/uploads/2020/07/darius-leonard-e1594146943957.jpg',
            'bgPos': 'center',
            'cover1': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2man': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está cobrindo o <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.']
        },
        'Wide Receiver': {
            'description': 'Faz parte do grupo de recebedores, sua função principal é correr <b>rotas</b> pelo campo e segurar a bola que o Quarterback lhe passa.',
            'bgImg':'https://www.theplayoffs.com.br/wp-content/uploads/2020/08/Packers-WR-Davante-Adams-768x432.jpg',
            'bgPos': 'top',
            'cover1': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2man': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.']
        },
        'Tight End': {
            'description': 'É O TE',
            'bgImg':'https://www.theplayoffs.com.br/wp-content/uploads/2020/08/Packers-WR-Davante-Adams-768x432.jpg',
            'bgPos': 'top',
            'cover1': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2man': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.']
        },
        'Runningback': {
            'description': 'Geralmente se posiciona no <b>backfield</b> (atrás da linha ofensiva) e tem como função principal <b>correr</b> com a bola nas jogadas terrestres, mas também pode ser usado para <b>bloquear</b> defensores que venham atacar o Quarterback ou para <b>correr rotas</b> como os <b>Wide Receivers</b>.',
            'bgImg':'https://www.theplayoffs.com.br/wp-content/uploads/2020/04/Derrick-Henry-Tennessee-Titans-768x384.jpg',
            'bgPos': 'top',
            'cover1': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.'],
            'cover2man': ['mano-à-mano', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>{coverage_type}</b>.']
        },
        'Quarterback': {
            'description': 'É O QB',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top'
        },
        'Right Tackle': {
            'description': 'É O RT',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top'
        },
        'Right Guard': {
            'description': 'É O RG',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top'
        },
        'Center': {
            'description': 'É O C',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top'
        },
        'Left Guard': {
            'description': 'É O LG',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top'
        },
        'Left Tackle': {
            'description': 'É O LT',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top'
        },
        'Edge': {
            'description': 'É O EDGE',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top',
            'textInfo': 'O <b>{player_name}</b> está alinhado no gap <b class="gap-name">{gap}</b> em <b class="tech-name">{tech}</b> technique. \n Isso significa que sua função é, além de atacar o Quarterback, impedir que o Runningback corra com a bola através do gap <b class="gap-name">{gap}</b>.',
        },
        'Defensive Tackle': {
            'description': 'É O DT',
            'bgImg':'/style/imagens/deep-left.png',
            'bgPos': 'top',
            'textInfo': 'O <b>{player_name}</b> está alinhado no gap <b class="gap-name">{gap}</b> em <b class="tech-name">{tech}</b> technique. \n Isso significa que sua função é, além de atacar o Quarterback, impedir que o Runningback corra com a bola através do gap <b class="gap-name">{gap}</b>.',
        }
};
 var zones = {
     'Deep Middle': {
        'description': 'É O DEEP MIDDLE',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover2man': null,
        'cover2zone': null,
        'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     'Deep Left': {
        'description': 'É O DEEP LEFT',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': null,
        'cover2man': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     'Deep Right': {
        'description': 'É O DEEP RIGHT',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': null,
        'cover2man': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     'Left Flat': {
        'description': 'É O LEFT FLAT',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': null,
        'cover2man': null,
        'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     'Left Curl': {
        'description': 'É O LEFT CURL',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': null,
        'cover2man': null,
        'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     'Hook': {
        'description': 'É O HOOK',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': null,
        'cover2man': null,
        'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover3sky': null,
        'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     'Right Curl': {
        'description': 'É O RIGHT CURL',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': null,
        'cover2man': null,
        'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     'Right Flat': {
        'description': 'É O RIGHT FLAT',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover1': null,
        'cover2man': null,
        'cover2zone': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover3sky': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.'],
        'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
     },
     '1/4 Deep': {
        'description': 'É O 1/4 DEEP',
        'bgImg':'/style/imagens/deep-left.png',
        'bgPos': 'top',
        'cover4': ['de zona', '#dl-desc', '#db-desc, #cover-description', 'O <b>{position}</b> está sendo coberto pelo <b>{player_pair}</b> em cobertura <b>de zona</b>.']
        
     }
 }

 var DLplayers = {
    'cover1': {
        'LE': ['5','C'],
        'LDT': ['1', 'A'],
        'RDT': ['2', 'B'],
        'RE': ['5','C']
    },
    'cover2man': {
        'LE': ['5','C'],
        'LDT': ['1', 'A'],
        'RDT': ['2', 'B'],
        'RE': ['5','C']
    },
    'cover2zone': {
        'LE': ['5','C'],
        'LDT': ['1', 'A'],
        'RDT': ['2', 'B'],
        'RE': ['5','C']
    },
    'cover3sky': {
        'LE': ['5','C'],
        'LDT': ['2', 'B'],
        'RDT': ['2i', 'A'],
        'RE': ['5','C']
    },
    'cover4': {
        'LE': ['5','C'],
        'LDT': ['1', 'A'],
        'RDT': ['2', 'B'],
        'RE': ['5','C']
    }
}
