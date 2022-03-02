var playersAttr = {

    'cover1': 
    {
        'haveLineOnOffense': true,
        'FS': [20,20, 'line1', 'defense'],
        'DM': [100,120, 'line1', 'defense'],
        'CB1': [20,20, 'line2', 'defense'],
        'WR1': [20,20, 'line2', 'offense'],
        'CB3': [20,20, 'line3', 'defense'],
        'WR3': [20,20, 'line3', 'offense'],
        'WR2': [20,20, 'line4', 'offense'],
        'CB2': [20,20, 'line4', 'defense'],
        'SS': [20,20, 'line5', 'defense'],
        'TE': [20,20, 'line5', 'offense'],
        'LLB': [20,20, 'line6', 'defense'],
        'RB': [20,20, 'line6', 'offense']
    },
    'cover2man': 
    {   
        'haveLineOnOffense': true,
        'FS': [20,20, 'line1', 'defense'],
        'DL': [130,120, 'line1', 'defense'],
        'CB1': [20,20, 'line2', 'defense'],
        'WR1': [20,20, 'line2', 'offense'],
        'CB3': [20,20, 'line3', 'defense'],
        'WR3': [20,20, 'line3', 'offense'],
        'WR2': [20,20, 'line4', 'offense'],
        'CB2': [20,20, 'line4', 'defense'],
        'RLB': [20,20, 'line5', 'defense'],
        'TE': [20,20, 'line5', 'offense'],
        'LLB': [20,20, 'line6', 'defense'],
        'RB': [20,20, 'line6', 'offense'],
        'SS': [20,20, 'line7', 'defense'],
        'DR': [130,120, 'line7', 'defense'],
    },
    'cover2zone': 
    {
        'haveLineOnOffense': false,
        'FS': [20,20, 'line1', 'defense'],
        'DL': [130,120, 'line1', 'defense'],
        'CB1': [20,20, 'line2', 'defense'],
        'LF': [70,90, 'line2', 'offense'],
        'CB3': [20,20, 'line3', 'defense'],
        'RF': [70,90, 'line3', 'offense'],
        'RC': [70,90, 'line4', 'defense'],
        'CB2': [20,20, 'line4', 'defense'],
        'RLB': [20,20, 'line5', 'defense'],
        'H': [70,90, 'line5', 'defense'],
        'LLB': [20,20, 'line6', 'defense'],
        'LC': [70,90, 'line6', 'defense'],
        'SS': [20,20, 'line7', 'defense'],
        'DR': [130,120, 'line7', 'defense'],
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
    }
}
