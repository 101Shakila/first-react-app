import './RentalList.css';

export default function RentalProperty({ name, rating, price }) {
    return (
        <div className='rental-list-item'>
            <h2>{name}</h2>
            <p>${price} per night</p>
            <p>{rating} ⭐</p>
        </div>
    )


}

