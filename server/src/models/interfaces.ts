export interface ApartmentsAttributes {
    id_apartment: number
    // id_price: number
    ap_number: number
    title: string
    floor: number
    room_number: number
    bath_number: number
    bed_number: number
    sofabed_number: number
    room_one_bed: string
    room_two_bed: string
    room_three_bed:string
    estar_bed: string
    property_type: string
    description: string
    // price_per_night: number
    images: string[]
    // rating?: number
    is_active: boolean
    max_guests: number
    min_nights:number
    weekly_discount: boolean
    monthly_discount: boolean
    allow_pets: boolean
    accessibility: boolean
    private_access: boolean
}

export interface ServicesAttributes {
    id: number
    name: string
    icon: string
}

export interface RentsAttributes {
    id_rent: number
    id_user?: number
    name: string
    surname: string
    phone: string
    mail: string
    cuit_dni: string
    id_apartment: number
    start_date: Date
    end_date: Date
    nights_number: number
    guests_number: number
    adults_number: number
    kids_number: number
    babies_number: number
    pets: boolean
    currency: string
    total_amount: number
    deposit: number
    exchange_rate: number
    deposit_amount: number
    balance_exchange_rate: number
    balance: number
    pre_viaje: boolean
    payment_status: boolean
    payment_date?: Date
    review_status: boolean
    creation_date: Date
    is_active: boolean
    source: string
    // bed_type
    room_one: string
    room_two: string
    room_three: string
    room_estar: string
    car: boolean
    car_plate: string
    booking_number: string
}

export interface UserAttributes {
    id_user: string
    name?: string
    surname?: string
    documento: string
    email: string
    address?: string
    number?: number
    date?: Date
    gender?: 'Male' | 'Female' | 'Other'
    image?: string
    is_active: boolean
}

export interface PriceAttributes {
    id_price: number
    id_apartment: number
    title: string
    // key_word: string
    // guests_number: number
    price_per_night_pesos: number
    price_per_night_dolar: number
    // start_date: Date
    // end_date: Date
    season: string
    // currency: string
}

export interface DiscountsAttributes {
    id_discount: number
    discount_type: string
}

export interface GuestsAttributes {
    pax_name: string
    pax_surname: string
    pax_dni: string
    id_rent: number
}