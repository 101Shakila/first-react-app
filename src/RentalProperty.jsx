export default function RentalProperty({ name, rating, price }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>${price} per night</h2>
            <h3>{rating} ⭐</h3>
        </div>
    )


}

