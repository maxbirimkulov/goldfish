import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeAgeplayersFrom,
    changeAgeplayersTo,
    changeCountplayersFrom,
    changeCountplayersTo
} from "../../redux/cards";
import debounce from "@material-ui/core/utils/debounce";



function AgePlayer({setValueFromAge, setValueToAge}) {
    const {filter} = useSelector(s => s.reducer.cards)
    const [value, setValue] = React.useState([filter.age.from || 6, filter.age.to || 20]);
    const dispatch = useDispatch()
    const rangeChange = (event, newValue) => {
        setValue(newValue)
        dispatch(changeAgeplayersFrom(newValue[0]))
        dispatch(changeAgeplayersTo(newValue[1]))
    }

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
                defaultValue={value}
                onChange={debounce(rangeChange, 1000)}
                valueLabelDisplay="auto"
                max={20}
            />
        </Box>
    );
}

export default AgePlayer