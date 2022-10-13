import React, {useCallback, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChange = useCallback((value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }, [])

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={(value1)=>setValue1(value1)}
                    min={0}
                    max={100}


                    // сделать так чтоб value1 изменялось
                />
            </div>
            <div>
                <span>{value2}</span>
                <SuperRange
                    onChangeRange={(value2)=>setValue2(value2)}
                    min={0}
                    max={100}


                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChange={onChange}
                    value={[value1, value2]}
                    min={0}
                    max={100}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
