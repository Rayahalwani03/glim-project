import { Link } from 'react-router-dom';

const FindOutButton = () => {
  return (
<div>
  <button className="mt-6 px-6 py-3 bg-white text-black font-bold" type="button">
    <Link to="/map">Find Out How</Link>
  </button>
</div>
  );
};

export default FindOutButton;
