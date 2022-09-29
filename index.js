// Methods:
// isOccupied(date) returns false if not occupied, returns true if occupied
// occupancyPercentage(startDate, endDate) returns the percentage of days with occupancy within the range of dates provided (inclusive)

    
class Room {
    constructor({ name, bookings, rate, discount }) {
        this.name = name; // string
        this.bookings = bookings; // array of booking objects
        this.rate = rate; // int price in cents
        this.discount = discount; // int percentage
      }
    
    dateArray(startDate, endDate){
        let start = new Date(startDate)
        let end = new Date(endDate)
        let dateArray = []
    
        while (start <= end) {
            // console.log(start)
            dateArray.push(new Date(start).toISOString().slice(0, 10));
            start = new Date(start.setDate(start.getDate() + 1)) 
        }
        return dateArray
        }

    isOccupied(date){
        // console.log(date, this.bookings);
        for(let booking of this.bookings){
            // console.log(booking);
            // console.log(date >= booking.checkIn, date < booking.checkOut);
            if(date >= booking.checkIn && date < booking.checkOut){
                // console.log('RETURNING TRUE');
                return true;
            }
        }
        // console.log('RETURNING FALSE');
        return false;
    }
    
    occupancyPercentage(startDate, endDate){
        const dates = this.dateArray(startDate, endDate);
        console.log(dates)
        console.log(dates.length)
        let daysOccupied = [];
        let daysOff = [];
        for(let date of dates) {
            console.log(date)
            this.isOccupied(date) ? daysOccupied.push('+1 occupied') : daysOff.push('+1 off');
            console.log(this.isOccupied(date))
        }
        let totalDaysOcuppied = daysOccupied.length;
        let totalDaysOff = daysOff.length;
        let totalDays = totalDaysOcuppied + totalDaysOff;
        let result = totalDaysOcuppied * 100 / totalDays;
        console.log(totalDays)
        console.log(daysOff.length)
        console.log(result)
        return Math.round(result)
    }
}

// Methods:
// get fee() returns the fee, including discounts on room and booking

class Booking {
    constructor({ name, email, checkIn, checkOut, discount, room }) {
        this.name = name; // string
        this.email = email; // string
        this.checkIn = checkIn; // date
        this.checkOut = checkOut; // date
        this.discount = discount; // int percentage
        this.room = room; // a room object
      }

    get fee(){

    }
}


// También vamos a crear las siguientes funciones:
// totalOccupancyPercentage(rooms, startDate, endDate) returns the total occupancy percentage across all rooms in the array
// availableRooms(rooms, startDate, endDate) returns all rooms in the array that are not occupied for the entire duration
// Nuestras clases y funciones estarán en el archivo index.js, y escribiremos otro archivo index.test.js
// Escribiremos los tests primero, con jest, metiendo datos ficticios en las funciones y clases y calculando los resultados correctos a mano.
// Escribimos un test por cada caso, no cada función / método. E.g.

function totalOccupancyPercentage(rooms, startDate, endDate){

}

function availableRooms(rooms, startDate, endDate){

}

module.exports = { Room, Booking, totalOccupancyPercentage, availableRooms };