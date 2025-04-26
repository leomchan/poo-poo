import * as ex from 'excalibur';

export class Bolt extends ex.Actor {
  constructor(pos: ex.Vector) {
    super({
      pos,
      width: 16,
      height: 16,
      color: ex.Color.Cyan,
    });

    this.vel = ex.vec(0, -500);
  }

  override onPostUpdate(): void {
    if (this.pos.y < -16) {
      this.kill();
    }
  }
}
