import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div className="fixed inset-0 bg-zinc-300/5 z-10 backdrop-blur-sm flex">
      <div className="m-auto w-2/3 md:w-2/5 backdropdrop-shadow-lg">
        <div className="bg-emerald-700 rounded-t-md text-2xl p-2 text-white ">
          Some Error
        </div>
        <div className="bg-zinc-300 rounded-b-md">
          <div className="text-xl p-6">Error Details</div>
          <div className="flex">
            <Button className="px-8 ml-auto m-2">Okay</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
