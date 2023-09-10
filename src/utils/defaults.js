export const defaultSetObject = {
    player1tag: '',
    player1pronouns: '',
    player1port: 1,
    player1score: 0,
    player2tag: '',
    player2pronouns: '',
    player2port: 1,
    player2score: 0,
    bracketlocation: '',
    player1character: 'Mario',
    player2character: 'Mario',
    commentator1: '',
    commentator1pronouns: '',
    commentator2: '',
    commentator2pronouns: '',
    game: 'ssb64',
}

export const defaultThumbnailObject = {
    player1costume: 'Default',
    player2costume: 'Default'
}

export const dialogFields = [
    {id: 'player1tag', placeholder: 'Player 1 Tag', type: 'text'},
    {id: 'player1pronouns', placeholder: 'Player 1 Pronouns', type: 'text'},
    {id: 'player1character', type: 'character'},
    {id: 'player1port', placeholder: 'Player 1 Port', type: 'port', options: [1, 2, 3, 4]},
    {id: 'player2tag', placeholder: 'Player 2 Tag', type: 'text'},
    {id: 'player2pronouns', placeholder: 'Player 2 Pronouns', type: 'text'},
    {id: 'player2character', type: 'character'},
    {id: 'player2port', placeholder: 'Player 2 Port', type: 'port', options: [1, 2, 3, 4]},
    {id: 'bracketlocation', placeholder: 'Bracket Location', type: 'text'},
    {id: 'commentator1', placeholder: 'Commentator 1', type: 'text'},
    {id: 'commentator1pronouns', placeholder: 'Commentator 1 Pronouns', type: 'text'},
    {id: 'commentator2', placeholder: 'Commentator 2', type: 'text'},
    {id: 'commentator2pronouns', placeholder: 'Commentator 2 Pronouns', type: 'text'}
]

export const streamQueueDialogFields = [
    {id: 'player1tag', placeholder: 'Player 1 Tag', type: 'text'},
    {id: 'player1pronouns', placeholder: 'Player 1 Pronouns', type: 'text'},
    {id: 'player2tag', placeholder: 'Player 2 Tag', type: 'text'},
    {id: 'player2pronouns', placeholder: 'Player 2 Pronouns', type: 'text'},
    {id: 'bracketlocation', placeholder: 'Bracket Location', type: 'text'},
    {id: 'stream', placeholder: 'Stream Title', type: 'text'}
]

export const defaultTop8Object = [
    {id: 'playertag', placeholder: 'Player Tag', type: 'text'},
    {id: 'playercharacter', type: 'character'},
    {id: 'playercostume', type: 'costume'},
    {id: 'playersecondary', type: 'character'},
    {id: 'playerplacement', type: 'placement'}
]