import { get } from "./utils/nodecg";

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';

const nodecg = get();
const startggRouter = nodecg.Router();
// const startggAPIKey = nodecg.Replicant('startggAPIKey', NODECG_BUNDLE, { defaultValue: '' });
    
function log(...args){
    console.log(`[${NODECG_BUNDLE}-startgg]`, ...args);
}

async function verifyStartGGAuthKey(auth){};

startggRouter.post('/verify', async (req, res) => {
    verifyStartGGAuthKey(req.body['apikey']);
});

nodecg.mount('/startgg', startggRouter);
log(`API Loaded`)
