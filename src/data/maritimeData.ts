import { 
  ProductItem, 
  ServiceItem, 
  CoreBusinessItem, 
  AccessoryItem, 
  CareerRole, 
  ProjectCapability,
  ResourceItem,
  TerminologyItem
} from '../types/maritime';

export const COMPANY_STATS = [
  {
    value: '2010',
    label: 'ESTABLISHED',
    detail: 'Over a decade and a half of maritime engineering execution in India and abroad'
  },
  {
    value: '15+',
    label: 'YEARS OF EXPERIENCE',
    detail: 'International dredging operations, marine surveys & coastal development'
  },
  {
    value: '40+',
    label: 'SPECIALIZED ASSETS',
    detail: 'Hydraulic dredgers, hopper barges, workboats & civil machinery'
  },
  {
    value: '100%',
    label: 'SAFETY & COMPLIANCE',
    detail: 'IACS Classification, ISM Code & ISO 9001:2015 quality standards'
  }
];

export const CORE_BUSINESS_ITEMS: CoreBusinessItem[] = [
  {
    id: 'inland-dredging',
    number: '01',
    title: 'Inland Dredging',
    subtitle: 'River, Lake, Pond & Reservoir Desilting',
    description: 'Restoring hydrological flood capacity, clearing sediment build-up from hydro dams, natural lakes, agricultural ponds, and inland commercial navigation waterways.',
    image: '/images/photo-1508739773434-c26b3d09e071.jpg',
    features: ['Reservoir desilting down to 60m depth', 'River channel deepening & flood relief', 'Agricultural and municipal pond desilt', 'Eco-friendly silt containment'],
    icon: 'Waves'
  },
  {
    id: 'dredging-land-reclamation',
    number: '02',
    title: 'Dredging & Land Reclamation',
    subtitle: 'Fishing Harbor, Major & Minor Port and Terminals',
    description: 'Transforming intertidal zones into high-density commercial land platforms for container berths, industrial parks, and national maritime defense installations.',
    image: '/images/photo-1509316785289-025f5b846b35.jpg',
    features: ['Deep harbor fairway capital dredging', 'Long-distance pipeline hydraulic fill', 'Coastal protection and bund construction', 'Port approach channel maintenance'],
    icon: 'Anchor'
  },
  {
    id: 'dredger-design-build',
    number: '03',
    title: 'New Dredger Design, Build & Supply',
    subtitle: 'Naval Architecture & Custom Shipyard Delivery',
    description: 'Engineering and constructing bespoke Cutter Suction Dredgers (CSD), Trailing Suction Hoppers, and modular amphibious rigs customized to client bathymetric requirements.',
    image: '/images/photo-1520699049698-acd2fccb8cc8.jpg',
    features: ['IACS class naval certification', 'Modular dismountable road-transport pontoons', 'High-wear slurry pump integration', 'State-of-the-art PLC bridge automation'],
    icon: 'Ship'
  },
  {
    id: 'operation-maintenance-repair',
    number: '04',
    title: 'Dredger Operation, Maintenance & Repair',
    subtitle: 'Fleet Lifecycle Support & Master Crewing',
    description: 'Providing fully certified Master Mariners, Chief Engineers, and hydraulic specialists along with comprehensive shipyard docking and preventative overhaul programs.',
    image: '/images/photo-1581091226825-a6a2a5aee158.jpg',
    features: ['Certified Dredge Masters & deck crew', 'Ultrasonic NDT hull thickness testing', 'High-pressure hydraulic overhaul', 'Dry-dock refurbishment management'],
    icon: 'Wrench'
  },
  {
    id: 'marine-heavy-lifting',
    number: '05',
    title: 'Customized Marine Heavy Lifting Equipment',
    subtitle: 'Port Handling & Heavy Marine Construction',
    description: 'Designing and fabricating pontoon-mounted crane barges, sheet pile driving leaders, clamshell hoisting spreads, and bespoke offshore lifting apparatus.',
    image: '/images/photo-1590496793929-36417d3117de.jpg',
    features: ['Spud-stabilized crane barges up to 350T', 'Vibratory piling leader systems', 'Heavy grab and clamshell attachments', 'Safe sea-fastening and towing spreads'],
    icon: 'Compass'
  },
  {
    id: 'components-spares-refurbishment',
    number: '06',
    title: 'Dredging Components, Spares & Refurbishment',
    subtitle: 'High-Chrome Slurry Pumps, Hoses & Spares',
    description: 'Supplying rapid-replacement wear components including 27% chrome slurry pumps, rock cutter teeth, HDPE discharge pipelines, and automation flow sensors.',
    image: '/images/photo-1581092160607-ee22621dd758.jpg',
    features: ['High-chrome cast iron pump impellers', 'Steel-armored rubber dredging hoses', 'Virgin PE100 HDPE pipes & floaters', 'Continuous slurry density meters'],
    icon: 'Cpu'
  }
];

export const CORE_ETHICS = [
  {
    id: 'integrity',
    number: '01',
    title: 'Integrity',
    shortDesc: 'Uncompromising engineering honesty and operational reliability.',
    fullDesc: 'We operate with absolute technical transparency. From bathymetric depth calculations to dredge volume logs, our clients receive verifiable data that reflects exact underwater conditions without ambiguity.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'transparency',
    number: '02',
    title: 'Transparency',
    shortDesc: 'Open reporting, clear contracts, and continuous production telemetry.',
    fullDesc: 'Complete visibility into dredging cubic meters per hour, fuel telemetry, geotechnical soil strata challenges, and contractual timelines. We treat client partnerships as collaborative technical alliances.',
    iconName: 'Eye'
  },
  {
    id: 'respect',
    number: '03',
    title: 'Respect',
    shortDesc: 'Protecting marine ecology, coastal communities, and workforce safety.',
    fullDesc: 'Respect guides our maritime stewardship: strict adherence to marine fauna safety, silt curtain protocols to prevent turbidity spread, fair working environments for offshore crews, and deference to coastal stakeholders.',
    iconName: 'Anchor'
  },
  {
    id: 'value',
    number: '04',
    title: 'Value',
    shortDesc: 'Maximized hydraulic yield, optimized fuel consumption, and durable engineering.',
    fullDesc: 'By optimizing pump efficiency, pipeline hydraulics, and equipment selection, we minimize dredging cost per cubic meter while delivering marine infrastructure designed for multi-decade life.',
    iconName: 'Compass'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  // HYDRAULIC DREDGERS
  {
    id: 'csd-standard',
    image: '/images/photo-1569154941061-e231b4725ef1.jpg',
    name: 'Cutter Suction Dredger (CSD)',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Stationary / Spud Carrier Vessel',
    summary: 'Heavy-duty rotating cutter head dredger engineered for hard soils, compacted clay, and alluvial rock formations with high-efficiency dredge pumps.',
    specs: [
      { label: 'Dredging Depth', value: 'Up to 25.0 meters' },
      { label: 'Discharge Distance', value: '1,500 – 4,000 meters' },
      { label: 'Dredge Pump Power', value: '750 kW – 3,500 kW' },
      { label: 'Discharge Diameter', value: '450 mm – 850 mm' }
    ],
    applications: ['Harbor deepening', 'Capital dredging', 'Land reclamation', 'Approach channels'],
    availability: 'New Build'
  },
  {
    id: 'csd-custom',
    image: '/images/photo-1520699049698-acd2fccb8cc8.jpg',
    name: 'Custom Built Dredgers',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Custom Naval Architecture',
    summary: 'Tailor-engineered dredging platforms built to specific client bathymetry, tight canal clearances, or extreme soil hardness.',
    specs: [
      { label: 'Design Standard', value: 'IACS Classification Society' },
      { label: 'Hull Configuration', value: 'Dismountable modular pontoons' },
      { label: 'Power Source', value: 'Marine Diesel / Electric Hybrid' },
      { label: 'Mobilization', value: 'Road / Marine transportable' }
    ],
    applications: ['Custom port basins', 'Mine tailings ponds', 'Restricted access waterways'],
    availability: 'Custom Engineered'
  },
  {
    id: 'suction-dredger',
    image: '/images/photo-1494412574643-ff11b0a5c1c3.jpg',
    name: 'Suction Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Plain Suction Vessel',
    summary: 'High-volume sand harvesting vessel utilizing specialized hydraulic jetting or plain suction heads for free-flowing sand deposits.',
    specs: [
      { label: 'Dredging Depth', value: '12 – 35 meters' },
      { label: 'Pump Flow Rate', value: '2,500 – 6,000 m³/hr' },
      { label: 'Pipeline Diameter', value: '400 – 650 mm' },
      { label: 'Slurry Concentration', value: 'Up to 30% by volume' }
    ],
    applications: ['River sand reclamation', 'Beach replenishment', 'Aggregate mining'],
    availability: 'Stock'
  },
  {
    id: 'jet-suction-dredger',
    image: '/images/photo-1518709268805-4e9042af9f23.jpg',
    name: 'Jet Suction Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'High-Pressure Hydraulic Vessel',
    summary: 'Equipped with ultra-high-pressure water jet nozzles to fluidize deep compacted sand layers for rapid hydraulic extraction.',
    specs: [
      { label: 'Jet Pump Pressure', value: '8 – 16 bar' },
      { label: 'Operational Depth', value: 'Up to 40 meters' },
      { label: 'Slurry Output', value: '1,800 – 4,500 m³/hr' },
      { label: 'Jet Nozzle System', value: 'Multi-orifice annular ring' }
    ],
    applications: ['Deep reservoir sand mining', 'Port approach deepening', 'Alluvial sand deposits'],
    availability: 'New Build'
  },
  {
    id: 'amphibious-dredger',
    image: '/images/photo-1582719508461-905c673771fd.jpg',
    name: 'Multi Purpose Amphibious Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Self-Propelled Amphibious Rig',
    summary: 'All-terrain dredge rig with spud stabilization and tilting tracks, capable of walking into shallow marshlands, canals, and lakes.',
    specs: [
      { label: 'Transit Mode', value: 'Crawler tracks & propeller drive' },
      { label: 'Working Depth', value: '0 – 6.5 meters' },
      { label: 'Tool Attachments', value: 'Cutter pump, rake, clamshell, weed bucket' },
      { label: 'Engine Output', value: '190 – 280 kW' }
    ],
    applications: ['Wetland restoration', 'Canal desilting', 'Industrial effluent ponds', 'Flood mitigation'],
    availability: 'Stock'
  },
  {
    id: 'gold-mine-dredger',
    image: '/images/photo-1581094794329-c8112a89af12.jpg',
    name: 'Gold Mine Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Mineral Processing Dredge',
    summary: 'Integrated dredging and gravimetric separation platform equipped with trommel screens, sluice boxes, and centrifugal concentrators.',
    specs: [
      { label: 'Feed Capacity', value: '120 – 350 tons/hr' },
      { label: 'Recovery Unit', value: 'Knelson / Falcon concentrator + sluice' },
      { label: 'Dredging System', value: 'Heavy slurry suction / bucket chain' },
      { label: 'Power System', value: 'Enclosed low-noise diesel genset' }
    ],
    applications: ['Alluvial gold mining', 'Heavy mineral sands', 'Tin and gemstone dredging'],
    availability: 'Custom Engineered'
  },
  {
    id: 'auger-dredger',
    image: '/images/photo-1581092795360-fd1ca04f0952.jpg',
    name: 'Auger Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Continuous Horizontal Auger',
    summary: 'Horizontal helical auger head dredger that cuts sediment evenly without disturbing delicate reservoir liners or bottom geometry.',
    specs: [
      { label: 'Auger Diameter', value: '450 – 750 mm' },
      { label: 'Cutting Width', value: '2.5 – 3.8 meters' },
      { label: 'Working Depth', value: 'Up to 9.0 meters' },
      { label: 'Liner Protection', value: 'Polyurethane skid shoe system' }
    ],
    applications: ['Municipal wastewater ponds', 'Fly ash reservoirs', 'Geomembrane lined lagoons'],
    availability: 'Stock'
  },
  {
    id: 'bucket-wheel-dredger',
    image: '/images/photo-1581092160607-ee22621dd758.jpg',
    name: 'Bucket Wheel Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Bucket Wheel Cutter Rig',
    summary: 'Continuous rotating bucket wheel cutter delivering maximum cutting force in highly cohesive clays and consolidated sedimentary rock.',
    specs: [
      { label: 'Wheel Diameter', value: '2,200 – 3,600 mm' },
      { label: 'Cutting Force', value: '180 – 380 kN' },
      { label: 'Max Depth', value: '22 meters' },
      { label: 'Slurry Consistency', value: 'Uniform continuous feed' }
    ],
    applications: ['Heavy clay dredging', 'Bauxite / phosphate mining', 'Harbor entrance rock dredging'],
    availability: 'New Build'
  },
  {
    id: 'dam-reservoir-dredger',
    image: '/images/photo-1508739773434-c26b3d09e071.jpg',
    name: 'Dam & Reservoir Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Deep Water Desilting Platform',
    summary: 'Specialized deep-submergence dredge system engineered to recover lost storage capacity in hydro power reservoirs.',
    specs: [
      { label: 'Maximum Depth', value: 'Up to 60.0 meters' },
      { label: 'Submerged Slurry Pump', value: 'Direct ladder mounted' },
      { label: 'Slurry Discharge', value: 'Floating pipeline to downstream or shore' },
      { label: 'Positioning', value: 'Multi-winch wire anchor spread' }
    ],
    applications: ['Hydroelectric dam desilting', 'Drinking water reservoirs', 'Irrigation dam maintenance'],
    availability: 'Custom Engineered'
  },
  {
    id: 'self-propelled-rock-csd',
    image: '/images/photo-1520699049698-acd2fccb8cc8.jpg',
    name: 'Self Propelled Rock Cutter Suction Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Heavy Ocean-Going Rock Dredger',
    summary: 'Ultra-powerful ocean-going vessel with self-propulsion and heavy-duty chisel teeth cutter head capable of fracturing hard unweathered rock.',
    specs: [
      { label: 'Total Installed Power', value: '8,000 – 24,000 kW' },
      { label: 'Cutter Head Power', value: '1,500 – 4,500 kW' },
      { label: 'Rock UCS Strength', value: 'Up to 60 MPa rock' },
      { label: 'Propulsion Speed', value: '10 – 13 knots' }
    ],
    applications: ['Port channel rock excavation', 'Offshore trenching', 'Open sea fairway deepening'],
    availability: 'New Build'
  },
  {
    id: 'self-propelled-rock-bucket-wheel',
    image: '/images/photo-1569154941061-e231b4725ef1.jpg',
    name: 'Self Propelled Rock Bucket Wheel Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Rock Extraction Marine Vessel',
    summary: 'Combined self-propulsion with high-torque bucket wheel cutting mechanism for offshore rock fairways and marine civil foundations.',
    specs: [
      { label: 'Operating Depth', value: '6 – 28 meters' },
      { label: 'Bucket Wheel Drive', value: 'Direct low-speed hydraulic / electric' },
      { label: 'Classification', value: 'Ocean Service Notation' },
      { label: 'Dynamic Positioning', value: 'DP-1 / DP-2 capability' }
    ],
    applications: ['Offshore wind farm cable trenches', 'Subsea rock trenching', 'Major port construction'],
    availability: 'Custom Engineered'
  },
  {
    id: 'geotextile-filling-dredger',
    image: '/images/photo-1507525428034-b723cf961d3e.jpg',
    name: 'Geo Textile Tubes Filling Dredger',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Precision Slurry Injection Craft',
    summary: 'Calibrated low-pulsation hydraulic injection vessel with polymer dosing manifolds specifically calibrated for filling geotextile containment tubes.',
    specs: [
      { label: 'Flow Control', value: 'Automated pressure relief manifolds' },
      { label: 'Polymer Dosing', value: 'In-line automated flocculant feed' },
      { label: 'Tube Filling Rate', value: '80 – 250 m³ solid / hr' },
      { label: 'Safety Cut-Off', value: 'Digital pressure relief sensors' }
    ],
    applications: ['Breakwater tube cores', 'Dike reinforcement', 'Coastal erosion barriers'],
    availability: 'Stock'
  },
  {
    id: 'weed-harvester',
    image: '/images/photo-1516214104703-d870798883c5.jpg',
    name: 'Aquatic Weed Harvester',
    category: 'hydraulic',
    categoryLabel: 'Hydraulic Dredgers',
    vesselType: 'Aquatic Ecosystem Management Craft',
    summary: 'Twin paddle-wheel shallow draft vessel equipped with hydraulic cutting bars and conveyor storage system for removing invasive water hyacinth and weeds.',
    specs: [
      { label: 'Cutting Width', value: '2.0 – 3.2 meters' },
      { label: 'Storage Capacity', value: '8.0 – 25.0 m³' },
      { label: 'Draft', value: '0.45 meters (shallow draft)' },
      { label: 'Discharge', value: 'High-dump conveyor onto shore/truck' }
    ],
    applications: ['Inland waterways', 'Tourism lakes & canals', 'Hydro plant intake weed clearing'],
    availability: 'Stock'
  },

  // MECHANICAL DREDGERS
  {
    id: 'backhoe-dredger',
    image: '/images/photo-1504307651254-35680f356dfd.jpg',
    name: 'Backhoe Dredger (BHD)',
    category: 'mechanical',
    categoryLabel: 'Mechanical Dredgers',
    vesselType: 'Heavy Spud Mounted Excavator Pontoon',
    summary: 'Heavy maritime excavator mounted on a spud-supported pontoon, utilizing high breakout force for heavy gravel, boulders, and stiff clay.',
    specs: [
      { label: 'Excavator Weight', value: '120 – 450 Metric Tons' },
      { label: 'Bucket Capacity', value: '3.5 – 18.0 m³' },
      { label: 'Dredging Depth', value: 'Up to 24 meters' },
      { label: 'Spud System', value: '3 Heavy hydraulic spuds' }
    ],
    applications: ['Harbor quay wall trenching', 'Boulder removal', 'Hard seabed preparation'],
    availability: 'New Build'
  },
  {
    id: 'grab-dredger',
    image: '/images/photo-1605281317010-fe5ffe798166.jpg',
    name: 'Grab Dredger',
    category: 'mechanical',
    categoryLabel: 'Mechanical Dredgers',
    vesselType: 'Crane Barge with Clamshell / Orange Peel Grab',
    summary: 'Heavy revolving wire crane on a non-propelled barge handling heavy maintenance silt, debris, and riprap placement.',
    specs: [
      { label: 'Crane Capacity', value: '35 – 150 Metric Tons' },
      { label: 'Grab Volume', value: '4.0 – 25.0 m³' },
      { label: 'Dredging Depth', value: 'Up to 45 meters' },
      { label: 'Boom Length', value: '28 – 45 meters' }
    ],
    applications: ['Dock basin cleaning', 'Debris and wreckage recovery', 'Deep pit silt dredging'],
    availability: 'Stock'
  },
  {
    id: 'clamshell-dredger',
    image: '/images/photo-1590496793929-36417d3117de.jpg',
    name: 'Clamshell Dredger',
    category: 'mechanical',
    categoryLabel: 'Mechanical Dredgers',
    vesselType: 'Precision Mechanical Excavation Pontoon',
    summary: 'Dual-line or hydraulic clamshell bucket arrangement offering precise vertical edge excavation for dock walls and lock chambers.',
    specs: [
      { label: 'Bucket Types', value: 'Environmental water-tight / Heavy-tooth' },
      { label: 'Accuracy', value: 'RTK-GPS sub-decimeter bucket guidance' },
      { label: 'Operating Depth', value: '5 – 35 meters' },
      { label: 'Production', value: '300 – 1,100 m³/hr' }
    ],
    applications: ['Port lock gates', 'Quay toe trenching', 'Contaminated sediment removal'],
    availability: 'New Build'
  },
  {
    id: 'dipper-dredger',
    image: '/images/photo-1582719508461-905c673771fd.jpg',
    name: 'Dipper Dredger',
    category: 'mechanical',
    categoryLabel: 'Mechanical Dredgers',
    vesselType: 'High-Penetration Face Shovel Pontoon',
    summary: 'Forward-facing mechanical shovel with direct mechanical crowd action for breaking through cemented hardpan layers and blasted rock.',
    specs: [
      { label: 'Bucket Size', value: '6.0 – 14.0 m³' },
      { label: 'Breakout Effort', value: 'Exceeding 500 kN' },
      { label: 'Digging Depth', value: 'Up to 18 meters' },
      { label: 'Anchoring', value: 'Massive hydraulic walking spuds' }
    ],
    applications: ['Blasted rock dredging', 'Navigation channel straightening', 'Dense coral excavation'],
    availability: 'Charter'
  },

  // HOPPER DREDGERS
  {
    id: 'tshd-standard',
    image: '/images/photo-1578575437130-527eed3abbec.jpg',
    name: 'Trailing Suction Hopper Dredger (TSHD)',
    category: 'hopper',
    categoryLabel: 'Hopper Dredgers',
    vesselType: 'Self-Propelled Seagoing Vessel',
    summary: 'Seagoing hopper dredger that trails dragheads along the seabed while underway, loading sediment into internal hopper hold and sailing to offshore disposal or rainbowing to shore.',
    specs: [
      { label: 'Hopper Capacity', value: '2,500 – 18,000 m³' },
      { label: 'Dredging Depth', value: 'Up to 38.0 meters' },
      { label: 'Discharge Methods', value: 'Bottom doors / Rainbowing / Shore pumping' },
      { label: 'Sailing Speed', value: '11.5 – 15.0 knots' }
    ],
    applications: ['Long-distance channel maintenance', 'Offshore sand reclamation', 'Coastal beach nourishment'],
    availability: 'New Build'
  },
  {
    id: 'tshd-single-tube',
    image: '/images/photo-1518241353330-0f7941c2d9b5.jpg',
    name: 'TSHD Single Tube',
    category: 'hopper',
    categoryLabel: 'Hopper Dredgers',
    vesselType: 'Single Suction Pipe Hopper Craft',
    summary: 'Agile hopper vessel equipped with a single starboard trailing suction pipe, ideal for restricted harbor basins and coastal river mouths.',
    specs: [
      { label: 'Hopper Capacity', value: '1,500 – 4,500 m³' },
      { label: 'Suction Pipe Diameter', value: '600 – 800 mm' },
      { label: 'Shoal Draft', value: '4.2 meters (fully loaded)' },
      { label: 'Bow Jet Rainbowing', value: 'Up to 75 meter throw' }
    ],
    applications: ['Regional port maintenance', 'Estuary bar clearing', 'Harbor turning basins'],
    availability: 'Stock'
  },
  {
    id: 'tshd-double-tube',
    image: '/images/photo-1494412574643-ff11b0a5c1c3.jpg',
    name: 'TSHD Double Tube',
    category: 'hopper',
    categoryLabel: 'Hopper Dredgers',
    vesselType: 'Dual Suction Pipe Ocean Hopper',
    summary: 'High-production oceanic TSHD fitted with port and starboard trailing suction pipes with submerged dredge pumps on the drag arms.',
    specs: [
      { label: 'Hopper Volume', value: '6,000 – 25,000 m³' },
      { label: 'Trailing Tubes', value: 'Twin 900 – 1,200 mm diameter' },
      { label: 'Submerged Pump', value: '1,800 kW per pipe' },
      { label: 'Loading Cycle', value: '45 – 70 minutes' }
    ],
    applications: ['Mega port land reclamation', 'Island building', 'Deep offshore borrow areas'],
    availability: 'New Build'
  },
  {
    id: 'clamshell-hopper',
    image: '/images/photo-1605281317010-fe5ffe798166.jpg',
    name: 'Clamshell Loading Hopper Dredger',
    category: 'hopper',
    categoryLabel: 'Hopper Dredgers',
    vesselType: 'Integrated Crane & Hopper Ship',
    summary: 'Self-loading hopper ship combining a deck-mounted heavy duty clamshell crane with an integrated hold and bottom dump doors.',
    specs: [
      { label: 'Hopper Volume', value: '800 – 2,500 m³' },
      { label: 'Crane Reach', value: '24 meters' },
      { label: 'Dumping System', value: 'Hydraulic split-hull or bottom gates' },
      { label: 'Transit Speed', value: '9 – 11 knots' }
    ],
    applications: ['Inner port maintenance with zero pipeline clutter', 'Debris heavy berths'],
    availability: 'Charter'
  },
  {
    id: 'excavator-hopper',
    image: '/images/photo-1504307651254-35680f356dfd.jpg',
    name: 'Excavator Loading Hopper Dredger',
    category: 'hopper',
    categoryLabel: 'Hopper Dredgers',
    vesselType: 'Tracked Heavy Excavator on Hopper Hull',
    summary: 'Autonomous dredge vessel carrying a heavy hydraulic excavator traversing the hopper comb, capable of direct excavation and transport.',
    specs: [
      { label: 'Excavator Spec', value: 'Custom 80 – 150 ton excavator' },
      { label: 'Hold Capacity', value: '1,200 – 3,500 m³' },
      { label: 'Hull Type', value: 'Split-hopper catamaran / mono-hull' },
      { label: 'Discharge', value: 'Fast hydraulic bottom release' }
    ],
    applications: ['Shallow marine civil works', 'Gravel and cobble dredging', 'Coastal reef maintenance'],
    availability: 'Stock'
  },
  {
    id: 'backhoe-rock-breaker',
    image: '/images/photo-1582719508461-905c673771fd.jpg',
    name: 'Backhoe with Rock Breaker',
    category: 'hopper',
    categoryLabel: 'Hopper Dredgers',
    vesselType: 'Subaqueous Hydraulic Rock Fracturing Rig',
    summary: 'Subaqueous heavy hydraulic hammer and chisel package mounted on a stiff pontoon for non-explosive bedrock fragmentation prior to dredging.',
    specs: [
      { label: 'Hammer Impact Energy', value: '15,000 – 28,000 Joules' },
      { label: 'Operating Depth', value: 'Down to 20 meters' },
      { label: 'Acoustic Attenuation', value: 'Double bubble curtain shroud' },
      { label: 'Penetration Rate', value: '35 – 80 m³ fractured rock / hr' }
    ],
    applications: ['Harbor berths requiring deepening in solid granite / basalt', 'Trenching'],
    availability: 'Custom Engineered'
  },

  // ANCILLARY EQUIPMENT
  {
    id: 'survey-boat',
    image: '/images/photo-1524522173746-f628baad3644.jpg',
    name: 'Hydrographic Survey Boat',
    category: 'ancillary',
    categoryLabel: 'Ancillary Equipment',
    vesselType: 'Specialized Hydrographic Vessel',
    summary: 'Dedicated survey catamaran/monohull with Moonpool, motion sensor gyro, RTK GPS, and multi-beam echo sounder integration.',
    specs: [
      { label: 'Length Overall', value: '8.5 – 14.0 meters' },
      { label: 'Instrumentation', value: 'Dual-head MBES, SBP, ADCP, Sound Velocity Profiler' },
      { label: 'Survey Speed', value: '4 – 7 knots calibrated' },
      { label: 'Hull Material', value: 'Marine grade 5083 aluminium' }
    ],
    applications: ['Pre/Post dredging surveys', 'Bathymetric charting', 'Seabed scanning'],
    availability: 'Stock'
  },
  {
    id: 'passenger-speed-boat',
    image: '/images/photo-1506157786151-b8491531f063.jpg',
    name: 'Passenger Speed Boat & Crew House Boat',
    category: 'ancillary',
    categoryLabel: 'Ancillary Equipment',
    vesselType: 'Marine Personnel Transfer Vessel',
    summary: 'High-speed marine transport craft engineered for fast, secure offshore crew transfers, safety inspections, and site housing.',
    specs: [
      { label: 'Passenger Capacity', value: '12 – 36 personnel' },
      { label: 'Cruising Speed', value: '22 – 32 knots' },
      { label: 'Safety Equipment', value: 'SOLAS life rafts & dual VHF' },
      { label: 'Hull Type', value: 'Deep-V offshore monohull' }
    ],
    applications: ['Offshore crew transit', 'Site client inspections', 'Emergency standby'],
    availability: 'Stock'
  },
  {
    id: 'multicat-workboat',
    image: '/images/photo-1569154941061-e231b4725ef1.jpg',
    name: 'Multi Cat Workboat',
    category: 'ancillary',
    categoryLabel: 'Ancillary Equipment',
    vesselType: 'Heavy Multipurpose Maritime Workhorse',
    summary: 'Twin-screw workboat equipped with heavy deck crane, towing winch, tugger winches, and bow roller for anchor handling and pipeline towing.',
    specs: [
      { label: 'Bollard Pull', value: '18 – 45 Metric Tons' },
      { label: 'Deck Crane', value: 'Heila / HS Marine 90 – 220 kNm' },
      { label: 'Anchor Winch', value: '50 ton brake holding force' },
      { label: 'Towing Hook', value: 'Mampaey quick release' }
    ],
    applications: ['Dredge anchor relocation', 'Floating pipeline installation', 'Supply & fuel bunkering'],
    availability: 'Charter'
  },
  {
    id: 'tug-boat',
    image: '/images/photo-1518241353330-0f7941c2d9b5.jpg',
    name: 'Maritime Tug Boat',
    category: 'ancillary',
    categoryLabel: 'Ancillary Equipment',
    vesselType: 'Harbor & Coastal Towing Vessel',
    summary: 'High-maneuverability azimuth stern drive (ASD) or conventional twin-screw tug for towing non-propelled dredgers, crane barges, and split hoppers.',
    specs: [
      { label: 'Bollard Pull', value: '25 – 65 Metric Tons' },
      { label: 'Engine Power', value: '1,800 – 4,200 BHP' },
      { label: 'Firefighting', value: 'FiFi-1 external water monitors' },
      { label: 'Classification', value: 'Unrestricted Coastal Navigation' }
    ],
    applications: ['Fleet towing', 'Barge maneuvering in locks', 'Emergency marine salvage assistance'],
    availability: 'Stock'
  },
  {
    id: 'split-hopper-barge',
    image: '/images/photo-1494412574643-ff11b0a5c1c3.jpg',
    name: 'Self-Propelled Split Hopper Barge',
    category: 'ancillary',
    categoryLabel: 'Ancillary Equipment',
    vesselType: 'Hydraulic Longitudinal Split Barge',
    summary: 'Vessel hull splits longitudinally via massive hydraulic cylinders at deck level, rapidly discharging dredged rock or sediment in seconds.',
    specs: [
      { label: 'Hold Capacity', value: '600 – 2,000 m³' },
      { label: 'Hull Split Time', value: 'Under 90 seconds' },
      { label: 'Propulsion', value: 'Twin marine diesel with 360° rudder propellers' },
      { label: 'Draft (Loaded)', value: '3.6 – 4.5 meters' }
    ],
    applications: ['Transporting spoil from backhoes and grab dredgers to offshore dumping grounds'],
    availability: 'New Build'
  },
  {
    id: 'bottom-door-barge',
    image: '/images/photo-1578575437130-527eed3abbec.jpg',
    name: 'Bottom Door Hopper Barge',
    category: 'ancillary',
    categoryLabel: 'Ancillary Equipment',
    vesselType: 'Bottom Dumping Marine Barge',
    summary: 'Non-propelled and self-propelled hopper barges equipped with conical hydraulic bottom valves or drop doors for controlled placement.',
    specs: [
      { label: 'Capacity', value: '500 – 3,000 m³' },
      { label: 'Door System', value: 'Hydraulic chain & ram cylinder' },
      { label: 'Hull Steel', value: 'Grade A marine structural steel' },
      { label: 'Towing Bridle', value: 'Class certified heavy wire assembly' }
    ],
    applications: ['Reclamation spoil dumping', 'Coastal trench backfilling'],
    availability: 'Charter'
  },
  {
    id: 'crane-barge',
    image: '/images/photo-1590496793929-36417d3117de.jpg',
    name: 'Spud Type Pontoon Mounted Crane Barge',
    category: 'ancillary',
    categoryLabel: 'Ancillary Equipment',
    vesselType: 'Marine Construction Crane Vessel',
    summary: 'Heavy flat deck barge equipped with high-capacity pedestal or crawler crane for marine piling, block placement, and breakwater construction.',
    specs: [
      { label: 'Lifting Capacity', value: '80 – 350 Metric Tons' },
      { label: 'Deck Load Rating', value: '10 – 18 Tons/m²' },
      { label: 'Mooring Spread', value: '4-point hydraulic winches & heavy spuds' },
      { label: 'Piling Guides', value: 'Modular hydraulic sheet/tubular pile leader' }
    ],
    applications: ['Quay wall construction', 'Jetties & dolphin erection', 'Tetrapod placement'],
    availability: 'Charter'
  },

  // LAND RECLAMATION EQUIPMENT
  {
    id: 'heavy-excavators',
    image: '/images/photo-1504307651254-35680f356dfd.jpg',
    name: 'Heavy Marine Excavators',
    category: 'reclamation',
    categoryLabel: 'Land Reclamation Equipment',
    vesselType: 'Tracked Shore & Bund Earthmovers',
    summary: 'High-reach and heavy earthmoving tracked excavators configured with wide swamp tracks for shaping reclamation bunds and dykes.',
    specs: [
      { label: 'Operating Weight', value: '30 – 75 Metric Tons' },
      { label: 'Track Gauge', value: 'Low ground pressure 800–1,200 mm tracks' },
      { label: 'Reach Options', value: 'Long reach boom up to 22 meters' },
      { label: 'Hydraulics', value: 'Eco-safe Panolin fluid available' }
    ],
    applications: ['Dike bund construction', 'Silt containment dykes', 'Reclamation leveling'],
    availability: 'Stock'
  },
  {
    id: 'wheel-loaders-bulldozers',
    image: '/images/photo-1509316785289-025f5b846b35.jpg',
    name: 'Bulldozers & Wheel Loaders',
    category: 'reclamation',
    categoryLabel: 'Land Reclamation Equipment',
    vesselType: 'LGP Earthmoving Spread',
    summary: 'Low-ground-pressure (LGP) bulldozers with specialized waste blades for spreading hydraulic sand slurry as it discharges from pipelines.',
    specs: [
      { label: 'Ground Pressure', value: 'As low as 28 kPa' },
      { label: 'Blade Capacity', value: '5.5 – 12.0 m³' },
      { label: 'GPS Grade Control', value: 'Dual-antenna 3D GNSS automated blade' },
      { label: 'Engine Output', value: '175 – 340 HP' }
    ],
    applications: ['Spreading hydraulic dredge sand', 'Compaction preparation', 'Platform grading'],
    availability: 'Stock'
  },
  {
    id: 'vibrating-compactors',
    image: '/images/photo-1582719508461-905c673771fd.jpg',
    name: 'Vibrating Compactors, Road Rollers & Tippers',
    category: 'reclamation',
    categoryLabel: 'Land Reclamation Equipment',
    vesselType: 'Geotechnical Soil Densification Machinery',
    summary: 'Heavy tandem and single-drum vibratory rollers accompanied by heavy tippers and tractor dozers to achieve specified soil compaction.',
    specs: [
      { label: 'Operating Mass', value: '14 – 22 Metric Tons' },
      { label: 'Centrifugal Force', value: '280 – 390 kN' },
      { label: 'Compaction Depth', value: 'Up to 1.2 meters per lift' },
      { label: 'Support Fleet', value: 'Tippers, Dumpers & Motor Graders' }
    ],
    applications: ['Port platform densification', 'Container terminal sub-base compaction'],
    availability: 'Stock'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'survey',
    image: '/images/photo-1563986768609-322da13575f3.jpg',
    code: '01',
    title: 'Survey',
    tagline: 'High-Precision Hydrographic, Geophysical & Oceanographic Intelligence',
    description: 'We deploy cutting-edge single and multi-beam echo sounders, side-scan sonars, sub-bottom profilers, and subsea ROVs to decode seabed topography, marine geotechnical stratigraphy, and oceanographic dynamics with sub-centimeter accuracy.',
    subservices: [
      'Hydrographic Survey (Single Beam & Dual Head Multibeam Echo Sounder)',
      'Single Beam Survey (Inland shallow bathymetry)',
      'Multi Beam Survey (IHO Order 1a acoustic mapping)',
      'Geotechnical Survey (Vibrocoring, CPT, Boreholes)',
      'Oceanographic Survey (Currents, Tide, Wave Gauging & Salinity)',
      'Remotely Operated Vehicle (ROV) Subsea Inspection',
      'Side Scan Sonar Survey (High Frequency Seabed Imaging)',
      'Topographic Survey (RTK GNSS & Drone LiDAR Mapping)',
      'Land Survey (Coastal Baseline & Boundary Topography)'
    ],
    keyDeliverables: [
      'IHO S-44 Order 1a compliant bathymetric depth charts',
      'Volumetric pre-dredge & post-dredge cut/fill computation models',
      'Geotechnical soil profiling down to 30m sub-seabed',
      'Subsea pipeline and cable route hazard detection'
    ],
    targetDepths: '0.5m to 850m water depths',
    standards: ['IHO S-44 Edition 6', 'IMCA S003', 'ISO 9001:2015 QA']
  },
  {
    id: 'dredging',
    image: '/images/photo-1569154941061-e231b4725ef1.jpg',
    code: '02',
    title: 'Dredging',
    tagline: 'Deepening Waterways, Mining Aggregates & Expanding Strategic Trade Channels',
    description: 'With a versatile armada of cutter suction dredgers, trailing suction hoppers, backhoes, and amphibious platforms, Swalf Group executes turnkey capital, maintenance, and industrial power plant dredging projects across challenging geologies.',
    subservices: [
      'Capital Dredging (New Port & Terminal Deepening)',
      'Maintenance Dredging (Navigable Harbor Basins & Channels)',
      'Navigable Channel Dredging',
      'Lagoon Dredging',
      'Land Reclamation & Hydraulic Sand Pumping',
      'Rock Dredging (Fractured & Intact Formations)',
      'Inland Dredging (Rivers, Canals & Reservoirs)',
      'Fishing Harbor Dredging',
      'Marina Dredging',
      'Beach Nourishment & Coastal Erosion Protection',
      'Ash Pond Dredging (Thermal Power Plants)',
      'Dam & Reservoir Dredging',
      'Dam Tailing Dredging',
      'Thermal / Hydro / Nuclear Power Plant Dredging',
      'Gold Mine Dredging',
      'Iron Ore Dredging',
      'Shallow Water Dredging'
    ],
    keyDeliverables: [
      'Over 25 Million cubic meters dredged across key projects',
      'Discharge pipeline networks exceeding 6 kilometers with booster stations',
      'Continuous production telemetry logging density and flow velocities',
      'Zero-leak environmental turbidity monitoring and silt screen deployment'
    ],
    targetDepths: '1.0m to 60m dredging depths',
    standards: ['PIANC Guidelines', 'CEDA Dredging Standards', 'FIDIC Yellow / Silver Book']
  },
  {
    id: 'marine_construction',
    image: '/images/photo-1605281317010-fe5ffe798166.jpg',
    code: '03',
    title: 'Marine Construction',
    tagline: 'Resilient Heavy Civil Infrastructure Engineered for Harsh Oceanic Realities',
    description: 'From deep-water quay walls capable of berthing post-Panamax vessels to resilient breakwaters withstanding monsoon swell surges, Swalf Group engineers long-lasting maritime civil structures.',
    subservices: [
      'Jetty Construction (Piled & Finger Jetties)',
      'Anchor Wall Construction (Tie-Back Anchor Systems)',
      'Quay Wall Construction (Combi-wall, Diaphragm & Blockwork)',
      'Breakwater Construction (Rock Armour, Core-Loc, Tetrapod & Accropode)',
      'Copper Dam / Coffer Dam Construction (Cellular & Sheet Pile Dewatered Basins)'
    ],
    keyDeliverables: [
      'Deep foundation driven steel tubular piles (up to 2,000mm diameter)',
      'Marine grade C40/C50 concrete casting in aggressive saline splash zones',
      'Heavy riprap and armour rock placement using GPS crane bucket guides',
      'Full dry dock and cofferdam installation and dewatering'
    ],
    targetDepths: 'Up to 26m quay wall draught',
    standards: ['BS 6349 Maritime Structures', 'IS 4651 Code of Marine Practice']
  },
  {
    id: 'diving',
    image: '/images/photo-1505705694340-019e1e335916.jpg',
    code: '04',
    title: 'Diving',
    tagline: 'IMCA-Compliant Underwater Engineering, Hull Surveying & Offshore Maintenance',
    description: 'Our certified commercial diving teams and subsea technicians deliver precision underwater inspections, non-destructive testing (NDT), in-water hull cleaning, and subsea hydraulic cutting in high-turbidity and offshore environments.',
    subservices: [
      'Underwater Hull Survey (In-Water Survey IWS for Class Approval)',
      'Underwater Videography & High-Definition Photography',
      'Vessel Hull Cleaning & Biofouling Removal',
      'Bow Thruster Cleaning',
      'Rudder Cleaning & Measurement',
      'Propeller Cleaning & Polishing (Rupert Scale Grade A)',
      'Hydro Power Plant Videography & Penstock Inspection',
      'Oil & Gas Offshore Survey & Structural Inspection'
    ],
    keyDeliverables: [
      'ABS, DNV, BV, LR and IRS class-approved In-Water Survey documentation',
      'Ultrasonic thickness gauging (UTM) reports on hull plating and welds',
      'Propeller blade root MPI and dye penetrant testing',
      'Rapid mobilization 24/7 dive spread with decompression safety chamber'
    ],
    targetDepths: 'Air diving to 50m / Nitrox surface-supplied diving',
    standards: ['IMCA International Code of Practice', 'ADCI Commercial Diving Standards']
  },
  {
    id: 'consultancy',
    image: '/images/photo-1581091226825-a6a2a5aee158.jpg',
    code: '05',
    title: 'Project Management Consultancy',
    tagline: 'Strategic Maritime Advisory, Fleet Valuation, Geotechnical Due Diligence & EPC Management',
    description: 'Leveraging decades of specialized dredging know-how, our consultants advise port authorities, government ministries, infrastructure funds, and EPC contractors from feasibility through commissioning.',
    subservices: [
      'Contract Management (FIDIC Dredging & Reclamation Forms, Dispute Resolution)',
      'Tender Preparation & Technical Documentation',
      'EOI / LOI / RFP / RFQ Documentation & Bid Evaluation',
      'Estimation & Soil Strata Excavation Costing',
      'Tendering Support & Sub-contractor Management',
      'Arbitration & Legal Services in Maritime Disputes',
      'Project Management & Owner Representative Supervision',
      'Feasibility Studies for Navigable Fairways & Port Deepening',
      'Project Planning & Dredging Scheduling',
      'Technical Management (Slurry Hydraulics & Pump Matching)',
      'Equipment Evaluation & Residual Value Audits',
      'Operation Management (Fuel Minimization & Yield Optimization)'
    ],
    keyDeliverables: [
      'Dredging production rate mathematical modeling using geotechnical borehole data',
      'CapEx and OpEx cost benchmarking for port deepening ventures',
      'Shipyard technical supervision for dredger build and major refits',
      'Environmental Impact Assessment (EIA) mitigation protocols for marine work'
    ],
    targetDepths: 'Global Project Advisory',
    standards: ['FIDIC Dredging Form', 'PMI PMBOK Standards', 'ISO 55000 Asset Management']
  }
];

export const ACCESSORIES_DATA: AccessoryItem[] = [
  {
    id: 'acc-1',
    image: '/images/photo-1581092160607-ee22621dd758.jpg',
    name: 'Engine & Spare Parts',
    category: 'Power & Propulsion',
    description: 'Continuous duty marine diesel engines and OEM overhaul parts for main propulsion and auxiliary dredge pump drives.',
    specifications: 'Caterpillar, Cummins, Wärtsilä, Mitsubishi; Complete cylinder heads, fuel injectors, turbochargers.',
    material: 'OEM certified marine components with class certificates'
  },
  {
    id: 'acc-2',
    image: '/images/photo-1581094794329-c8112a89af12.jpg',
    name: 'Gear Box & Accessories',
    category: 'Mechanical Assemblies',
    description: 'Heavy-duty reduction gearboxes with built-in hydraulic clutch and multi-PTO output shafts for dredge pump coupling.',
    specifications: 'Torque rating up to 450 kNm; Ratio 2.5:1 – 6.5:1; Forced oil lubrication and dual oil coolers.',
    material: 'Carburized, case-hardened alloy steel helical gears'
  },
  {
    id: 'acc-3',
    image: '/images/photo-1581092160607-ee22621dd758.jpg',
    name: 'Dredge Pumps & Booster Pumps',
    category: 'Pumps & Hydraulics',
    description: 'Single-stage, high-chrome white iron alloy pumps designed for highly abrasive gravel, coarse sand, and rock slurries.',
    specifications: 'Impeller diameter up to 2,400mm; Flow rate up to 14,000 m³/hr; Head up to 85m.',
    material: 'High-Chrome White Cast Iron (27% Cr, 650+ HB hardness)'
  },
  {
    id: 'acc-4',
    image: '/images/photo-1563986768609-322da13575f3.jpg',
    name: 'Production Meters & Flow Meters',
    category: 'Instrumentation & Software',
    description: 'Non-intrusive full bore electromagnetic flow meters and real-time volumetric production instrumentation.',
    specifications: 'Velocity range 0.5 – 12 m/s; Accuracy ±0.5%; Ceramic / polyurethane liners; Hardened Hastelloy electrodes.',
    material: 'Ceramic lining with Hastelloy-C electrodes'
  },
  {
    id: 'acc-5',
    image: '/images/photo-1563986768609-322da13575f3.jpg',
    name: 'Density Meters & Viscosity Meters',
    category: 'Instrumentation & Software',
    description: 'Radiometric gamma and non-nuclear ultrasonic density gauges continuously monitoring solids percentage.',
    specifications: 'Accuracy ±0.005 g/cm³; ATEX explosion-proof rated; Continuous 4-20mA / Modbus digital telemetry.',
    material: 'Stainless Steel 316L transducer housing'
  },
  {
    id: 'acc-6',
    image: '/images/photo-1563986768609-322da13575f3.jpg',
    name: 'Vacuum Gauges & Pressure Gauges',
    category: 'Instrumentation & Software',
    description: 'Heavy-duty diaphragm isolated pressure and vacuum transmitters measuring dredge pump suction and discharge lines.',
    specifications: 'Suction vacuum: -1.0 to +3.0 bar; Discharge pressure: 0 to 40 bar; Pulsation dampening.',
    material: 'Flanged stainless steel housing with silicone buffer fluid'
  },
  {
    id: 'acc-7',
    image: '/images/photo-1581092580497-e0d23cbdf1dc.jpg',
    name: 'Dredge Monitoring Software',
    category: 'Instrumentation & Software',
    description: 'Integrated bridge computer suite displaying 3D cutter head location relative to design dredging channel profile.',
    specifications: 'RTK GNSS + Inclinometers + Tide correction; 3D bathymetric contour color-coded cut/fill overlay.',
    material: 'Ruggedized marine PC & dual high-bright sunlight displays'
  },
  {
    id: 'acc-8',
    image: '/images/photo-1581092580497-e0d23cbdf1dc.jpg',
    name: 'HDPE Pipes & Floaters',
    category: 'Discharge Pipeline',
    description: 'Ultra-high molecular weight polyethylene pipes resistant to abrasive sand wear, with UV-stabilized polyurethane floaters.',
    specifications: 'Pipes: SDR 11 – 26; Diameters 250 – 900 mm; Floaters: Rotomolded PE filled with PU closed-cell foam.',
    material: 'Virgin PE100 resin / Virgin HDPE'
  },
  {
    id: 'acc-9',
    image: '/images/photo-1581094794329-c8112a89af12.jpg',
    name: 'Rubber Hoses & Self Floating Rubber Hoses',
    category: 'Discharge Pipeline',
    description: 'Steel ring reinforced flexible discharge hoses and integrated self-floating hoses for high wave action.',
    specifications: 'Working pressure 15 – 30 bar; Internal diameter 350 – 1,000 mm; Self-floating reserve buoyancy 20%.',
    material: 'Abrasive-resistant natural synthetic rubber blend with steel cord'
  },
  {
    id: 'acc-10',
    image: '/images/photo-1580974852861-c381510bc98a.jpg',
    name: 'Hydraulic Systems',
    category: 'Pumps & Hydraulics',
    description: 'High-pressure proportional hydraulic power units (HPU) for spud lifting, cutter drive motors, and swing winches.',
    specifications: 'Working pressure up to 350 bar; Proportional servo control; Dual filtration down to 3 microns.',
    material: 'Parker, Rexroth, and Hägglunds high-pressure components'
  },
  {
    id: 'acc-11',
    image: '/images/photo-1580974852861-c381510bc98a.jpg',
    name: 'Floating Conveyor Belts',
    category: 'Mechanical Assemblies',
    description: 'Modular pontoon-mounted continuous belt conveyor systems for transporting dredged aggregate directly to shore without water.',
    specifications: 'Belt width 800 – 1,400 mm; Conveying capacity up to 1,500 tons/hr; Articulated pontoon links.',
    material: 'Corrosion-resistant galvanized steel truss and rubber belt'
  },
  {
    id: 'acc-12',
    image: '/images/photo-1580974852861-c381510bc98a.jpg',
    name: 'Cutter Head Assemblies & Pick Points',
    category: 'Mechanical Assemblies',
    description: 'Crown cutter heads engineered with interchangeable rock chisel teeth, serrated clay blades, and sand picks.',
    specifications: 'Power handling 150 – 1,500 kW; Diameters 1,100 – 3,200 mm; Lock-pin tooth system.',
    material: 'Cast alloy steel with tungsten carbide hardfacing overlays'
  },
  {
    id: 'acc-13',
    image: '/images/photo-1520699049698-acd2fccb8cc8.jpg',
    name: 'Booster Stations',
    category: 'Pumps & Hydraulics',
    description: 'Skid-mounted or pontoon-mounted diesel/electric booster stations extending discharge pipeline distance beyond 8km.',
    specifications: 'Engine power 1,200 – 3,500 kW; Variable frequency speed regulation; Automated bypass valves.',
    material: 'Heavy structural steel skid, vibration isolated'
  },
  {
    id: 'acc-14',
    image: '/images/photo-1590496793929-36417d3117de.jpg',
    name: 'Anchor Systems & High-Holding-Power Anchors',
    category: 'Mooring & Anchoring',
    description: 'Delta-style and Danforth-style high holding power marine anchors engineered for swinging cutter suction dredgers.',
    specifications: 'Weights 750 kg – 8,000 kg; Holding power ratio up to 25:1 in mud and sand.',
    material: 'High-tensile forged cast steel'
  },
  {
    id: 'acc-15',
    image: '/images/photo-1581092160607-ee22621dd758.jpg',
    name: 'Ladder Assemblies, Spud Poles & Grabs',
    category: 'Mechanical Assemblies',
    description: 'Structural dredging ladder beams, cutter drive shafts, heavy spud carrier poles, and clamshell grabs.',
    specifications: 'Ladders up to 35m length; Spuds up to 1,400mm diameter and 45m length with cast steel points.',
    material: 'High-strength structural maritime grade S355 steel'
  }
];

export const BUY_SELL_OPTIONS = [
  {
    id: 'DREDGERS_FOR_SALE',
    image: '/images/photo-1520699049698-acd2fccb8cc8.jpg',
    tag: 'NEW & REFURBISHED FLEET',
    title: 'Dredgers For Sale',
    subtitle: 'High-Production Cutter Suction & Hopper Vessels',
    desc: 'Acquire brand-new or fully certified pre-owned dredgers inspected to IACS classification standards with complete hull and pump ultrasonic logs.',
    features: ['New Build custom naval construction', 'Pre-owned inspected Cutter Suction Dredgers (CSD)', 'Trailing Suction Hopper Dredgers (TSHD)', 'Multipurpose Amphibious Dredgers in stock'],
    actionText: 'View Available Dredgers'
  },
  {
    id: 'USED_DREDGERS',
    image: '/images/photo-1569154941061-e231b4725ef1.jpg',
    tag: 'CERTIFIED SECONDARY MARKET',
    title: 'Used Dredgers & Equipment',
    subtitle: 'Cost-Effective Turnkey Mobilization',
    desc: 'Cost-effective, class-surveyed used dredgers, split-hopper barges, and tugboats ready for immediate operational deployment with zero shipyard backlog wait.',
    features: ['Complete dry-dock survey & NDT records', 'Overhauled diesel engines and slurry pumps', 'Significant CapEx savings per cubic meter', 'Immediate delivery across Indian & international ports'],
    actionText: 'Explore Pre-Owned Inventory'
  },
  {
    id: 'CHARTER_RENTAL',
    image: '/images/photo-1578575437130-527eed3abbec.jpg',
    tag: 'WET & DRY CHARTER',
    title: 'Dredger Charter & Rental',
    subtitle: 'Flexible Bareboat & Time Charter Contracts',
    desc: 'Mobilize heavy dredging machinery on flexible charter terms: short-term maintenance stints or multi-year capital deepening contracts with certified Dredge Masters.',
    features: ['Wet Charter: Fully crewed, fueled, and operationally managed', 'Dry Charter: Bareboat vessel rental with technical support', 'Hire Purchase & Equipment Financing options available', 'Dedicated on-site spares cache and mechanical crew'],
    actionText: 'Request Charter Rates'
  },
  {
    id: 'SELL_YOUR_DREDGER',
    image: '/images/photo-1605281317010-fe5ffe798166.jpg',
    tag: 'ASSET DISPOSITION',
    title: 'Sell Your Dredger',
    subtitle: 'Global Maritime Buyer Network',
    desc: 'Leverage Swalf Group’s international network of port operators, civil contractors, and mining entities to monetize your surplus marine fleet.',
    features: ['Professional marine survey and valuation', 'Confidential asset listing to verified buyers', 'Escrow, contract and class transfer facilitation', 'Fair market valuation benchmarking'],
    actionText: 'Submit Dredger For Sale'
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-1',
    type: 'Brochure',
    title: 'Swalf Group Corporate Capabilities & Fleet Brochure 2026',
    date: 'Updated September 2026',
    summary: 'Comprehensive 48-page technical dossier covering our complete dredger fleet specifications, civil marine infrastructure projects, and hydrographic survey capabilities.',
    readTimeOrSize: 'PDF · 14.8 MB'
  },
  {
    id: 'res-2',
    type: 'TSHD Fact',
    title: 'Technical Facts: Trailing Suction Hopper Dredger (TSHD) Operations',
    date: 'Technical Paper',
    summary: 'Detailed operational breakdown of trailing suction hopper dredging physics: fluid draghead velocity, hopper overflow mixture optimization, and shore rainbowing mechanics.',
    readTimeOrSize: '8 Min Read'
  },
  {
    id: 'res-3',
    type: 'News',
    title: 'Swalf Group Completes Major Capital Fairway Deepening in Western India',
    date: 'Recent Milestone',
    summary: 'Successfully excavated 5.2 million cubic meters of dense alluvial sand and rock to achieve a -17.5m CD draft for next-generation post-Panamax container vessels.',
    readTimeOrSize: '5 Min Read'
  },
  {
    id: 'res-4',
    type: 'Blog',
    title: 'Optimizing Slurry Pipeline Hydraulics in Long-Distance Land Reclamation',
    date: 'Engineering Insight',
    summary: 'How in-line booster pump stations and real-time radiometric density sensors prevent critical settling velocity drop and reduce diesel consumption by up to 18%.',
    readTimeOrSize: '10 Min Read'
  }
];

export const TERMINOLOGY_DATA: TerminologyItem[] = [
  {
    term: 'Cutter Suction Dredger',
    abbreviation: 'CSD',
    category: 'Vessel Classification',
    definition: 'A stationary or self-propelled dredger equipped with a rotating cutter head at the ladder suction mouth to mechanically fracture hard soil and rock prior to hydraulic pump extraction.'
  },
  {
    term: 'Trailing Suction Hopper Dredger',
    abbreviation: 'TSHD',
    category: 'Vessel Classification',
    definition: 'A self-propelled ocean-going vessel that trails one or two suction pipes along the seabed while cruising, storing dredged sediment in internal hopper holds.'
  },
  {
    term: 'Chart Datum',
    abbreviation: 'CD',
    category: 'Hydrographic Survey',
    definition: 'The reference tidal water level to which navigational soundings and dredged depths are referred, typically Lowest Astronomical Tide (LAT).'
  },
  {
    term: 'Multibeam Echo Sounder',
    abbreviation: 'MBES',
    category: 'Survey Technology',
    definition: 'An acoustic instrument that transmits a wide fan-shaped swath of sound beams beneath the survey vessel, measuring hundreds of discrete seabed depth points per ping.'
  },
  {
    term: 'In-Water Survey',
    abbreviation: 'IWS',
    category: 'Diving & Classification',
    definition: 'A class-approved underwater inspection performed by certified commercial divers in lieu of intermediate dry-docking to inspect hull plating, rudder clearances, and propeller condition.'
  },
  {
    term: 'Slurry Settling Velocity',
    abbreviation: 'Vs',
    category: 'Pipeline Hydraulics',
    definition: 'The minimum flow velocity required in a dredging discharge pipeline to keep solid sand or rock particles in suspension and prevent catastrophic pipeline blockage.'
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'hydraulics-tech',
    title: 'Hydraulics Technician',
    department: 'Marine Engineering & Fleet Maintenance',
    location: 'Coastal Fleet Operations, India',
    experience: '3 – 6 Years',
    type: 'Full-Time / Offshore Rotation',
    overview: 'Responsible for troubleshooting, repairing, and commissioning high-pressure hydraulic circuits, proportional valves, spud lift cylinders, and cutter head hydraulic drive motors on active dredgers.',
    responsibilities: [
      'Inspect and overhaul Rexroth, Parker, and Hagglunds hydraulic pump/motor systems.',
      'Perform scheduled hydraulic oil contamination analysis, flushing, and filter replacements.',
      'Calibrate proportional directional control valves and PLC hydraulic pressure feedback loops.',
      'Ensure zero hydraulic fluid discharge into marine environments.'
    ],
    qualifications: [
      'Diploma or Degree in Mechanical / Hydraulic Engineering.',
      'Demonstrated expertise in high-pressure maritime hydraulic circuits (>250 bar).',
      'Valid offshore safety training (BOSIET / STCW) preferred.'
    ]
  },
  {
    id: 'dredge-master',
    title: 'Dredge Master (Captain)',
    department: 'Dredging Operations',
    location: 'Project Sites / Offshore India & International',
    experience: '7 – 12 Years',
    type: 'Rotational 6 Weeks On / 2 Weeks Off',
    overview: 'Lead the navigation, dredging production, crew discipline, and maritime safety of large Cutter Suction Dredgers (CSD) or Trailing Suction Hopper Dredgers (TSHD).',
    responsibilities: [
      'Direct cutter swing angles, spud movements, and draghead speeds to optimize cubic meter output.',
      'Liaise with Client Representatives and Port Authorities on bathymetric channel clearances.',
      'Manage deck crew, safety drills, and emergency contingency procedures in accordance with ISM code.',
      'Analyze daily production logs, soil stratification transitions, and discharge pipe pressures.'
    ],
    qualifications: [
      'Master Mariner / Dredge Master Certificate of Competency.',
      'Minimum 5 years as Dredge Master on large CSD or TSHD vessels.',
      'Comprehensive understanding of RTK GPS 3D dredge monitoring software.'
    ]
  },
  {
    id: 'dredge-operator',
    title: 'Dredge Operator',
    department: 'Operations',
    location: 'Coastal Projects, India',
    experience: '3 – 7 Years',
    type: 'Full-Time',
    overview: 'Control the dredge consoles: managing dredge pump vacuum, discharge pressure, cutter head RPM, and anchor winches during 12-hour operational shifts.',
    responsibilities: [
      'Operate joystick consoles for swing winches, spud carriers, and ladder hoist rams.',
      'Maintain peak slurry density without triggering pump cavitation or pipeline blockages.',
      'Monitor depth gauges and echo sounder readouts to maintain contracted dredge slopes.',
      'Execute routine daily machinery checklists before shift change.'
    ],
    qualifications: [
      'Technical certification / STCW certification with 3+ years operational experience on CSD.',
      'Strong mechanical intuition and quick emergency reaction skills.'
    ]
  },
  {
    id: 'deck-man',
    title: 'Deck Man / Lead Deckhand',
    department: 'Deck Operations',
    location: 'Vessel Operations, India',
    experience: '2 – 4 Years',
    type: 'Full-Time',
    overview: 'Carry out deck seamanship, anchor handling, steel wire inspections, pipeline flange boltings, and mooring operations on dredgers and multicat workboats.',
    responsibilities: [
      'Connect and disconnect floating HDPE pipe sections and rubber flanged hoses.',
      'Assist anchor handling tug during delta anchor relocation.',
      'Perform routine greasing of deck sheaves, winches, and fairleads.',
      'Maintain deck cleanliness and assist with gangway security.'
    ],
    qualifications: [
      'STCW 2010 Basic Safety Training certified.',
      'Prior experience on dredging vessels, tugboats, or marine construction barges.'
    ]
  },
  {
    id: 'reclamation-engineer',
    title: 'Reclamation Engineer',
    department: 'Civil Marine Engineering',
    location: 'Site Location / Port Development Area',
    experience: '4 – 8 Years',
    type: 'Full-Time',
    overview: 'Manage the land reclamation discharge zone: directing pipeline shore distribution, perimeter dyke containment, spillbox water discharge, and soil settlement monitoring.',
    responsibilities: [
      'Coordinate with the dredger on slurry arrival times, sand grading, and discharge pipe movements.',
      'Supervise bulldozers and wheel loaders leveling hydraulic sand fills.',
      'Monitor effluent return water turbidity to comply with coastal environmental clearances.',
      'Oversee geotechnical settlement plate readings and California Bearing Ratio (CBR) soil tests.'
    ],
    qualifications: [
      'Bachelor’s Degree in Civil Engineering, Marine Engineering, or Geotechnical Engineering.',
      'Hands-on experience in hydraulic reclamation or coastal port earthworks.'
    ]
  },
  {
    id: 'engine-room-engineer',
    title: 'Engine Room Engineer (Marine)',
    department: 'Fleet Maintenance',
    location: 'Offshore Vessel Operations',
    experience: '4 – 8 Years',
    type: 'Full-Time / Rotational',
    overview: 'Responsible for the operation, preventive maintenance, and emergency repair of marine main engines, diesel generators, air compressors, and dredge pump gearboxes.',
    responsibilities: [
      'Oversee daily maintenance of engines up to 4,000 BHP.',
      'Monitor engine cooling water jackets, lube oil separators, and exhaust temperatures.',
      'Conduct vibration monitoring on heavy dredge pump shafts and reduction gearboxes.',
      'Maintain engine room logbooks and bunker fuel consumption ledgers.'
    ],
    qualifications: [
      'Marine Engineering Degree / Class 3 or Class 4 Marine Engineer Officer Certificate.',
      'Proven background with high-power industrial diesel engines (Caterpillar/Wärtsilä).'
    ]
  }
];

export const CAPABILITIES_DATA: ProjectCapability[] = [
  {
    id: 'cap-1',
    image: '/images/photo-1578575437130-527eed3abbec.jpg',
    title: 'Deepwater Port Channel Capital Deepening',
    category: 'Capital Dredging',
    location: 'Western Seaboard, India',
    volumeOrScale: '5,200,000 m³ Excavated',
    waterDepth: 'Deepened from -11.0m to -17.5m CD',
    equipmentUsed: 'Rock Cutter Suction Dredgers + 2x Split Hopper Barges',
    description: 'Deepened an 8.4 km ocean fairway to accommodate Capesize container vessels, cutting through cemented sandstone and dense alluvial clays.',
    keyMetric: '99.4% On-Schedule Execution'
  },
  {
    id: 'cap-2',
    image: '/images/photo-1509316785289-025f5b846b35.jpg',
    title: 'Major Container Terminal Port Reclamation',
    category: 'Marine Land Reclamation',
    location: 'Eastern Maritime Corridor',
    volumeOrScale: '140 Hectares Reclaimed',
    waterDepth: '-4.0m to +5.5m Above Mean Sea Level',
    equipmentUsed: 'Trailing Suction Hopper Dredger + 3km Shore Pipeline',
    description: 'Pumped clean sea sand over 3.2 kilometers through booster pump stations to create an industrial yard platform for 4 berths with zero ecological breaches.',
    keyMetric: '4.8M m³ High-Density Sand Placed'
  },
  {
    id: 'cap-3',
    image: '/images/photo-1590496793929-36417d3117de.jpg',
    title: 'Strategic Naval Breakwater & Quay Wall Piling',
    category: 'Marine Construction',
    location: 'Southern Coastal Defense Port',
    volumeOrScale: '1,450 Linear Meters Quay Wall',
    waterDepth: '-16.0m Berth Draught',
    equipmentUsed: 'Heavy Lift Crane Barges, Hydraulic Piling Leaders',
    description: 'Turnkey fabrication and driving of 1,600mm diameter steel tubular combi-wall piles, installation of heavy tie-back anchors and cast-in-situ concrete capping beams.',
    keyMetric: '100-Year Structural Design Life'
  },
  {
    id: 'cap-4',
    image: '/images/photo-1524522173746-f628baad3644.jpg',
    title: 'Multibeam Hydrographic & Geotechnical Survey Corridor',
    category: 'Hydrographic Survey',
    location: 'Gulf Maritime Approaches',
    volumeOrScale: '280 Nautical Miles Surveyed',
    waterDepth: '1.5m to 120m Depth Contours',
    equipmentUsed: 'Dedicated Survey Catamaran with Kongsberg Dual-Head MBES',
    description: 'Pre-engineering baseline bathymetry, side-scan sonar seabed obstruction classification, and 45 offshore vibrocore sampling points for international pipeline routing.',
    keyMetric: 'IHO Order 1a Certification'
  },
  {
    id: 'cap-5',
    image: '/images/photo-1544551763-46a013bb70d5.jpg',
    title: 'Subsea Hull Inspection & Commercial Diver Salvage',
    category: 'Commercial Diving',
    location: 'Deepwater Anchorage Terminal',
    volumeOrScale: '38 Vessel Hull Clearances',
    waterDepth: '22m Anchorage Depth',
    equipmentUsed: 'Surface-Supplied Nitrox Dive Spread & Underwater CCTV',
    description: 'Class-approved in-water survey (IWS), propeller hydraulic cold straightening, underwater welding of bilge keels, and sea chest blanking.',
    keyMetric: 'Zero Diving Incidents Across 4,200 Dive Hours'
  }
];
