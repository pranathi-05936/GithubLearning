import React, { useState } from 'react';
import CampusMap from './CampusMap';
import BlockInfo from './BlockInfo';

const Navigation = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  return (
    <div className="navigation-container">
      {selectedBlock ? (
        <BlockInfo 
          blockId={selectedBlock} 
          onBack={() => setSelectedBlock(null)} 
        />
      ) : (
        <CampusMap onBlockSelect={setSelectedBlock} />
      )}
    </div>
  );
};

export default Navigation;