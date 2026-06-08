export const categories = [
  { id: 'all', name: 'All Categories', icon: 'all' },
  { id: 'cab-chassis', name: 'Cab Chassis', icon: 'cab_chassis' },
  { id: 'tipper', name: 'Tipper', icon: 'tipper' },
  { id: 'prime-mover', name: 'Prime Mover', icon: 'prime_mover' },
  { id: 'tray-truck', name: 'Tray Truck', icon: 'tray_truck' },
  { id: 'semi-trailer', name: 'Semi Trailer', icon: 'semi_trailer' },
  { id: 'bus', name: 'Bus', icon: 'bus' }
];

export const makes = [
  'Isuzu',
  'Hino',
  'Fuso',
  'Hyundai',
  'Scania',
  'Kenworth',
  'Volvo'
];

export const states = [
  'NSW',
  'VIC',
  'QLD',
  'WA',
  'SA',
  'TAS',
  'NT',
  'ACT'
];

export const mockTrucks = [
  {
    id: 1,
    year: 2025,
    make: 'Hyundai',
    model: 'EX6 STDMWB',
    title: '2025 Hyundai EX6 STDMWB',
    category: 'cab-chassis',
    categoryName: 'Cab Chassis',
    price: 71131,
    status: 'Dealer new',
    odometer: 100, // km
    transmission: 'Automatic',
    drivetrain: 'RWD',
    gvm: '6,500 kg',
    power: '160 hp',
    location: 'Brisbane',
    state: 'QLD',
    description: 'Brand new 2025 Hyundai EX6 Standard Medium Wheelbase Cab Chassis. Featuring state of the art safety suite including AEBS, Lane Departure Warning, and Electronic Stability Control. Premium comfortable cabin with high definition touch screen display and smartphone mirroring. Dual rear wheels and robust chassis frame ready for any custom tray or body. Full manufacturer 3-year warranty included.',
    images: [
      '/assets/hyundai_ex6_1.png',
      '/assets/hyundai_ex6_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'Brisbane Hyundai Trucks',
      type: 'Dealer',
      phone: '1300 555 123',
      rating: 4.8
    }
  },
  {
    id: 2,
    year: 2025,
    make: 'Fuso',
    model: 'Canter 615 Tipper',
    title: '2025 Fuso Canter 615 Tipper',
    category: 'tipper',
    categoryName: 'Tipper',
    price: 66846,
    status: 'Dealer new',
    odometer: 43,
    transmission: 'Manual',
    drivetrain: 'RWD',
    gvm: '6,000 kg',
    power: '110 hp',
    location: 'Sydney',
    state: 'NSW',
    description: '2025 Fuso Canter 615 factory steel tipper. Features a 2.0-cubic meter drop side steel tipper body. Lane Departure Warning System, Active Emergency Braking, and Hill Start Assist. Comfortable 3-seater cabin. Excellent payload capacity and tight turning circle making it perfect for landscaping, residential construction, and tight job sites. Ready for immediate delivery.',
    images: [
      '/assets/fuso_canter_1.png',
      '/assets/fuso_canter_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'Sydney Truck & Machinery',
      type: 'Dealer',
      phone: '02 9876 5432',
      rating: 4.6
    }
  },
  {
    id: 3,
    year: 2024,
    make: 'Scania',
    model: 'R540 6x4',
    title: '2024 Scania R540 Prime Mover',
    category: 'prime-mover',
    categoryName: 'Prime Mover',
    price: 310000,
    status: 'Dealer used',
    odometer: 125000,
    transmission: 'Automatic',
    drivetrain: '6x4',
    gvm: '26,500 kg',
    power: '540 hp',
    location: 'Melbourne',
    state: 'VIC',
    description: 'Extremely clean 2024 Scania R540 6x4 Euro 6 Prime Mover. Single sleeper cab, Scania Opticruise transmission, retarder, disc brakes, lane keep assist, adaptive cruise control. Fully maintained by Scania under service contract since new. Excellent fuel efficiency and exceptional driver comfort. Suit new buyer looking to avoid long factory wait times.',
    images: [
      '/assets/scania_r540_1.png',
      '/assets/scania_r540_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'Victoria Commercial Vehicles',
      type: 'Dealer',
      phone: '03 9345 6789',
      rating: 4.9
    }
  },
  {
    id: 4,
    year: 2023,
    make: 'Hino',
    model: '300 616 Tray',
    title: '2023 Hino 300 616 Tray',
    category: 'tray-truck',
    categoryName: 'Tray Truck',
    price: 58000,
    status: 'Dealer used',
    odometer: 35000,
    transmission: 'Automatic',
    drivetrain: 'RWD',
    gvm: '5,500 kg',
    power: '150 hp',
    location: 'Gold Coast',
    state: 'QLD',
    description: '2023 Hino 300 Series 616 medium wheelbase alloy tray truck. Fully automatic transmission, Hino SmartSafe safety suite (Pre-Collision System with Pedestrian Detection, Lane Departure Warning). Heavy duty 4.5m alloy tray with drop sides. Tow bar fitted. immaculate condition inside and out, low kilometers, and remainder of manufacturer 5-year warranty.',
    images: [
      '/assets/hino_300_1.png',
      '/assets/hino_300_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'Gold Coast Hino Dealers',
      type: 'Dealer',
      phone: '07 5544 3322',
      rating: 4.7
    }
  },
  {
    id: 5,
    year: 2022,
    make: 'Kenworth',
    model: 'T610 SAR',
    title: '2022 Kenworth T610 Prime Mover',
    category: 'prime-mover',
    categoryName: 'Prime Mover',
    price: 385000,
    status: 'Private seller',
    odometer: 240000,
    transmission: 'Manual',
    drivetrain: '6x4',
    gvm: '26,000 kg',
    power: '600 hp',
    location: 'Perth',
    state: 'WA',
    description: 'Owner-driver vehicle since new, exceptionally well looked after 2022 Kenworth T610 SAR. Powered by Cummins X15 at 600hp, 18-speed Eaton manual transmission, Meritor axles. 36-inch sleeper cab, icepack bunk cooler, dual exhaust stacks, stainless steel guards. full service history available. Only done light single trailer work. Selling due to retirement.',
    images: [
      '/assets/kenworth_t610_1.png',
      '/assets/kenworth_t610_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'David Miller',
      type: 'Private',
      phone: '0412 345 678',
      rating: 5.0
    }
  },
  {
    id: 6,
    year: 2021,
    make: 'Isuzu',
    model: 'NLR 45-150 Tipper',
    title: '2021 Isuzu NLR 45-150 Tipper',
    category: 'tipper',
    categoryName: 'Tipper',
    price: 54900,
    status: 'Dealer used',
    odometer: 85000,
    transmission: 'Manual',
    drivetrain: 'RWD',
    gvm: '4,500 kg',
    power: '150 hp',
    location: 'Melbourne',
    state: 'VIC',
    description: 'Can be driven on a standard car license! 2021 Isuzu NLR 45-150 factory tipper. 5-speed manual, diesel engine. Steel tipper body with two-way tail gate, drop sides. Fitted with lockable toolboxes between cab and tipper. Perfect vehicle for tradies, builders, or landscapers wanting to upgrade from a standard utility vehicle.',
    images: [
      '/assets/isuzu_nlr_1.png',
      '/assets/isuzu_nlr_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'Melbourne Truck Hub',
      type: 'Dealer',
      phone: '03 9988 7766',
      rating: 4.5
    }
  },
  {
    id: 7,
    year: 2025,
    make: 'Scania',
    model: 'R660 6x4',
    title: '2025 Scania R660 Prime Mover',
    category: 'prime-mover',
    categoryName: 'Prime Mover',
    price: 395000,
    status: 'Dealer new',
    odometer: 5000,
    transmission: 'Automatic',
    drivetrain: '6x4',
    gvm: '26,500 kg',
    power: '660 hp',
    location: 'Sydney',
    state: 'NSW',
    description: 'Demo model Scania R660 V8 Prime Mover. Ultimate premium specification. 660 horsepower V8 Euro 6 engine. Scania Retarder and Opticruise transmission. Large Sleeper Cab with premium leather interior, microwave, fridge, and luxury driver seat. Advanced driver assistance package, LED headlamps, alloy wheels. Save on standard lead times.',
    images: [
      '/assets/scania_r660_1.png',
      '/assets/scania_r660_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'Sydney Scania Center',
      type: 'Dealer',
      phone: '02 8765 4321',
      rating: 4.8
    }
  },
  {
    id: 8,
    year: 2024,
    make: 'Hino',
    model: '700 FS2848 Tipper',
    title: '2024 Hino 700 FS2848 Tipper',
    category: 'tipper',
    categoryName: 'Tipper',
    price: 220000,
    status: 'Dealer used',
    odometer: 12000,
    transmission: 'Automatic',
    drivetrain: '6x4',
    gvm: '28,300 kg',
    power: '480 hp',
    location: 'Townsville',
    state: 'QLD',
    description: 'Virtually brand new 2024 Hino 700 Series FS2848 6x4 Tipper. Fitted with a heavy duty Hardox steel tipper body. Powered by 13L Hino diesel engine producing 480hp, coupled with ZF 16-speed automated manual transmission. Full safety pack, digital dash, reverse camera. Outstanding commercial tipper ready for immediate contract work.',
    images: [
      '/assets/hino_700_1.png',
      '/assets/hino_700_2.png',
      '/assets/truck_interior.png'
    ],
    seller: {
      name: 'North Queensland Hino',
      type: 'Dealer',
      phone: '07 4777 8888',
      rating: 4.7
    }
  }
];

export const mockReviews = [
  {
    id: 1,
    title: 'Scania R660 2026 Review',
    image: '/assets/scania_r660_1.png',
    date: 'Jun 3rd',
    author: 'Howard Shanks',
    badge: 'REVIEW'
  },
  {
    id: 2,
    title: 'Hino 700 Series 2026 Review',
    image: '/assets/hino_700_1.png',
    date: 'Jun 2nd',
    author: 'Cobey Bartels',
    badge: 'REVIEW'
  },
  {
    id: 3,
    title: 'Scania Super 11 2026 Review',
    image: '/assets/scania_r540_1.png',
    date: 'May 25th',
    author: 'Howard Shanks',
    badge: 'REVIEW'
  }
];

export const mockNews = [
  {
    id: 1,
    title: 'New Zero-Emission Trucks Heading to Australia',
    image: '/assets/hyundai_ex6_1.png',
    date: 'Jun 1st',
    author: 'TruckSales Editors',
    badge: 'NEWS'
  },
  {
    id: 2,
    title: 'Heavy Vehicle Safety Standard Updates Announced',
    image: '/assets/kenworth_t610_1.png',
    date: 'May 28th',
    author: 'Rebecca Miller',
    badge: 'NEWS'
  },
  {
    id: 3,
    title: 'Truck Show 2026: Highlights & Best Releases',
    image: '/assets/fuso_canter_1.png',
    date: 'May 24th',
    author: 'Cobey Bartels',
    badge: 'NEWS'
  }
];
