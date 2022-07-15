import { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
const OurBookings = () => {

    const [bookingData, getFetch] = useFetch("http://127.0.0.1:8000/api/ourbookings");
    useEffect(() => {
        getFetch()
    }

        , []);

    const userBookings = bookingData.map((book) => {
        return (

            <tr>
                <td>{book.id}</td>
                <td>{book.checkIn}</td>
                <td>{book.checkOut}</td>
                <td>{book.total_price}</td>

            </tr>
        )
    });

    return (
        <div style={{ margin: '50px' }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Our Bookings</h1>
            <table className="table mt-2">
                <tr>
                    <td>user id</td>
                    <td>checkIn date</td>
                    <td>checkOut date</td>
                    <td>total price</td>

                </tr>
                {userBookings}
            </table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>

    )


}
export default OurBookings;