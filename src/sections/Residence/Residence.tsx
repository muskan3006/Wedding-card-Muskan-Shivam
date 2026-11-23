import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Navigation, Copy, Check, Compass, CalendarCheck } from 'lucide-react';
import { weddingConfig } from '../../config/wedding';
import './Residence.scss';

export const Residence: React.FC = () => {
  const { residence } = weddingConfig;
  const [copied, setCopied] = useState(false);

  if (!residence) return null;

  const fullAddress = `${residence.name}, ${residence.address}, ${residence.cityStateZip}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="residence-section section-wrapper" id="residence">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="residence-heading-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Pre-Wedding Festivities</span>
          <h2 className="section-title">The Residence</h2>
          <div className="ornamental-divider">
            <span className="ornament-diamond" />
          </div>
          <p className="section-subtitle">
            {residence.tagline}
          </p>
        </motion.div>

        {/* Residence Showcase Card */}
        <motion.div
          className="residence-card-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Details Column */}
          <div className="residence-info-card">
            <div className="residence-badge">
              <Home size={14} className="home-icon" />
              <span>Bride's Family Residence &bull; NIT Faridabad</span>
            </div>

            <h3 className="residence-name">{residence.name}</h3>
            <p className="residence-address-text">{residence.address}</p>
            <p className="residence-city-text">{residence.cityStateZip}</p>

            {/* Events Hosted at Residence */}
            {residence.eventsHosted && residence.eventsHosted.length > 0 && (
              <div className="residence-events-block">
                <div className="residence-events-header">
                  <CalendarCheck size={14} className="events-icon" />
                  <span>Ceremonies Celebrated Here</span>
                </div>
                <div className="residence-events-tags">
                  {residence.eventsHosted.map((evt, idx) => (
                    <span key={idx} className="event-tag">{evt}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="residence-actions-row">
              <a
                href={residence.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <Navigation size={15} />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                className="btn-outline-gold"
                onClick={handleCopyAddress}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'Address Copied' : 'Copy Address'}</span>
              </button>
            </div>

            {/* Nearby Points & Landmarks */}
            {residence.nearby && residence.nearby.length > 0 && (
              <div className="residence-nearby-section">
                <div className="nearby-header">
                  <Compass size={16} className="nearby-compass-icon" />
                  <span className="nearby-header-title">Nearby &amp; Key Landmarks</span>
                </div>

                <div className="nearby-points-list">
                  {residence.nearby.map((point, index) => (
                    <div key={index} className="nearby-point-item">
                      <span className="point-dot" />
                      <div className="point-content">
                        <span className="point-title">{point.title}</span>
                        <span className="point-meta">{point.distance} &bull; {point.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="residence-map-column">
            <div className="map-frame-wrapper">
              <iframe
                title="The Gupta Residence Map Location"
                src={residence.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
