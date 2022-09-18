import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import debounce from '@material-ui/core/utils/debounce';
import {useState} from "react";
import {changePriceFrom, changePriceTo} from "../../redux/cards";




function PriceBar({setValueFromPrice, setValueToPrice}) {
    const dispatch = useDispatch()
    const {filter} = useSelector(s => s.reducer.cards)
    const [value, setValue] = React.useState([filter.price.from || 0, filter.price.to || 20000])


    const rangeChange = (event, newValue) => {
        setValue(newValue)
        dispatch(changePriceFrom(newValue[0]))
        dispatch(changePriceTo(newValue[1]))
    }


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
                defaultValue={value}
                onChange={debounce(rangeChange, 1000)}
                valueLabelDisplay="auto"
                max={20000}
            />
        </Box>
    );
}

export default PriceBar