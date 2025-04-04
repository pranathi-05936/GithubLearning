import React from 'react';
import { blocks } from '../data/blocks';

const CampusMap = ({ onBlockSelect }) => {
  return (
    <div className="campus-map">
    <h2>VIT Vellore Campus Map</h2>
    <div className="map-legend">
      <div className="legend-item">
        <span className="legend-color academic"></span>
        <span>Academic Blocks</span>
      </div>
      <div className="legend-item">
        <span className="legend-color research"></span>
        <span>Research Facilities</span>
      </div>
    </div>
    <div className="blocks-grid">
      {blocks.map(block => (
        <div 
          key={block.id}
          className={`block-card ${block.id === 'prp' ? 'research-block' : ''}`}
          onClick={() => onBlockSelect(block.id)}
          data-block={block.id}
        >
          <h3>{block.name}</h3>
          <p>{block.location}</p>
          {block.id === 'prp' && (
            <div className="badge">Flagship Research</div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default CampusMap;