import { signal } from "@angular/core";

export interface Project {
  id: number;
  title: string;
  projectName: string;
  location: string;
  projectLocation: string;
  projectDuration: string;
  category: string;
  year: string;
  description: string;
  image: string;
  status: 'Completed' | 'Ongoing' | 'Planning';
  scopes?: string[],
  client: string;
  images?: string[];
}

export interface ProjectList {
  id: number;
  name: string;
  client: string;
  type: string;
  year: number;
}

export let projectsData = signal<Project[]>([
  {
    id: 1,
    title: 'STMM - MMTC Construction',
    projectName: 'STMM - MMTC Construction',
    location: 'Yogyakarta, Indonesia',
    projectLocation: 'Yogyakarta, Indonesia',
    projectDuration: '2023-2024',
    category: 'Commercial',
    year: '2023-2024',
    description: 'In the construction project of the STMM - MMTC Building (November 2023 – October 2024), Prakarsa served as a site engineer, responsible for managing work schedules, ensuring smooth construction progress, conducting daily evaluations, and preparing both shop drawings and as-built drawings.',
    image: '/images/project-portfolio/stmm_mmtc_1.png',
    status: 'Completed',
    scopes: [],
    client: 'PT. Modern Development',
    images: [
      '/images/project-portfolio/stmm_mmtc_1.png',
      '/images/project-portfolio/stmm_mmtc_2.jpeg',
      '/images/project-portfolio/stmm_mmtc_3.png',
      '/images/project-portfolio/stmm_mmtc_4.png',
      '/images/project-portfolio/stmm_mmtc_5.png',
      '/images/engineering_assessment.png'
    ],
  },
  {
    id: 2,
    title: 'Railway Station Infrastructure Structure Design',
    projectName: 'Railway Station Infrastructure Structure Design',
    location: 'Jakarta, Indonesia',
    projectLocation: 'Jakarta, Indonesia',
    projectDuration: '2023-2024',
    category: 'Infrastructure',
    year: '2023-2024',
    description: 'Prakarsa is an experienced structural engineering consultant specializing in building design, including strategic projects such as the new building development at Tanah Abang Station, Jakarta. From October 2023 to March 2024, Prakarsa was entrusted with the structural planning, which included structural calculations based on the architectural design and the preparation of efficient and economical Detailed Engineering Design (DED) drawings for both the superstructure and substructure.',
    image: '/images/project-portfolio/railway_station_infrastructure_design.png',
    status: 'Completed',
    scopes: [],
    client: 'Bali Resort Group',
    images: [
      "/images/project-portfolio/railway_station_infrastructure_design.png",
      "/images/project-portfolio/railway_station_infrastructure_design_2.png",
      "/images/project-portfolio/railway_station_infrastructure_design_3.png",
      "/images/project-portfolio/railway_station_infrastructure_design_4.png",
      "/images/project-portfolio/railway_station_infrastructure_design_5.png",
      "/images/project-portfolio/railway_station_infrastructure_design_6.png",
    ],
  },
  {
    id: 3,
    title: 'Bespoke Residential Unit, Renovation Project Construction',
    projectName: 'Bespoke Residential Unit, Renovation Project Construction',
    location: 'Yogyakarta, Indonesia',
    projectLocation: 'Yogyakarta, Indonesia',
    projectDuration: '2024',
    category: 'Residential',
    year: '2024',
    description: 'Large-scale industrial manufacturing facility with modern production lines and worker facilities.',
    image: '/images/project-portfolio/bespoke_residential_unit_2.jpeg',
    status: 'Completed',
    scopes: [],
    client: 'PT. Indo Manufacturing',
    images: [
      "/images/project-portfolio/bespoke_residential_unit_3.jpeg",
      "/images/project-portfolio/bespoke_residential_unit_1.jpeg",
      "/images/project-portfolio/bespoke_residential_unit_2.jpeg",
    ],
  },
  {
    id: 4,
    title: 'Al-Meena Mixed Use 9-Story Precast Building (Hotel, Residence, & Office)',
    projectName: 'Al-Meena Mixed Use 9-Story Precast Building (Hotel, Residence, & Office)',
    location: 'Yogyakarta, Indonesia',
    projectLocation: 'Yogyakarta, Indonesia',
    projectDuration: '2023',
    category: 'Commercial',
    year: '2023',
    description: 'Cable-stayed bridge connecting two major districts, designed to reduce traffic congestion.',
    image: '/images/project-portfolio/al_meena.jpeg',
    status: 'Ongoing',
    scopes: [],
    client: 'Ministry of Public Works',
    images: [
      '/images/project-portfolio/al_meena.jpeg',
    ]
  },
  {
    id: 5,
    title: 'Semarang-Demak Toll Road Construction',
    projectName: 'Semarang-Demak Toll Road Construction',
    location: 'Central Java',
    projectLocation: 'Central Java',
    projectDuration: '2022',
    category: 'Infrastructure',
    year: '2022',
    description: 'Multi-level shopping center with retail spaces, restaurants, and entertainment facilities.',
    image: '/images/project-portfolio/semarang_demak_toll_road.jpeg',
    status: 'Completed',
    scopes: [],
    client: 'Medan Development Corp',
    images: [
      '/images/project-portfolio/semarang_demak_toll_road.jpeg'
    ]
  },
  {
    id: 6,
    title: 'AstraWorld Call Center Building',
    projectName: 'AstraWorld Call Center Building',
    location: 'Semarang, Central Java',
    projectLocation: 'Semarang, Central Java',
    projectDuration: '2022',
    category: 'Commercial',
    year: '2022',
    description: 'In the construction project of the STMM - MMTC Building (November 2023 – October 2024), Prakarsa served as a site engineer, responsible for managing work schedules, ensuring smooth construction progress, conducting daily evaluations, and preparing both shop drawings and as-built drawings.',
    image: '/images/project-portfolio/astraworld_call_center_building.png',
    status: 'Completed',
    scopes: [],
    client: 'PT. Modern Development',
    images: [
      '/images/project-portfolio/astraworld_call_center_building.png'
    ]
  },
  {
    id: 7,
    title: 'Manohara Hotel',
    projectName: 'Manohara Hotel',
    location: 'Yogyakarta, Indonesia',
    projectLocation: 'Yogyakarta, Indonesia',
    projectDuration: '2020',
    category: 'Commercial',
    year: '2020',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/manohara_hotel.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/manohara_hotel.png',
    ]
  },
  {
    id: 8,
    title: 'South Java Railway Double Track Construction',
    projectName: 'South Java Railway Double Track Construction',
    location: 'Kebumen & Banyumas, Central Java',
    projectLocation: 'Kebumen & Banyumas, Central Java',
    projectDuration: '2019',
    category: 'Infrastructure',
    year: '2019',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/south_java_railway_double_track.jpeg',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/south_java_railway_double_track.jpeg',
    ]
  },
  {
    id: 9,
    title: 'KMTS Building - Precast Dept. of Civil & Enviro. Engineering UGM',
    projectName: 'KMTS Building - Precast Dept. of Civil & Enviro. Engineering UGM',
    location: 'Kebumen & Banyumas, Central Java',
    projectLocation: 'Kebumen & Banyumas, Central Java',
    projectDuration: '2019',
    category: 'Commercial',
    year: '2019',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/kmts_building.jpeg',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/kmts_building.jpeg',
    ]
  },
  {
    id: 10,
    title: 'Grha Multi Niaga',
    projectName: 'Grha Multi Niaga',
    location: 'Surabaya, East Java',
    projectLocation: 'Surabaya, East Java',
    projectDuration: '2023',
    category: 'Commercial',
    year: '2023',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/grha_multi_niaga.jpeg',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/grha_multi_niaga.jpeg'
    ]
  },
  {
    id: 11,
    title: 'Asanka Office Building',
    projectName: 'Asanka Office Building',
    location: 'Yogyakarta, Indonesia',
    projectLocation: 'Yogyakarta, Indonesia',
    projectDuration: '2021',
    category: 'Commercial',
    year: '2021',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/asanka_office_building.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/asanka_office_building.png',
    ]
  },
  {
    id: 12,
    title: "Residential Area De'Alba",
    projectName: "Residential Area De'Alba",
    location: 'Purwokerto, Central Java',
    projectLocation: 'Purwokerto, Central Java',
    projectDuration: '2019',
    category: 'Residential',
    year: '2019',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/residential_area_de_alba.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/residential_area_de_alba.png',
      '/images/project-portfolio/residential_area_de_alba_1.png',
      '/images/project-portfolio/residential_area_de_alba_2.png',
      '/images/project-portfolio/residential_area_de_alba_3.png',
    ]
  },
  {
    id: 13,
    title: "Brantas Abipraya - Malang Office",
    projectName: 'Brantas Abipraya - Malang Office',
    location: 'Malang, East Java',
    projectLocation: 'Malang, East Java',
    projectDuration: '2019',
    category: 'Commercial',
    year: '2019',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/brantas_abipraya_office.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/brantas_abipraya_office.png',
    ]
  },
  {
    id: 14,
    title: "Muaro - Pekanbaru Railway",
    projectName: 'Muaro - Pekanbaru Railway',
    location: 'Riau, West Sumatra',
    projectLocation: 'Riau, West Sumatra',
    projectDuration: '2016',
    category: 'Infrastructure',
    year: '2016',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/muaro_pekanbaru_railway.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/muaro_pekanbaru_railway.png'
    ]
  },
  {
    id: 15,
    title: "Sampta Magelang Municipal Sports Building",
    projectName: 'Sampta Magelang Municipal Sports Building',
    location: 'Magelang, Central Java',
    projectLocation: 'Magelang, Central Java',
    projectDuration: '2015',
    category: 'Commercial',
    year: '2015',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/sampta_magelang_municipal_sports_building.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/sampta_magelang_municipal_sports_building.png'
    ]
  },
  {
    id: 16,
    title: "Manado - Bitung Railway Track Design",
    projectName: 'Manado - Bitung Railway Track Design',
    location: 'North Sulawesi, Indonesia',
    projectLocation: 'North Sulawesi, Indonesia',
    projectDuration: '2015',
    category: 'Infrastructure',
    year: '2015',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/manado_bitung_railway.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/manado_bitung_railway.png'
    ]
  },
  {
    id: 17,
    title: "Rangkasbitung - Merak Railway Bridge Design",
    projectName: 'Rangkasbitung - Merak Railway Bridge Design',
    location: 'Banten, West Java',
    projectLocation: 'Banten, West Java',
    projectDuration: '2014',
    category: 'Infrastructure',
    year: '2014',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/rangkasbitung_merak_railway_bridge_design.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/rangkasbitung_merak_railway_bridge_design.png'
    ]
  },
  {
    id: 18,
    title: "Salman Al-Farisi Integrated Islamic Junior High School",
    projectName: 'Salman Al-Farisi Integrated Islamic Junior High School',
    location: 'Yogyakarta, Indonesia',
    projectLocation: 'Yogyakarta, Indonesia',
    projectDuration: '2014',
    category: 'Commercial',
    year: '2014',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/salman_al_farisi_jhs.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/salman_al_farisi_jhs.png'
    ]
  },
  {
    id: 19,
    title: "Ir. Soekarno Market Redesign",
    projectName: 'Ir. Soekarno Market Redesign',
    location: 'Sukoharjo, Central Java',
    projectLocation: 'Sukoharjo, Central Java',
    projectDuration: '2013',
    category: 'Commercial',
    year: '2013',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/ir_soekarno_market_redesign.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/ir_soekarno_market_redesign.png'
    ]
  },
  {
    id: 20,
    title: "Semarang - Solo Railway Double Track Design",
    projectName: 'Semarang - Solo Railway Double Track Design',
    location: 'Central Java',
    projectLocation: 'Central Java',
    projectDuration: '2014',
    category: 'Infrastructure',
    year: '2014',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/semarang_solo_railway_double_track_design.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      '/images/project-portfolio/semarang_solo_railway_double_track_design.png'
    ]
  },
  {
    id: 21,
    title: "Front One Hotel Pamekasan & Gresik Construction",
    projectName: 'Front One Hotel Pamekasan & Gresik Construction',
    location: 'Pamekasan & Gresik, East Java',
    projectLocation: 'Pamekasan & Gresik, East Java',
    projectDuration: '2018',
    category: 'Commercial',
    year: '2018',
    description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
    image: '/images/project-portfolio/front_one_hotel.png',
    status: 'Completed',
    scopes: [],
    client: 'Yogyakarta Provincial Government',
    images: [
      "/images/project-portfolio/front_one_hotel.png",
      "/images/project-portfolio/front_one_hotel_1.png",
      "/images/project-portfolio/front_one_hotel_2.png",
    ]
  },
]);

export let projectListData: ProjectList[] = [
    {
      id: 6,
      name: 'Boarding House - Yogyakarta',
      client: 'Mr. M. (Personal)',
      type: 'Construction - Design & Construction Supervision',
      year: 2024
    },
    {
      id: 7,
      name: 'Appraisal of Boarding Houses - Yogyakarta',
      client: 'Mr. H. (Personal)',
      type: 'Engineering - Design',
      year: 2024
    },
    {
      id: 8,
      name: 'Road Drainage Study - Malinau',
      client: 'DPUPRPKP',
      type: 'Construction - Design & Construction Supervision',
      year: 2024
    },
    {
      id: 9,
      name: 'Building Connecting Structure Design',
      client: 'JAMKRINDO',
      type: 'Engineering - Detailed Engineering Design (DED)',
      year: 2024
    },
    {
      id: 10,
      name: 'Railway Station Infrastructure Structure Design, Jakarta',
      client: 'PT Kanta Karya Utama',
      type: 'Engineering - Detailed Engineering Design (DED)',
      year: 2024
    },
    {
      id: 1,
      name: 'Design of Special Terminal Mooring Unit (Boat Dock) - Natuna Islands',
      client: 'PT Silika Sumber Mineralindo',
      type: 'Engineering - Detailed Engineering Design (DED)',
      year: 2023
    },
    {
      id: 2,
      name: 'Residential Unit, Renovation Project - Yogyakarta',
      client: 'Mr. B.T.W. (Personal)',
      type: 'Construction - Design & Construction Supervision',
      year: 2023
    },
    // Add more sample projects for demonstration
    {
      id: 11,
      name: 'Bridge Construction Project - Surabaya',
      client: 'Ministry of Public Works',
      type: 'Engineering - Detailed Engineering Design (DED)',
      year: 2022
    },
    {
      id: 12,
      name: 'Commercial Building - Jakarta',
      client: 'PT Indah Karya',
      type: 'Construction - Design & Construction Supervision',
      year: 2022
    },
    {
      id: 13,
      name: 'Water Treatment Plant - Bandung',
      client: 'PDAM Bandung',
      type: 'Engineering - Design',
      year: 2022
    },
    {
      id: 14,
      name: 'Airport Terminal Expansion - Medan',
      client: 'PT Angkasa Pura II',
      type: 'Engineering - Detailed Engineering Design (DED)',
      year: 2021
    },
    {
      id: 15,
      name: 'Shopping Mall Renovation - Bali',
      client: 'PT Bali Development',
      type: 'Construction - Design & Construction Supervision',
      year: 2021
    }
  ];
