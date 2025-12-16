
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import UpdatePasswordForm from './update-password-form'

const UpdatePassword = () => {
  return (
    <div className='relative flex h-auto items-center justify-center overflow-x-hidden '>
      <div className='absolute'>

      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
        <CardHeader className=''>
          <div>
            <CardTitle className=' text-2xl text-center'>Cập nhật mật khẩu cho tài khoản đăng ký bằng Google</CardTitle>
          </div>
        </CardHeader>

        <CardContent className='space-y-'>
          {/* ResetPassword Form */}
          <UpdatePasswordForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default UpdatePassword
