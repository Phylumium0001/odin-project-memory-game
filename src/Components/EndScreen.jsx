import '../styles/endscreen.css'
export default function EndScreen(){
    return (<>
        <div className="end-screen">
            <div className="text">
                <p>You have Won</p>
                <p>Score:0</p>
            </div>
            <div><button>Restart</button></div>
        </div>
    </>)
}