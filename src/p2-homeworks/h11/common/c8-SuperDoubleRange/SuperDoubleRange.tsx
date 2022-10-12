import React, {
    ChangeEvent,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react'
import "./SuperDoubleRange.css";


type SuperDoubleRangePropsType = {
    onChange: (value: [number, number]) => void
    value?: [number, number]
    max: number
    min: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange,
        max, min,
        value,
        ...restProps
    }
) => {
    const [maxValue, setMaxValue] = useState(max)
    const [minValue, setMinValue] = useState(min)
    const maxValRef = useRef(max)
    const minValRef = useRef(min)
    const range = useRef(document.querySelector('#range') as HTMLElement | null)

    const getPercent = useCallback((value: number) => {
        Math.round((value - min) / (max - min) * 100)
    }, [min, max])

    useEffect(() => {
        const minPercent = getPercent(minValue)
        const maxPercent = getPercent(maxValRef.current)

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${Number(maxPercent) - Number(minPercent)}%`
        }
    }, [minValue, getPercent])

    useEffect(() => {
        const maxPercent = getPercent(maxValue)
        const minPercent = getPercent(minValRef.current)

        if (range.current) {
            range.current.style.width = `${Number(maxPercent) - Number(minPercent)}`
        }
    }, [maxValue, getPercent])

    useEffect(() => {
        onChange && onChange([maxValue, minValue]);
    }, [maxValue, minValue, onChange])


    return (
        <div className="container">
            <input
                type="range"
                min={min}
                max={max}
                value={minValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(Number(e.target.value), maxValue - 1);
                    setMinValue(value);
                    minValRef.current = value;
                }}
                className="thumb thumb--right"
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxValue}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minValue + 1);
                    setMaxValue(value);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />
            <div className="slider">
                <div className="slider__track"/>
                {/*<div ref={range} className="slider__range" />*/}
                <div className="slider__left-value">{minValue}</div>
                <div className="slider__right-value">{maxValue}</div>
            </div>
        </div>

    )
}


export default SuperDoubleRange
