import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, "Product name is required").max(50, "Product name maximum is 50 characters"),
  description: z.string().min(1, "description is required").max(50, "description  maximum is 50 characters"),
  stock: z.number(),
  sku: z.string(),
  price: z.number(),
  category_id: z.string(),
  brand_id: z.string(),
  images: z.string(),
  discount: z.number(),
});

export type ProductFormData = z.infer<typeof productFormSchema>;
