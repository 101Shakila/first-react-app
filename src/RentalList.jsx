import RentalProperty from "./RentalProperty"
import './RentalList.css';

export default function RentalList({ properties }) {
    return (
        <div>
            <h1>Listing</h1>
            <div className="rental-list-container">
                {
                    properties.map(p => (
                        <RentalProperty
                            key={p.id}
                            name={p.name}
                            rating={p.rating}
                            price={p.price}
                        />
                    ))}
            </div>
        </div>
    )


}


