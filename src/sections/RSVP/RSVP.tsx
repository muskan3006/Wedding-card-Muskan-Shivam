import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, User } from 'lucide-react';
import { weddingConfig } from '../../config/wedding';
import './RSVP.scss';

export const RSVP: React.FC = () => {
  const rsvp = weddingConfig.rsvp || {
    title: "Guest Assistance & Contact",
    subtitle: "We Want Your Experience To Be Effortless & Joyful",
    note: "For directions, venue navigation, stay, event timings, or any assistance needed during the celebrations, please feel free to reach out to Muskan's brother:",
    contacts: [
      {
        name: "Brother's Name",
        relation: "Brother of the Bride",
        phone: "+91 98765 43210",
        whatsapp: "919876543210"
      }
    ]
  };

  const primaryContact = rsvp.contacts[0];
  const cleanPhone = primaryContact?.phone.replace(/\s+/g, '') || '';
  const cleanWhatsApp = primaryContact?.whatsapp || cleanPhone.replace(/^\+/, '');

  const whatsappInquiryUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
    `Hi Sparsh`
  )}`;

  return (
    <section className="rsvp-section section-wrapper" id="assistance">
      <div className="rsvp-ambient-glow" />

      <div className="container rsvp-container">
        {/* Section Header */}
        <motion.div
          className="rsvp-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Warm Hospitality &amp; Care</span>
          <h2 className="section-title">{rsvp.title || "Guest Assistance & Contact"}</h2>
          <div className="ornamental-divider">
            <span className="ornament-diamond" />
          </div>
          <p className="section-subtitle">
            {rsvp.subtitle || "We want your experience to be effortless and joyful."}
          </p>
        </motion.div>

        {/* Guest Assistance Card */}
        <motion.div
          className="rsvp-card-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="rsvp-lead-note">
            {rsvp.note || "For directions, venue navigation, stay, event timings, or any assistance needed during the celebrations, please feel free to reach out to Muskan's brother:"}
          </p>

          {/* Contact Details Card */}
          <div className="rsvp-contact-card">
            <div className="contact-avatar-badge">
              <User size={24} className="avatar-icon" />
            </div>

            <div className="contact-info">
              <span className="contact-relation">{primaryContact?.relation || "Brother of the Bride"}</span>
              <h3 className="contact-name">{primaryContact?.name || "Brother's Name"}</h3>
              <p className="contact-phone-display">{primaryContact?.phone || "+91 98765 43210"}</p>
            </div>

            <div className="contact-actions-grid">
              <a
                href={`tel:${cleanPhone}`}
                className="btn-rsvp-action btn-call"
                aria-label={`Call ${primaryContact?.name}`}
              >
                <Phone size={17} />
                <span>Call Directly</span>
              </a>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rsvp-action btn-whatsapp"
                aria-label={`WhatsApp ${primaryContact?.name}`}
              >
                <MessageCircle size={17} />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
