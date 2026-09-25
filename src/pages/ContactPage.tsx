import React from 'react';
import { PageBanner } from './PageBanner';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        category="GLOBAL COMMUNICATIONS"
        title="CONTACT SWALF GROUP & MARITIME OPERATIONS DESK"
        badge="24/7 Operations Desk Active"
        accentCode="11"
        subtitle="Reach our corporate headquarters in Chennai, India, or access our regional maritime operational hubs and 24/7 emergency response desk for urgent dredging, vessel salvage, or operational mobilization."
        stats={[
          { label: 'Headquarters', value: 'Chennai, India' },
          { label: 'Operational Line', value: '+91 44 2811 7650' },
          { label: 'Official Email', value: 'info@royalswalf.com' },
          { label: 'Emergency Desk', value: '24/7 Active' }
        ]}
      />

      <ContactSection />
    </div>
  );
};
