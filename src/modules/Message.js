function createMsg(_text, _target) {
  const msg = {
    date: new Date(),
    target: _target,
    text: _text,
  };

  console.log('nova mensagem:');
  console.log(msg);
  return msg;
}
