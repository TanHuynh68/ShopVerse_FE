"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { productFormSchema, type ProductFormData } from "./validation";
import { PlusIcon } from "lucide-react";
import { ImageUpload } from "./upload-images";
interface CreateNewProductProps {
  onclose: any;
}
export default function CreateNewProduct({ onclose }: CreateNewProductProps) {
  const [categories, setCategories] = useState<string[]>(["Headphones"]);
  const [newCategory, setNewCategory] = useState("");
  const [files, setFiles] = useState<File[]>([]);
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
      status: "published",
      categories: ["Headphones"],
      tags: [],
      variations: [],
      basePrice: "",
      discountType: "none",
      template: "default",
      taxClass: "standard",
      vatAmount: "",
    },
  });

  const onSubmit = (data: ProductFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      setValue("categories", updatedCategories);
      setNewCategory("");
    }
  };

  const removeCategory = (category: string) => {
    const updatedCategories = categories.filter((c) => c !== category);
    setCategories(updatedCategories);
    setValue("categories", updatedCategories);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
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
                <ImageUpload files={files} setFiles={setFiles} />
              </CardContent>
            </Card>

            {/* Pricing Section */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="basePrice">
                    Base Price <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="basePrice"
                    placeholder="Product Price"
                    {...register("basePrice")}
                  />
                  {errors.basePrice && (
                    <p className="text-sm text-red-500">
                      {errors.basePrice.message}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm">
                    Set the product price.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4">
            {/* Status Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Status
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </CardTitle>
                <CardDescription>Set the product status.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Select defaultValue="published">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Product Details Section */}
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Categories</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700"
                      >
                        <span
                          className="mr-1 cursor-pointer"
                          onClick={() => removeCategory(category)}
                        >
                          ×
                        </span>
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Add product to a category.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Input
                      placeholder="New category"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addCategory}
                    >
                      <PlusIcon /> Create New Category
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit">Save changes</Button>
          <Button onClick={onclose} type="button" variant="destructive">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
