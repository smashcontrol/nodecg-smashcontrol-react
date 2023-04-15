import React, { useCallback, useEffect, useRef } from "react";
import styled from 'styled-components';
import {clone} from 'lodash';
import { useReplicant } from '../../utils/hooks';
import { defaultSetObject, streamQueueDialogFields } from "../../utils/defaults";

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';

export const StreamQueueDialog = () => {
    const [streamQueue, setStreamQueue] = useReplicant('streamQueue', [{}], {namespace: NODECG_BUNDLE});
    const [currentStreamQueueIdx] = useReplicant('currentStreamQueueIdx', 0, {namespace: NODECG_BUNDLE});
    const [openSQDialog, setOpenSQDialog] = useReplicant('openSQDialog', false, {namespace: NODECG_BUNDLE});

    const idxRef = useRef(null);
    const streamQueueRef = useRef([])

    const generateField = useCallback((field) => {
        streamQueueRef.current = streamQueue;
        idxRef.current = currentStreamQueueIdx;
        try{
            const setValue = streamQueueRef.current[idxRef.current][field.id] ? streamQueueRef.current[idxRef.current][field.id] : '';
            return(
                <input id={field.id} key={field.id} placeholder={field.placeholder} defaultValue={setValue}></input>
            )
        } catch (e){}
    }, [streamQueue, currentStreamQueueIdx]);

    const saveInfo = useCallback((idx) => {
        const queue = clone(streamQueueRef.current);
        let newSetInfo = clone(queue[idx]) ? clone(queue[idx]) : {};
        streamQueueDialogFields.forEach((field) => {
            const value = document.getElementById(field.id).value;
            newSetInfo[field.id] = value;
        })
        queue[idx] = newSetInfo;
        setStreamQueue(queue);
    }, [streamQueue, setStreamQueue]);
  
    useEffect(() => {
        idxRef.current = currentStreamQueueIdx;
        streamQueueRef.current = streamQueue;
        document.addEventListener('dialog-confirmed', () => {
            saveInfo(idxRef.current);
            setOpenSQDialog(false);
        });
        document.addEventListener('dialog-dismissed', () => {
            setOpenSQDialog(false);
        });
    }, [currentStreamQueueIdx, streamQueue, setOpenSQDialog]);

    return(
        <Container>
            <Player1Info>
                {streamQueueDialogFields.slice(0, 2).map(field => {
                    return(generateField(field));
                })}
            </Player1Info>
            <Player2Info>
                {streamQueueDialogFields.slice(2, 4).map(field => {
                    return(generateField(field));
                })}
            </Player2Info>
            <OtherInfo>
                {streamQueueDialogFields.slice(4).map(field => {
                    return(generateField(field));
                })}
            </OtherInfo>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 300px;
    & > * {
        display: grid;
        grid-template-rows: 1fr 1fr;
        width: 80%;
        height: 50%;
        margin: auto;
    }
`
const Player1Info = styled.div`
`
const Player2Info = styled.div`
`
const OtherInfo = styled.div`
`