import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("mock class test findUserById", () => {
  const user = {
    id: 1,
    name: "Alex",
  };
  const findUserByIdMock = jest.spyOn(repository, "findUserById");

  findUserByIdMock.mockReturnValueOnce(user);

  expect(service.findUserById(1)).toEqual(user);
  expect(findUserByIdMock).toHaveBeenCalled();
  expect(findUserByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findUserById).toHaveBeenCalled();
  expect(repository.findUserById).toHaveBeenCalledWith(1);
});

test.failing("mock class test findUser", () => {
  service.findUser();
});
