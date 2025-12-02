import { ColumnDef } from '@tanstack/react-table';

import z from 'zod';
import { IconCircleCheckFilled, IconLoader } from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';

export const userSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  isActive: z.boolean(),
  role: z.string(),
  createdAt: z.string(), // hoặc z.date() nếu parse thành Date
  updatedAt: z.string(), // hoặc z.date()
  isDeleted: z.boolean(),
});

 export const outlineColumn: ColumnDef<z.infer<typeof userSchema>>[] = [
  {
    accessorKey: "name",
    header: "Họ và tên",
    cell: ({ row }) => (
      <div className="">
        {row.original.name} 
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="">
        {row.original.email} 
      </div>
    ),
  },
   {
    accessorKey: "isActive",
    header: "Trạng thái",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.isActive === true ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.isActive === true ? 'Đã kích hoạt' : "Chưa kích hoạt"}
      </Badge>
    ),
  },
  {
    accessorKey: "role",
    header: "Vai trò",
    cell: ({ row }) => (
      <div className="">
        {row.original.role} 
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Ngày tạo",
    cell: ({ row }) => (
      <div className="">
        {row.original.createdAt} 
      </div>
    ),
  },
];

