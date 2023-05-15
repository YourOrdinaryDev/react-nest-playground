import {useEffect, useState} from "preact/compat";

export default function useHelloWorldApi() {
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        setLoading(true)

        await (new Promise(resolve => setTimeout(resolve, 2000))) // artificial delay of 2s
        setResponse(await (await fetch('http://localhost:3000')).text())

        setLoading(false)
    }, [])

    return {
        response,
        loading
    }
}