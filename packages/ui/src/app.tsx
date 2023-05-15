import './app.css'
import useHelloWorldApi from "./hooks/use-hello-world-api";

export function App() {
    const {loading, response} = useHelloWorldApi()

    return (
        <>
            {
                loading ?
                    <div>loading</div> :
                    <div>{response}</div>
            }
        </>
    )
}
