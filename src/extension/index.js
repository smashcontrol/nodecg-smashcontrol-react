import {set} from './utils/nodecg'

module.exports = nodecg => {
    set(nodecg)
    require('./startgg-extension');
    require('./challonge-extension');    
}