import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect} from "react";
import {useSelector} from "react-redux";



function PriceBar({setValueFromPrice, setValueToPrice}) {

    const {filter} = useSelector(s => s.cards)

    const [value, setValue] = React.useState([filter.price.from || 0, filter.price.to || 20000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue([filter.price.from, value[1]])
    }, [filter.price.from])

    useEffect(() => {
        setValue([ value[0],filter.price.to])
    }, [filter.price.to])


    useEffect(() => {
        setValueFromPrice(value[0])
    },[value[0]])

    useEffect(() => {
        setValueToPrice(value[1])
    }, [value[1]])

    return (
        <Box >
            <Slider
                min={0}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={20000}
            />
        </Box>
    );
}

export default PriceBar