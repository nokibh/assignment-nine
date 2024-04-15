import { useEffect, useState } from 'react';
import Property from '../Property/Property';

const Propertes = () => {
  const [propertes, setProtertes] = useState([]);
  useEffect(() => {
    fetch('fake.json')
      .then(res => res.json())
      .then(data => setProtertes(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-4">
      {propertes.map(property => (
        <Property key={propertes.id} property={property}></Property>
      ))}
    </div>
  );
};

export default Propertes;
