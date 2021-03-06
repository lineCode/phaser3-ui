import { Button, Label } from 'Plugins/phaser-ui'; // eslint-disable-line

export default class Test extends Phaser.Scene {
  constructor() {
    super({
      key: 'Test'
    });
  }

  create() {
    // this.add.bitmapText();
    const hello = new Label(
      this, // 'label',
      'text',
      false,
      300,
      90,
      'press show',
      { fontFamily: 'Arial', fontSize: 24, color: '#00ff00' },
      15,
      0
    );
    console.log(hello); // eslint-disable-line
    this.add.existing(hello);

    const ninepatchConfig = {
      type: 'ninepatch',
      x: 0,
      y: 0,
      w: 100,
      h: 40,
      sprite: 'colored',
      frame: 'green.png',
      config: { top: 20, bottom: 20, left: 20, right: 20 }
    };
    const ninesliceConfig = {
      type: 'nineslice',
      sliceConfig: {
        sourceKey: 'colored',
        sourceFrame: 'blue.png',
        sourceLayout: {
          topLeft: { width: 10, height: 10 },
          topRight: { width: 10, height: 10 },
          bottomLeft: { width: 10, height: 10 },
          bottomRight: { width: 10, height: 10 }
        }
      },
      positionConfig: {
        x: 0,
        y: 0,
        width: 100,
        height: 40
      }
    };
    const nineSlice2 = JSON.parse(JSON.stringify(ninesliceConfig));
    nineSlice2.sliceConfig.sourceFrame = 'blue_pressed.png';
    nineSlice2.hide = true;

    const ninePatch2 = JSON.parse(JSON.stringify(ninepatchConfig));
    ninePatch2.frame = 'green_pressed.png';
    ninePatch2.hide = true;

    const tt = this.add.sprite(600, 100, 'colored', 'red.png').setAlpha(0);

    // 3(+1) different way to do it
    // let b = this.ui.make.Button(this, {
    // const b = new Button(
    const b = this.add.ui(
      // const b = this.make.ui(
      this,
      'Button',
      100,
      100,
      [ninepatchConfig, ninePatch2],
      // [ninesliceConfig, nineSlice2],
      {
        type: 'bitmaptext',
        dynamic: false,
        x: 0,
        y: 0,
        text: 'Show',
        font: 'ken-pixel',
        size: 22,
        align: 0
      },
      { type: 'Rectangle', size: 1 },
      {
        tint: true,
        tween: true,
        frame: true,
        hover: { color: 0xe7e7e7 },
        down: {
          color: 0xd5d5d5,
          tween: {
            scaleY: 0.99,
            scaleX: 0.99,
            duration: 100,
            ease: 'Elastic',
            easeParams: [1.5, 0.5],
            delay: 100
          },
          frame: { hide: [0], show: [1] }
        },
        up: {
          color: 0xd5d5d5,
          tween: {
            scaleY: 1,
            scaleX: 1,
            duration: 100,
            ease: 'Elastic',
            easeParams: [1.5, 0.5],
            delay: 100
          },
          frame: { hide: [1], show: [0] }
        }
      },
      false
    );
    // this.add.existing(b);
    // b.x = 100;
    // b.y = 200;
    console.log(b); // eslint-disable-line
    b.on('on-hover', () => {
      tt.alpha = 1;
      b.label.setText('hide');
      // console.log('Hello World!');
    });
    b.on('on-down', () => {
      tt.alpha = 0;
      b.label.setText('show');
      hello.setText('OK!!');
      // console.log('Hello World!');
    });
    b.on('on-up', () => {
      tt.alpha = 1;
      b.label.setText('hide');
      hello.setText('click again');
      // console.log('Hello World!');
    });
    b.on('on-exit', () => {
      b.label.setText('show');
      tt.alpha = 0;
      // console.log('!!');
    });

    // b.setDisable(true, { tint: 0x959595 });
    // setTimeout(() => {
    //   b.setDisable(false);
    // }, 1000);
  }

  // update() {}
}
