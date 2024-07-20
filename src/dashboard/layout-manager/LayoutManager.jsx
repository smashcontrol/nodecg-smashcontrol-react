import React, { useCallback } from "react";
import { useReplicant } from "../../utils/hooks";
import { ReactFitty } from "react-fitty";
import ssb64_images from '../../assets/icons/ssb64/*.png';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ChromePicker } from 'react-color';
import { defaultSetObject } from '../../utils/defaults';


const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const LayoutManagerObject = () => {
    const [setInfo, setSetInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    const [portsVisible, setPortsVisible] = useReplicant('portsVisible', true, {namespace: NODECG_BUNDLE});
    const [characterVisible, setCharacterVisible] = useReplicant('characterVisible', true, {namespace: NODECG_BUNDLE});
    const [primaryColor, setPrimaryColor] = useReplicant('primaryColor', '#000000', {namespace: NODECG_BUNDLE});
    const [secondaryColor, setSecondaryColor] = useReplicant('secondaryColor', '#000000', {namespace: NODECG_BUNDLE});
    const [backgroundColor, setBackgroundColor] = useReplicant('backgroundColor', '#000000', {namespace: NODECG_BUNDLE});


    const handlePortVisibleChange = (e) => {
        setPortsVisible(e)
    }
    const handleCharacterVisibleChange = (e) => {
        setCharacterVisible(e)
    }
    const handlePrimaryChange = (newVal) => {
        setPrimaryColor(newVal.hex);
    }
    const handleSecondaryChange = (newVal) => {
        setSecondaryColor(newVal.hex);
    }
    const handleBackgroundChange = (newVal) => {
        setBackgroundColor(newVal.hex);
    }
    return(
        <Container>
            <Settings>
                <ColorPickers>
                    <PrimaryColor>
                        <ChromePicker color={primaryColor} onChange={handlePrimaryChange} />
                        <ColorLabel>Primary Color</ColorLabel>
                    </PrimaryColor>
                    <SecondaryColor>
                        <ChromePicker color={secondaryColor} onChange={handleSecondaryChange} />
                        <ColorLabel>Secondary Color</ColorLabel>
                    </SecondaryColor>
                    <BackgroundColor>
                        <ChromePicker color={backgroundColor} onChange={handleBackgroundChange} />
                        <ColorLabel>Sidebar Background Color</ColorLabel>
                    </BackgroundColor>
                </ColorPickers>

                <Toggles>
                    <PortVisible>
                        <FormControlLabel control={<Switch checked={portsVisible} onChange={(e) => handlePortVisibleChange(e.target.checked)} />} 
                        label={`Ports Visible?`} />
                    </PortVisible>
                    <CharacterVisible>
                        <FormControlLabel control={<Switch checked={characterVisible} onChange={(e) => handleCharacterVisibleChange(e.target.checked)} />} 
                            label={`Characters Visible?`} />
                    </CharacterVisible>
                </Toggles>
            </Settings>


            
            <LayoutPreview>
                <LayoutContainer color={primaryColor}>
                    <TopBar color={primaryColor}>
                        <ReactFitty maxSize={16}>{setInfo.bracketlocation}</ReactFitty>
                    </TopBar>
                    <CameraBox color={primaryColor}>
                    </CameraBox>
                    <GameBox color={primaryColor}>
                    </GameBox>
                    <Sidebar color={backgroundColor}>
                        {portsVisible ? <P1Ports><Port></Port><Port></Port><Port></Port><Port></Port></P1Ports> : null }
                        <Player1Info>
                            <Character>
                            {characterVisible ? <DefaultCharacter src={ssb64_images['Mario']}></DefaultCharacter> : null }
                            </Character>
                            <Name color={primaryColor}><ReactFitty maxSize={16}>{setInfo.player1tag}</ReactFitty></Name>
                            <Score color={secondaryColor}>{setInfo.player1score}</Score>
                        </Player1Info>
                        {portsVisible ? <P2Ports><Port></Port><Port></Port><Port></Port><Port></Port></P2Ports> : null }
                        <Player2Info>
                            <Character>
                            {characterVisible ? <DefaultCharacter src={ssb64_images['Mario']}></DefaultCharacter> : null }
                            </Character>
                            <Name color={primaryColor}><ReactFitty maxSize={16}>{setInfo.player2tag}</ReactFitty></Name>
                            <Score color={secondaryColor}>{setInfo.player2score}</Score>
                        </Player2Info>
                    </Sidebar>
                </LayoutContainer>
            </LayoutPreview>
        </Container>
    )

}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

`
const Settings = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`
const ColorPickers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    margin-right: 25px;
`
const PrimaryColor = styled.div`
    margin-right: 25px;
`
const SecondaryColor = styled.div`
    margin-right: 25px;
`
const BackgroundColor = styled.div``

const ColorLabel = styled.div`
    margin-top: 10px;
`

const Toggles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin-top: 25px;
`
const PortVisible = styled.div``
const CharacterVisible = styled.div``


const LayoutPreview = styled.div``
const LayoutContainer = styled.div`
    position: relative;
    width: 640px;
    height: 360px;
    outline: 5px solid ${props => props.color};

`
const TopBar = styled.div`
    position: absolute;
    width: 185px;
    height: 23px;
    left: 310px;
    text-align: center;
    background: ${props => props.color};
`
const CameraBox = styled.div`
    width: 147px;
    height: 110px;
    outline: 5px solid ${props => props.color};
`
const GameBox = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 487px;
    height: 360px;
    outline: 5px solid ${props => props.color};
`
const Sidebar = styled.div`
    height: 250px;
    width: 150px;
    background: ${props => props.color};

`
const Player1Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 122px;
    height: 23px;
    left: 13px;
    top: 165px;
    `
const Player2Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    text-align: center;
    color: white;
    width: 122px;
    height: 23px;
    left: 13px;
    top: 215px;
`
const P1Ports = styled.div`
    display: grid;
    position: absolute;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 40px;
    top: 155px;
    left: 35px;
`
const P2Ports = styled.div`
    display: grid;
    position: absolute;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 40px;
    top: 205px;
    left: 35px;
`

const Port = styled.div`
    outline: 2px solid black;
    width: 5px;
    height: 5px;
    border-radius: 9px;
`
const Name = styled.div`
    position: relative;
    width: 85px;
    height: 23px;
    background: ${props => props.color};
    padding-top: 5px;
    margin: auto;

`
const Character = styled.div``
const DefaultCharacter = styled.img`
    position: relative;
    top: 5px;
    width: 12px;
    height: 16px;
`
const Score = styled.div`
    background: ${props => props.color};
    padding-top: 5px;
`

