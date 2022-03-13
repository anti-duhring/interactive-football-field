var playersAttr = {

    'cover1': 
    {
        'haveLineOnOffense': true,
        //ID: [distancex, distancey, line, top, left, pairId]
        'FS': [20,20, 'line1', 200, 320, 'cover1_DM'],
        'DM': [100,120, 'line1', 0, , 'cover1_FS'],
        'CB1': [20,20, 'line2', 330, 40, 'WR1'],
        'WR1': [20,20, 'line2', 385, 10, 'cover1_CB1'],
        'CB3': [20,20, 'line3', 330, 580, 'WR3'],
        'WR3': [20,20, 'line3', 385, 600, 'cover1_CB3'],
        'WR2': [20,20, 'line4', 385, 520, 'cover1_CB2'],
        'CB2': [20,20, 'line4', 330, 520, 'WR2'],
        'SS': [20,20, 'line5', 280, 410, 'TE'],
        'TE': [20,20, 'line5', 400, 470, 'cover1_SS'],
        'LLB': [20,20, 'line6', 300, , 'RB'],
        'RB': [20,20, 'line6', 435, 280, 'cover1_LLB'],
        'RLB': [0,0, null, 300, 330, null],
        'QB': [0,0, null, 435, 320, null],
        'RT': [0,0, null, 385, 420, null],
        'RG': [0,0, null, 385, 370, null],
        'C': [0,0, null, 385, 320, null],
        'LG': [0,0, null, 385, 270, null],
        'LT': [0,0, null, 385, 220, null]
    },
    'cover2man': 
    {   
        'haveLineOnOffense': true,
        //ID: [distancex, distancey, line, top, left, pairId]
        'FS': [20,20, 'line1', 211, 259, 'cover2man_DL'],
        'DL': [130,120, 'line1', 0, 40, 'cover2man_FS'],
        'CB1': [20,20, 'line2', 330, 40, 'WR1'],
        'WR1': [20,20, 'line2', 385, 10, 'cover2man_CB1'],
        'CB3': [20,20, 'line3', 330, 580, 'WR3'],
        'WR3': [20,20, 'line3', 385, 600, 'cover2man_CB3'],
        'WR2': [20,20, 'line4', 385, 520, 'cover2man_CB2'],
        'CB2': [20,20, 'line4', 330, 520, 'WR2'],
        'RLB': [20,20, 'line5', 297, 401, 'TE'],
        'TE': [20,20, 'line5', 400, 470, 'cover2man_RLB'],
        'LLB': [20,20, 'line6', 300, 250, 'RB'],
        'RB': [20,20, 'line6', 435, 280, 'cover2man_LLB'],
        'SS': [20,20, 'line7', 269, 358, 'cover2man_DR'],
        'DR': [130,120, 'line7', 0, 400, 'cover2man_SS'],
        'QB': [0,0, null, 435, 320, null],
        'RT': [0,0, null, 385, 420, null],
        'RG': [0,0, null, 385, 370, null],
        'C': [0,0, null, 385, 320, null],
        'LG': [0,0, null, 385, 270, null],
        'LT': [0,0, null, 385, 220, null]
    },
    'cover2zone': 
    {
        'haveLineOnOffense': false,
        //ID: [distancex, distancey, line, top, left, pairId]
        'FS': [20,20, 'line1', 211, 259, 'cover2zone_DL'],
        'DL': [130,120, 'line1', 0, 40, 'cover2zone_FS'],
        'CB1': [20,20, 'line2', 330, 40, 'cover2zone_LF'],
        'LF': [70,90, 'line2', 244, 0, 'cover2zone_CB1'],
        'CB3': [20,20, 'line3', 330, 580, 'cover2zone_RF'],
        'RF': [70,90, 'line3', 244, 555, 'cover2zone_CB3'],
        'RC': [70,90, 'line4', 244, 416, 'cover2zone_CB2'],
        'CB2': [20,20, 'line4', 330, 520, 'cover2zone_RC'],
        'RLB': [20,20, 'line5', 297, 401, 'cover2zone_H'],
        'H': [70,90, 'line5', 244, 278, 'cover2zone_RLB'],
        'LLB': [20,20, 'line6', 300, 250, 'cover2zone_LC'],
        'LC': [70,90, 'line6', 244, 139, 'cover2zone_LLB'],
        'SS': [20,20, 'line7', 269, 358, 'cover2zone_DR'],
        'DR': [130,120, 'line7', 0, 400, 'cover2zone_SS'],
        'QB': [0,0, null, 435, 320, null],
        'RT': [0,0, null, 385, 420, null],
        'RG': [0,0, null, 385, 370, null],
        'C': [0,0, null, 385, 320, null],
        'LG': [0,0, null, 385, 270, null],
        'LT': [0,0, null, 385, 220, null],
        'WR1': [20,20, null, 385, 10, null],
        'WR2': [20,20, null, 385, 520, null],
        'WR3': [20,20, null, 385, 600, null],
        'TE': [20,20, null, 400, 470, null],
        'RB': [20,20, null, 435, 280, null]
    },
    'cover3sky': 
    {
        'haveLineOnOffense': false,
        //ID: [distancex, distancey, line, top, left, pairId]
        'CB1': [20,20, 'line1', 330,40, 'cover3sky_DL'],
        'DL': [100,120, 'line1', 0,30, 'cover3sky_CB1'],
        'CB2': [20,20, 'line2', 313, 166, 'cover3sky_LF'],
        'LF': [70,90, 'line2', 238,0, 'cover3sky_CB2'],
        'SS': [20,20, 'line3', 269, 480, 'cover3sky_RF'],
        'RF': [70,90, 'line3', 238, 520, 'cover3sky_SS'],
        'RC': [70,90, 'line4', 238, 346, 'cover3sky_RLB'],
        'RLB': [20,20, 'line4', 309, 417, 'cover3sky_RC'],
        'FS': [20,20, 'line5', 206, 327, 'cover3sky_DM'],
        'DM': [100,120, 'line5', 0, 250, 'cover3sky_FS'],
        'LLB': [20,20, 'line6', 308, 306, 'cover3sky_LC'],
        'LC': [70,90, 'line6', 238, 173, 'cover3sky_LLB'],
        'CB3': [20,20, 'line7', 320, 579, 'cover3sky_DR'],
        'DR': [100,120, 'line7', 0, 466, 'cover3sky_CB3'],
        'QB': [0,0, null, 435, 320, null],
        'RT': [0,0, null, 385, 420, null],
        'RG': [0,0, null, 385, 370, null],
        'C': [0,0, null, 385, 320, null],
        'LG': [0,0, null, 385, 270, null],
        'LT': [0,0, null, 385, 220, null],
        'WR1': [20,20, null, 385, 10, null],
        'WR2': [20,20, null, 385, 520, null],
        'WR3': [20,20, null, 385, 600, null],
        'TE': [20,20, null, 400, 470, null],
        'RB': [20,20, null, 435, 280, null]
    },
    'cover4': 
    {
        'haveLineOnOffense': false,
        //ID: [distancex, distancey, line, top, left, pairId]
        'FS': [20,20, 'line1', 211, 259, 'cover4_onefourth'],
        'onefourth': [80,100, 'line1', 0, 173, 'cover4_FS'],
        'CB1': [20,20, 'line6', 298, 92, 'cover4_twofourth'],
        'LF': [90,110, 'line2', 208, 29, 'cover4_LLB'],
        'CB3': [20,20, 'line4', 271, 531, 'cover4_threefourth'],
        'RF': [90,110, 'line3', 208, 492, 'cover4_CB2'],
        'threefourth': [80,100, 'line4', 0, 530, 'cover4_CB3'],
        'CB2': [20,20, 'line3', 320, 490, 'cover4_RF'],
        'RLB': [20,20, 'line5', 297, 401, 'cover4_H'],
        'H': [90,110, 'line5', 167, 250, 'cover4_RLB'],
        'LLB': [20,20, 'line2', 303, 218, 'cover4_LF'],
        'twofourth': [80,100, 'line6', 0, 0, 'cover4_CB1'],
        'SS': [20,20, 'line7', 235, 370, 'cover4_fourfourth'],
        'fourfourth': [80,100, 'line7', 0, 354, 'cover4_SS'],
        'QB': [0,0, null, 435, 320, null],
        'RT': [0,0, null, 385, 420, null],
        'RG': [0,0, null, 385, 370, null],
        'C': [0,0, null, 385, 320, null],
        'LG': [0,0, null, 385, 270, null],
        'LT': [0,0, null, 385, 220, null],
        'WR1': [20,20, null, 385, 10, null],
        'WR2': [20,20, null, 385, 520, null],
        'WR3': [20,20, null, 385, 600, null],
        'TE': [20,20, null, 400, 470, null],
        'RB': [20,20, null, 435, 280, null]
    }
}

var linesAttr = {
    'cover1': {
        'line1': ['DM', 'FS','zone'],
        'line2': ['CB1','WR1','man'],
        'line3': ['CB3','WR3','man'],
        'line4': ['CB2','WR2','man'],
        'line5': ['SS','TE','man'],
        'line6': ['LLB','RB','man']
    },
    'cover2man': {
        'line1': ['DL', 'FS','zone'],
        'line2': ['CB1','WR1','man'],
        'line3': ['CB3','WR3','man'],
        'line4': ['CB2','WR2','man'],
        'line5': ['RLB','TE','man'],
        'line6': ['LLB','RB','man'],
        'line7': ['DR', 'SS','zone'],
    },
    'cover2zone': {
        'line1': ['DL', 'FS','zone'],
        'line2': ['CB1','LF','zone'],
        'line3': ['CB3','RF','zone'],
        'line4': ['CB2','RC','zone'],
        'line5': ['RLB','H','zone'],
        'line6': ['LLB','LC','zone'],
        'line7': ['DR', 'SS','zone'],
    },
    'cover3sky': {
        'line1': ['DL', 'CB1','zone'],
        'line2': ['CB2','LF','zone'],
        'line3': ['SS','RF','zone'],
        'line4': ['RLB','RC','zone'],
        'line5': ['FS','DM','zone'],
        'line6': ['LLB','LC','zone'],
        'line7': ['DR', 'CB3','zone'],
    },
    'cover4': {
        'line1': ['onefourth', 'FS','zone'],
        'line2': ['LLB','LF','zone'],
        'line3': ['CB2','RF','zone'],
        'line4': ['CB3','threefourth','zone'],
        'line5': ['RLB','H','zone'],
        'line6': ['CB1','twofourth','zone'],
        'line7': ['fourfourth', 'SS','zone'],
    }
}