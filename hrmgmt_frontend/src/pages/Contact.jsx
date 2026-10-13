import { useState } from 'react'

function Contact() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(18)
    const [phno, setPhno] = useState('')

    const RegisterdData = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(age)
    }

    return (
        <div>
            <h1>Contact page</h1>
            <form onSubmit={RegisterdData}> 
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" /><br />
                <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Enter your age" /><br />
                <input type="text" value={phno} onChange={(event) => setPhno(event.target.value)} placeholder="Enter your phone no" /><br />
                <button type="submit">Submit</button>
            </form>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{phno}</h3>
        </div>
    )
}

export default Contact