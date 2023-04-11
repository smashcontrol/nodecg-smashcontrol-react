import React, { useCallback } from "react";
import { useReplicant } from "../../utils/hooks";
import { defaultSetObject } from "../../utils/defaults";

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const GameSelect = () => {
    const [setInfo, setSetInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    const games = [
        {id: "ssb64", name: "Super Smash Bros. 64"},
        {id: "ssbm", name: "Super Smash Bros. Melee"},
        {id: "ssbb", name: "Super Smash Bros. Brawl"},
        {id: "ssbpm", name: "Project +"},
        {id: "ssb4", name: "Super Smash Bros. for Wii U"},
        {id: "ssbult", name: "Super Smash Bros. Ultimate"},
        {id: "roa", name: "Rivals of Aether"},
    ];
    const changeGame = useCallback((event) => {
        currentSet.game = event.target.value;
        setSetInfo(currentSet);
    }, [setSetInfo]);

    const currentSet = setInfo;

    return(
        <select key={Math.random()} defaultValue={currentSet.game} onChange={e => changeGame(e)}>
            {games.map((game) => {
                return(
                    <option key={game.id} value={game.id}>{game.name}</option>
                )
            })}
        </select>
    )

}