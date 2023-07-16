import React, { useCallback } from 'react';
{/* Because this is built with Parcel, icons need to be front-loaded on build instead of dynamically accessed */}
import ssb64_images from '../../assets/icons/ssb64/*.png';
import ssbm_images from '../../assets/icons/ssbm/*.png';
import ssbb_images from '../../assets/icons/ssbb/*.png';
import ssbpm_images from '../../assets/icons/sspm/*.png';
import ssb4_images from '../../assets/icons/ssb4/*.png';
import ssbult_images from '../../assets/icons/ssbult/*.png';
import roa_images from '../../assets/icons/roa/*.png';
import styled from 'styled-components';
import { useReplicant } from '../../utils/hooks';
import { defaultSetObject } from '../../utils/defaults';
import { ReactFitty } from "react-fitty";

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';

export const SetInfo = () => {
    const [setInfo, setSetInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});

    const handleScoreChange = useCallback((player, increment) => {
        player === 1
            ? (currentSet.player1score + increment < 0 || currentSet.player1score + increment > 99)
                ? null
            : (currentSet.player1score += increment)
            : (currentSet.player2score + increment < 0 || currentSet.player2score + increment > 99)
                ? null
            : (currentSet.player2score += increment);
        setSetInfo(currentSet);
    }, [currentSet, setSetInfo]);

    const handleResetScore = useCallback(() => {
        currentSet.player1score = 0;
        currentSet.player2score = 0;
        setSetInfo(currentSet);
    }, [currentSet, setSetInfo]);

    const handleSwap = useCallback(() => {
        [currentSet.player1tag, currentSet.player1character, currentSet.player1pronouns, currentSet.player1port, currentSet.player1score, 
            currentSet.player2tag, currentSet.player2character, currentSet.player2pronouns, currentSet.player2port, currentSet.player2score] = 
        [currentSet.player2tag, currentSet.player2character, currentSet.player2pronouns, currentSet.player2port, currentSet.player2score, 
            currentSet.player1tag, currentSet.player1character, currentSet.player1pronouns, currentSet.player1port, currentSet.player1score];

        setSetInfo(currentSet);
    }, [currentSet, setSetInfo]);

    const handleOpenDialog = useCallback(() => {
        nodecg.getDialog('set-info-dialog').open();
    })

    const handleGetImage = useCallback((character) => {
        switch(currentSet.game){
            case 'ssb64':
                return ssb64_images[character.split("[REMIX] ").at(-1)];
            case 'ssbm':
                return ssbm_images[character];
            case 'ssbb':
                return ssbb_images[character];
            case 'ssbpm':
                return ssbpm_images[character];
            case 'ssb4':
                return ssb4_images[character];
            case 'ssbult':
                if(["Alex", "Enderman", "Zombie"].includes(character)){
                    return ssbult_images["Steve"];
                }
                return ssbult_images[character];
            case 'roa':
                return roa_images[character];
        }
    })
    const currentSet = setInfo;

    return (
        <Container>
            <PlayerInfo>
                {/* Player 1 Info */}
                <PlayerName><ReactFitty maxSize={48}>{currentSet.player1tag}</ReactFitty></PlayerName>
                <PlayerPronouns><ReactFitty maxSize={24}>{currentSet.player1pronouns}</ReactFitty></PlayerPronouns>
                <PlayerPort>Port {currentSet.player1port}</PlayerPort>
                {/* Get image for the current character, pass the game prop into styled for dimensions */}
                <PlayerImage src={handleGetImage(currentSet.player1character)} game={currentSet.game}></PlayerImage>
                <ScoreButtons>
                    <MinusButton onClick={() => handleScoreChange(1, -1)}>-1</MinusButton>
                    <PlusButton onClick={() => handleScoreChange(1, 1)}>+1</PlusButton>
                </ScoreButtons>
            </PlayerInfo>

            <ScoreDisplay>
                <TournamentLocation>{currentSet.bracketlocation}</TournamentLocation>
                <Score>{currentSet.player1score} - {currentSet.player2score}</Score>
                <ResetButton onClick={handleResetScore}>Reset Score</ResetButton>
                <SwapButton onClick={handleSwap}>⇆</SwapButton>
                <EditSetButton onClick={handleOpenDialog}>Edit Current Set</EditSetButton>
            </ScoreDisplay>

            <PlayerInfo>
                <PlayerName><ReactFitty maxSize={48}>{currentSet.player2tag}</ReactFitty></PlayerName>
                <PlayerPronouns><ReactFitty maxSize={24}>{currentSet.player2pronouns}</ReactFitty></PlayerPronouns>
                <PlayerPort>Port {currentSet.player2port}</PlayerPort>
                <PlayerImage src={handleGetImage(currentSet.player2character)} game={currentSet.game}></PlayerImage>
                <ScoreButtons>
                    <MinusButton onClick={() => handleScoreChange(2, -1)}>-1</MinusButton>
                    <PlusButton onClick={() => handleScoreChange(2, 1)}>+1</PlusButton>
                    {/* {<button onClick={() => setSetInfo(defaultSetObject)}>Reset</button>} */}
                </ScoreButtons>
            </PlayerInfo>
        </Container>
    )
}

const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const PlayerInfo = styled.div`
    display: grid;
    text-align: center;
    grid-template-rows: 1fr .75fr .5fr 2fr 2fr;
	& > * {
		overflow: hidden;
	}
`
const PlayerName = styled.div`
    font-size: 48px;	
`
const PlayerPronouns = styled.div`
    font-size: 24px;
`
const PlayerPort = styled.div`
    font-size: 20px;
`
const PlayerImage = styled.img`
    height: ${props => props.game === 'ssb64' ? '60px' : '64px'};
    width: ${props => props.game === 'ssb64' ? '48px' : '64px'};
    margin: auto;
`
const ScoreButtons = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    & button {
        font-size: 20px;
        width: 50%;
        height: 50%;
        background: #212529;
        color: white;
        border: none;
        border-radius: 5px;
        &:hover{
            background: #1e1e1e;
            color: lightgrey;
        }
    }
`
const MinusButton = styled.button`
    margin: auto;
    margin-left: 45%;
`
const PlusButton = styled.button`
    margin: auto;
    margin-right: 45%;
`
const ScoreDisplay = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr
`

const TournamentLocation = styled.div`
    font-size: 36px;
    text-align: center;
    overflow: auto;
`

const Score = styled.div`
    font-size: 96px;
    text-align: center;
`

const ResetButton = styled.button`
    font-size: 24px;
    width: 50%;
    height: 75%;
    color: white;
    background: #d9534f;
    border: none;
    border-radius: 5px;
    margin: 0 auto 0 auto;
    &:hover{
        background: #993a37;
        color: lightgrey;
    }
`

const SwapButton = styled.button`
    font-size: 24px;
    width: 20%;
    height: 75%;
    margin: 0 auto 0 auto;
    background: #212529;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover{
        background: #1e1e1e;
        color: lightgrey;
    }
`

const EditSetButton = styled.button`
    font-size: 24px;
    width: 75%;
    height: 100%;
    margin: 0 auto 0 auto;
    background: #212529;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover{
        background: #1e1e1e;
        color: lightgrey;
    }
`
