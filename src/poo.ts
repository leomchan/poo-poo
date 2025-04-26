import * as ex from 'excalibur';
import { Level } from './level';

interface PooConfig {
  pos: ex.Vector;
  fallVel?: number;
}

export class Poo extends ex.Actor {
  constructor(
    readonly level: Level,
    config: PooConfig
  ) {
    super({
      pos: config.pos,
      width: 16,
      height: 16,
      color: ex.Color.Brown,
    });

    this.vel = ex.vec(0, config.fallVel ?? 100);
  }

  override onPostUpdate(engine: ex.Engine): void {
    if (this.pos.y > engine.drawHeight + 8) {
      this.kill();
      this.level.decrementHealth();
    }
  }
}
