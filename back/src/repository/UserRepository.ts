import { dataSource } from '../config/database.config';
import { User } from '../entity/user';

const UserRepository = dataSource.getRepository(User).extend({
  async findByEmail(email: string) {
    return await this.createQueryBuilder('u')
      .where('u.email = :email', {email})
      .getOne();
  }
});

export default UserRepository;
