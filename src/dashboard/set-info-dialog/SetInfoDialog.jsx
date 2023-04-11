import React, { useCallback, useEffect, useRef } from "react";
import styled from 'styled-components';
import {clone} from 'lodash';
import { useReplicant } from '../../utils/hooks';
import { defaultSetObject, dialogFields } from "../../utils/defaults";
import { characters } from "../../utils/characters";

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';

export const SetInfoDialog = () => {
    const [setInfo, setSetInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    useEffect(() => {
        document.addEventListener('dialog-confirmed', () => {
            saveInfo();
        });
    }, [setInfo]);

    const generateField = useCallback((field) => {
        const setValue = setInfo[field.id] ? setInfo[field.id] : '';
        switch (field.type){
            case 'text':
            return(
                <input id={field.id} key={field.id} placeholder={field.placeholder} defaultValue={setValue}></input>
            )
            case 'character':
                return( 
                    <select id={field.id} key={Math.random()} defaultValue={setValue}>
                        {characters[setInfo.game].map((character, i) => {
                            return(
                                <option key={i} value={character}>{character}</option>
                            )
                        })}
                    </select>
                )
            case 'port':
                return(
                    <select id={field.id} key={Math.random()} defaultValue={setValue}>
                        {field.options.map((option, i) => {
                            return(
                                <option key={i} value={option}>{option}</option>
                            )
                        })}
                    </select>
                )
        }
    }, [setInfo]);
    const saveInfo = useCallback(() => {
        let newSetInfo = clone(setInfo);
        dialogFields.forEach((field) => {
            const value = document.getElementById(field.id).value;
            newSetInfo[field.id] = value;
        })
        setSetInfo(newSetInfo);
    }, [setInfo, setSetInfo]);

    const currentSet = setInfo;
    return(
        <Container>
            <Player1Info>
                {dialogFields.slice(0, 4).map(field => {
                    return(generateField(field));
                })}
            </Player1Info>
            <Player2Info>
                {dialogFields.slice(4, 8).map(field => {
                    return(generateField(field));
                })}
            </Player2Info>
            <OtherInfo>
                {dialogFields.slice(8, 13).map(field => {
                    return(generateField(field));
                })}
            </OtherInfo>
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 3fr;
    row-gap: 50px;
    & > * {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        height: 100%;
        width: 80%;
        margin: auto;
    }
`
const Player1Info = styled.div`
    height: 150%;
`
const Player2Info = styled.div`
    height: 150%;
`
const OtherInfo = styled.div`

`