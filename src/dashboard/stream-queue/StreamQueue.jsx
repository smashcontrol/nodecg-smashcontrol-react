import React, { useCallback, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useReplicant } from '../../utils/hooks';
import { defaultSetObject } from '../../utils/defaults';

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';

export const StreamQueue = () => { 
    const [setInfo, setSetInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    const [streamQueue, setStreamQueue] = useReplicant('streamQueue', [{}], {namespace: NODECG_BUNDLE});
    const [currentStreamQueueIdx, setCurrentStreamQueueIdx] = useReplicant('currentStreamQueueIdx', 0, {namespace: NODECG_BUNDLE});
    const [openSQDialog, setOpenSQDialog] = useReplicant('openSQDialog', false, {namespace: NODECG_BUNDLE});

    const handleAddNewSet = useCallback(async () => {   
        setStreamQueue([...streamQueue, {}]);
        setCurrentStreamQueueIdx(streamQueue.length);
        setOpenSQDialog(true);
    }, [streamQueue, setStreamQueue, setCurrentStreamQueueIdx, currentStreamQueueIdx, setOpenSQDialog]);

    const handleRemoveSet = useCallback((idx) => {
        setStreamQueue(streamQueue.filter((_, i) => i !== idx));
    },  [streamQueue, setStreamQueue]);

    const handleEditSet = useCallback((idx) => {
        setCurrentStreamQueueIdx(idx);
        setOpenSQDialog(true);
    }, [currentStreamQueueIdx, setCurrentStreamQueueIdx, setOpenSQDialog]);

    const handleImportSet = useCallback((idx) => {
        const set_to_import = streamQueue[idx];
        for(const [key, value] of Object.entries(set_to_import)){
            setInfo[key] = value;
        }
        [setInfo['player1score'], setInfo['player2score']] = [0, 0];
        setSetInfo(setInfo);
        handleRemoveSet(idx);
    }, [streamQueue, setStreamQueue, setSetInfo]);

    useEffect(() => {
        if(openSQDialog){
            nodecg.getDialog('stream-queue-dialog').open();
        }
    }, [openSQDialog, currentStreamQueueIdx]);

    return(
        <Container>
            {streamQueue.slice(0, 5).map((stream, idx) =>
            <StreamQueueElement key={idx}>
                <StreamStream>{stream.stream}</StreamStream>
                <StreamPlayers><span>{stream.player1tag}</span> vs. <span>{stream.player2tag}</span></StreamPlayers>
                <StreamLocation>{stream.bracketlocation}</StreamLocation>
                <Buttons>
                    <ImportButton onClick={() => handleImportSet(idx)}>Import Set</ImportButton>
                    <EditSetButton onClick={() => handleEditSet(idx)}>Edit Set</EditSetButton>
                    <RemoveButton onClick={() => handleRemoveSet(idx)}>Remove Set</RemoveButton>
                </Buttons>
            </StreamQueueElement>)}
            <AddNewStreamQueueElement onClick={handleAddNewSet}>
                <Plus>+</Plus>
                <AddNew>Add New</AddNew>
            </AddNewStreamQueueElement>
        </Container>
        )
}

const Container = styled.div`

`
const StreamQueueElement = styled.div`
    display: grid;
    grid-template-rows:  1fr 1fr 1fr 1fr;
    position: relative;
    height: 125px;
    border: 2px solid black;
    border-radius: 15px;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    user-select: none;
    & span {
        font-weight: bold;
    }
`
const AddNewStreamQueueElement = styled.div`
    height: 125px;
    border: 3px dashed #4f4f4f;
    border-radius: 15px;
    background:  #323232;
    text-align: center;
    cursor: default;
    user-select: none;
    &:hover{
        background: #262626;
        border-color: #323232;
        & div{
            color: #4a4a4a;
        }
    }
`

const Plus = styled.div`
    font-size: 48px;
    color: #6a6a6a;
    line-height: 65px;
`
const AddNew = styled.div`
    font-size: 24px;
    color: #6a6a6a;
`
const StreamStream = styled.div`
    position: relative;
    left: 10px;
    top: 5px;
    text-align: left;
    font-weight: bold;
    font-style: italic;
`

const StreamPlayers = styled.div`
`

const StreamLocation = styled.div`
`

const Buttons = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    bottom: 5px;
    height: 25%;
    & button {
        position: relative;
        font-size: 11px;
        width: 90%;
        height: 100%;
        margin: auto;
        border: none;
        border-radius: 5px;
        background: #212529;
        color: white;
    }
    & button:hover {
        background: #1e1e1e;
        color: lightgrey;
    }
`
const ImportButton = styled.button`
`
const EditSetButton = styled.button`
`
const RemoveButton = styled.button`
`