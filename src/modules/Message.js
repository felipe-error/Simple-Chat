function createMsg(_text) {
  const msg = {
    date: new Date(),
    text: _text,
  };

  console.log('nova mensagem:');
  console.log(msg);
  return msg;
}
