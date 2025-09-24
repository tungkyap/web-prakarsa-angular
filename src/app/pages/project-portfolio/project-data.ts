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
  yearRange?: string;
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
    scopes: ['Construction', 'Construction Supervision'],
    client: 'Kemenkominfo',
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
    scopes: ['Detailed Engineering Design'],
    client: 'PT Kanta Karya Utama',
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
    description: 'Our role encompassed end-to-end construction engineering and supervision. We began by assessing the existing building and designing safe, efficient structural modifications. On-site, our team provided meticulous construction supervision to ensure that every detail of the bespoke design was executed with precision and the highest standards of quality.',
    image: '/images/project-portfolio/bespoke_residential_unit_2.jpeg',
    status: 'Completed',
    scopes: ['Construction', 'Design', 'Build'],
    client: 'Personal Private Client',
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
    description: 'A landmark 9-story mixed-use development in Yogyakarta. Our role encompassed the complete project lifecycle, from engineering and design to construction supervision, specializing in advanced precast concrete structures.',
    image: '/images/project-portfolio/al_meena.jpeg',
    status: 'Ongoing',
    scopes: ['Engineering', 'Design', 'Construction Supervision', 'Pre-Cast Concrete Structure'],
    client: 'PT Inti Beton',
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
    description: "A vital infrastructure project in Central Java to improve regional connectivity. We provided critical engineering services and conducted a thorough investigation of construction methods to ensure the project's efficiency and durability.",
    image: '/images/project-portfolio/semarang_demak_toll_road.jpeg',
    status: 'Completed',
    scopes: ['Engineering', 'Construction Method Investigation'],
    client: 'Directorate General of Highways - Ministry of Public Works & Public House',
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
    description: "A specialized engineering project for the AstraWorld Call Center in Semarang. Our scope included a comprehensive assessment and a functional worthiness investigation to ensure the building's structural integrity and operational readiness.",
    image: '/images/project-portfolio/astraworld_call_center_building.png',
    status: 'Completed',
    scopes: ['Engineering', 'Assessment', 'Functional Worthiness Investigation'],
    client: 'PT Astra Internasional Tbk',
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
    description: 'Providing end-to-end engineering solutions for the Manohara Hotel in Yogyakarta. Our services included detailed structural analysis to guarantee safety, followed by rigorous on-site construction supervision to maintain the highest quality standards.',
    image: '/images/project-portfolio/manohara_hotel.png',
    status: 'Completed',
    scopes: ['Engineering', 'Structural Analysis', 'Construction Supervision'],
    client: 'PT Cipta Graha Kanaka',
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
    description: 'A key infrastructure initiative to enhance railway capacity across Kebumen and Banyumas. Our team provided essential engineering oversight and on-site construction supervision to ensure the successful implementation of the double-track system.',
    image: '/images/project-portfolio/south_java_railway_double_track.jpeg',
    status: 'Completed',
    scopes: ['Engineering', 'Construction Supervision'],
    client: 'PT Scalarindo Utama Consult',
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
    description: 'A showcase of precast technology for the Civil & Environmental Engineering Department at UGM. Our involvement spanned from structural analysis and specialized precast design to construction and production supervision.',
    image: '/images/project-portfolio/kmts_building.jpeg',
    status: 'Completed',
    scopes: ['Engineering', 'Construction', 'Structural Analysis', 'Pre-Cast Concrete Design', 'Production Supervision'],
    client: 'Keluarga Alumni Teknik Sipil Universitas Gadjah Mada (Katsgama)',
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
    description: 'A full-service design-and-build project for the Grha Multi Niaga commercial building in Surabaya. We managed the entire process from initial concept and design through to final construction, delivering a turnkey solution.',
    image: '/images/project-portfolio/grha_multi_niaga.jpeg',
    status: 'Completed',
    scopes: ['Construction', 'Design', 'Build'],
    client: 'PT Multi Niaga Nusantara Indonesia',
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
    description: 'Delivering core engineering services for the Asanka Office Building in Yogyakarta. The project included in-depth structural analysis for optimal safety, along with dedicated construction supervision to ensure design fidelity.',
    image: '/images/project-portfolio/asanka_office_building.png',
    status: 'Completed',
    scopes: ['Engineering', 'Structural Analysis', 'Construction Supervision'],
    client: 'PT Cipta Graha Kanaka',
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
    description: "A comprehensive urban planning project for the De'Alba residential area. Our scope involved detailed engineering design, site surveying and mapping, and a thorough traffic analysis to create a sustainable community.",
    image: '/images/project-portfolio/residential_area_de_alba.png',
    status: 'Completed',
    scopes: ['Detailed Engineering Design', 'Mapping', 'Surveying', 'Traffic Analysis'],
    client: 'PT Bina Madani Wirasetya',
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
    description: 'An engineering and assessment project for the Brantas Abipraya office in Malang. We provided a detailed structural analysis and building assessment to verify its safety, integrity, and compliance with standards.',
    image: '/images/project-portfolio/brantas_abipraya_office.png',
    status: 'Completed',
    scopes: ['Engineering', 'Structural Analysis', 'Assessment'],
    client: 'PT Scalarindo Utama Consult',
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
    description: 'A foundational infrastructure project focused on the Detailed Engineering Design (DED), creating the essential technical blueprint for this key transportation link between Riau and West Sumatra.',
    image: '/images/project-portfolio/muaro_pekanbaru_railway.png',
    status: 'Completed',
    scopes: ['Detailed Engineering Design'],
    client: 'PT Scalarindo Utama Consult',
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
    description: 'Providing the Detailed Engineering Design (DED) for the Sampta Magelang Municipal Sports Building. Our work established the complete structural and architectural framework for this public facility.',
    image: '/images/project-portfolio/sampta_magelang_municipal_sports_building.png',
    status: 'Completed',
    scopes: ['Detailed Engineering Design'],
    client: 'Pusat Studi Ilmu Teknik/Lembaga Kerjasama Fakultas Teknik UGM',
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
    description: 'Tasked with the Detailed Engineering Design (DED) for the Manado-Bitung railway. This involved creating precise technical plans to guide construction of a critical transportation corridor in North Sulawesi.',
    image: '/images/project-portfolio/manado_bitung_railway.png',
    status: 'Completed',
    scopes: ['Detailed Engineering Design'],
    client: 'PT Aulia Sakti Internasional',
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
    description: 'Focused on the specialized Detailed Engineering Design (DED) for railway bridges along the Rangkasbitung-Merak route, creating safe, durable, and efficient structures for the line.',
    image: '/images/project-portfolio/rangkasbitung_merak_railway_bridge_design.png',
    status: 'Completed',
    scopes: ['Detailed Engineering Design'],
    client: 'PT Scalarindo Utama Consult',
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
    description: 'An end-to-end design-and-build project for the Salman Al-Farisi Islamic Junior High School. We managed all phases, from initial design and engineering to final construction, to deliver a modern educational facility.',
    image: '/images/project-portfolio/salman_al_farisi_jhs.png',
    status: 'Completed',
    scopes: ['Engineering', 'Construction', 'Design', 'Build'],
    client: 'PT Bina Madani Wirasetya',
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
    description: 'An engineering and redesign project for the Ir. Soekarno Market in Sukoharjo. Our primary role was to conduct a thorough structural analysis to ensure the modernized market is both safe and functional.',
    image: '/images/project-portfolio/ir_soekarno_market_redesign.png',
    status: 'Completed',
    scopes: ['Engineering', 'Structural Analysis'],
    client: 'Pusat Studi Ilmu Teknik/Lembaga Kerjasama Fakultas Teknik UGM',
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
    description: 'Responsible for the Detailed Engineering Design (DED) of the Semarang-Solo double-track railway, providing comprehensive technical plans to upgrade this vital transportation artery in Central Java.',
    image: '/images/project-portfolio/semarang_solo_railway_double_track_design.png',
    status: 'Completed',
    scopes: ['Detailed Engineering Design'],
    client: 'PT Aulia Sakti Internasional',
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
    scopes: ['Engineering', 'Structural Analysis', 'Construction Supervision'],
    client: 'PT Satya Nugra Adhistana',
    images: [
      "/images/project-portfolio/front_one_hotel.png",
      "/images/project-portfolio/front_one_hotel_1.png",
      "/images/project-portfolio/front_one_hotel_2.png",
    ]
  },
]);

export let projectListData: ProjectList[] = [
  {
    "id": 1,
    "name": "Residence Concept Design - Faculty of Engineering",
    "client": "Faculty of Engineering, Universitas Gadjah Mada",
    "type": "Engineering - Design",
    "year": 2025
  },
  {
    "id": 2,
    "name": "Architectural and MEP As Built Drawings",
    "client": "RSA UGM",
    "type": "Engineering - As Built Drawings (ABD)",
    "year": 2025
  },
  {
    "id": 3,
    "name": "Concept Design of Sangatta Lake - Kalimantan Timur",
    "client": "Dinas Pekerjaan Umum",
    "type": "Engineering - Design",
    "year": 2025
  },
  {
    "id": 4,
    "name": "Bahubulu Jetty Project Review & Study, Konawe",
    "client": "PT Aneka Pertambangan Tbk",
    "type": "Engineering - Review & Study",
    "year": 2025
  },
  {
    "id": 5,
    "name": "Silica Factory Building Construction Project, Rembang",
    "client": "PT Nahardia Prakarsa",
    "type": "Engineering - Design",
    "year": 2025
  },
  {
    "id": 6,
    "name": "Megatruh Guest House, Yogyakarta",
    "client": "Mr. M (Personal)",
    "type": "Engineering - Design",
    "year": 2025
  },
  {
    "id": 7,
    "name": "Residential Unit, Renovation Project - Yogyakarta",
    "client": "Mr. M.S. (Personal)",
    "type": "Construction - Design & Build",
    "year": 2024
  },
  {
    "id": 8,
    "name": "Residential Unit, Renovation Project - Yogyakarta",
    "client": "Mr. Y. (Personal)",
    "type": "Construction - Design & Build",
    "year": 2024
  },
  {
    "id": 9,
    "name": "Renovation Project - Yogyakarta",
    "client": "Departemen Teknik Sipil UGM",
    "type": "Construction - Construction Supervision",
    "year": 2024
  },
  {
    "id": 10,
    "name": "Review Structur, RSKB Annur - Yogyakarta",
    "client": "RSKB Annur",
    "type": "Construction - Construction Supervision",
    "year": 2024
  },
  {
    "id": 11,
    "name": "Rumah Sajada (Residence, & Office) - Yogyakarta",
    "client": "Pondok Pesantren Rumah Sajada",
    "type": "Construction - Design & Construction Supervision (Pre-Cast Concrete Structure)",
    "year": 2024
  },
  {
    "id": 12,
    "name": "Boarding House - Yogyakarta",
    "client": "Mr. M. (Personal)",
    "type": "Construction - Design & Construction Supervision",
    "year": 2024
  },
  {
    "id": 13,
    "name": "Appraisal of Boarding Houses - Yogyakarta",
    "client": "Mr. H. (Personal)",
    "type": "Engineering - Design",
    "year": 2024
  },
  {
    "id": 14,
    "name": "Road Drainage Study - Malinau",
    "client": "DPUPRPKP",
    "type": "Construction - Design & Construction Supervision",
    "year": 2024
  },
  {
    "id": 15,
    "name": "Building Connecting Structure Design",
    "client": "JAMKRINDO",
    "type": "Engineering - Detailed Engineering Design (DED)",
    "year": 2024
  },
  {
    "id": 16,
    "name": "Railway Station Infrastructure Structure Design, Jakarta",
    "client": "PT Kanta Karya Utama",
    "type": "Engineering - Detailed Engineering Design (DED)",
    "year": 2024
  },
  {
    "id": 17,
    "name": "Design of Special Terminal Mooring Unit (Boat Dock) - Natuna Islands",
    "client": "PT Silika Sumber Mineralindo",
    "type": "Engineering - Detailed Engineering Design (DED)",
    "year": 2023
  },
  {
    "id": 18,
    "name": "Residential Unit, Renovation Project - Yogyakarta",
    "client": "Mr. B.T.W. (Personal)",
    "type": "Construction - Design & Build",
    "year": 2023
  },
  {
    "id": 19,
    "name": "Co-Living Residential & Retail Building - Yogyakarta",
    "client": "Mr. A.H. (Personal)",
    "type": "Construction - Design & Build",
    "year": 2023
  },
  {
    "id": 20,
    "name": "Al-Meena Mixed Use 9-Story Building (Hotel, Residence, & Office) - Yogyakarta",
    "client": "PT Inti Beton",
    "type": "Engineering - Design & Construction Supervision (Pre-Cast Concrete Structure)",
    "year": 2023
  },
  {
    "id": 21,
    "name": "Residential Unit, Renovation Project - Sukoharjo",
    "client": "Mr. H.S. (Personal)",
    "type": "Construction - Construction Supervision",
    "year": 2023
  },
  {
    "id": 22,
    "name": "Design of Special Grha Multi Niaga, Renovation Project - Surabaya",
    "client": "PT MULTI NIAGA NUSANTARA INDONESIA",
    "type": "Construction - Design & Build",
    "year": 2023
  },
  {
    "id": 23,
    "name": "Concept Design, Resto Sempol - Yogyakarta",
    "client": "Mr. B.P. (Personal)",
    "type": "Engineering - Detailed Engineering Design (DED)",
    "year": 2023
  },
  {
    "id": 24,
    "name": "Review Design Residential Unit - Yogyakarta",
    "client": "Mrs. S. (Personal)",
    "type": "Engineering - Detailed Engineering Design (DED)",
    "year": 2023
  },
  {
    "id": 25,
    "name": "Building STMM (Campus & Office) - Yogyakarta",
    "client": "Kemenkominfo",
    "type": "Construction - Construction Supervision",
    "year": 2023
  },
  {
    "id": 26,
    "name": "Bespoke Residential Unit, Renovation Project - Yogyakarta",
    "client": "Mr. M.I. (Personal)",
    "type": "Construction - Construction Supervision",
    "year": 2023
  },
  {
    "id": 27,
    "name": "Bespoke Residential Unit, Renovation Project - Yogyakarta",
    "client": "Mr. N. (Personal)",
    "type": "Construction - Construction Supervision",
    "year": 2023
  },
  {
    "id": 28,
    "name": "Bespoke Residential Unit, Renovation Project - Yogyakarta",
    "client": "Mr. A.C.P (Personal)",
    "type": "Construction - Construction Supervision",
    "year": 2023
  },
  {
    "id": 29,
    "name": "Design of Special Terminal Mooring Unit (Boat Dock) – Lingga Island, Riau Islands",
    "client": "PT Silika Sumber Mineralindo",
    "type": "Engineering - Detailed Engineering Design (DED)",
    "year": 2022
  },
  {
    "id": 30,
    "name": "Concept Design – Seluma Market Docks, Bengkulu",
    "client": "Lembaga Kerjasama Fakultas Teknik, Universitas Gadjah Mada",
    "type": "Engineering - Concept Design",
    "year": 2022
  },
  {
    "id": 31,
    "name": "Residential Unit Renovation – Yogyakarta",
    "client": "Mr. B. Suranto (Personal)",
    "type": "Construction - Renovation works",
    "year": 2022
  },
  {
    "id": 32,
    "name": "Residential Unit Construction – Yogyakarta",
    "client": "Mr. Setyoso (Personal)",
    "type": "Construction - Design & Build",
    "year": 2022
  },
  {
    "id": 33,
    "name": "Municipal Affordable Vertical Housing Residential Block – Magelang",
    "client": "Dinas Perumahan dan Permukiman, Pemerintah Kota Magelang",
    "type": "Engineering - Concept design, cost estimation, economic cost and benefit analysis",
    "year": 2022
  },
  {
    "id": 34,
    "name": "Universitas Gadjah Mada Residential Housing Area Block Plan Design – Yogyakarta",
    "client": "Keluarga Alumni Teknik Sipil Universitas Gadjah Mada (Katsgama)",
    "type": "Engineering - Concept design, architectural design, cost estimation",
    "year": 2022
  },
  {
    "id": 35,
    "name": "Structural Assessment, AstraWorld Call Center Building – Semarang",
    "client": "AstraWorld, PT Astra International Tbk.",
    "type": "Engineering - Assessment, Functional Worthiness Investigation",
    "year": 2022
  },
  {
    "id": 36,
    "name": "Concept Design, Box Café – Salatiga",
    "client": "Mr. Afkar (Personal)",
    "type": "Engineering - Concept Design",
    "year": 2022
  },
  {
    "id": 37,
    "name": "Concept Design, PT BIB Batam Office – Batam",
    "client": "PT BIB Batam",
    "type": "Engineering - Concept Design",
    "year": 2022
  },
  {
    "id": 38,
    "name": "Redesign of STIMARYO Campus – Yogyakarta",
    "client": "Maritime Institute Yogyakarta (Sekolah Tinggi Maritim Yogyakarta - STIMARYO)",
    "type": "Engineering - Concept Design, Cost Estimation",
    "year": 2022
  },
  {
    "id": 39,
    "name": "Grha Citra Paramedika Clinic – Yogyakarta",
    "client": "Grha Citra Paramedika",
    "type": "Engineering - Assessment & renovation works",
    "year": 2022
  },
  {
    "id": 40,
    "name": "Foundation & Roof Construction, Single Tray Perforated Double Deflector – Banyuwangi",
    "client": "PT LPP Agro Nusantara",
    "type": "Engineering - Construction work assessment, on-site consultation",
    "year": 2022
  },
  {
    "id": 41,
    "name": "Semarang–Demak Toll Road Construction – Central Java",
    "client": "Directorate General of Highways - Ministry of Public Works & Public Housing",
    "type": "Engineering - Construction Method Investigation",
    "year": 2022
  },
  {
    "id": 42,
    "name": "Asanka Office Building (9-Story Building) - Yogyakarta",
    "client": "PT Cipta Graha Kanaka",
    "type": "Engineering - Structural analysis & construction supervision",
    "year": 2021
  },
  {
    "id": 43,
    "name": "Resto Langitan - Yogyakarta",
    "client": "Bhumi Kayu Studio",
    "type": "Engineering - Structural and MEP Detailed-Engineering Design (DED)",
    "year": 2022
  },
  {
    "id": 44,
    "name": "Al Ghozali Masjid & Pondok Pesantren Complex – Yogyakarta",
    "client": "PT Bina Madani Wirasetya",
    "type": "Construction & Engineering - Design & Build",
    "year": 2021
  },
  {
    "id": 45,
    "name": "2-Story Bespoke Residential Unit – Tanjungsari, Yogyakarta",
    "client": "Mr. Leonardus P.A.D (Personal)",
    "type": "Construction",
    "year": 2021
  },
  {
    "id": 46,
    "name": "Roof Construction, Residential Unit – Wedomartani, Yogyakarta",
    "client": "Mr. Djoko L. (Personal)",
    "type": "Construction - Roof works",
    "year": 2021
  },
  {
    "id": 47,
    "name": "Manohara Hotel (8-Story Building) – Yogyakarta",
    "client": "PT Cipta Graha Kanaka",
    "type": "Engineering - Structural analysis & construction supervision",
    "year": 2020
  },
  {
    "id": 48,
    "name": "RSKB Sinduadi, Functional Worthiness Audit – Yogyakarta",
    "client": "Rumah Sakit Khusus Bedah (RSKB) Sinduadi",
    "type": "Engineering - Structural analysis & functional worthiness assessment",
    "year": 2019
  },
  {
    "id": 49,
    "name": "De Alba Residences, Residential Housing Complex – Banyumas",
    "client": "PT Bina Madani Wirasetya",
    "type": "Engineering - Mapping, surveying, traffic analysis, & detailed-engineering design",
    "year": 2019
  },
  {
    "id": 50,
    "name": "South Java Railway Double Track Construction Project – Banyumas & Kebumen, Central Java",
    "client": "PT Scalarindo Utama Consult",
    "type": "Engineering - Construction Supervision",
    "year": 2019
  },
  {
    "id": 51,
    "name": "Universitas Amikom, Campus 2 Construction – Purwokerto",
    "client": "Universitas Amikom via PT Gunadharma Bumi Selaras",
    "type": "Engineering - Traffic Impact Analysis",
    "year": 2019
  },
  {
    "id": 52,
    "name": "Pondok Pesantren Sajada, Pre-Cast Concrete Building Design – Yogyakarta",
    "client": "PT Inti Beton",
    "type": "Engineering - Design & Build",
    "year": 2019
  },
  {
    "id": 53,
    "name": "KMTS Building, Department of Civil & Environmental Engineering UGM – Yogyakarta",
    "client": "Keluarga Alumni Teknik Sipil Universitas Gadjah Mada (Katsgama)",
    "type": "Engineering & Construction – Structural Analysis, Pre-Cast Concrete Design & Production Supervision, Construction",
    "year": 2019
  },
  {
    "id": 54,
    "name": "SDIT Salman Al Farisi Pogung Roof Renovation – Yogyakarta",
    "client": "SDIT Salman Al Farisi Pogung",
    "type": "Construction - Roof works",
    "year": 2019
  },
  {
    "id": 55,
    "name": "Residential Area De Alba – Purwokerto",
    "client": "PT Bina Madani Wirasetya",
    "type": "Engineering - Detailed Engineering Design",
    "year": 2019
  },
  {
    "id": 56,
    "name": "Front One Hotel Gresik (4-Story Building) – Gresik, East Java",
    "client": "PT Satya Nugra Adhistana",
    "type": "Engineering - Structural analysis & construction supervision",
    "year": 2018
  },
  {
    "id": 57,
    "name": "Front One Hotel Pamekasan (9-Story Building) – Pamekasan, East Java",
    "client": "PT Satya Nugra Adhistana",
    "type": "Engineering - Structural analysis & construction supervision",
    "year": 2018
  },
  {
    "id": 58,
    "name": "Bespoke Residential Unit – Banguntapan, Yogyakarta",
    "client": "Mr. Bimo P. (Personal)",
    "type": "Construction",
    "year": 2018
  },
  {
    "id": 59,
    "name": "Brantas Abipraya Malang Office Building – Malang",
    "client": "PT Scalarindo Utama Consult",
    "type": "Engineering - Structural analysis & assessment",
    "year": 2017
  },
  {
    "id": 60,
    "name": "Front One Boutique Hotel (4-Story Building) – Semarang",
    "client": "PT Satya Nugra Adhistana",
    "type": "Engineering - Structural analysis & construction supervision",
    "year": 2017
  },
  {
    "id": 61,
    "name": "Palangkaraya–Sampit–Nanga Railway Track Feasibility Study – Central Borneo",
    "client": "PT Scalarindo Utama Consult",
    "type": "Engineering - Feasibility Study",
    "year": 2016
  },
  {
    "id": 62,
    "name": "Muaro-Pekanbaru Railway, Bridge Design (8 Bridges) – Riau",
    "client": "PT Scalarindo Utama Consult",
    "type": "Engineering - Detailed Engineering Design",
    "year": 2016
  },
  {
    "id": 63,
    "name": "Seram Island Road Bridge Design – Seram Island, Maluku",
    "client": "PT Karuniya Data Konsultan",
    "type": "Engineering - Detailed Engineering Design",
    "year": 2016
  },
  {
    "id": 64,
    "name": "Seram Island 2 Road Bridge Design – Seram Island, Maluku",
    "client": "CV Ihsan Konsultan",
    "type": "Engineering - Detailed Engineering Design",
    "year": 2016
  },
  {
    "id": 65,
    "name": "Kotamobagu Ring Road Design – Kotamobagu, North Sulawesi",
    "client": "PT Anugerah Krida Pradana",
    "type": "Engineering - Detailed Engineering Design",
    "year": 2016
  },
  {
    "id": 66,
    "name": "Masjid Asy-Syifa Minaret – Yogyakarta",
    "client": "Masjid Asy-Syifa",
    "type": "Construction",
    "year": 2016
  },
  {
    "id": 67,
    "year": 2016,
    "name": "Residential Area Villa Green Madani Bale Catur – Yogyakarta",
    "client": "PT Bina Madani Wirasetya",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 68,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Semarang–Solo Railway Track, Bridge Design (8 Bridges) – Central Java",
    "client": "PT Scalarindo Utama Consult",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 69,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Manado–Bitung Railway Track Design – North Sulawesi",
    "client": "PT Aulia Sakti Internasional",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 70,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "North Borneo Road Bridge Design (5 Bridges) – North Borneo (Multi-year)",
    "client": "PT Bangun Cipta Consultant",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 71,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Sampta Magelang Municipal Sports Building, Spectator Tribune Design – Magelang",
    "client": "Pusat Studi Ilmu Teknik / Lembaga Kerjasama Fakultas Teknik Universitas Gadjah Mada",
    "type": "Engineering – Structural Analysis"
  },
  {
    "id": 72,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "North Sulawesi Road Bridge Design (12 Bridges) – North Sulawesi",
    "client": "PT Yodya Karya",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 73,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Salman Al-Farisi Masjid & Girls' Dormitory – Yogyakarta",
    "client": "PT Bina Madani Wirasetya",
    "type": "Engineering & Construction – Design & Build"
  },
  {
    "id": 74,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Rangkasbitung–Merak Railway Bridge Design (9 Bridges) – Banten",
    "client": "PT Scalarindo Utama Consult",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 75,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Semarang–Solo Railway Double Track Design – Central Java",
    "client": "PT Aulia Sakti Internasional",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 76,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Salman Al-Farisi Integrated Islamic Junior High School – Yogyakarta",
    "client": "PT Bina Madani Wirasetya",
    "type": "Engineering & Construction – Design & Build"
  },
  {
    "id": 77,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Medan–Araskabu Railway Bridge Design (3 Bridges) – North Sumatra",
    "client": "PT Scalarindo Utama Consult",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 78,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Ir. Soekarno Market Redesign – Sukoharjo, Central Java",
    "client": "Pusat Studi Ilmu Teknik / Lembaga Kerjasama Fakultas Teknik Universitas Gadjah Mada",
    "type": "Engineering – Structural Analysis"
  },
  {
    "id": 79,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "South Lampung Road Upgrading Design – South Lampung",
    "client": "PT Surya Wijaya Sembada",
    "type": "Engineering – Detailed–Engineering Design"
  },
  {
    "id": 80,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Cilangkap Bridge Assessment – West Java",
    "client": "PJB Unit Pembangkit Cirata",
    "type": "Engineering – Structural Assessment"
  },
  {
    "id": 81,
    "yearRange": "2013–2015",
    "year": 2013,
    "name": "Almarhamah Masjid Candi Gebang – Yogyakarta",
    "client": "Almharamah Masjid",
    "type": "Construction"
  }
];
