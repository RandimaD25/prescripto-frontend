import { assets } from "../assets/assets";

const PaymentSuccess = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl mt-10 text-green-600 font-semibold text-center">
          Payment Successful
        </h1>
        <div className="flex justify-center items-center mt-10">
          <img
            src={assets.payment_success}
            alt="Payment Successful"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
