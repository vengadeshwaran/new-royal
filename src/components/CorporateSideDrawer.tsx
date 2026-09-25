import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  X,
  Anchor,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  PhoneCall,
  Mail,
  MapPin,
  Search,
  Ship,
  Compass,
  Wrench,
  FileText,
  Layers,
  ShieldCheck,
  Briefcase,
  Award,
  Sparkles,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';

const CustomAnchorIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.156 480.156">
    <g>
      <path d="M297.213,16.538c0-9.13-7.408-16.538-16.538-16.538h-81.191c-9.132,0-16.54,7.408-16.54,16.538v23.557h114.27V16.538z" />
      <path d="M251.824,148.937l114.709,45.153v-32.655c0-19.428-15.757-35.178-35.177-35.178h-34.144V72.17h-114.27v54.087h-34.143c-19.421,0-35.178,15.749-35.178,35.178v32.655l114.709-45.153C235.881,145.962,244.275,145.962,251.824,148.937z" />
      <path d="M416.603,248.266l-160.487-63.173v136.675c0,8.856-7.174,16.038-16.038,16.038c-8.863,0-16.037-7.182-16.037-16.038V185.093L63.553,248.266c-6.657,2.614-10.04,10.03-7.66,16.766l59.705,169.172c9.725,27.534,35.756,45.952,64.949,45.952h119.063c29.193,0,55.225-18.418,64.95-45.952l59.704-169.172C426.643,258.296,423.262,250.88,416.603,248.266z" />
    </g>
  </svg>
);

interface CorporateSideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (prefillItem?: string) => void;
}

interface SubItem {
  name: string;
  subtitle: string;
  path: string;
  tag?: string;
  quoteItem?: string;
}

interface NavSection {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  badge?: string;
  icon: React.ReactNode;
  path: string;
  subItems?: SubItem[];
}

export const CorporateSideDrawer: React.FC<CorporateSideDrawerProps> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>('products');
  const drawerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 250);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navSections: NavSection[] = [
    {
      id: 'company',
      code: '01',
      title: 'Company & Governance',
      subtitle: 'Corporate heritage, 15+ years maritime legacy, mission, vision & board ethics',
      badge: 'Est. 2010',
      icon: <CustomAnchorIcon className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/about',
      subItems: [
        {
          name: 'About Swalf Group',
          subtitle: 'Established in 2010, driving port infrastructure & dredging operations across Asia.',
          path: '/about',
          tag: 'Corporate Profile'
        },
        {
          name: 'Mission & Vision Statements',
          subtitle: 'Pioneering sustainable dredging excellence, green technologies & marine safety.',
          path: '/about#mission-vision',
          tag: 'Future Vision'
        },
        {
          name: 'Core Business Ethics',
          subtitle: 'Uncompromising integrity, contractual transparency, employee welfare & environmental codes.',
          path: '/ethics',
          tag: 'ISO 9001:2015'
        },
        {
          name: 'Our Core Business Pillars',
          subtitle: 'Comprehensive 6-pillar marine spread across capital, maintenance & EPC works.',
          path: '/about#core-business',
          tag: '6 Core Pillars'
        },
        {
          name: 'Why Choose Swalf',
          subtitle: '15+ years proven field execution, global classification compliance & rapid mobilization.',
          path: '/about#why-swalf',
          tag: 'Our Advantage'
        }
      ]
    },
    {
      id: 'products',
      code: '02',
      title: 'Maritime Equipment & Fleet',
      subtitle: 'Heavy-duty cutter suction, trailing hopper, amphibious & mechanical grab dredgers',
      badge: 'Certified Fleet',
      icon: <Ship className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/products',
      subItems: [
        {
          name: 'Cutter Suction Dredger (CSD)',
          subtitle: 'High-yield hydraulic rock & sand dredger with rotating cutter head up to 30m depth.',
          path: '/products',
          tag: 'High Yield',
          quoteItem: 'Cutter Suction Dredger (CSD)'
        },
        {
          name: 'Custom Built Special Dredgers',
          subtitle: 'Purpose-built modular configurations tailored for shallow draft or tight berths.',
          path: '/products',
          tag: 'Custom Engineered',
          quoteItem: 'Custom Built Dredgers'
        },
        {
          name: 'Multi Purpose Amphibious Dredger',
          subtitle: 'Self-propelled excavator dredger operating effortlessly in marshland, shallows & land.',
          path: '/products',
          tag: 'All-Terrain',
          quoteItem: 'Amphibious Dredger'
        },
        {
          name: 'Backhoe & Grab Dredgers (BHD)',
          subtitle: 'Heavy marine excavation for compacted boulders, hard clay and quay wall trenches.',
          path: '/products',
          tag: 'Hard Seabed',
          quoteItem: 'Mechanical Dredgers'
        },
        {
          name: 'Trailing Suction Hopper (TSHD)',
          subtitle: 'Self-navigating ocean-going dredgers for fairway maintenance & deep reclamation.',
          path: '/products',
          tag: 'Ocean Going',
          quoteItem: 'Hopper Dredger (TSHD)'
        },
        {
          name: 'Ancillary Workboats & Split Barges',
          subtitle: 'Tugboats, anchor handling vessels, fuel tenders and self-propelled bottom dump barges.',
          path: '/products',
          tag: 'Support Fleet',
          quoteItem: 'Ancillary Fleet'
        },
        {
          name: 'Land Reclamation Spread',
          subtitle: 'High-volume rainbow nozzles, spreader pontoons and hydraulic land leveling equipment.',
          path: '/products',
          tag: 'Reclamation Spread',
          quoteItem: 'Land Reclamation Spread'
        }
      ]
    },
    {
      id: 'services',
      code: '03',
      title: 'Services & Operations',
      subtitle: 'Specialized hydrographic survey, dredging, marine civil contracting, diving & PMC',
      badge: 'Turnkey Operations',
      icon: <Compass className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/services',
      subItems: [
        {
          name: '01. Hydrographic & Geotechnical Survey',
          subtitle: 'Multibeam bathymetric mapping, sub-bottom profiling & side-scan sonar seabed analysis.',
          path: '/services',
          tag: 'IHO Special Order',
          quoteItem: 'Survey Services'
        },
        {
          name: '02. Capital & Maintenance Dredging',
          subtitle: 'Port channel expansion, berth deepening, navigation clearance & river desiltation.',
          path: '/services',
          tag: 'Capital & Maintenance',
          quoteItem: 'Dredging Operations'
        },
        {
          name: '03. Marine Construction & Quay Walls',
          subtitle: 'Berth construction, breakwaters, groynes, geotextile tubes and cofferdams.',
          path: '/services',
          tag: 'Marine Civil Works',
          quoteItem: 'Marine Construction'
        },
        {
          name: '04. Commercial Diving & Hull NDT',
          subtitle: 'IMCA-compliant subsea welding, hull underwater inspections & ultrasonic NDT.',
          path: '/services',
          tag: 'Class NDT Certified',
          quoteItem: 'Commercial Diving'
        },
        {
          name: '05. Project Management Consultancy (PMC)',
          subtitle: 'Tender drafting, volume quantity estimation, environmental audit & site QA/QC.',
          path: '/services',
          tag: 'FIDIC / EPC Management',
          quoteItem: 'PMC Services'
        }
      ]
    },
    {
      id: 'marketplace',
      code: '04',
      title: 'Dredger Marketplace',
      subtitle: 'Commercial brokerage desk for buying, selling, wet charter and bareboat vessel leases',
      badge: 'Charter & Sales',
      icon: <Layers className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/marketplace',
      subItems: [
        {
          name: 'Buy New Custom Dredgers',
          subtitle: 'Commission custom new-build dredgers engineered to your project specifications.',
          path: '/marketplace',
          tag: 'New Build Orders',
          quoteItem: 'Buy New Dredger'
        },
        {
          name: 'Pre-Owned Certified Dredgers',
          subtitle: 'Inspected pre-owned vessels with complete class history and machinery certificates.',
          path: '/marketplace',
          tag: 'Certified Pre-Owned',
          quoteItem: 'Buy Used Dredger'
        },
        {
          name: 'Charter & Rental Fleet (Bareboat / Wet)',
          subtitle: 'Flexible short or long-term charter terms with or without certified offshore crew.',
          path: '/marketplace',
          tag: 'Immediate Mobilization',
          quoteItem: 'Dredger Charter'
        },
        {
          name: 'Sell Your Marine Asset / Fleet',
          subtitle: 'List your vessel for sale or charter on our global maritime brokerage network.',
          path: '/marketplace',
          tag: 'Global Brokerage',
          quoteItem: 'Sell Dredger Asset'
        }
      ]
    },
    {
      id: 'accessories',
      code: '05',
      title: 'Dredging Accessories & Spares',
      subtitle: 'Industrial-grade dredge pumps, tungsten carbide cutter heads, pipelines and telemetry',
      badge: 'OEM Spares',
      icon: <Wrench className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/accessories',
      subItems: [
        {
          name: 'Dredge Pumps & Booster Stations',
          subtitle: 'High-efficiency abrasion-resistant slurry pumps delivering up to 8,500 m³/hr capacity.',
          path: '/accessories',
          tag: 'High-Chrome White Iron',
          quoteItem: 'Dredge Pumps'
        },
        {
          name: 'Rock Cutter Heads & Pick Points',
          subtitle: 'Tungsten carbide pick points and chisel teeth for hard rock and coral excavation.',
          path: '/accessories',
          tag: 'Extreme Abrasion',
          quoteItem: 'Cutter Heads'
        },
        {
          name: 'Slurry Discharge Steel & HDPE Pipes',
          subtitle: 'Seamless steel and high-density polyethylene pipelines with floating collars.',
          path: '/accessories',
          tag: 'PN 10 - PN 25',
          quoteItem: 'Discharge Pipes'
        },
        {
          name: 'Production Gauges & Slurry Flowmeters',
          subtitle: 'Real-time non-nuclear density meters, velocity sensors and dredge vacuum monitors.',
          path: '/accessories',
          tag: 'Digital Telemetry',
          quoteItem: 'Production Meters'
        }
      ]
    },
    {
      id: 'capabilities',
      code: '06',
      title: 'Projects & Capabilities',
      subtitle: 'Harbor deepening, coastal protection, land reclamation and subsea trenching portfolio',
      badge: 'Over 25M m³ Delivered',
      icon: <ShieldCheck className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/capabilities',
      subItems: [
        {
          name: 'Port & Channel Capital Deepening',
          subtitle: 'Deepening navigational approaches to accommodate Capesize and Post-Panamax vessels.',
          path: '/capabilities',
          tag: 'Depths to -18.5m CD'
        },
        {
          name: 'Coastal Reclamation & Beach Nourishment',
          subtitle: 'Creating waterfront land platforms and restoring eroded coastal shorelines.',
          path: '/capabilities',
          tag: 'High-Volume Sand'
        },
        {
          name: 'Breakwaters, Jetties & Cofferdams',
          subtitle: 'Heavy armor rock revetments and marine civil protective coastal barriers.',
          path: '/capabilities',
          tag: 'Marine Civil Works'
        },
        {
          name: 'Subsea Pipeline & Intake Trenching',
          subtitle: 'Precision seabed trenching and backfilling for thermal and desalination outfalls.',
          path: '/capabilities',
          tag: 'Offshore Trenching'
        }
      ]
    },
    {
      id: 'resources',
      code: '07',
      title: 'Resources & Lexicon',
      subtitle: 'Technical terminology lexicon, dredging calculations and QHSE compliance guidelines',
      badge: 'Knowledge Base',
      icon: <FileText className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/resources',
      subItems: [
        {
          name: 'Dredging Terminology Lexicon',
          subtitle: 'Comprehensive technical A-to-Z dictionary covering maritime & dredging terms.',
          path: '/resources',
          tag: '100+ Definitions'
        },
        {
          name: 'Industry News & Operational Studies',
          subtitle: 'Technical reports, production optimization insights and field case studies.',
          path: '/resources',
          tag: 'Engineering Papers'
        },
        {
          name: 'Technical Compliance & QHSE Standards',
          subtitle: 'International marine safety, MARPOL protocols and environmental monitoring.',
          path: '/resources',
          tag: 'PIANC & IMCA'
        }
      ]
    },
    {
      id: 'careers',
      code: '08',
      title: 'Maritime Careers',
      subtitle: 'Join our offshore fleet and shore-based marine civil engineering workforce',
      badge: 'We are Hiring',
      icon: <Briefcase className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/careers',
      subItems: [
        {
          name: 'Dredge Master & Operators',
          subtitle: 'Offshore dredge commanders with proven CSD and TSHD operational credentials.',
          path: '/careers',
          tag: 'Offshore Positions'
        },
        {
          name: 'Hydraulic & Marine Technicians',
          subtitle: 'Specialists in marine diesel, high-pressure hydraulics and electrical systems.',
          path: '/careers',
          tag: 'Fleet Technical Crew'
        },
        {
          name: 'Reclamation & Civil Engineers',
          subtitle: 'Field engineers overseeing hydraulic discharge, leveling and soil compaction.',
          path: '/careers',
          tag: 'Marine Civil Ops'
        },
        {
          name: 'Submit Your CV / Resume',
          subtitle: 'Direct recruitment portal for officers, crew members and project managers.',
          path: '/careers',
          tag: 'Direct Application'
        }
      ]
    },
    {
      id: 'ethics',
      code: '09',
      title: 'Corporate Ethics & Values',
      subtitle: 'Integrity, transparency, safety culture, environmental protection & employee welfare',
      badge: 'Zero Tolerance',
      icon: <Award className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/ethics'
    },
    {
      id: 'quote',
      code: '10',
      title: 'Tenders & Enquiries',
      subtitle: 'Direct RFP submissions, BoQ estimates, technical tenders and volume calculations',
      badge: 'Get Fast Quote',
      icon: <ArrowUpRight className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/quote'
    },
    {
      id: 'contact',
      code: '11',
      title: 'Contact Us & Global Desk',
      subtitle: 'Headquarters in Chennai, regional project offices and 24/7 marine emergency line',
      badge: '24/7 Operations Desk',
      icon: <PhoneCall className="w-5 h-5 text-[#0B5CAB]" />,
      path: '/contact'
    }
  ];

  const handleNavigate = (path: string) => {
    onClose();
    if (path.includes('#')) {
      const [routePath, hash] = path.split('#');
      navigate(routePath);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Filtered list based on search
  const filteredSections = navSections.filter((section) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = section.title.toLowerCase().includes(q);
    const subtitleMatch = section.subtitle.toLowerCase().includes(q);
    const subMatch = section.subItems?.some(
      (sub) =>
        sub.name.toLowerCase().includes(q) ||
        sub.subtitle.toLowerCase().includes(q) ||
        (sub.tag && sub.tag.toLowerCase().includes(q))
    );
    return titleMatch || subtitleMatch || subMatch;
  });

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#052B52]/75 backdrop-blur-sm transition-opacity duration-400 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Side Pop-up Drawer (Left-to-Right placement with smooth rounded right edge and generous spacing) */}
      <aside
        ref={drawerRef}
        aria-label="Corporate Navigation Menu"
        className={`fixed top-0 bottom-0 left-0 z-50 w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] bg-transparent text-[#102A43] shadow-[0_25px_70px_rgba(5,43,82,0.45)] flex flex-col rounded-r-2xl sm:rounded-r-3xl overflow-hidden transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] p-4 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='border-r border-[#DCE8F2] bg-white overflow-hidden rounded-2xl sm:rounded-r-3xl'>
        {/* <div className="h-1.5 bg-gradient-to-r from-[#063B73] via-[#0B5CAB] to-[#38BDF8] shrink-0 " /> */}

        {/* Drawer Header with Generous Padding & Smooth Rounded Corners */}
        <div className="p-5 sm:p-6 border-b border-[#DCE8F2] bg-gradient-to-r from-[#F4F9FD] via-white to-[#F4F9FD] flex items-center justify-between relative shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#063B73] flex items-center justify-center text-white shadow-md ring-2 ring-[#0B5CAB]/25 shrink-0">
              <CustomAnchorIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-black tracking-tight text-lg sm:text-xl text-[#052B52] leading-none uppercase">
                  SWALF GROUP
                </span>
              </div>
            </div>
          </div>

          {/* Close Button with Smooth Rounded Corners */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[#526777] hover:text-[#063B73] hover:bg-[#EAF4FC] border border-[#DCE8F2] transition-all duration-200 cursor-pointer group shadow-xs shrink-0"
            aria-label="Close menu drawer"
          >
            <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90 text-[#052B52]" />
          </button>
        </div>

        {/* Search & Category Filter Section with Smooth Rounded Corners */}
        <div className="px-5 sm:px-6 py-4 border-b border-[#DCE8F2] bg-[#FBFDFF] shrink-0 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#526777] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fleet, services, equipment, spares, careers..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white border border-[#DCE8F2] focus:border-[#0B5CAB] focus:ring-2 focus:ring-[#0B5CAB]/20 text-[#102A43] placeholder-[#526777]/65 rounded-xl outline-none transition-all shadow-2xs font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#526777] hover:text-[#052B52] p-1.5 rounded-full hover:bg-[#EAF4FC]"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category pills removed as requested */}
        </div>

        {/* Scrollable Navigation Area with Rounded Cards and No Sharp Edges */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-3 custom-scrollbar">
          {filteredSections.map((section, index) => {
            const isCurrentPage = location.pathname === section.path;

            return (
              <div
                key={section.id}
                onClick={() => handleNavigate(section.path)}
                className={`group cursor-pointer p-4 sm:p-5 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] transform hover:scale-[1.02] hover:-translate-y-1 flex items-center justify-between gap-4 animate-fade-in ${
                  isCurrentPage
                    ? 'bg-gradient-to-br from-[#063B73] to-[#0B5CAB] text-white shadow-xl shadow-[#0B5CAB]/30 border-transparent'
                    : 'bg-white hover:bg-gradient-to-br hover:from-[#F0F7FD] hover:to-white text-[#052B52] shadow-sm hover:shadow-lg border border-[#DCE8F2] hover:border-[#0B5CAB]/30'
                }`}
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 ${
                    isCurrentPage ? 'bg-white/20 text-white' : 'bg-[#EAF4FC] text-[#0B5CAB] group-hover:bg-[#063B73] group-hover:text-white'
                  }`}>
                    {section.icon}
                  </div>
                  <span className={`font-display text-lg sm:text-xl font-bold tracking-tight truncate transition-colors duration-300 ${
                    isCurrentPage ? 'text-white' : 'text-[#052B52] group-hover:text-[#063B73]'
                  }`}>
                    {section.title}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 transform group-hover:translate-x-1 group-hover:scale-110 ${
                  isCurrentPage ? 'bg-white/20 text-white' : 'bg-[#F0F7FD] text-[#0B5CAB] group-hover:bg-[#0B5CAB] group-hover:text-white'
                }`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            );
          })}

          {filteredSections.length === 0 && (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-semibold text-[#052B52]">No results found</p>
              <p className="text-xs text-[#526777]">
                No menu items match "{searchQuery}". Try searching for cutter dredger, survey, diving, pumps or careers.
              </p>
            </div>
          )}
        </div>
        </div>
        {/* Top Accent Gradient Line */}

      </aside>
    </>
  );
};
