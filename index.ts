interface RoomInterface {
  name: string;
  bookings: Booking[];
  rate: number;
  discount: number;
}

interface BookingInterface {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  discount: number;
  room: Room;
}

class Room implements RoomInterface {
  name: string;
  bookings: Booking[];
  rate: number;
  discount: number;

  constructor({ name, bookings, rate, discount }: RoomInterface) {
    this.name = name; // string
    this.bookings = bookings; // array of booking objects
    this.rate = rate; // int price in cents
    this.discount = discount; // int percentage
  }

  dateArray(startDate: string, endDate: string): string[] {
    let start: Date = new Date(startDate);
    let end: Date = new Date(endDate);
    let dateArray: string[] = [];

    while (start <= end) {
      dateArray.push(new Date(start).toISOString().slice(0, 10));
      start.setDate(start.getDate() + 1);
    }
    return dateArray;
  }

  isOccupied(date): boolean {
    for (let booking of this.bookings) {
      if (date >= booking.checkIn && date < booking.checkOut) {
        return true;
      }
    }
    return false;
  }

  occupancyPercentage(startDate: string, endDate: string): number {
    const dates: string[] = this.dateArray(startDate, endDate);
    let daysOccupied: string[] = [];
    let daysOff: string[] = [];
    for (let date of dates) {
      this.isOccupied(date)
        ? daysOccupied.push("+1 occupied")
        : daysOff.push("+1 off");
    }
    let totalDaysOcuppied: number = daysOccupied.length;
    let totalDaysOff: number = daysOff.length;
    let totalDays: number = totalDaysOcuppied + totalDaysOff;
    let result: number = (totalDaysOcuppied * 100) / totalDays;
    return Math.round(result);
  }
}

class Booking implements BookingInterface {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  discount: number;
  room: Room;

  constructor({
    name,
    email,
    checkIn,
    checkOut,
    discount,
    room,
  }: BookingInterface) {
    this.name = name; // string
    this.email = email; // string
    this.checkIn = checkIn; // date
    this.checkOut = checkOut; // date
    this.discount = discount; // int percentage
    this.room = room; // a room object
  }

  getFee(): number {
    const price: number = this.room.rate;
    const discountRoom: number = (price * this.room.discount) / 100;
    const discountBooking: number = (price * this.discount) / 100;
    if (discountBooking + discountRoom < price) {
      return Math.round(price - (discountBooking + discountRoom));
    } else {
      return 0;
    }
  }
}

function totalOccupancyPercentage(
  rooms: Room[],
  startDate: string,
  endDate: string
): number {
  let totalOccupancy: number = 0;
  for (let room of rooms) {
    totalOccupancy +=
      room.occupancyPercentage(startDate, endDate) / rooms.length;
  }
  return Math.round(totalOccupancy);
}

function availableRooms(
  rooms: Room[],
  startDate: string,
  endDate: string
): number {
  let availableRooms: Room[] = [];
  for (let room of rooms) {
    if (room.occupancyPercentage(startDate, endDate) === 0) {
      availableRooms.push(room);
    }
  }
  return availableRooms.length;
}

export { Room, Booking, totalOccupancyPercentage, availableRooms };
