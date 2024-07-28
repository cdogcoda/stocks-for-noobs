import { useNavigate } from "react-router-dom"
import "./styles.css"


export default function Home() {
    const navigateTo = useNavigate()

    return (
    <>
        <div className="home-container">
            <h1>Welcome to Stocks For Noobs!</h1>
            <p>This is a revolutionary app made for those that want to get hecka freakin' rich by investing, but with none of the actual effort of learning to invest.</p>
            <button className="home-button" onClick={() => navigateTo("/next")}>Click here to begin</button>
        </div>
    </>
    )
}