import * as ex from 'excalibur';
import { Level } from './level';

const size: ex.Vector = ex.vec(480, 640);

const game = new ex.Engine({
  width: size.x,
  height: size.y,
  backgroundColor: ex.Color.fromHex('#54C0Ca'),
  pixelArt: true,
  pixelRatio: 2,
  displayMode: ex.DisplayMode.FitScreen,
  scenes: { level: Level },
});

game
  .start()
  .then(() => {
    return game.goToScene('level');
  })
  .catch((err) => {
    console.error(err);
  });
