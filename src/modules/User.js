export function createUser(_name, _password) {
  return {
    name: _name,
    password: _password,
    description: '...',
    messages: [],
  };

}

export async function createValidation(_user, _arrUsers) {
  const randomNumber = (_maxNum) => {
    return Math.floor(Math.random() * _maxNum)
  };
  const searchNumber = (_num) => {
    for (const val of _arrUsers) {
      if (val['code'] === _num) {
        return true;
      }
    }
    return false;
  }

  let code_ = randomNumber(2147483647);
  while (searchNumber(code_)) {
    code_ = randomNumber(2147483647);
  }

  return {
    data: _user,
    code: code_,
  };
}
