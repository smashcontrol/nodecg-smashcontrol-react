

import { get } from "./utils/nodecg";

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';
const nodecg = get();
const challongeRouter = nodecg.Router();
// const challongeAPIKey = nodecg.Replicant('challongeAPIKey', NODECG_BUNDLE, { defaultValue: '' });

function log(...args){
    console.log(`[${NODECG_BUNDLE}-challonge]`, ...args);
}

async function verifyChallongeAuthKey(auth){
    
};

challongeRouter.post('/verify', async (req, res) => {
    verifyChallongeAuthKey(req.body['apikey']);
    // example frontend fetch for later use
    // fetch(`/challonge/verify`, 
    //         {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({'apikey': 'test'})
    //         });
})

nodecg.mount('/challonge', challongeRouter);
log(`API Loaded`)

