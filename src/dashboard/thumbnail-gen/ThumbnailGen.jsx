import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useReplicant } from '../../utils/hooks';

const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const ThumbnailGen = () => {
    const [runPrint, setRunPrint]= useReplicant('runPrint', false, {namespace: NODECG_BUNDLE});


    return(
        <Container>
            <ThumbnailButton onClick={() => setRunPrint(true)}>Save Thumbnail</ThumbnailButton>
        </Container>
        
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
`

const ThumbnailButton = styled.button`
    width: 100%;
    height: 100%;
    background: #212529;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover{
        background: #1e1e1e;
        color: lightgrey;
    }
`