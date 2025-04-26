import * as ex from 'excalibur';
import { Level } from './level';
import { Bolt } from './bolt';

const defaultVelX = 200;
const defaultCooldown = 500;

interface WizardConfig {
  pos: ex.Vector;
  moveVel?: number;
  cooldown?: number;
}

export class Wizard extends ex.Actor {
  private lastShot: number = 0;

  constructor(
    readonly level: Level,
    readonly config: WizardConfig
  ) {
    super({
      pos: config.pos,
      width: 16,
      height: 16,
      color: ex.Color.Yellow,
    });
  }

  override onPostUpdate(engine: ex.Engine): void {
    // Moving
    if (engine.input.keyboard.isHeld(ex.Keys.ArrowLeft)) {
      this.vel = ex.vec(-(this.config.moveVel ?? defaultVelX), 0);
    } else if (engine.input.keyboard.isHeld(ex.Keys.ArrowRight)) {
      this.vel = ex.vec(this.config.moveVel ?? defaultVelX, 0);
    } else {
      this.vel = ex.vec(0, 0);
    }

    this.pos.x = ex.clamp(this.pos.x, this.width, engine.drawWidth - this.width);

    // Shooting
    const canShoot = Date.now() - this.lastShot > (this.config.cooldown ?? defaultCooldown);
    if (canShoot && engine.input.keyboard.isHeld(ex.Keys.Space)) {
      this.lastShot = Date.now();
      const bolt = new Bolt(this.level, ex.vec(this.pos.x, this.pos.y - this.height));
      this.level.add(bolt);
    }
  }
}
