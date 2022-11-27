type vector = {
  x: number;
  y: number;
};
export default class ScrollEvent {
  private touchStart: vector;
  private delta: vector;

  constructor(e: any) {
    this.touchStart = {
      x: e?.touches[0]?.clientX ?? 0,
      y: e?.touches[0]?.clientY ?? 0
    }
    this.delta = this.touchStart;
  }

  get direction(): string {
    let result = 'none';
    if(Math.abs(this.delta.x) > Math.abs(this.delta.y)) {
      result = this.delta.x < 0 ? 'left' : 'right';
    } else {
      result = this.delta.y < 0 ? 'up' : 'down';
    }
    return result;
  }

  update(e: any) {
    this.delta = {
      x: e.deltaX ?? -(e.touches[0].clientX - this.touchStart.x),
      y: e.deltaY ?? -(e.touches[0].clientY - this.touchStart.y)
    }
  }
}