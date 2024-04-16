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
    <div>
      <h2 className="font-extrabold text-center text-3xl mb-4">Estate</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-4">
        {propertes.map(property => (
          <Property key={propertes.id} property={property}></Property>
        ))}
      </div>
    </div>
  );
};

export default Propertes;
