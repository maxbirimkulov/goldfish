import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect} from "react";
import {useSelector} from "react-redux";



function AgePlayer({setValueFromAge, setValueToAge}) {
    const {filter} = useSelector(s => s.cards)
    const [value, setValue] = React.useState([filter.age.from || 6, filter.age.to || 20]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue([filter.age.from, value[1]])
    }, [filter.age.from])

    useEffect(() => {
        setValue([ value[0],filter.age.to])
    }, [filter.age.to])


    useEffect(() => {
        setValueFromAge(value[0])
    },[value[0]])

    useEffect(() => {
        setValueToAge(value[1])
    }, [value[1]])

    return (
        <Box >
            <Slider
                step={1}
                marks
                min={6}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={20}
            />
        </Box>
    );
}

export default AgePlayer