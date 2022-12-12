import { getBands } from "./database.js"
const bands = getBands()

import { getVenues } from "./database.js"
const venues = getVenues()

import { getBookings } from "./database.js"
const bookings = getBookings()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands){
        html += `<li id="band--${band.id}">${band.name}</li>`
    }
    html += "</ul>"
    return html
}

const getMatchingVenue = (currentBookings) => {
    let currentVenue = "Catch them at "
    for (const venue of venues) {
        for (const booking of currentBookings)
        if (booking.venueId === venue.id) {
            currentVenue += `${venue.name}, `
        }
    }
    return currentVenue
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {

            const [, bandId] = itemClicked.id.split("--")

            const getMatchingBookings = (band) => {
                let currentBookings = []
                for (const booking of bookings) {
                    if (booking.bandId === parseInt(bandId)) {
                        currentBookings.push(booking)
                    }
                }
                return currentBookings
            }


            for (const band of bands) {
                if (parseInt(bandId) === band.id) {
                    const currentBookings = getMatchingBookings(band)
                    const currentVenue = getMatchingVenue(currentBookings)
                    window.alert(`${currentVenue}`)
                }
            }
        }
    }
)