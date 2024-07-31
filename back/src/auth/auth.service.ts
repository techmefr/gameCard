import { JwtService } from '@nestjs/jwt';
import { UsersService } from "../user/user.service";
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { User } from "../entity/user";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Validate the user in parameter
   */
  async validate(email: string): Promise<any> {
    return this.usersService.getUserByEmail(email);
  }

  /**
   * Try to login the user in parameter.
   * Return an access token if login is successful otherwise return
   * a 404 status
   * @param user
   */
  public async login(user: User): Promise<any | { status: number}> {
    return this.validate(user.email).then(userData => {
      if (!userData || userData.password != this.hash(user.password)) {
        return { status: 404 };
      }

      // user found
      // the email will compose The access token
      const payload = `${userData.email}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600, // 1hour
        access_token: accessToken,
      }
    });
  }

  public async register(user: User): Promise<any> {
    user.password = this.hash(user.password);

    return this.usersService.saveUser(user);
  }

  /**
   * Hash the password in parameter.
   */
  private hash(password): string{
    return crypto.createHmac('sha256', password).digest('hex');
  }
}