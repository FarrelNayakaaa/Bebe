import React, { useState } from 'react';
import './App.css';

function App() {
  const [scene, setScene] = useState(1);
  const [isUnveiling, setIsUnveiling] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleUnveil = () => {
    if (isUnveiling) return;
    setIsUnveiling(true);
    setTimeout(() => {
      setScene(2);
      setIsUnveiling(false);
    }, 1000); // Transisi tirai bergeser halus
  };

  const handleOpenGift = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      setScene(3);
      setIsOpening(false);
    }, 800);
  };

  return (
    <div className="premium-container">
      {/* Latar Belakang Ambient Glow */}
      <div className="ambient-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* SCENE 1: LUXURY VEIL (GERBANG UTAMA) */}
      {scene === 1 && (
        <div className={`scene veil-scene ${isUnveiling ? 'veil-dismissed' : ''}`}>
          <div className="velvet-panel panel-left"></div>
          <div className="velvet-panel panel-right"></div>

          <div className="luxury-intro-card">
            <span className="premium-tag">CHAPTER I</span>
            <h1 className="premium-title">Week 1 Accomplished</h1>
            <p className="premium-subtitle">
              Effort need to be appreciate, especially you, love.
            </p>
            <button className="premium-btn" onClick={handleUnveil}>
              <span>UNVEIL NOW</span>
            </button>
          </div>
        </div>
      )}

      {/* SCENE 2: MINIMALIST GIFT BOX */}
      {scene === 2 && (
        <div className="scene gift-scene">
          <div className={`gift-wrapper ${isOpening ? 'gift-fade-out' : ''}`} onClick={handleOpenGift}>
            <p className="gift-hint">A small token of appreciation. Tap to unlock.</p>
            
            {/* Minimalist CSS/SVG Gift Box */}
            <div className="premium-box-css">
              <svg viewBox="0 0 100 100" className="svg-box">
                {/* Box Body */}
                <rect x="20" y="40" width="60" height="50" rx="4" fill="#3D0C11" />
                {/* Lid / Tutup Kado */}
                <rect x="16" y="30" width="68" height="12" rx="3" fill="#52131A" />
                {/* Vertical Ribbon */}
                <rect x="46" y="30" width="8" height="60" fill="#D4AF37" />
                {/* Horizontal Ribbon */}
                <rect x="20" y="60" width="60" height="8" fill="#D4AF37" />
                {/* Ribbon Bow (Pita Atas) */}
                <path d="M50,30 C35,15 45,10 50,25 C55,10 65,15 50,30 Z" fill="#D4AF37" />
              </svg>
              <div className="premium-box-shadow"></div>
            </div>
          </div>
        </div>
      )}

      {/* SCENE 3: EXCLUSIVE REVEAL */}
      {scene === 3 && (
        <div className="scene reveal-scene-final">
          {/* Efek Kelopak Bunga Berjatuhan Lembut */}
          <div className="petal-rain">
            <span className="petal"></span>
            <span className="petal"></span>
            <span className="petal"></span>
            <span className="petal"></span>
          </div>

          <div className="reveal-card-container">
            {/* Glassmorphism Luxury Card */}
            <div className="exclusive-bca-card">
              <div className="luxury-shimmer"></div>
              
              <div className="card-header">
                <span className="card-type">PRIORITY PRIVILEGE</span>
                <div className="card-emv-chip"></div>
              </div>

              <div className="card-body">
                <p className="balance-label">VALUED AT</p>
                <h2 className="balance-amount">IDR 1.000.000</h2>
              </div>

              <div className="card-footer">
                <div className="holder-info">
                  <span className="label">CARDHOLDER</span>
                  <span className="value">MY PRECIOUS ONE</span>
                </div>
                <div className="valid-info">
                  <span className="label">VALID THRU</span>
                  <span className="value">FOREVER</span>
                </div>
              </div>
            </div>

            {/* Elegant Message Panel */}
            <div className="elegant-message">
              <h3>Yey selesai Week 1.</h3>
              <p>Buka BCA kamu be. Proud of you, always. 🤍</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;