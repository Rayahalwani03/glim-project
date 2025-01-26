import Button from "./Button";
const DonateButton = () => {
  return (
    <>
      <Button
        id="donate-btn"
        label="Donate Now"
        className="text-white bg-indigo-800 px-8 py-3"
        linkTo="/donation"
        type="button"
      ></Button>
    </>
  );
};

export default DonateButton;
