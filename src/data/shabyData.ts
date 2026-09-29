export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  image: string;
  intro: string;
  description: string;
  benefits: string[];
  process: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ARCHITECTURE' | 'RESIDENTIAL' | 'INTERIOR' | 'COMMERCIAL';
  categoryLabel: string;
  location: string;
  image: string;
  gallery: string[];
  shortDesc: string;
  overview: string;
  concept: string;
  execution: string;
  year?: string;
  scope?: string;
}

export const SHABY_CONTACT = {
  brandName: 'SHABY',
  subheading: 'ARCHITECTURE • INTERIOR • CONSTRUCTION',
  uan: '0309-5010409',
  phoneClean: '+923095010409',
  address: 'MBC Plaza Bahria Enclave, Islamabad',
  city: 'Islamabad, Pakistan',
  email: 'info@shaby.com.pk',
  whatsappNumber: '+923095010409',
  whatsappUrl: 'https://wa.me/923095010409',
  facebookUrl: 'https://www.facebook.com/shabyarchitectureinteriorconstruction',
  instagramUrl: 'https://www.instagram.com/shabyconsultant/',
  logo: '/shaby/shaby-logo-cropped.png',
  logoBanner: '/shaby/cropped-Gemini_Generated_Image_c59rgwc59rgwc59r-copy.png',
  videoUrl: 'https://shaby.com.pk/wp-content/uploads/2026/03/My-Video.mp4',
};

export const SHABY_SERVICES: ServiceItem[] = [
  {
    id: 'architectural-design',
    number: '01',
    title: 'Architectural Design',
    shortDesc: 'We create innovative and functional architectural designs tailored to your vision and lifestyle.',
    image: '/shaby/20-Trending-Normal-House-Front-Elevation-Designs-in-2024.jpg',
    intro: '2D & 3D Architectural Design transforms your vision into blueprints of unmatched precision and aesthetic balance.',
    description: 'From preliminary planning, spatial zoning, and site analysis to comprehensive municipal approval drawings, our architectural team designs spaces that harmoniously merge artistic form with everyday practicality. We specialize in contemporary luxury elevations, classic timeless facades, and climate-responsive engineering tailored specifically to Islamabad and surrounding regions.',
    benefits: [
      'Tailored space planning maximizing natural sunlight and ventilation',
      'Structural harmony with contemporary & classical architectural languages',
      'Accurate CAD drawings eliminating construction conflicts and costly reworks',
      'Compliance with CDA, RDA, Bahria Town & DHA development bylaws'
    ],
    process: [
      'Site Survey & Client Brief Analysis',
      'Conceptual Zoning & 2D Space Layouts',
      '3D Elevation & Photorealistic Renderings',
      'Comprehensive Structural & MEP Working Drawings'
    ]
  },
  {
    id: 'interior-design',
    number: '02',
    title: 'Interior Design',
    shortDesc: 'We design elegant and practical interiors that enhance comfort, beauty, and usability.',
    image: '/shaby/WhatsApp-Image-2026-02-25-at-10.56.30-AM.jpeg',
    intro: 'Curated interior architecture combining bespoke carpentry, ambient lighting, and hand-selected luxury textures.',
    description: 'We believe exceptional interiors evoke emotion while optimizing daily function. Our interior designers curate every square inch—from false ceiling details, accent media walls, custom modular kitchens, and spa-inspired bathrooms to custom millwork and ergonomic lighting layouts.',
    benefits: [
      'Customized furniture and cabinetry crafted to exact spatial proportions',
      'Multi-layered architectural lighting design for relaxed ambiance',
      'Premium European and local imported materials for durable opulence',
      'Complete turnkey execution from moodboards to final decor placement'
    ],
    process: [
      'Lifestyle & Moodboard Consultation',
      'Material, Palette & Lighting Selection',
      'Detailed Joinery & Electrical Elevations',
      'On-Site Execution, Fit-Out & Styling'
    ]
  },
  {
    id: 'house-construction',
    number: '03',
    title: 'House Construction',
    shortDesc: 'We build strong, durable, and modern homes with complete supervision and quality control.',
    image: '/shaby/1-kanal-classic-house-front-elevation.jpg',
    intro: 'End-to-end residential construction delivering robust foundations, immaculate finishes, and lasting peace of mind.',
    description: 'Hum aapke sapno ka ghar planning se le kar completion tak design aur construct karte hain. With dedicated site engineers, rigorous concrete slump testing, high-grade steel rebar validation, and flawless masonry, we ensure your residence withstands generations. Every milestone is transparently monitored and certified.',
    benefits: [
      'Full-time graduate civil engineers on-site daily',
      'Certified A-grade cement, crushed aggregate, and 60-grade deformed steel',
      'Rigorous moisture proofing and thermal insulation standards',
      'Transparent milestone-based progress billing with zero surprise costs'
    ],
    process: [
      'Soil Testing & Deep Foundation Excavation',
      'Reinforced Concrete (RCC) Grey Structure & Brickwork',
      'Plumbing, Electrical & Thermal Insulation Conduiting',
      'Complete Turnkey Finishing & Key Handover'
    ]
  },
  {
    id: 'commercial-construction',
    number: '04',
    title: 'Commercial Construction',
    shortDesc: 'We deliver professional commercial projects that reflect your brand and business needs.',
    image: '/shaby/download-1-1.jpg',
    intro: 'High-performance commercial plazas, corporate offices, and retail storefronts built for scale and aesthetic stature.',
    description: 'Commercial facilities require precision structural engineering, high occupant safety, rapid construction timelines, and durable commercial-grade materials. SHABY delivers comprehensive commercial solutions in Bahria Enclave, Bahria Town, and greater Islamabad, ensuring maximum rentable yield and prominent street visibility.',
    benefits: [
      'Heavy-duty load-bearing frameworks engineered for commercial use',
      'High-performance curtain wall glass facades and thermal cladding',
      'Integrated fire safety, HVAC ducting, and emergency egress design',
      'Strict adherence to commercial delivery schedules minimizing lost revenue'
    ],
    process: [
      'Commercial Feasibility & Municipal Clearance',
      'Heavy Concrete Frame Structural Execution',
      'High-Performance Glass Curtain Wall Installation',
      'MEP Services Integration & Corporate Fit-Out'
    ]
  },
  {
    id: 'floor-planning',
    number: '05',
    title: '2D & 3D Floor Planning',
    shortDesc: 'We provide detailed 2D layouts and realistic 3D visualizations for better project understanding.',
    image: '/shaby/20x30-House-Plan-2bhk-East-Facing-_-600sqft-Floor-Plan.jpg',
    intro: 'Precision drafting and photorealistic spatial simulations that eliminate ambiguity before breaking ground.',
    description: '2D Architectural Design ke zariye hum aap ke sapno ka ghar pehle kagaz par perfect planning ke sath tayar karte hain. Accurate floor plans, space planning aur smart layout designing se har inch ka behtareen use ensure karte hain. Accompanied by photorealistic 3D interior and exterior renders, you explore your residence virtually before a single brick is laid.',
    benefits: [
      'Exact dimensional accuracy avoiding on-site demolition and changes',
      'Vastu and sun-path optimized orientation for natural energy savings',
      'Hyper-realistic 3D walkthroughs for confident decision making',
      'Comprehensive schedules of doors, windows, and structural quantities'
    ],
    process: [
      'Client Lifestyle Questionnaire & Plot Demarcation',
      'Drafting of 2D Schematic Floor Plans & Flow Layouts',
      '3D Volumetric Modeling & Texture Mapping',
      'High-Resolution Photorealistic Render Generation'
    ]
  },
  {
    id: 'renovation-remodeling',
    number: '06',
    title: 'Renovation & Remodeling',
    shortDesc: 'We upgrade and transform existing spaces with modern designs and improved functionality.',
    image: '/shaby/download-37.jpg',
    intro: 'Reimagining dated spaces into contemporary masterpieces with modern flow, lighting, and finishes.',
    description: 'Whether revitalizing a 20-year-old residence or reconfiguring an existing commercial layout, our remodeling specialists handle structural retrofits, wall repositioning, modern plumbing replacements, and luxurious aesthetic upgrades without disrupting building stability.',
    benefits: [
      'Comprehensive structural assessment prior to wall modifications',
      'Smart modernization that substantially increases property resale value',
      'Seamless blend of existing character with modern luxury minimalism',
      'Dust-contained, phased execution for minimal disruption'
    ],
    process: [
      'As-Built Inspection & Structural Health Audit',
      'Demolition Plan & Architectural Redesign',
      'MEP Upgrades & Wall/Ceiling Transformations',
      'Premium Surface Treatments & Fixture Upgrades'
    ]
  },
  {
    id: 'painting-polishing',
    number: '07',
    title: 'Painting & Polishing',
    shortDesc: 'We deliver premium painting and polishing services with flawless finishing and long-lasting quality.',
    image: '/shaby/download-8.jpg',
    intro: 'Artisanal wall finishes, Italian polyurethane wood polishes, and weather-resistant exterior coatings.',
    description: 'The difference between ordinary and extraordinary spaces lies in surface preparation. Our master finishers use multi-coat acrylic putty, dustless mechanical sanding, high-durability elastomeric weather-shield coatings, and mirror-finish wood polishing for solid ash, oak, and teak woodwork.',
    benefits: [
      'Multi-coat leveling putty for glass-smooth wall textures',
      'High-grade anti-fungal and UV-resistant exterior weather shields',
      'Non-yellowing PU and deco lacquer wood polishes',
      'Long-lasting color fastness and easy-to-clean washable surfaces'
    ],
    process: [
      'Surface Preparation, Crack Filling & Moisture Sealing',
      'Double Putty Application & Mechanical Sanding',
      'Base Primer Coat & Specialized Tint Applications',
      'Final Protective Clear Coating & Quality Audit'
    ]
  },
  {
    id: 'landscape-design',
    number: '08',
    title: 'Exterior & Landscape Design',
    shortDesc: 'We design attractive exteriors and landscapes that enhance the overall appearance of your property.',
    image: '/shaby/Modern-Outdoor-Lounge-Design-_-Luxury-Pergola-Patio-with-Cozy-Seating-Garden-Lighting.jpg',
    intro: 'Outdoor living spaces, custom pergolas, soothing water features, and manicured horticulture.',
    description: 'An architectural statement is incomplete without its surrounding context. We craft tranquil outdoor sanctuaries featuring contemporary steel and timber pergolas, travertine paving, ambient garden spotlighting, automated irrigation, and resilient local flora.',
    benefits: [
      'Extends luxurious living spaces into the open natural air',
      'Custom outdoor lounges, fire pits, and barbecue entertainment counters',
      'Smart drainage design preventing water accumulation around foundations',
      'Low-maintenance architectural planting palettes'
    ],
    process: [
      'Microclimate, Sun & Soil Assessment',
      'Hardscape Paving & Pergola Layout Drafting',
      'Water Feature & Landscape Lighting Architecture',
      'Planting, Turf Installation & Final Landscaping Handover'
    ]
  }
];

export const SHABY_PROJECTS: ProjectItem[] = [
  {
    id: '1-kanal-classic-house',
    title: '1 Kanal Classic House Front Elevation',
    category: 'RESIDENTIAL',
    categoryLabel: 'House Construction • Architecture',
    location: 'Bahria Enclave, Islamabad',
    image: '/shaby/1-kanal-classic-house-front-elevation.jpg',
    gallery: [
      '/shaby/1-kanal-classic-house-front-elevation.jpg',
      '/shaby/download-2-1.jpg',
      '/shaby/20-Trending-Normal-House-Front-Elevation-Designs-in-2024.jpg'
    ],
    shortDesc: 'Grand classical residence featuring symmetrical balustrades, fluted pilasters, and majestic arched openings.',
    overview: 'This landmark 1-Kanal residence exemplifies timeless architectural elegance combined with state-of-the-art structural durability. Designed for a prominent family in Islamabad, the project required meticulous balance between classical European proportion and contemporary Pakistani living standards.',
    concept: 'The facade draws inspiration from neoclassical manor architecture, featuring a double-height arched grand entrance, carved stone cornices, and ornate wrought-iron railings. Generous floor-to-ceiling French windows bring ample daylight into the expansive double-height lobby.',
    execution: 'Constructed using reinforced concrete shear walls, 60-grade steel rebar, and imported Turkish travertine cladding. The interior features Italian marble flooring, bespoke walnut millwork, and automated smart-home energy management.',
    year: '2025',
    scope: 'Complete Turnkey Design & Construction'
  },
  {
    id: 'modern-building-residential',
    title: 'Modern Building Residential',
    category: 'ARCHITECTURE',
    categoryLabel: 'Modern Architecture • Residential',
    location: 'Islamabad',
    image: '/shaby/download-2-1.jpg',
    gallery: [
      '/shaby/download-2-1.jpg',
      '/shaby/6283.webp',
      '/shaby/2.webp'
    ],
    shortDesc: 'Cantilevered architectural volumes with dramatic glass corners and warm wood-textured composite accents.',
    overview: 'A striking statement of modernist residential architecture. Clean geometric lines, floating cantilevered terraces, and expansive glass curtain elements create an airy, uninhibited living sanctuary overlooking natural surroundings.',
    concept: 'Harmonious interplay of solid and void. The design utilizes dark charcoal plaster frames to articulate verticality, balanced by warm timber louver panels that provide thermal shading from the western sun.',
    execution: 'Engineered with post-tensioned slabs to achieve expansive column-free living rooms and an unbroken 5-meter cantilever terrace. Double-glazed low-E insulated glass units guarantee exceptional acoustic insulation.',
    year: '2025',
    scope: 'Architectural Design & Supervision'
  },
  {
    id: 'glass-facade-office',
    title: 'Glass Facade Office Plaza',
    category: 'COMMERCIAL',
    categoryLabel: 'Commercial Construction • Facade',
    location: 'Bahria Enclave Civic Centre, Islamabad',
    image: '/shaby/download-1-1.jpg',
    gallery: [
      '/shaby/download-1-1.jpg',
      '/shaby/photo-1-1.png',
      '/shaby/download-3.jpg'
    ],
    shortDesc: 'A contemporary commercial landmark with high-performance curtain walls and flexible floorplates.',
    overview: 'Commissioned as a corporate headquarters and multi-tenant commercial plaza, this facility prioritizes corporate presence, energy efficiency, and high floorplate flexibility for financial and tech corporations.',
    concept: 'A reflective architectural monolith. The facade uses high-spec reflective double-glazing with integrated vertical aluminum mullions that reflect Islamabad’s changing daylight skies while suppressing solar heat gain.',
    execution: 'Constructed on a deep raft foundation with seismic detailing. Incorporates dual high-speed elevators, centralized VRF air conditioning, and fire suppression systems meeting international safety standards.',
    year: '2024',
    scope: 'Turnkey Commercial Construction'
  },
  {
    id: 'modern-outdoor-lounge',
    title: 'Modern Outdoor Lounge & Luxury Pergola',
    category: 'RESIDENTIAL',
    categoryLabel: 'Landscape Design • Architecture',
    location: 'Bahria Town, Islamabad',
    image: '/shaby/Modern-Outdoor-Lounge-Design-_-Luxury-Pergola-Patio-with-Cozy-Seating-Garden-Lighting.jpg',
    gallery: [
      '/shaby/Modern-Outdoor-Lounge-Design-_-Luxury-Pergola-Patio-with-Cozy-Seating-Garden-Lighting.jpg',
      '/shaby/WhatsApp-Image-2026-02-25-at-10.56.30-AM.jpeg',
      '/shaby/download-4.jpg'
    ],
    shortDesc: 'Curated outdoor patio featuring black powder-coated pergola, custom fire pit, and atmospheric lighting.',
    overview: 'Transforming a backyard into an open-air luxury retreat. Designed for all-season entertaining with integrated weather-resistant materials, sound integration, and cozy recessed seating.',
    concept: 'Architectural continuity between indoor living and exterior nature. Natural stone pavers align directly with interior marble grid lines, visually expanding the living footprint into the lush garden.',
    execution: 'Heavy-gauge steel framework with tempered glass canopy and louvered shading. Custom teakwood banquet seating paired with integrated warm LED linear grazing lights.',
    year: '2025',
    scope: 'Landscape & Exterior Architecture'
  },
  {
    id: 'contemporary-executive-interior',
    title: 'Contemporary Executive Interior',
    category: 'INTERIOR',
    categoryLabel: 'Luxury Interior Design',
    location: 'Islamabad',
    image: '/shaby/WhatsApp-Image-2026-02-25-at-10.56.30-AM.jpeg',
    gallery: [
      '/shaby/WhatsApp-Image-2026-02-25-at-10.56.30-AM.jpeg',
      '/shaby/download-4.jpg',
      '/shaby/download-8.jpg'
    ],
    shortDesc: 'Bespoke residential interior with fluted wall paneling, brushed brass accents, and recessed illumination.',
    overview: 'An exquisite master suite and formal living interior showcasing SHABY’s signature attention to detail. Every element from millwork to soft furnishings was tailored to the client’s lifestyle.',
    concept: 'Understated luxury through organic textures. The design eschews loud embellishments in favor of tactile richness: ribbed veneer, textured linen fabrics, and indirect warm light coves.',
    execution: 'Custom joinery built from kiln-dried hardwood, finished with Italian matte polyurethane. Automated motorized blackout and sheer drapery with smart scene controls.',
    year: '2025',
    scope: 'Full Interior Architecture & Fit-out'
  },
  {
    id: 'facade-geometric-design',
    title: 'Facade of Geometric Architecture',
    category: 'ARCHITECTURE',
    categoryLabel: 'Architectural Design',
    location: 'Islamabad',
    image: '/shaby/download-3.jpg',
    gallery: [
      '/shaby/download-3.jpg',
      '/shaby/download-1-1.jpg',
      '/shaby/21-Construction-Types-And-Methods-To-Consider.jpg'
    ],
    shortDesc: 'Sculptural facade geometry combining sharp diagonal facets, recessed glazing, and textured concrete.',
    overview: 'A forward-thinking architectural project exploring modern geometric forms. The structure asserts a bold identity in the urban fabric while maintaining high thermal performance.',
    concept: 'Kinetic light and shadow. The angled external planes catch shifting natural sunlight throughout the day, creating an ever-changing visual sculpture.',
    execution: 'Engineered utilizing reinforced cantilevered concrete ribs and lightweight architectural GFRC (Glass Fiber Reinforced Concrete) exterior panels.',
    year: '2024',
    scope: 'Architectural Concept & Engineering'
  },
  {
    id: 'grey-structure-engineering',
    title: 'Precision Grey Structure Construction',
    category: 'COMMERCIAL',
    categoryLabel: 'Structural Engineering • House Construction',
    location: 'Bahria Enclave, Islamabad',
    image: '/shaby/download-14.jpg',
    gallery: [
      '/shaby/download-14.jpg',
      '/shaby/21-Construction-Types-And-Methods-To-Consider.jpg',
      '/shaby/1-kanal-classic-house-front-elevation.jpg'
    ],
    shortDesc: 'Heavy-duty reinforced concrete structure built to highest structural and earthquake-resistant standards.',
    overview: 'A strong house begins with an uncompromising grey structure. This project showcases SHABY’s engineering rigor: razor-sharp formwork, dense vibration compaction, and continuous wet curing.',
    concept: 'Structural integrity as the cornerstone of architectural permanence. No cosmetic finish can compensate for weak grey work; hence SHABY enforces zero tolerance on structural specifications.',
    execution: 'High-strength 3000 PSI concrete mix design, ultrasonic testing of structural joints, and complete subterranean waterproofing with bituminous membrane.',
    year: '2025',
    scope: 'Grey Structure Construction'
  },
  {
    id: '2bhk-east-facing-planning',
    title: '20x30 East Facing Smart Layout',
    category: 'ARCHITECTURE',
    categoryLabel: '2D & 3D Floor Planning',
    location: 'Islamabad',
    image: '/shaby/20x30-House-Plan-2bhk-East-Facing-_-600sqft-Floor-Plan.jpg',
    gallery: [
      '/shaby/20x30-House-Plan-2bhk-East-Facing-_-600sqft-Floor-Plan.jpg',
      '/shaby/20-Trending-Normal-House-Front-Elevation-Designs-in-2024.jpg'
    ],
    shortDesc: '600 sq.ft compact residential blueprint with optimized zero-waste circulation and full cross ventilation.',
    overview: 'Demonstrating that thoughtful architectural planning creates spacious living even on compact plots. Designed to accommodate a full 2BHK program with generous natural lighting.',
    concept: 'Maximum spatial utility. Eliminating dark wasted corridors in favor of open-plan living, while maintaining absolute privacy for family bed suites.',
    execution: 'Complete set of municipal approval blueprints, electrical conduits layout, sanitary plumbing risers, and structural reinforcement schedules.',
    year: '2025',
    scope: 'Floor Planning & Working Drawings'
  }
];

export const SHABY_PROCESS = [
  {
    step: '01',
    title: 'CONSULTATION',
    desc: 'In-depth discussion of your requirements, lifestyle, plot dimensions, and budgetary vision at our Bahria Enclave office or on-site.'
  },
  {
    step: '02',
    title: 'CONCEPT & PLANNING',
    desc: 'Developing comprehensive 2D floor plans, space zoning, sun-path alignments, and municipal compliance layouts.'
  },
  {
    step: '03',
    title: 'DESIGN',
    desc: 'Crafting photorealistic 3D elevations, material moodboards, structural engineering drawings, and turnkey bill of quantities.'
  },
  {
    step: '04',
    title: 'EXECUTION',
    desc: 'Commencing robust on-site grey structure or interior fit-out under daily supervision of seasoned civil engineers.'
  },
  {
    step: '05',
    title: 'FINISHING',
    desc: 'Precision surface leveling, Italian polishing, imported fixtures installation, and rigorous multi-point quality inspections.'
  },
  {
    step: '06',
    title: 'PROJECT DELIVERY',
    desc: 'Comprehensive final handover with warranty documentation, as-built maintenance guidelines, and lifetime support.'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Premium Quality',
    desc: 'Only certified materials, strict ASTM structural standards, and superior craftsmanship applied to every concrete pour and wooden joint.'
  },
  {
    title: 'Modern Designs',
    desc: 'Forward-looking architectural and interior aesthetics that blend contemporary luxury with timeless durability and regional comfort.'
  },
  {
    title: 'Attention to Detail',
    desc: 'Obsessive precision across every millimeter of joinery, recessed lighting cove, tile alignment, and elevation cornice.'
  },
  {
    title: 'On-Time Delivery',
    desc: 'Strict project management workflows with clear milestone schedules, eliminating unnecessary delays and safeguarding your timeline.'
  },
  {
    title: 'Transparent Pricing',
    desc: 'Comprehensive, itemized BOQs with zero hidden costs, clear milestone billing, and absolute integrity in commercial dealings.'
  },
  {
    title: 'Client Satisfaction',
    desc: 'A tested reputation backed by 100% committed client focus, continuous progress updates, and responsive leadership communication.'
  }
];
