import React from 'react'

interface IDhruvProps {
    name: string;
    age: number;
}

export default function Dhruv({ name, age }: IDhruvProps) {
    const onChangeInput = (value: string) => {
        console.log(value)
    }

    return (
        <div>{name} {age}
            <input onChange={(e) => onChangeInput(e.target.value)} />
        </div>
    )
}
