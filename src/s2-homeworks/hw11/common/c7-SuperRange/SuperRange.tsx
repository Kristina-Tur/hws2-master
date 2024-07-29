import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type SuperRangePropsType = SliderProps & {
    onChange: (event: Event, value: number | Array<number>) => void
}


const SuperRange: React.FC<SuperRangePropsType> = ({onChange, ...restProps}: SuperRangePropsType) => {

    const onChangeHandler = (event: Event, value: number | Array<number>) => {
        onChange(event, value)
    }

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                maxWidth: '800px', width: '100%', marginRight: '20px', marginLeft: '20px', gap: '50px'
            }}
            onChange={onChangeHandler}
            {...restProps} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
