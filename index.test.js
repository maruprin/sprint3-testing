
const {
    Room,
    Booking,
    totalOccupancyPercentage,
    availableRooms,
  } = require("./index");
 
  //tests isOccupied()
  test('room is occupied, search false, after bookings', () => {
    const room = new Room({name: 'Pink',bookings: [], rate: 1000, discount: 30})
    const booking1 = new Booking({name: 'Julia', email: 'julia@mymail.com', checkIn: '2022-10-01', checkOut: '2022-10-20', discount: 20, room: room})
    const booking2 = new Booking({name: 'Alberto', email: 'albert@mymail.com', checkIn: '2022-11-13', checkOut: '2022-11-20', discount: 30, room: room})
    room.bookings = [booking1, booking2];
    expect(room.isOccupied('2022-12-01')).toBeFalsy()
    
  })

  test('room is occupied, search false, before bookings', () => {
    const room = new Room({name: 'Pink',bookings: [], rate: 1000, discount: 30})
    const booking1 = new Booking({name: 'Julia', email: 'julia@mymail.com', checkIn: '2022-10-01', checkOut: '2022-10-20', discount: 20, room: room})
    const booking2 = new Booking({name: 'Alberto', email: 'albert@mymail.com', checkIn: '2022-11-13', checkOut: '2022-11-20', discount: 30, room: room})
    room.bookings = [booking1, booking2];
    expect(room.isOccupied('2022-09-01')).toBeFalsy()
  })

  test('room is occupied, search false, just in checkOut', () => {
    const room = new Room({name: 'Pink',bookings: [], rate: 1000, discount: 30})
    const booking1 = new Booking({name: 'Julia', email: 'julia@mymail.com', checkIn: '2022-10-01', checkOut: '2022-10-20', discount: 20, room: room})
    const booking2 = new Booking({name: 'Alberto', email: 'albert@mymail.com', checkIn: '2022-11-13', checkOut: '2022-11-20', discount: 30, room: room})
    room.bookings = [booking1, booking2];
    expect(room.isOccupied('2022-10-20')).toBeFalsy()
  })

  test('room is occupied, search true, in bookings', () => {
    const room = new Room({name: 'Pink',bookings: [], rate: 1000, discount: 30})
    const booking1 = new Booking({name: 'Julia', email: 'julia@mymail.com', checkIn: '2022-10-01', checkOut: '2022-10-20', discount: 20, room: room})
    const booking2 = new Booking({name: 'Alberto', email: 'albert@mymail.com', checkIn: '2022-11-13', checkOut: '2022-11-20', discount: 30, room: room})
    room.bookings = [booking1, booking2];
    expect(room.isOccupied('2022-10-06')).toBe(true)

  })
  
  test('room is occupied, search true, in bookings', () => {
    const room = new Room({name: 'Pink',bookings: [], rate: 1000, discount: 30})
    const booking1 = new Booking({name: 'Julia', email: 'julia@mymail.com', checkIn: '2022-10-01', checkOut: '2022-10-20', discount: 20, room: room})
    const booking2 = new Booking({name: 'Alberto', email: 'albert@mymail.com', checkIn: '2022-11-13', checkOut: '2022-11-20', discount: 30, room: room})
    room.bookings = [booking1, booking2];
    expect(room.isOccupied('2022-11-15')).toBe(true)
 
  })
 
  test('room is occupied, search true, just in ckeckin', () => {
    const room = new Room({name: 'Pink',bookings: [], rate: 1000, discount: 30})
    const booking1 = new Booking({name: 'Julia', email: 'julia@mymail.com', checkIn: '2022-10-01', checkOut: '2022-10-20', discount: 20, room: room})
    const booking2 = new Booking({name: 'Alberto', email: 'albert@mymail.com', checkIn: '2022-11-13', checkOut: '2022-11-20', discount: 30, room: room})
    room.bookings = [booking1, booking2];
    expect(room.isOccupied('2022-11-13')).toBe(true)
 
  })

  //tests occupancyPercentage()

test('occupancyPercentage', () => {
    let room1 = new Room({name: 'SkyBlue',bookings: [], rate: 200, discount: 10})
    let booking1 = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 30, room: room1})
    let booking2 = new Booking({name: 'Lorenzo', email: 'lolo@mymail.com', checkIn: '2022-05-01', checkOut: '2022-05-10', discount: 20, room: room1})
    room1.bookings = [booking1, booking2];
    expect(room1.occupancyPercentage('2022-01-02', '2022-01-12')).toBe(27)
  })

  test('occupancyPercentage', () => {
    let room1 = new Room({name: 'SkyBlue',bookings: [], rate: 200, discount: 10})
    let booking1 = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 30, room: room1})
    let booking2 = new Booking({name: 'Lorenzo', email: 'lolo@mymail.com', checkIn: '2022-05-01', checkOut: '2022-05-10', discount: 20, room: room1})
    room1.bookings = [booking1, booking2];
    expect(room1.occupancyPercentage('2022-01-01', '2022-01-10')).toBe(10)
  })


  test('occupancyPercentage', () => {
    let room1 = new Room({name: 'SkyBlue',bookings: [], rate: 200, discount: 10})
    let booking1 = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 30, room: room1})
    let booking2 = new Booking({name: 'Lorenzo', email: 'lolo@mymail.com', checkIn: '2022-05-01', checkOut: '2022-05-10', discount: 20, room: room1})
    room1.bookings = [booking1, booking2];
    expect(room1.occupancyPercentage('2022-05-05', '2022-05-24')).toBe(25)
  })

  // tests de getFee()

  