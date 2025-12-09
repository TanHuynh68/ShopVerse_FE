import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProductFormData, productFormSchema } from "./validation";
import { ImageUpload } from "./upload-images";
import { useDashboardContext } from "@/hooks/useDashboardContext";

interface CreateNewProductProps {
  onclose: any;
}

export default function CreateNewProduct({ onclose }: CreateNewProductProps) {
  const [open, setOpen] = useState(false);
  const [valueCate, setValueCate] = useState("");
  const [openBrand, setOpenBrand] = useState(false);
  const [valueBrand, setValueBrand] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const { fetchCategories, adminCreateProduct, fetchBrands, brands, cates, isLoading } = useDashboardContext();

  useEffect(() => {
    fetchCategories({ endDate: "", startDate: "" });
    fetchBrands({ endDate: "", startDate: "" });
  }, []);


  const onSubmit = async(data: ProductFormData) => {
    const response = await adminCreateProduct(data)
    if(response){
      onclose();
    }
  };

  // Hàm xử lý cập nhật files và đồng bộ với form
  const handleSetfiles = (newFiles: any) => {
    setFiles(newFiles);
    setValue("images", newFiles); // Đồng bộ với form
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      description: "",
      discount: 0,
      images: [], // Sửa lỗi cú pháp: thay `files || ,` thành `[]`
      price: 0,
      sku: "",
      stock: 0,
      category_id: "", // Thêm mặc định
      brand_id: "",
    },
  });


  return (
    <div className="w-full space-y-8 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="space-y-4 lg:col-span-2">
            {/* General Section */}
            <Card>
              <CardHeader>
                <CardTitle>General</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Product Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Product Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm">
                    A product name is required and recommended to be unique.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Set a description to the product for better visibility."
                    className="min-h-[200px]"
                    {...register("description")}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Media Section */}
            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload files={files} setFiles={handleSetfiles} />
                {errors.images && (
                  <p className="text-sm text-red-500">
                    {errors.images.message}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Pricing Section */}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4">
            {/* Status Section */}
            <Label>Chọn nhãn hiệu </Label>
            <Popover open={openBrand} onOpenChange={setOpenBrand}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openBrand}
                  className="w-full justify-between"
                >
                  {valueBrand
                    ? brands.find((brand) => brand._id === valueBrand)?.name
                    : "Chọn nhãn hàng..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Tìm nhãn hàng..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>Không tìm thấy nhãn hàng nào.</CommandEmpty>
                    <CommandGroup>
                      {brands.map((brand) => (
                        <CommandItem
                          key={brand._id}
                          value={brand.name}
                          onSelect={() => {
                            setValueBrand(brand._id);
                            setValue("brand_id", brand._id);
                            setOpenBrand(false); // Sửa: setOpenBrand thay vì setOpen
                          }}
                        >
                          {brand.name}
                          <Check
                            className={cn(
                              "ml-auto",
                              valueBrand === brand._id
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
              {errors.brand_id && (
                <p className="text-sm text-red-500">
                  {errors.brand_id.message}
                </p>
              )}
            </Popover>
            {/* Product Details Section */}
            <Card>
              <CardHeader>
                <CardTitle>Chi tiết sản phẩm</CardTitle>
                <div className="space-y-2 mt-2">
                  {/* category */}
                  <div className="flex gap-2 ">
                    <div className="space-y-2 w-full">
                      <Label>Danh mục sản phẩm </Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between"
                          >
                            {valueCate
                              ? cates.find((cate) => cate._id === valueCate)
                                  ?.name
                              : "Chọn danh mục..."}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search framework..."
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>
                                Không tìm thấy danh mục nào.
                              </CommandEmpty>
                              <CommandGroup>
                                {cates.map((cate) => (
                                  <CommandItem
                                    key={cate._id}
                                    value={cate.name}
                                    onSelect={() => {
                                      setValueCate(cate._id);
                                      setValue("category_id", cate._id);
                                      setOpen(false);
                                    }}
                                  >
                                    {cate.name}
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        valueCate === cate._id
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                        {errors.category_id && (
                          <p className="text-sm text-red-500">
                            {errors.category_id.message}
                          </p>
                        )}
                      </Popover>
                    </div>
                    {/* Price */}
                    <div className="space-y-2 w-full">
                      <Label htmlFor="price">
                        Giá <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="Product Price"
                        {...register("price", { valueAsNumber: true })} // Thêm register và valueAsNumber cho number
                      />
                      {errors.price && (
                        <p className="text-sm text-red-500">
                          {errors.price.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-5">
                    {/* Stock */}
                    <div className="space-y-2 w-full">
                      <Label htmlFor="stock">
                        Hàng tồn kho <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="stock"
                        type="number"
                        placeholder="Nhập số hàng tồn kho"
                        {...register("stock", { valueAsNumber: true })} // Thêm register
                      />
                      {errors.stock && (
                        <p className="text-sm text-red-500">
                          {errors.stock.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="discount">
                        Nhập % giảm giá (%)
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="discount"
                        type="number"
                        placeholder="Nhập % giảm giá"
                        {...register("discount", { valueAsNumber: true })} // Thêm register
                      />
                      {errors.discount && (
                        <p className="text-sm text-red-500">
                          {errors.discount.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 w-full">
                    <Label htmlFor="sku">
                      Mã sản phẩm
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="sku"
                      type="text"
                      placeholder="Nhập mã sản phẩm"
                      {...register("sku")} // Thêm register
                    />
                    {errors.sku && (
                      <p className="text-sm text-red-500">
                        {errors.sku.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="flex gap-3">
          <Button disabled={isLoading} type="submit">Save changes</Button>
          <Button disabled={isLoading} onClick={onclose} type="button" variant="destructive">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
