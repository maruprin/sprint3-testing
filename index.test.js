
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

  test('get Fee() discounts add half price', () => {
    let room = new Room({name: 'SkyBlue',bookings: [], rate: 20000, discount: 20})
    let booking = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 30, room: room})
    
    room.bookings = [booking];
    expect(booking.getFee()).toBe(10000)
  })

  test('get Fee() without discount, return the same price', () => {
    let room = new Room({name: 'SkyBlue',bookings: [], rate: 30000, discount: 0})
    let booking = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 0, room: room})
    
    room.bookings = [booking];
    expect(booking.getFee()).toBe(30000)
  })

  test('get Fee() the discount is 100%', () => {
    let room = new Room({name: 'SkyBlue',bookings: [], rate: 15000, discount: 40})
    let booking = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 60, room: room})
    
    room.bookings = [booking];
    expect(booking.getFee()).toBe(0)
  })

  test('get Fee() roomDiscount is 0', () => {
    let room = new Room({name: 'SkyBlue',bookings: [], rate: 50000, discount: 0})
    let booking = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 40, room: room})
    
    room.bookings = [booking];
    expect(booking.getFee()).toBe(30000)
  })

  test('get Fee() bookingDiscount is 0', () => {
    let room = new Room({name: 'SkyBlue',bookings: [], rate: 25000, discount: 20})
    let booking = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 0, room: room})
    
    room.bookings = [booking];
    expect(booking.getFee()).toBe(20000)
  })

  test('get Fee() the discount is more than 100%', () => {
    let room = new Room({name: 'SkyBlue',bookings: [], rate: 15000, discount: 60})
    let booking = new Booking({name: 'Antonella', email: 'antito@mymail.com', checkIn: '2022-01-10', checkOut: '2022-01-15', discount: 80, room: room})
    
    room.bookings = [booking];
    expect(booking.getFee()).toBe(0)
  })
 
  //tests totalOccupancyPercentage()

  test('totalOccupancyPercentage()', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})
    let room3 = new Room({name: 'Amapola',bookings: [], rate: 10000, discount: 10})
    let booking1 = new Booking({name: 'Julieta', email: 'juliet@mymail.com', checkIn: '2022-01-01', checkOut: '2022-01-15', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Hector', email: 'tito@mymail.com', checkIn: '2022-01-20', checkOut: '2022-01-29', discount: 80, room: room2})
    let booking3 = new Booking({name: 'Laura', email: 'lauri@mymail.com', checkIn: '2022-01-02', checkOut: '2022-01-09', discount: 80, room: room3})
    
    room1.bookings = [booking1];
    room2.bookings = [booking2];
    room3.bookings = [booking3];

    let startDate = '2022-01-13';
    let endDate = '2022-01-29';


    expect(totalOccupancyPercentage([room1,room2,room3],startDate,endDate)).toBe(22)
  })

  test('totalOccupancyPercentage() occupied 100%', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})
    let room3 = new Room({name: 'Amapola',bookings: [], rate: 10000, discount: 10})
    let booking1 = new Booking({name: 'Julieta', email: 'juliet@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Hector', email: 'tito@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room2})
    let booking3 = new Booking({name: 'Laura', email: 'lauri@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room3})
    
    room1.bookings = [booking1];
    room2.bookings = [booking2];
    room3.bookings = [booking3];

    let startDate = '2022-09-01';
    let endDate = '2022-09-22';


    expect(totalOccupancyPercentage([room1,room2,room3],startDate,endDate)).toBe(100)
  })

  test('totalOccupancyPercentage() occupied 0%', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})
    let room3 = new Room({name: 'Amapola',bookings: [], rate: 10000, discount: 10})
    let booking1 = new Booking({name: 'Julieta', email: 'juliet@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Hector', email: 'tito@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room2})
    let booking3 = new Booking({name: 'Laura', email: 'lauri@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room3})
    
    room1.bookings = [booking1];
    room2.bookings = [booking2];
    room3.bookings = [booking3];

    let startDate = '2022-08-01';
    let endDate = '2022-08-10';


    expect(totalOccupancyPercentage([room1,room2,room3],startDate,endDate)).toBe(0)
  })

  test('totalOccupancyPercentage() occupied 50%', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})

    let booking1 = new Booking({name: 'Julieta', email: 'juliet@mymail.com', checkIn: '2022-04-01', checkOut: '2022-04-13', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Hector', email: 'tito@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room2})

    room1.bookings = [booking1];
    room2.bookings = [booking2];
    
    let startDate = '2022-04-01';
    let endDate = '2022-04-12';


    expect(totalOccupancyPercentage([room1,room2],startDate,endDate)).toBe(50)
  })

  // tests availableRooms()

  test('availableRooms() all available', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})
    let room3 = new Room({name: 'Amapola',bookings: [], rate: 10000, discount: 10})
    let booking1 = new Booking({name: 'Julieta', email: 'juliet@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Hector', email: 'tito@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room2})
    let booking3 = new Booking({name: 'Laura', email: 'lauri@mymail.com', checkIn: '2022-09-01', checkOut: '2022-09-23', discount: 80, room: room3})
    
    room1.bookings = [booking1];
    room2.bookings = [booking2];
    room3.bookings = [booking3];

    let startDate = '2022-08-01';
    let endDate = '2022-08-10';


    expect(availableRooms([room1,room2,room3],startDate,endDate)).toBe(3)
  })

  test('availableRooms() all complete', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})
    let room3 = new Room({name: 'Amapola',bookings: [], rate: 10000, discount: 10})
    let booking1 = new Booking({name: 'Julieta', email: 'juliet@mymail.com', checkIn: '2022-06-01', checkOut: '2022-06-10', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Hector', email: 'tito@mymail.com', checkIn: '2022-06-10', checkOut: '2022-06-20', discount: 80, room: room2})
    let booking3 = new Booking({name: 'Laura', email: 'lauri@mymail.com', checkIn: '2022-06-20', checkOut: '2022-06-30', discount: 80, room: room3})
    
    room1.bookings = [booking1];
    room2.bookings = [booking2];
    room3.bookings = [booking3];

    let startDate = '2022-06-05';
    let endDate = '2022-06-25';


    expect(availableRooms([room1,room2,room3],startDate,endDate)).toBe(0)
  })

  test('availableRooms() all complete', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})
    let room3 = new Room({name: 'Amapola',bookings: [], rate: 10000, discount: 10})
    let booking1 = new Booking({name: 'Catalina', email: 'cata@mymail.com', checkIn: '2022-03-11', checkOut: '2022-03-18', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Camila', email: 'cami@mymail.com', checkIn: '2022-03-16', checkOut: '2022-03-25', discount: 80, room: room2})
    let booking3 = new Booking({name: 'Julian', email: 'julay@mymail.com', checkIn: '2022-02-04', checkOut: '2022-02-09', discount: 80, room: room3})
    
    room1.bookings = [booking1];
    room2.bookings = [booking2];
    room3.bookings = [booking3];

    let startDate = '2022-03-16';
    let endDate = '2022-03-19';


    expect(availableRooms([room1,room2,room3],startDate,endDate)).toBe(1)
  })

  test('availableRooms() all complete', () => {
    let room1 = new Room({name: 'Magnolia',bookings: [], rate: 15000, discount: 40})
    let room2 = new Room({name: 'Jazmin',bookings: [], rate: 20000, discount: 30})
    let room3 = new Room({name: 'Amapola',bookings: [], rate: 10000, discount: 10})
    let booking1 = new Booking({name: 'Catalina', email: 'cata@mymail.com', checkIn: '2022-03-11', checkOut: '2022-03-18', discount: 80, room: room1})
    let booking2 = new Booking({name: 'Camila', email: 'cami@mymail.com', checkIn: '2022-03-16', checkOut: '2022-03-25', discount: 80, room: room2})
    let booking3 = new Booking({name: 'Julian', email: 'julay@mymail.com', checkIn: '2022-02-04', checkOut: '2022-02-09', discount: 80, room: room3})
    
    room1.bookings = [booking1];
    room2.bookings = [booking2];
    room3.bookings = [booking3];

    let startDate = '2022-02-05';
    let endDate = '2022-02-10';


    expect(availableRooms([room1,room2,room3],startDate,endDate)).toBe(2)
  })