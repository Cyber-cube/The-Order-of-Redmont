window.onload = function() {
  var chance = new Chance();
  var id = localStorage.getItem('id');
  if (id === null) {
    id = generateId();
    localStorage.setItem('id', id);
    document.querySelector('.id') = id;
  } else {
    document.querySelector('.id') = id;
}
  function generateId() {
    var newId = chance.string({ length: 16, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });
     document.querySelector('.id') = newId;
    return newId;
  }
};
