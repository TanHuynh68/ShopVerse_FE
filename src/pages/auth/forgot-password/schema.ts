import { z } from "zod"

export const forgotPasswordSchema = z.object({
    email: z.email({message: "Không đúng định dạng!"}),
})

export type LoginFormsData= z.infer<typeof forgotPasswordSchema>