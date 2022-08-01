import React from 'react';

interface ContentMyCollectionProps {
  property: string;
}

const ContentMyCollection: React.FC<ContentMyCollectionProps> = ({
  property,
}) => {
  return (
    <>
      <h1>Growdev</h1>
      <p>{property}</p>
    </>
  );
};

export default ContentMyCollection;
