import * as ex from 'excalibur';

const velX = 200;

interface DkfConfig {
  pos: ex.Vector;
}

export class Dkf extends ex.Actor {
  constructor(config: DkfConfig) {
    super({
      pos: config.pos,
      width: 16,
      height: 16,
      color: ex.Color.Yellow,
    });
  }

  override onPostUpdate(engine: ex.Engine): void {
    if (engine.input.keyboard.isHeld(ex.Keys.ArrowLeft)) {
      this.vel = ex.vec(-velX, 0);
    } else if (engine.input.keyboard.isHeld(ex.Keys.ArrowRight)) {
      this.vel = ex.vec(velX, 0);
    } else {
      this.vel = ex.vec(0, 0);
    }

    this.pos.x = ex.clamp(this.pos.x, this.width, engine.drawWidth - this.width);
  }
}
