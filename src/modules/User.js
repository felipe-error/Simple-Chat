export function createUser(_name, _password) {
  return {
    name: _name,
    password: _password,
    description: '...',
    friends: [],
  };

}

export function makePublicUser(_user) {
  return {
    name: _user['name'],
    description: _user['description'],
  }
}
export function makePrivateUser(_friend, _user) {
  return {
    name: _user['name'],
    description: _user['description'],
    messages: [],
  }
}

export function addFriend(_user, _usrFriend) {
  _user['friends'].push(_usrFriend);
}

export function updateFriend(_user, _newUsrData) {
  for (const val of _user['friends']) {

    val['messages']

  }
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
