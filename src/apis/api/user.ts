import { get,post } from '@/utils/methods'
import type { UserRequest } from '../types/user.d'

export function userRequest(data: UserRequest) {
    return post('/users', data); //测试接口
}
