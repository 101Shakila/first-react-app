import RentalProperty from "./RentalProperty"

export default function RentalList({ properties }) {
    return (
        <div>
            <h1>Listing</h1>
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
    )


}


