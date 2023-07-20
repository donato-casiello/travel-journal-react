function Card(props) {
    console.log(props)
    return (
        <section className="card--section">
            <div className="card--img">
                <img src={props.imageUrl} alt={props.title}/>
            </div>
            <div className="card--text">
                <i className="fa-solid fa-location-dot"></i>
                <span className="card--location">{props.location}</span>
                <span><a href={props.googleMapsUrl}>view on Google Maps</a></span>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </section>
    )
}

export default Card