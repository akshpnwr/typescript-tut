import React from "react"

interface ChildProps {
    color: string,
    onClick: () => void,
    children?: React.ReactNode
}

// Method 1: Doesn't tell TS that Child is a React component
export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            Hello! I'm a child component.
            <br />
            <b>{color}</b>
            <button type="submit" onClick={onClick}>Click me</button>
        </div>
    )
}

// Method 2: Tells TS that Child is a React component
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
    return (
        <div>
            Hello! I'm a child component.
            <br />
            <p>{children}</p>
            <b>{color}</b>
            <button type="submit" onClick={onClick}>Click me</button>
        </div>
    )
}
