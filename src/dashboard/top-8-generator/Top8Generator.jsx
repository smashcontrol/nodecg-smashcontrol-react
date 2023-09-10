import React, { useCallback, useEffect } from "react";
import styled from 'styled-components';
import { useReplicant } from "../../utils/hooks";
import { defaultSetObject, defaultTop8Object } from "../../utils/defaults";
import { characters } from "../../utils/characters";
import { all_costumes } from '../../utils/costumes';


const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const Top8Gen = () => {
    const [setInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    const [top8Array, setTop8Array] = useReplicant('top8Info', Array.from({length:8}, () => ({'playercharacter': characters[setInfo.game][0]})), {namespace: NODECG_BUNDLE});
    const [top8TournamentInfo, setTop8TournamentInfo] = useReplicant('top8TournamentInfo', {}, {namespace: NODECG_BUNDLE});
    const current_game_costume_list = all_costumes[setInfo.game];
    const character_list = setInfo.game === 'ssbult' ? Object.keys(all_costumes.ssbult) : characters[setInfo.game];
    const placementMap = {
        0: '1st',
        1: '2nd',
        2: '3rd',
        3: '4th',
        4: '5th',
        5: '5th',
        6: '7th',
        7: '7th',
    }



    const costumeName = (i) => {
        if(setInfo.game === "ssb64"){
            return top8Array[i].playercharacter.split("[REMIX] ").at(-1)
        } else {
            return top8Array[i].playercharacter;
        }
    }

    const handleChange = (placement, field, value) => {
        const newArray = top8Array.map((obj, i) => {
            if(placement === i) {
                return { ...obj, [field]: value}
            } else {
                return {...obj};
            }
        });
        setTop8Array(newArray);
    };
    
    const handleTournamentChange = (field, value) => {
        top8TournamentInfo[field] = value;
        setTop8TournamentInfo(top8TournamentInfo);
    };


    return(
        <Top8Container>
            {[...Array(8).keys()].map((i) => {
                return (
                    <Top8PlayerInfo>
                        <div>{placementMap[i]} Place Tag:</div>
                        <input id={i + `tag`} key={i + `tag`} placeholder={'Player Tag'} defaultValue={top8Array[i].playertag} 
                            onChange={(e) => handleChange(i, 'playertag', e.target.value)}></input>

                        <div>Main:</div>
                        <select id={i + `Main`} key={Math.random()} defaultValue={top8Array[i].playercharacter ? top8Array[i].playercharacter : character_list[0]}
                            onChange={(e) => handleChange(i, 'playercharacter', e.target.value)}>
                            {character_list.map((character, i) => {
                                return(
                                    <option key={i} value={character}>{character}</option>
                                )
                            })}
                        </select>
                        <div>Costume:</div>
                            {current_game_costume_list[costumeName(i)] ? 
                                <select id={i + `costume`} key={Math.random()} defaultValue={top8Array[i].playercostume ? 
                                                                                                top8Array[i].playercostume : 'Default'}>
                                        {current_game_costume_list[costumeName(i)].map((costume, i) => {
                                            return(
                                                <option key={i} value={costume}>{costume}</option>
                                            )
                                        })}
                                </select>
                                : 'No costumes found.'
                            }
                        <div>Secondary:</div>
                        <select id={i + `secondary`} key={Math.random()} defaultValue={top8Array[i].playersecondary}
                            onChange={(e) => handleChange(i, 'playersecondary', e.target.value)}>
                            {characters[setInfo.game].map((character, i) => {
                                return(
                                    <option key={i} value={character}>{character}</option>
                                )
                            })}
                        </select>
                            
                    </Top8PlayerInfo>
                )
                
            })}

        <TournamentInfo>
            <div>Tournament Name:</div>
            <input id={`tourneyname`} key={Math.random()} defaultValue={top8TournamentInfo.tourneyname}
                            onChange={(e) => handleChange('tourneyname', e.target.value)}></input>
            <div>Tournament Date:</div>
            <input id={`tourneydate`} key={Math.random()} defaultValue={top8TournamentInfo.tourneydate}
                            onChange={(e) => handleChange('tourneydate', e.target.value)}></input>
            <div>Tournament Entrants:</div>
            <input id={`tourneyentrants`} key={Math.random()} defaultValue={top8TournamentInfo.tourneyentrants}
                            onChange={(e) => handleChange('tourneyentrants', e.target.value)}></input>
            <div>Tournament Location:</div>
            <input id={`tourneylocation`} key={Math.random()} defaultValue={top8TournamentInfo.tourneylocation}
                            onChange={(e) => handleChange('tourneylocation', e.target.value)}></input>
        </TournamentInfo>
        </Top8Container>
    )

}

const Top8Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 25px;
    row-gap: 30px;
    width: 100%;
    height: 650px;
`

const Top8PlayerInfo = styled.div`
    width: 100%;
    & * {
        width: 70%;
    }
    & div:not(:first-child){
        margin-top: 10px;
    }
`

const TournamentInfo = styled.div`
    width: 100%;
    & * {
        width: 70%;
    }
    & div:not(:first-child){
        margin-top: 10px;
    }
`


