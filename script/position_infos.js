var type_text_man = ' em cobertura <b>mano-à-mano</b>.';
var desc_text_man ='Cobertura <b>mano-à-mano</b> é aquela em que o defensor estará marcando um jogador em específico <b>independentemente</b> de pra onde ele for no campo.'
var type_text_zone = ' em cobertura de <b>zona</b>';
var desc_text_zone ='Cobertura de <b>zone</b> é aquela em que o defensor estará marcando uma parte específica do campo, e deverá cobrir todo jogador que entrar na sua zona.'

var positions_data = [
  {
    position: 'Edge',
    class: 'DL',
    bgImg: 'https://steelersnow.com/wp-content/uploads/2019/10/HX10843.jpg',
    bgPos: 'top',
    desc:'É o jogador de <b>linha defensiva</b> mais próximo à sideline, normalmente tem como função principal <b>apressar o passe</b> do Quarterback.'
  },

  {
    position:'Defensive Tackle',
    class: 'DL',
    bgImg:'https://www.tsn.ca/polopoly_fs/1.1694551.1631849870!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/aaron-donald.jpg',
    bgPos: 'top',
    desc:'É o jogador do interior da <b>linha defensiva</b>, responsável igualmente por <b>apressar o passe</b> e parar o <b>jogo corrido</b> ocupando os <b>gaps</b>.'
  },

  {
    position: 'Linebacker',
    class: 'LB',
    bgImg:'https://i0.wp.com/profootball.com.br/wp-content/uploads/2020/07/darius-leonard-e1594146943957.jpg',
    bgPos: 'center',
    desc:'É o segundo nível da defesa contra o <b>jogo corrido</b>. Além de ocupar os <b>gaps</b> contra a corrida também pode ser responsável pela cobertura contra o <b>passe</b> e até mesmo sendo usado na <b>blitz</b> pra atacar o Quarterback.',
    cover1: ['Runningback', type_text_man,desc_text_man]
  },
  {
    position: 'Cornerback',
    class: 'DB',
    bgImg:'https://www.theplayoffs.com.br/wp-content/uploads/2021/07/Patriots-CB-J.C.-Jackson-768x432.jpg',
    bgPos: 'top',
    desc:'Faz parte da <b>secundária</b>, grupo de jogadores responsáveis primariamente por <b>marcar o passe</b>, seja <b>mano-à-mano</b> ou em <b>zona</b>. Normalmente ficam alinhados próximos dos recebedores do ataque.',
    cover1: ['Wide Receiver', type_text_zone,desc_text_zone]
  },
  {
    position: 'Free Safety',
    class: 'DB',
    bgImg:'https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fstripehype.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2018%2F08%2F17412599-850x560.jpeg',
    bgPos: 'center',
    desc:'Faz parte da <b>secundária</b>, grupo de jogadores responsáveis primariamente por <b>marcar o passe</b>, seja <b>mano-à-mano</b> ou em <b>zona</b>. Normalmente fica alinhado no fundo do campo cobrindo as zonas fundas.',
    cover1: ['Deep Middle (meio do fundo)', type_text_zone,desc_text_zone]
  },
  {
    position: 'Strong Safety',
    class: 'DB',
    bgImg:'http://www.10jardas.com/sites/default/files/adams_sea.jpg',
    bgPos: 'top',
    desc:'Faz parte da <b>secundária</b>, grupo de jogadores responsáveis primariamente por <b>marcar o passe</b>, seja <b>mano-à-mano</b> ou em <b>zona</b>. Normalmente fica alinhado mais próxmo do box pra ajudar na contenção do jogo corrido.',
    cover1: ['Tight End', type_text_man,desc_text_man]
  },
  {
    position: 'Wide Receiver',
    class: 'WR',
    bgImg:'https://www.theplayoffs.com.br/wp-content/uploads/2020/08/Packers-WR-Davante-Adams-768x432.jpg',
    bgPos: 'top',
    desc:'Faz parte do grupo de recebedores, sua função principal é correr <b>rotas</b> pelo campo e segurar a bola que o Quarterback lhe passa.',
    cover1: ['Cornerback', type_text_man,desc_text_man]
  },
  {
    position: 'Runningback',
    class: 'RB',
    bgImg:'https://www.theplayoffs.com.br/wp-content/uploads/2020/04/Derrick-Henry-Tennessee-Titans-768x384.jpg',
    bgPos: 'top',
    desc:'Geralmente se posiciona no <b>backfield</b> (atrás da linha ofensiva) e tem como função principal <b>correr</b> com a bola nas jogadas terrestres, mas também pode ser usado para <b>bloquear</b> defensores que venham atacar o Quarterback ou para <b>correr rotas</b> como os <b>Wide Receivers</b>',
    cover1: ['Linebacker', type_text_man,desc_text_man],
    cover2man: ['Linebacker', type_text_man,desc_text_man]
  },
  {
    position: 'Deep Middle',
    class: 'D_C',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'É a zona do meio na parte mais funda  do campo.',
    cover1: ['Free Safety', type_text_zone,desc_text_zone]
  },
  {
    position: 'Right Tackle',
    class: 'OL',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'LOREM IPSUM',
  },
  {
    position: 'Right Guard',
    class: 'OL',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'LOREM IPSUM',
  },
  {
    position: 'Center',
    class: 'OL',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'LOREM IPSUM',
  },
  {
    position: 'Left Guard',
    class: 'OL',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'LOREM IPSUM',
  },
  {
    position: 'Left Tackle',
    class: 'OL',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'LOREM IPSUM',
  },
  {
    position: 'Tight End',
    class: 'TE',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'LOREM IPSUM',
    cover1: ['Strong Safety', type_text_man,desc_text_man]
  },
  {
    position: 'Quarterback',
    class: 'QB',
    bgImg:'/style/imagens/deep-left.png',
    bgPos: 'top',
    desc: 'LOREM IPSUM',
  }
];


var type_data = {
  'RB': ['Runningback',type_text_man,desc_text_man],
  'WR3': ['Wide Receiver',type_text_man,desc_text_man],
  'WR2': ['Wide Receiver',type_text_man,desc_text_man],
  'WR1': ['Wide Receiver',type_text_man,desc_text_man],
  'WR4': ['Tight End', type_text_man,desc_text_man],
  'DM': ['Deep Middle (meio do fundo)',type_text_zone,desc_text_zone],
  'FS': ['Free Safety',type_text_zone,desc_text_zone],
  'CB3': ['Cornerback',type_text_man,desc_text_man],
  'CB2': ['Cornerback',type_text_man,desc_text_man],
  'CB1': ['Cornerback',type_text_man,desc_text_man],
  'LLB': ['Linebacker', type_text_man,desc_text_man]
}
