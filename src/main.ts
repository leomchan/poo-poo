import * as ex from "excalibur";

const game = new ex.Engine({
  width: 640,
  height: 480,
  backgroundColor: ex.Color.fromHex("#54C0Ca"),
  pixelArt: true,
  pixelRatio: 2,
  displayMode: ex.DisplayMode.FitScreen,
});

game.start();
