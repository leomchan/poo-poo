import * as ex from 'excalibur';
import { Dkf } from './dkf';

export class Level extends ex.Scene {
  dkf: Dkf = new Dkf({ pos: ex.vec(0, 0) });

  override onInitialize(engine: ex.Engine): void {
    this.dkf = new Dkf({ pos: ex.vec(engine.halfDrawWidth, engine.drawHeight - 32) });
    this.add(this.dkf);
  }
}
