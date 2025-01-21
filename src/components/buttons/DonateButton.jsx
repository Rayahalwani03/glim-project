import Button from "./Button";
const DonateButton = () => {

  return (
    <>
      <Button
        label="Donate Now"
        className="text-white bg-indigo-800 px-8 py-3"
        linkTo="/donation"
      
      ></Button>
    </>
  );
};

export default DonateButton;
