function getPositionAtCenter(item: Element) {
  const { top, left, width, height } = item.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}
export function getDistanceBetweenElement(a: Element, b: Element): number {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);
  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}
