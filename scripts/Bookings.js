import { getBookings, getBands, getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

const getBandName = (booking, allBands) => {
    let currentBand = ""
    for (const band of allBands) {
        if (band.id === booking.bandId) {
            currentBand = band
        }
    }
    return currentBand
}

const getVenueName = (booking, allVenues) => {
    let currentVenue = ""
    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            currentVenue = venue
        }
    }
    return currentVenue
}

export const Bookings = () => {
    let html = "<ul>"
    for (const booking of bookings) {
        const band = getBandName(booking, bands)
        const venue = getVenueName(booking, venues)

        html += `<li id="booking--${booking.id}"> ${band.name} are playing at ${venue.name} on ${booking.date} </li>`
    }
    html += "</ul>"
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")){

            const[,bookingId] = itemClicked.id.split("--")

const currentBooking = () =>{
   let thisBooking = ""
   for (const booking of bookings){
    if (booking.id === parseInt(bookingId)){
thisBooking = booking
    }
}
    return thisBooking
}

            for (const band of bands){
              let thisBooking = currentBooking() 
              if (thisBooking.bandId === band.id){
                window.alert(`${band.name}, ${band.genre}, formed in ${band.yearFormed}, ${band.members} band members`)
              }
            }
        }
    }
)