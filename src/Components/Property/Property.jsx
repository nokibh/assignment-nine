import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { RiParentLine } from 'react-icons/ri';
import { CiSquareAlert } from 'react-icons/ci';
import { IoLocationSharp } from 'react-icons/io5';
import 'animate.css';
import { Link } from 'react-router-dom';

const Property = ({ property }) => {
  const { id, image, estate_title, price, status, area, location, facilities } =
    property;
  return (
    <div>
      <div className="card w-80 bg-green-50 shadow-xl hover:scale-105 transition animate__animated animate__rollIn">
        <figure className="w-80 h-44 p-2 rounded-lg ">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <div className="flex font-bold ">
            <p className="flex ">
              <span className="text-2xl">
                <RiMoneyDollarCircleFill />
              </span>
              {price}
            </p>
            <p className="flex gap-1">
              <span className="text-2xl ">
                <RiParentLine />
              </span>
              {status}
            </p>
          </div>
          <div className="flex font-bold">
            <p className="flex">
              <span className="text-2xl">
                <CiSquareAlert />
              </span>
              {area}
            </p>
            <p className="flex">
              <span className="text-2xl">
                <IoLocationSharp />
              </span>
              {location}
            </p>
          </div>
          <div>
            <ul className="font-semibold">
              <li>{facilities[0]}</li>
              <li>{facilities[1]}</li>
              <li>{facilities[2]}</li>
            </ul>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/Card/${id}`}>
              <button className="btn bg-[#8e0abe3e]">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
