import { Car, RefreshCw } from "lucide-react";

const Delivery = () => {
  return (
    <div className="mt-10 w-[450px]">
      <div className="border p-2 grid grid-cols-12">
        <div className="col-span-2 flex justify-center items-center">
          <Car className="w" size={40} />
        </div>
        <div className="col-span-10">
          <p className="font-semibold text-lg">Free Delivery</p>
          <p>Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <div className="border p-2 grid grid-cols-12">
        <div className="col-span-2 flex justify-center items-center">
          <RefreshCw className="w" size={40} />
        </div>
        <div className="col-span-10">
          <p className="font-semibold text-lg">Return Delivery</p>
          <p>Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
