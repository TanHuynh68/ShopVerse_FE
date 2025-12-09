import { z } from "zod";

// 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productFormSchema = z.object({
  name: z
    .string()
    .min(1, "Product name is required 2")
    .max(50, "Product name maximum is 50 characters"),

  description: z
    .string()
    .min(1, "Description is required")
    .max(200, "Description maximum is 200 characters"),

  stock: z
    .number()
    .min(0, "Stock must be >= 0"),

  sku: z
    .string()
    .min(1, "SKU is required")
    .max(50, "SKU maximum is 50 characters"),

  price: z
    .number()
    .min(1, "Price must be at least 1"),

  category_id: z.string().min(1, "Category is required"),

  brand_id: z.string().min(1, "Brand is required"),

  images: z
    .array(z.instanceof(File))
    .min(1, "Bạn phải chọn ít nhất 1 ảnh")
    .max(5, "Chỉ được chọn tối đa 5 ảnh")
    .superRefine((files, ctx) => {
      files.forEach((file, index) => {
        // validate size
        if (file.size > MAX_FILE_SIZE) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Ảnh thứ ${index + 1} vượt quá 5MB.`,
            path: [index],
          });
        }

        // validate type
        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Ảnh thứ ${index + 1} không đúng định dạng (chỉ hỗ trợ JPG, PNG, WEBP).`,
            path: [index],
          });
        }
      });
    }),

  discount: z
    .number()
    .min(0, "Discount must be >= 0")
    .max(100, "Discount must be <= 100"),
});

export type ProductFormData = z.infer<typeof productFormSchema>;
