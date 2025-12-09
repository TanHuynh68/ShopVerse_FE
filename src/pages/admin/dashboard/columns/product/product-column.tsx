import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconDotsVertical } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DashboardProduct } from "@/type/dashboard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CreateNewProduct from "./create-product-form";
import { useState } from "react";

export const productColumns: ColumnDef<DashboardProduct>[] = [
  
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => (
      <div className="w-[650px] truncate">{row.original.name}</div>
    ),
  },

  // Category
  {
    accessorKey: "category_id",
    header: "Category",
    cell: ({ row }) => row.original.category_id?.name,
  },

  // Brand
  {
    accessorKey: "brand_id",
    header: "Brand",
    cell: ({ row }) => row.original.brand_id?.name,
  },

  // Price
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `${row.original.price}`,
  },

  // Discount
  {
    accessorKey: "discount",
    header: "Discount (%)",
  },

  // Stock
  {
    accessorKey: "stock",
    header: "Stock",
  },

  // Sold
  {
    accessorKey: "sold",
    header: "Sold",
  },

  // Active status
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.isActive ? "default" : "outline"}>
        {row.original.isActive ? "Active" : "Inactive"}
      </Badge>
    ),
  },

  // SKU
  {
    accessorKey: "sku",
    header: "SKU",
  },

  // Created date
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },

  // Actions
  {
    id: "actions",
    cell: () => {
      const [open, setOpen] = useState<boolean>(false);
      return (
          <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="flex size-8">
              <IconDotsVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setOpen(true)}>
             Tạo sản phẩm
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog open={open} >
          <DialogContent className="min-w-[1600px]">
            <CreateNewProduct  onclose={()=>setOpen(false)}/>
          </DialogContent>
        </Dialog>
      </>
      )
    },
  },
];
