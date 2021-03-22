import React from 'react';
import Slider from '@material-ui/core/Slider';
import useStyles from './SliderStyles';
import {ChangeEvent} from 'react';

type PropsType = {
    minValue: number
    maxValue: number
    from: number
    to: number
    onChangeRange: (values: number[]) => void
}

const SliderComponent: React.FC<PropsType> = ({
                                                  minValue,
                                                  maxValue,
                                                  onChangeRange,
                                                  from,
                                                  to
                                              }) => {
    const classes = useStyles();

    // Handlers
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange(newValue as number[]);
    }


    // Render
    return (
        <Slider aria-labelledby="range-slider"
                value={[from, to]}
                min={minValue}
                max={maxValue}
                onChange={handleChange}
                classes={{
                    root: classes.root,
                    track: classes.track,
                    rail: classes.rail,
                    thumb: classes.thumb,
                    focusVisible: classes.focusVisible
                }}
        />
    );
}

export default SliderComponent;
