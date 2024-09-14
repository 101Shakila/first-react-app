import RentalProperty from "./RentalProperty"

export default function RentalList({ properties }) {
    return (
        <div>
            <h1>Listing</h1>
            {
                properties.map(p => {
                    <RentalProperty
                        key={p.id}
                        name={p.name}
                        rating={p.rating}
                        price={p.price}
                    />
                })}
        </div>
    )


}


// const properties = [

//     { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//     { id: 129032, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//     { id: 129033, name: "Cactus Retreat", rating: 4.75, price: 300 },
//     { id: 129034, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//     { id: 129035, name: "Oceanview Condo", rating: 4.7, price: 140 },
//     { id: 129036, name: "Gold Miner campground", rating: 4.69, price: 96 }

//   ];
