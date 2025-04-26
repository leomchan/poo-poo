import * as ex from 'excalibur';
import { Level } from './level';
import { Poo } from './poo';
import { Resources } from './resources';

export class Bolt extends ex.Actor {
  constructor(
    readonly level: Level,
    pos: ex.Vector
  ) {
    super({
      pos,
      width: 16,
      height: 16,
      color: ex.Color.Cyan,
    });

    this.vel = ex.vec(0, -500);
  }

  override onInitialize(): void {
    this.graphics.add(Resources.BoltImage.toSprite({ destSize: { width: 16, height: 16 } }));
  }

  override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
    if (other.owner instanceof Poo) {
      other.owner.kill();
      this.level.incrementScore();
    }
  }

  override onPostUpdate(): void {
    if (this.pos.y < -16) {
      this.kill();
    }
  }
}
