import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository");

const repository = new UserRepository();
const service = new UserService(repository);

test("mock class test", () => {
  const user = {
    id: 1,
    name: "Alex",
  };

  service.save(user);
  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("mock class test findUserById", () => {
  const user = {
    id: 1,
    name: "Alex",
  };

  repository.findUserById.mockReturnValueOnce(user);

  expect(service.findUserById(1)).toEqual(user);
  expect(repository.findUserById).toHaveBeenCalled();
});

test("mock class test findUser", () => {
  const user = [
    {
      id: 1,
      name: "Alex",
    },
    {
      id: 2,
      name: "Brandon",
    },
  ];

  repository.findUser.mockReturnValueOnce(user);

  expect(service.findUser()).toEqual(user);
  expect(repository.findUser).toHaveBeenCalled();
});
