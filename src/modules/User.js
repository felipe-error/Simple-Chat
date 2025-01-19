export function createUser(_name, _password) {
  const user = {
    name: _name,
    password: _password,
    description: '...',
    messages: [],
  };

  return user
}

export async function createValidation(_user, _arrUsers) {
  const randomNumber = (_maxNum) => {
    Math.floor(Math.random() * _maxNum)
  };
  const searchNumber = (_num) => {
    for (const val of _arrUsers) {
      if (val.code === _num) {
        return true;
      }
    }
    return false;
  }

  let code_ = randomNumber(1000000000);
  while (searchNumber(code_)) {
    code_ = randomNumber(1000000000);
  }

  const validUser = {
    data: _user,
    code: code_,
  }
  return validUser;
}
