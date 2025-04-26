import * as ex from 'excalibur';

interface PooConfig {
  pos: ex.Vector;
  fallVel?: number;
}

export class Poo extends ex.Actor {
  constructor(config: PooConfig) {
    super({
      pos: config.pos,
      width: 16,
      height: 16,
      color: ex.Color.Brown,
    });

    this.vel = ex.vec(0, config.fallVel ?? 100);
  }
}
