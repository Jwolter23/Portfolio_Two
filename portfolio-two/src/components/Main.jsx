import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { useRef } from 'react'


export default function Main () {
    const myRef = useRef(null);
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);

    const handleClick = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
        
    };

    const handleClick2 = () => {
        myRef1.current.scrollIntoView({ behavior: 'smooth'})
    }

    const handleClick3 = () => {
        myRef2.current.scrollIntoView({ behavior: 'smooth'})
    }
    return (
        <div>
                    
            <Routes>
                <Route path='/' element={<Home myRef={myRef} myRef1={myRef1} myRef2={myRef2} handleClick3={handleClick3} handleClick2={handleClick2} handleClick={handleClick} />} />
            </Routes>
            
        </div>
    )
}