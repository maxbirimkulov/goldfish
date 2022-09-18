import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCountplayersFrom, changeCountplayersTo, changePriceFrom, changePriceTo} from "../../redux/cards";
import debounce from '@material-ui/core/utils/debounce';



function CountPlayer({setValueToPlayer, setValueFromPlayer}) {
    const {filter} = useSelector(s => s.reducer.cards)
    const dispatch = useDispatch()
    const [value, setValue] = React.useState([filter.countPlayer.from || 1, filter.countPlayer.to || 10]);

    const rangeChange = (event, newValue) => {
        setValue(newValue)
        dispatch(changeCountplayersFrom(newValue[0]))
        dispatch(changeCountplayersTo(newValue[1]))
    }

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
                defaultValue={value}
                onChange={debounce(rangeChange, 1000)}
                valueLabelDisplay="auto"
                max={10}
            />
        </Box>
    );
}

export default CountPlayer