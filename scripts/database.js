const database = {
    Bands: [{
        id: 1,
        name: "Coin",
        members: 3,
        genre: "Indie Pop",
        yearFormed: 2012
    },
    {
        id: 2,
        name: "Tame Impala",
        members: 1,
        genre: "Psychedelic Pop",
        yearFormed: 2007
    },
    {
        id: 3,
        name: "Broods",
        members: 2,
        genre: "Indie Pop",
        yearFormed: 2013
    },
    {
        id: 4,
        name: "Mt Joy",
        members: 5,
        genre: "Alt Rock",
        yearFormed: 2016
    }
    ],
    Venues: [{
        id: 1,
        name: "Mercy Lounge",
        address: "1 Cannery Row, Nashville, TN 37012",
        size: 1500,
        occupancy: 250
    },
    {
        id: 2,
        name: "Exit In",
        address: "180 Elliston Pl, Nashville, TN 37017",
        size: 600,
        occupancy: 100
    },
    {
        id: 3,
        name: "Basement East",
        address: "420 Woodland St, Nashville, TN 37011",
        size: 1200,
        occupancy: 200
    }
    ],
    Bookings: [{
        id: 1,
        bandId: 4,
        venueId: 1,
        date: "12 / 31 / 2023"
    },
    {
        id: 2,
        bandId: 2,
        venueId: 3,
        date: "9 / 15 / 2022"
    },
    {
        id: 3,
        bandId: 1,
        venueId: 1,
        date: "5 / 20 / 2023"
    },
    {
        id: 4,
        bandId: 2,
        venueId: 2,
        date: "7 / 28 / 2009"
    },
    {
        id: 5,
        bandId: 2,
        venueId: 1,
        date: "3/6/2023"
    }]
}

export const getBands = () => {
    return database.Bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.Venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.Bookings.map(booking => ({ ...booking }))
}