import { dbClient } from "@/shared/lib/dbClient";
import { UserEntity, UserId } from "../_domain/types";

export class UserRepository {
  async getUserById(userId: UserId) {
    dbClient.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });
  }

  async createUser(user: UserEntity) {
    return await dbClient.user.create({
      data: user,
    });
  }
}

export const userRepository = new UserRepository();
