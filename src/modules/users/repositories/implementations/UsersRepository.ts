import { getRepository, Repository } from 'typeorm';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.repository
                  .createQueryBuilder("users")
                  .leftJoinAndSelect("users.games", "games")
                  .where("users.id = :id", { id: user_id })
                  .getOneOrFail();
    return user;
  }
 
  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query("SELECT * FROM users ORDER BY users.first_name ASC"); 
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    const user = this.repository
                     .createQueryBuilder("users")
                     .where("LOWER(users.first_name) = LOWER(:first_name) AND LOWER(users.last_name) = LOWER(:last_name) ", { first_name, last_name }) 
                     .getMany();
    return user;
  }
}
