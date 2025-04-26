import * as ex from 'excalibur';
import { Poo } from './poo';
import { Level } from './level';

export class PooFactory {
  private readonly timer: ex.Timer;
  constructor(
    readonly level: Level,
    readonly random: ex.Random,
    intervalMs: number
  ) {
    this.timer = new ex.Timer({
      interval: intervalMs,
      repeats: true,
      action: () => this.spawnPoo(),
    });
    this.level.add(this.timer);
  }

  spawnPoo() {
    const pooX = this.random.integer(8, this.level.engine.drawWidth - 8);
    const poo = new Poo({ pos: ex.vec(pooX, -8), fallVel: 100 });
    this.level.add(poo);
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }
}
