
import './style/loader.css'

export default function Loader() {
    document.body.style.backgroundColor = "#34495e"

    return (
        <div className="loader z-40">
            <div className="ring ">
                Loading
                <span className="loader-span"></span>
            </div>
        </div>
    )
}
