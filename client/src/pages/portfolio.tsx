
import React from 'react';

const images = [
  { before: '/images/portfolio/before1.jpg', after: '/images/portfolio/after1.jpg' },
  { before: '/images/portfolio/before2.jpg', after: '/images/portfolio/after2.jpg' },
];

export default function Portfolio() {
  return (
    <div className="gallery">
      {images.map((img, idx) => (
        <div key={idx} style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div>
            <h4>Before</h4>
            <img src={img.before} alt="Before" style={{ maxWidth: '300px' }} />
          </div>
          <div>
            <h4>After</h4>
            <img src={img.after} alt="After" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      ))}
    </div>
  );
}
