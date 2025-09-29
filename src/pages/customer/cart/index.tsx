import CountButton from "@/components/common/counter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useCartContext } from "@/hooks/useCartContext";
import useOrder from "@/hooks/useOrder";
import { formatVND } from "@/utils/format";

const CartPage = () => {
  const { cart } = useCartContext();
  const { handleCreateOrder } = useOrder();
  const myCart = cart[0];

  return (
    <div className="grid grid-cols-12 gap-10 -mt-5">
      <div className="col-span-9">
        <div className="p-5">
          <div className="w-full grid grid-cols-12 gap-2 ">
            <div className="col-span-5 flex items-center">Sản Phẩm</div>
            <div className="col-span-2 flex justify-center items-center">
              Đơn Giá
            </div>
            <div className="col-span-2 flex justify-center items-center">
              Số Lượng
            </div>
            <div className="col-span-2 flex justify-center items-center">
              Số Tiền
            </div>
            <div className="col-span-1 flex justify-center items-center">
              Thao Tác
            </div>
          </div>
        </div>
        <div className="border border-solid p-5 mb-5">
          {myCart?.items.map((item) => (
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1">
                <img src={item.image} alt={item.productId.name} />
              </div>
              <div className="col-span-4 ">{item.productId.name}</div>
              <div className="col-span-2 flex justify-center items-center">
                {formatVND(item.price)}
              </div>
              <div className="col-span-2 flex justify-center items-center">
                <CountButton quantity={item.quantity} />
              </div>
              <div className="col-span-2 flex justify-center items-center">
                {formatVND(item.quantity * item.productId.price)}
              </div>
              <div className="col-span-1  flex justify-center items-center">
                Xóa
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 border border-solid mt-5 rounded-lg p-5 h-[190px]">
        <p>Tóm tắt giỏ hàng</p>
        <div className="border border-solid mt-5"></div>
        <div className="flex justify-between mt-5">
          <div>Sản phẩm: {myCart?.items.length}</div>
          <div>{myCart && formatVND(myCart.subTotal)}</div>
        </div>
        <div className="flex justify-between mt-5">
          <Button variant={"destructive"}>Hủy</Button>
          <Dialog>
            <DialogTrigger>
              <Button>Mua hàng</Button>
            </DialogTrigger>
            <DialogContent className="min-w-[1200px] ">
              <div className="p-5">
                <div className="w-full grid grid-cols-12 gap-2 ">
                  <div className="col-span-6 flex items-center">Sản Phẩm</div>
                  <div className="col-span-2 flex justify-center items-center">
                    Đơn Giá
                  </div>
                  <div className="col-span-2 flex justify-center items-center">
                    Số Lượng
                  </div>
                  <div className="col-span-2 flex justify-center items-center">
                    Số Tiền
                  </div>
                </div>
              </div>
              <div className="border border-solid p-5 mb-5">
                {myCart?.items.map((item) => (
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-1">
                      <img src={item.image} alt={item.productId.name} />
                    </div>
                    <div className="col-span-5 ">{item.productId.name}</div>
                    <div className="col-span-2 flex justify-center items-center">
                      {formatVND(item.price)}
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                      <CountButton quantity={item.quantity} />
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                      {formatVND(item.quantity * item.productId.price)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => handleCreateOrder(myCart._id)}
                  variant={"default"}
                  className=" bg-blue-500 hover:bg-blue-500 w-[200px] "
                >
                  Đặt hàng
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
