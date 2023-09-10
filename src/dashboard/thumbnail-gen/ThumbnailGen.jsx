import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useReplicant } from '../../utils/hooks';
import { defaultSetObject, defaultThumbnailObject } from '../../utils/defaults';
import { all_costumes } from '../../utils/costumes';

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const ThumbnailGen = () => {
    const [runPrint, setRunPrint] = useReplicant('runPrint', false, {namespace: NODECG_BUNDLE});
    const [setInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    const [thumbnailInfo, setThumbnailInfo] = useReplicant('thumbnailInfo', defaultThumbnailObject, {namespace: NODECG_BUNDLE});
    const current_game_costume_list = all_costumes[setInfo.game];

    const special_cases = {
        "Alex": "Steve",
        "Enderman": "Steve",
        "Zombie": "Steve",
        "Byleth Male": "Byleth",
        "Byleth Female": "Byleth",
        "Corrin Female": "Corrin",
        "Corrin Male": "Corrin",
        "Charizard": "Pokemon Trainer",
        "Ivysaur": "Pokemon Trainer",
        "Squirtle": "Pokemon Trainer",
        "Pokemon Trainer Male": "Pokemon Trainer",
        "Pokemon Trainer Female": "Pokemon Trainer",
        "Inkling Boy": "Inkling",
        "Inkling Girl": "Inkling",
        "Robin Male": "Robin",
        "Robin Female": "Robin",
        "Villager Boy": "Villager",
        "Villager Girl": "Villager",
        "Wii Fit Male": "Wii Fit",
        "Wii Fit Female": "Wii Fit"
    }

    const generateDropdown = (character, player) => {
        if(setInfo.game === 'ssb64'){
            character = character.split("[REMIX] ").at(-1);
        }
        if(character !== undefined){
            character = special_cases[character] ? special_cases[character] : character;
            let thumbValue = thumbnailInfo[player];
            if(!current_game_costume_list[character].includes(thumbValue)){
                thumbValue = 'Default';
                handleSelectChange(player, 'Default');
            }
            return (
                <select id={player} key={Math.random()} defaultValue={thumbValue}
                    onChange={(e) => handleSelectChange(player, e.target.value)}>
                    {current_game_costume_list[character].map((costume, i) => {
                        return(
                            <option key={i} value={costume}>{costume}</option>
                        )
                    })}
                </select> 
            )
        }
    }
    const handleSelectChange = useCallback((field, value) => {
        thumbnailInfo[field] = value;
        setThumbnailInfo(thumbnailInfo);
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
            <InputContainer>
                <TournamentName>
                Tournament Name:
                    <input onChange={(e) => handleSelectChange('tourneyname', e.target.value)} placeholder='(optional)'></input>
                </TournamentName>
                <TournamentDate>
                Tournament Date:
                    <input onChange={(e) => handleSelectChange('tourneydate', e.target.value)} placeholder='(optional)'></input>
                </TournamentDate>
            </InputContainer>
        </Container>
        
    )
}

const Container = styled.div`
    width: 100%;
    height: 275px;
`

const ThumbnailButton = styled.button`
    width: 100%;
    height: 25%;
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

const InputContainer = styled.div`
    width: 75%;
`
const TournamentName = styled.div`
    margin-top: 10px;
    & input {
        width: 100%;
    }
`
const TournamentDate = styled.div`
    margin-top: 10px;
    & input {
        width: 100%;
    }
`