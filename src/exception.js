export class MyException extends Error {}

export const callNumber = (number) => {
  if (number === 0) {
    throw new MyException(
      "ERROR: Data not found!"
    );
  } else {
    return "SUCCEED";
  }
};
