import React, { useCallback, useEffect, useRef } from "react";
import styled from 'styled-components';
import { useReplicant } from '../../utils/hooks';
import { defaultSetObject } from '../../utils/defaults';
import { start } from "repl";

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';
const PAGE_LIMIT = 4;


export const StreamQueue = () => { 
    const [setInfo, setSetInfo] = useReplicant('setInfo', defaultSetObject, {namespace: NODECG_BUNDLE});
    const [streamQueue, setStreamQueue] = useReplicant('streamQueue', [{}], {namespace: NODECG_BUNDLE});
    const [currentStreamQueueIdx, setCurrentStreamQueueIdx] = useReplicant('currentStreamQueueIdx', 0, {namespace: NODECG_BUNDLE});
    const [openSQDialog, setOpenSQDialog] = useReplicant('openSQDialog', false, {namespace: NODECG_BUNDLE});
    const [startingIndex, setStartingIndex] = useReplicant('startingIndex', 0, {namespace: NODECG_BUNDLE});
    const [pageNumber, setPageNumber] = useReplicant('pageNumber', 1, {namespace: NODECG_BUNDLE});
    const MAX_PAGES = Math.max(Math.ceil(streamQueue.length / PAGE_LIMIT), 1);

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

    const handlePageChange = useCallback((increment) => {
        setStartingIndex(startingIndex + increment);
        increment > 0 ? setPageNumber(pageNumber + 1) : setPageNumber(pageNumber - 1);
    }, [startingIndex, setStartingIndex, pageNumber, setPageNumber])

    useEffect(() => {
        if(openSQDialog){
            setCurrentStreamQueueIdx(currentStreamQueueIdx);
            nodecg.getDialog('stream-queue-dialog').open();
        }
    }, [openSQDialog, currentStreamQueueIdx]);

    useEffect(() => {
        if(pageNumber > MAX_PAGES){
            handlePageChange(-PAGE_LIMIT);
        }
    }, [streamQueue, pageNumber])

    const handleClearStreamQueue = useCallback(() => {
        setStreamQueue([])
        setStartingIndex(0);
        setPageNumber(1);
    }, [setStreamQueue]);

    return(
        <Container>
            {streamQueue.slice(startingIndex, startingIndex + PAGE_LIMIT).map((stream, idx) =>
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
            <NavigationContainer disabled={MAX_PAGES === 1 && pageNumber === 1}>
                <NavButton disabled={pageNumber === 1} onClick={() => handlePageChange(-PAGE_LIMIT)}>{`<`}</NavButton>
                <PageIndicator>Page {pageNumber} of {MAX_PAGES}</PageIndicator>
                <NavButton disabled={pageNumber === MAX_PAGES} onClick={() => handlePageChange(PAGE_LIMIT)}>{`>`}</NavButton>
            </NavigationContainer>
            <ClearButton>
                <button onClick={() => handleClearStreamQueue()}>Clear Stream Queue</button>
            </ClearButton>
            
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

const NavigationContainer = styled.div`
    display: ${props => {
        switch(props.disabled){
            case true:
                return `none;`
            case false:
                return `grid;`
        }
    }}
    grid-template-columns: 1fr 3fr 1fr;
    height: 30px;
    margin-top: 20px;
    
`
const NavButton = styled.button`
    margin: auto;
    width: 50%;
    height: 100%;
    background: #212529;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover{
        background: #1e1e1e;
        color: lightgrey;
    }
    &:disabled {
        display: none
    }
`

const PageIndicator = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: center;
    font-size: 18px;
    line-height: 32px;
`

const ClearButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    height: 35px;
    margin-top: 20px;
    & button {
        grid-column-start: 2;
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: white;
        background: #d9534f;
        border: none;
        border-radius: 5px;
        margin: 0 auto 0 auto;
        &:hover{
            background: #993a37;
            color: lightgrey;
        }
    }
`