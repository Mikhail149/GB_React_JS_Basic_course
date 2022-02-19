import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import styles from './ButtonHead.module.css';


const HeadButton = styled(Button)((props) => {
    return `
    border-radius: 10px;
    `
})


export const ButtonHead = (props) => {

    return (
        <Link to={props.Link}>
            <HeadButton type="submit" variant="contained" size="large" >{props.children ? props.children : 'default'}</HeadButton>
        </Link>
    )
}