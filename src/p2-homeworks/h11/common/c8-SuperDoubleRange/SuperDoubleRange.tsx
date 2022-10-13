import React, {
    memo,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react'
import styles from "./SuperDoubleRange.module.css";


type SuperDoubleRangePropsType = {
    onChange: (value: [number, number]) => void
    value: [number, number]
    max?: number
    min?: number
    step?: number
    disabled?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = memo(
    (
        {
            onChange,
            value,
            max = value[1],
            min = value[0],
            step,
            disabled,
            ...restProps
        }
    ) => {
        const [minVal, maxVal] = value
        const [isHoverThumb, setIsHoverThumb] = useState(false)
        const maxValRef = useRef<HTMLInputElement>(null)
        const minValRef = useRef<HTMLInputElement>(null)
        const maxBadRef = useRef<HTMLInputElement>(null)
        const minBadRef = useRef<HTMLInputElement>(null)
        const range = useRef<HTMLInputElement>(null)

        const onChangeHandler = useCallback((type: 'min'|'max') => {
            const minRefVal = +minValRef.current!.value;
            const maxRefVal = +maxValRef.current!.value;

            if (minRefVal <= maxRefVal) {
                onChange([minRefVal, maxRefVal]);

                return
            }

            type === 'min' && onChange([maxRefVal, maxRefVal])
            type === 'max' && onChange([minRefVal, minRefVal])

        }, [onChange])

        const toggleIsHoverThumb = useCallback(()=>{
            setIsHoverThumb(!isHoverThumb)
        }, [isHoverThumb])

        useEffect(()=>{
            const maxRefValue = +maxValRef.current!.value

            if (minVal <= maxRefValue) {
                onChange([minVal, maxRefValue]);

                return
            }

            const percentValue = (minVal - min) / ((max-min)/100)

            range.current!.style.setProperty(
                '--start',
                `${percentValue}%`
            )
            const minZIndex = minVal > (max + min) / 2 ? '1' : '0'
            minValRef.current!.style.setProperty('z-index', minZIndex)
            minBadRef.current!.style.setProperty('z-index', minZIndex)

            range.current!.style.setProperty(
                '--minBadetOffset',
                `${percentValue / 100}`
            );

            range.current!.style.setProperty(
                '--minBadgetOffsetWidth',
                `${minBadRef.current!.offsetWidth}px`
            );
        }, [minVal, onChange, max, min]);

        useEffect(() => {
            const minRefValue = +minValRef.current!.value;

            if (maxVal < minRefValue) {
                onChange([minRefValue, minRefValue]);

                return;
            }

            const percentValue = (maxVal - min) / ((max - min) / 100);

            range.current!.style.setProperty('--end', `${percentValue}%`);

            range.current!.style.setProperty(
                '--maxBadgetOffset',
                `${percentValue / 100}`
            );

            range.current!.style.setProperty(
                '--maxBadgetOffsetWidth',
                `${maxBadRef.current!.offsetWidth}px`
            );
        }, [maxVal, onChange, max, min]);



        return (
            <div
                className={`${styles.superDoubleRange}${
                    disabled ? ` ${styles.disable}` : ''
                }`}
            >
                <div className={styles.rangeInfo}>{min}</div>
                <div className={styles.rangeContainer} ref={range}>
                    <div className={styles.slider}>
                        <div className={styles.bg}></div>
                        <div
                            className={`${styles.track}${
                                isHoverThumb ? ` ${styles.activeTrack}` : ''
                            }`}
                        ></div>
                        <div
                            ref={minBadRef}
                            className={`${styles.badge} ${styles.minBadge}`}
                        >
                            {minVal}
                        </div>
                        <div
                            ref={maxBadRef}
                            className={`${styles.badge} ${styles.maxBadge}`}
                        >
                            {maxVal}
                        </div>
                    </div>
                    <input
                        ref={minValRef}
                        type="range"
                        value={minVal}
                        className={styles.thumb}
                        onChange={() => onChangeHandler('min')}
                        onMouseEnter={toggleIsHoverThumb}
                        onMouseLeave={toggleIsHoverThumb}
                        step={step}
                        disabled={disabled}
                        max={max}
                        min={min}
                    />
                    <input
                        ref={maxValRef}
                        type="range"
                        value={maxVal}
                        className={styles.thumb}
                        onChange={() => onChangeHandler('max')}
                        onMouseEnter={toggleIsHoverThumb}
                        onMouseLeave={toggleIsHoverThumb}
                        step={step}
                        disabled={disabled}
                        max={max}
                        min={min}
                    />
                </div>
                <div className={styles.rangeInfo}>{max}</div>
            </div>

        )
    })


export default SuperDoubleRange
