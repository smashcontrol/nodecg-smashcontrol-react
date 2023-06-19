import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useReplicant } from '../../utils/hooks';
import { defaultSetObject, defaultThumbnailObject } from '../../utils/defaults';
import {ssb64, ssbm, ssbb, ssb4, ssbult, roa} from '../../utils/costumes';

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const ThumbnailGen = () => {
    const [runPrint, setRunPrint] = useReplicant('runPrint', false, {namespace: NODECG_BUNDLE});
    const [setInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    const [thumbnailInfo, setThumbnailInfo] = useReplicant('thumbnailInfo', defaultThumbnailObject, {namespace: NODECG_BUNDLE});
    // const costumeList = () => {
    //     switch(setInfo.game){
    //         case "ssb64":
    //             return ssb64;
    //         case "ssbm":
    //             return ssbm;
    //         case "ssbb":
    //             return ssbb;
    //         case "ssb4":
    //             return ssb4;
    //         case "ssbult":
    //             return ssbult;
    //         case "roa":
    //             return roa;
    //         default:
    //             return null;
    //     }
    // }
    const generateDropdown = (character, player) => {
        if(character !== undefined){
            let thumbValue = thumbnailInfo[player];
            if(!ssb64[character].includes(thumbValue)){
                thumbValue = 'Default';
                handleSelectChange(player, 'Default');
            }
            return (
                <select id={player} key={Math.random()} defaultValue={thumbValue}
                    onChange={(e) => handleSelectChange(player, e.target.value)}>
                    {ssb64[character].map((costume, i) => {
                        return(
                            <option key={i} value={costume}>{costume}</option>
                        )
                    })}
                </select> 
            )
        }
    }
    const handleSelectChange = useCallback((player, value) => {
        thumbnailInfo[player] = value;
        setThumbnailInfo(thumbnailInfo);
        console.log(thumbnailInfo);
    }, [thumbnailInfo, setThumbnailInfo]);

    return(
        <Container>
            <ThumbnailButton onClick={() => setRunPrint(true)}>Save Thumbnail</ThumbnailButton>
            <DropdownContainer>
                <DropdownPlayer1>
                Player 1 Costume:
                    {generateDropdown(setInfo.player1character, 'player1costume')}
                </DropdownPlayer1>
                <DropdownPlayer2>
                Player 2 Costume:
                    {generateDropdown(setInfo.player2character, 'player2costume')}
                </DropdownPlayer2>
            </DropdownContainer>
        </Container>
        
    )
}

const Container = styled.div`
    width: 100%;
    height: 160px;
`

const ThumbnailButton = styled.button`
    width: 100%;
    height: 35%;
    background: #212529;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover{
        background: #1e1e1e;
        color: lightgrey;
    }
`

const DropdownContainer = styled.div`
    width: 75%;
`
const DropdownPlayer1 = styled.div`
    margin-top: 10px;
    & select {
        width: 100%;
    }
`
const DropdownPlayer2 = styled.div`
    margin-top: 10px;
    & select {
        width: 100%;
    }
`