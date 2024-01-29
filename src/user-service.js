import { UserRepository } from "./user-repository";

export class UserService {
  constructor(userRepository) {
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new UserRepository();
    }
  }

  save(user) {
    this.userRepository.save(user);
  }

  findUserById(id) {
    return this.userRepository.findUserById(id);
  }

  findUser() {
    return this.userRepository.findUser();
  }
}
