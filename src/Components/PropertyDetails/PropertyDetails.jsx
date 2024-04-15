import { useLoaderData, useParams } from 'react-router-dom';
import Propertes from '../Propertes/Propertes';

const PropertyDetails = () => {
  const propates = useLoaderData();
  const { id } = useParams(id);

  console.log(propates, id);

  return <div></div>;
};

export default PropertyDetails;
