
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import ResetPasswordForm from './reset-password-form'

const ResetPassword = () => {
  return (
    <div className='relative flex h-auto items-center justify-center overflow-x-hidden '>
      <div className='absolute'>

      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-md'>
        <CardHeader className=''>
          <div>
            <CardTitle className=' text-2xl text-center'>Đặt lại mật khẩu</CardTitle>
          </div>
        </CardHeader>

        <CardContent className='space-y-'>
          {/* ResetPassword Form */}
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default ResetPassword
