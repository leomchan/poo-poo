import * as ex from 'excalibur';
import { Dkf } from './dkf';

const game = new ex.Engine({
  width: 480,
  height: 640,
  backgroundColor: ex.Color.fromHex('#54C0Ca'),
  pixelArt: true,
  pixelRatio: 2,
  displayMode: ex.DisplayMode.FitScreen,
});

const dkf = new Dkf();

game.add(dkf);
game.start();
