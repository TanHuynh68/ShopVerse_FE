import { z } from "zod"

export const loginFormSchema = z.object({
    email: z.email({message: "Không đúng định dạng!"}),
    password: z.string().min(6, {message: 'Mật khẩu ít nhất có 6 ký tự'})
})

export type LoginFormsData= z.infer<typeof loginFormSchema>