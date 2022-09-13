import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect} from "react";
import {useSelector} from "react-redux";



function CountPlayer({setValueToPlayer, setValueFromPlayer}) {
    const {filter} = useSelector(s => s.cards)
    const [value, setValue] = React.useState([filter.countPlayer.from || 1, filter.countPlayer.to || 10]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue([filter.countPlayer.from, value[1]])
    }, [filter.countPlayer.from])

    useEffect(() => {
        setValue([ value[0],filter.countPlayer.to])
    }, [filter.countPlayer.to])


    useEffect(() => {
        setValueFromPlayer(value[0])
    },[value[0]])

    useEffect(() => {
        setValueToPlayer(value[1])
    }, [value[1]])

    return (
        <Box >
            <Slider
                step={1}
                marks
                min={1}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={10}
            />
        </Box>
    );
}

export default CountPlayer