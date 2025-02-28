import { assets } from "../assets/assets";

const PaymentFailed = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl mt-10 text-red-500 font-semibold text-center">
          Payment Failed
        </h1>
        <div className="flex justify-center items-center mt-10">
          <img
            src={assets.payment_failed}
            alt="Payment Successful"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentFailed;
