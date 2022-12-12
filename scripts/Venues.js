import { getVenues } from "./database.js"
const venues = getVenues()

import { getBands } from "./database.js"
const bands = getBands()

import { getBookings } from "./database.js"
const bookings = getBookings()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    html += "</ul>"
    return html
}


const getMatchingBand = (currentBooking) => {
    let currentBand = "This year's lineup includes "
    for (const band of bands) {
        for (const booking of currentBooking)
        if (booking.bandId === band.id) {
            currentBand += `${band.name}, `
        }
    }
    return currentBand
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {

            const [, venueId] = itemClicked.id.split("--")

            const getMatchingBooking = (venue) => {
                let currentBooking = []
                for (const booking of bookings) {
                    if (booking.venueId === parseInt(venueId)) {
                        currentBooking.push(booking)
                    }
                }
                return currentBooking
            }


            for (const venue of venues) {
                if (parseInt(venueId) === venue.id) {
                    const currentBooking = getMatchingBooking(venue)
                    const currentBand = getMatchingBand(currentBooking)
                    window.alert(`${currentBand}`)
                }
            }
        }
    }
)