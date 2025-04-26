import * as ex from 'excalibur';
import { Wizard } from './wizard';
import { PooFactory } from './poo-factory';

export class Level extends ex.Scene {
  private wiz: Wizard = new Wizard(this, { pos: ex.vec(0, 0) });
  readonly random = new ex.Random();
  readonly pooFactory: PooFactory = new PooFactory(this, this.random, 1_000);

  override onInitialize(engine: ex.Engine): void {
    this.wiz = new Wizard(this, { pos: ex.vec(engine.halfDrawWidth, engine.drawHeight - 32), moveVel: 250 });
    this.add(this.wiz);
    this.pooFactory.start();
  }
}
