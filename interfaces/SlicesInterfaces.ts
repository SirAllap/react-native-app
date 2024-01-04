import { ILogin } from './LoginInterfaces'

export type ILoginState = {
	data: ILogin
	status: 'idle' | 'pending' | 'rejected' | 'fulfilled'
	error: string | null
}
