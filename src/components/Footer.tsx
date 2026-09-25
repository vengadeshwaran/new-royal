import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Mail, Phone, MapPin, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#052B52] border-t border-[#063B73] text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#0A3D70]">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white font-display font-bold tracking-tight text-xl group">
              <div className="w-8 h-8 rounded-sm bg-[#0B5CAB] flex items-center justify-center text-white shadow-2xs group-hover:bg-[#1677D2] transition-colors">
                                  <svg fill="#ffffffff" className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480.156 480.156" xml:space="preserve"><g id="XMLID_187_"><path id="XMLID_190_" d="M297.213,16.538c0-9.13-7.408-16.538-16.538-16.538h-81.191c-9.132,0-16.54,7.408-16.54,16.538v23.557
		h114.27V16.538z"></path><path id="XMLID_189_" d="M251.824,148.937l114.709,45.153v-32.655c0-19.428-15.757-35.178-35.177-35.178h-34.144V72.17h-114.27
		v54.087h-34.143c-19.421,0-35.178,15.749-35.178,35.178v32.655l114.709-45.153C235.881,145.962,244.275,145.962,251.824,148.937z"></path><path id="XMLID_188_" d="M416.603,248.266l-160.487-63.173v136.675c0,8.856-7.174,16.038-16.038,16.038
		c-8.863,0-16.037-7.182-16.037-16.038V185.093L63.553,248.266c-6.657,2.614-10.04,10.03-7.66,16.766l59.705,169.172
		c9.725,27.534,35.756,45.952,64.949,45.952h119.063c29.193,0,55.225-18.418,64.95-45.952l59.704-169.172
		C426.643,258.296,423.262,250.88,416.603,248.266z"></path></g></svg>
              </div>
              <span className="tracking-wider uppercase">
                SWALF GROUP
              </span>
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Swalf Group (Royal Swalf) is an international dredging operating company, maritime engineering, hydrographic surveying, equipment build and turnkey project management leader. Established in 2010.
            </p>

            <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#60A5FA]" />
                <a href="mailto:info@royalswalf.com" className="hover:text-white transition-colors">
                  info@royalswalf.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
                <a href="tel:+914428117650" className="hover:text-white transition-colors">
                  +91 44 2811 7650
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Chennai HQ · Global Marine Project Deployments</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="hover:text-[#B6D8F2] transition-colors">About Swalf Group</Link>
              </li>
              <li>
                <Link to="/about#mission-vision" className="hover:text-[#B6D8F2] transition-colors">Mission & Vision</Link>
              </li>
              <li>
                <Link to="/ethics" className="hover:text-[#B6D8F2] transition-colors">Core Business Ethics</Link>
              </li>
              <li>
                <Link to="/about#core-business" className="hover:text-[#B6D8F2] transition-colors">Our Core Business</Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-[#B6D8F2] transition-colors">Projects & Capabilities</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#B6D8F2] transition-colors">Careers & Recruitment</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B6D8F2] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services & Activities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="hover:text-[#B6D8F2] transition-colors">Single & Multi Beam Survey</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B6D8F2] transition-colors">Capital & Maintenance Dredging</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B6D8F2] transition-colors">Port Land Reclamation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B6D8F2] transition-colors">Quay Wall & Breakwaters</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B6D8F2] transition-colors">Commercial Diving & Hull NDT</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B6D8F2] transition-colors">Project Management (PMC)</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Products & Accessories */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Products & Spares
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/products" className="hover:text-[#B6D8F2] transition-colors">Cutter Suction Dredgers (CSD)</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#B6D8F2] transition-colors">Trailing Suction Hoppers (TSHD)</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#B6D8F2] transition-colors">Amphibious & Mechanical Dredgers</Link>
              </li>
              <li>
                <Link to="/marketplace" className="hover:text-[#B6D8F2] transition-colors">Dredger Buy, Sell & Rental</Link>
              </li>
              <li>
                <Link to="/accessories" className="hover:text-[#B6D8F2] transition-colors">Dredge Pumps & High-Wear Spares</Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-[#B6D8F2] transition-colors text-[#60A5FA] font-semibold">Submit Tender / RFQ</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Class Certification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2010 – {new Date().getFullYear()} Swalf Group (Royal Swalf). All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1677D2]" />
              <span>IACS Classification & ISM Code Compliance</span>
            </span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="text-slate-300">ISO 9001:2015 Marine Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
