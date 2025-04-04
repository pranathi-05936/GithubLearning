import React from 'react';
import { blocks } from '../data/blocks';

const BlockInfo = ({ blockId, onBack }) => {
  const block = blocks.find(b => b.id === blockId);
  
  if (!block) return <div>Block not found</div>;

  return (
    <div className="block-info">
    <button onClick={onBack} className="back-button">← Back to Map</button>
    <h2>{block.name}</h2>
    <div className="block-details">
      <div className="block-image">
        <img src={block.image} alt={block.name} />
      </div>
      <div className="block-description">
        <p>{block.description}</p>
        
        <div className="details-section">
          <h3>Departments</h3>
          <ul>
            {block.departments.map(dept => <li key={dept}>{dept}</li>)}
          </ul>
        </div>
        
        <div className="details-section">
          <h3>Facilities</h3>
          <ul>
            {block.facilities.map(facility => <li key={facility}>{facility}</li>)}
          </ul>
        </div>
        
        {/* Special section for PRP's unique features */}
        {block.id === 'prp' && (
          <div className="details-section highlight-section">
            <h3>Special Research Features</h3>
            <ul>
              {block.specialFeatures.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="meta-info">
          <p><strong>Location:</strong> {block.location}</p>
          <p><strong>Floors:</strong> {block.floors}</p>
          <p><strong>Built Year:</strong> {block.builtYear}</p>
          {/* Special contact for PRP */}
          {block.id === 'prp' && (
            <p><strong>Research Inquiries:</strong> research@vit.ac.in</p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlockInfo;