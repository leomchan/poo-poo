import * as ex from 'excalibur';
import { Wizard } from './wizard';
import { PooFactory } from './poo-factory';
import { Poo } from './poo';
import { Bolt } from './bolt';

export class Level extends ex.Scene {
  private wiz: Wizard = new Wizard(this, { pos: ex.vec(0, 0) });
  readonly random = new ex.Random();
  readonly pooFactory: PooFactory = new PooFactory(this, this.random, 1_000);
  private score: number = 0;
  private health: number = 3;

  private scoreLabel = new ex.Label({
    text: 'Poos: 0',
    x: 0,
    y: 0,
    z: 1,
    font: new ex.Font({
      size: 20,
      color: ex.Color.White,
    }),
  });

  private healthLabel = new ex.Label({
    text: 'Health: 3',
    x: 480,
    y: 0,
    z: 1,
    font: new ex.Font({
      size: 20,
      color: ex.Color.White,
      textAlign: ex.TextAlign.End,
    }),
  });

  override onInitialize(engine: ex.Engine): void {
    this.add(this.scoreLabel);
    this.add(this.healthLabel);
    this.wiz = new Wizard(this, { pos: ex.vec(engine.halfDrawWidth, engine.drawHeight - 32), moveVel: 250 });
    this.add(this.wiz);
    this.pooFactory.start();
  }

  incrementScore() {
    this.scoreLabel.text = `Poos: ${++this.score}`;
  }

  decrementHealth() {
    this.health = ex.clamp(this.health - 1, 0, 1000);
    this.healthLabel.text = `HP: ${this.health}`;
    if (this.health <= 0) {
      this.pooFactory.stop();
      this.actors.filter((actor) => actor instanceof Poo).forEach((poo) => poo.kill());
      this.actors.filter((actor) => actor instanceof Bolt).forEach((bolt) => bolt.kill());
      this.wiz.kill();
    }
  }
}
