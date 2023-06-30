var box = document.getElementById('draggableBox');

box.onmousedown = function(event) {
  box.style.position = 'absolute';
  box.style.zIndex = 1000;

  function moveAt(pageX, pageY) {
    box.style.left = pageX - box.offsetWidth / 2 + 'px';
    box.style.top = pageY - box.offsetHeight / 2 + 'px';
  }

  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  box.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    box.onmouseup = null;
  };
};

box.ondragstart = function() {
  return false;
};
