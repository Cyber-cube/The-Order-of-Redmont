
window.onload = function() {
  var chance = new Chance();

  var id = localStorage.getItem('id');

  if (id === null) {
    id = generateId();
    localStorage.setItem('id', id);
    document.getElementById('id').value = id;
    document.getElementById('id2').value = id;
    
  } else {
     document.getElementById('id').value = id;
    document.getElementById('id2').value = id;
  }

  function generateId() {
    var newId = chance.string({ length: 16, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });
     document.getElementById('id').value = newId;
    return newId;
  }
};
