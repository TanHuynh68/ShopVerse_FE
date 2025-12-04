import ImagePreview from "@/components/common/img-preview";
import { ColumnDef } from "@tanstack/react-table";
import z from "zod";

export const brandSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  isDeleted: z.boolean(),
  img: z.string().url(),
  category_id: z.string(),
  createdAt: z.string(),  // hoặc z.date()
  updatedAt: z.string(),  // hoặc z.date()
});

export const brandColumn: ColumnDef<z.infer<typeof brandSchema>>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => row.original.description,
  },
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => {
      return(
        <ImagePreview img={row.original.img}/>
      )
    }
  },
  {
    accessorKey: "isDeleted",
    header: "Deleted",
    cell: ({ row }) => (row.original.isDeleted ? "Yes" : "No"),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString("vi-VN"),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) =>
      new Date(row.original.updatedAt).toLocaleDateString("vi-VN"),
  },
];
