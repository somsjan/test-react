import { BaseService } from './base.service';

export class AuthService extends BaseService {

  async login({email, password}) {
    const post = await this.post('api/login', {email, password});

    return !!post.accessToken;
  }


}
