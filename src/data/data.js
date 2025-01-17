export const preferredTime = [
    'Early Morning (Before 9am)',
    'Morning (9am - noon)',
    'Afternoon (Noon - 4pm)',
    'Evening (After 4pm)',
]

export const genders = [
    'No Preference', 'Male', 'Female'
]

export const searchResults = [
    {
        name: "Katherine Carroll, DO",
        career: "Primary Care Doctor",
        address: "52087 Toney Neck Suite 296",
        rating: "5.00",
        reviewsCount: "1M+",
        avartarText: "Dyson, and 3+ insurance accepted",
        liked: true,
        bookedInThePast: false,
        hasAppointment: true,
        img: '/images/img3.png',
        showDate: false,
        showTime: false,
    },
    {
        name: "Steven Weiner, MD",
        career: "Primary Care Doctor",
        address: "52087 Toney Neck Suite 296",
        rating: "4.92",
        reviewsCount: 99,
        avartarText: "Dyson, and 3+ insurance accepted",
        liked: false,
        bookedInThePast: true,
        hasAppointment: false,
        img: '/images/img4.png',
        showDate: true,
        showTime: false,
        cantBook: true,
    },
    {
        name: "DR. Anesa Dahly",
        career: "Primary Care Doctor",
        address: "52087 Toney Neck Suite 296",
        rating: "5.00",
        reviewsCount: 162,
        avartarText: "Dyson, and 3+ insurance accepted",
        liked: true,
        bookedInThePast: false,
        hasAppointment: false,
        img: '/images/img1.png',
        showDate: true,
        showTime: true,
    },
    {
        name: "Olivia Rhyne",
        career: "Primary Care Doctor",
        address: "52087 Toney Neck Suite 296",
        rating: "3.62",
        reviewsCount: 59,
        avartarText: "Dyson, and 3+ insurance accepted",
        liked: false,
        bookedInThePast: false,
        hasAppointment: false,
        img: '',
        showDate: true,
        showTime: false,
        cantBook: true,
    }
];

export const visitReasons = [
    { value: 'anxiety', label: 'Anxiety' },
    { value: 'alcoholism', label: 'Alcoholism' },
    { value: 'depression', label: 'Depression' },
    { value: 'stress', label: 'Stress' },
];

export const specialties = [
    { value: 'addicted', label: 'Addicted' },
    { value: 'psychology', label: 'Psychology' },
]

export const languageSpoken = [
    { value: 'english', label: 'English' },
    { value: 'deutsch', label: 'Deutsch' },
    { value: 'french', label: 'French' },
    { value: 'chinese', label: 'Chinese' },
]

export const dateNdTime = [
    { date: "8", day: "MON", time: ['8:00 AM'] },
    { date: "9", day: "TUE", time: ['8:00 AM','8:20 AM','9:00 AM','9:30 AM','10:15 AM','11:00 AM',] },
    { date: "10", day: "WED", time: ['8:00 AM','8:20 AM','9:00 AM','9:30 AM','10:15 AM','11:00 AM',] },
    { date: "11", day: "THU", time: ['-','8:20 AM','9:00 AM'] },
    { date: "12", day: "FRI", time: ['8:00 AM','-','9:00 AM'] },
    { date: "13", day: "SAT", time: [] },
    { date: "14", day: "SUN", time: [] },
]