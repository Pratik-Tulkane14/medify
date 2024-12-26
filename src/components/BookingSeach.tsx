import { useState } from 'react'
import IconButton from './IconButton';

const BookingSeach = () => {
    const [search, setSearch] = useState<string>('');
    const handleClick = async (): Promise<void> => {
        console.log("Click");
    };
    return (
        <div className='booking-search-wrapper'>
            <h3 className='booking-heading'>My Bookings</h3>
            <div className="booking-wrapper">
                <div className="booking-search-section">
                    <input type="text" placeholder='Search by Hospital' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <IconButton handleClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default BookingSeach