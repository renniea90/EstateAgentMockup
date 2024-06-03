import DisplayProperty from "../components/DisplayProperty"

export default function HomePage() {
    return (
        <div>
            <div className="white-container">
                <div className="filter-container">FILTER PROPERTIES</div>
            </div>
            <div className="white-container">
            <DisplayProperty />
            </div>
        </div>
    )
}