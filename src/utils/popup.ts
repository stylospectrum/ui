const isPointInRect = (x: number, y: number, rect: DOMRect) => {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
};

export const isClickInRect = (e: MouseEvent | TouchEvent, rect: DOMRect) => {
  let x;
  let y;

  if (e instanceof MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  } else {
    const touch = e.touches[0];
    x = touch.clientX;
    y = touch.clientY;
  }

  return isPointInRect(x, y, rect);
};
