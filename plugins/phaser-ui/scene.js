/* eslint-disable class-methods-use-this */

import * as components from './components';

export default class UI extends Phaser.Plugins.ScenePlugin {
  /**
   *  My custom scene plugin.
   *
   *  @constructor
   *  @param {Phaser.Scene} scene - The scene that hosts this plugin.
   *  @param {Phaser.Plugins.PluginManager} manager - Phaser plugin manager.
   */
  constructor(scene, manager) {
    super(scene, manager);

    /**
     *  The event emitter of the scene this plugin is bound to.
     *
     *  @type {Phaser.Events}
     */
    this.events = this.systems.events;
    this.hello = 'hello';
    manager.registerGameObject('ui', this.uiFactory, this.uiCreator);
  }

  uiFactory(scene, type, x, y, ...args) {
    let obj = null;
    if (components[type]) {
      obj = components[type](scene, x, y, args[0], args[1]);
      scene.add.existing(obj);
    }
    return obj;
  }

  uiCreator(scene, type, x, y, ...args) {
    let obj = null;
    if (components[type]) {
      obj = components[type](scene, x, y, args[0], args[1]);
    }
    return obj;
  }

  /**
   *  Called up on plugin initialization. Used to configure the plugin and
   *  allocate resources.
   *
   *  @protected
   *  @param {Phaser.Scenes.Systems} sys - The systems object of the host scene.
   */
  boot(/* sys */) {
    //  The events this plugin can listen to.
    // this.events.on('start', this.start, this);
    // this.events.on('preupdate', this.preUpdate, this);
    // this.events.on('update', this.update, this);
    // this.events.on('postupdate', this.postUpdate, this);
    // this.events.on('render', this.render, this);
    // this.events.on('resize', this.resize, this);
    // this.events.on('pause', this.pause, this);
    // this.events.on('resume', this.resume, this);
    // this.events.on('sleep', this.sleep, this);
    // this.events.on('wake', this.wake, this);
    // this.events.on('transitioninit', this.transitionInit, this);
    // this.events.on('transitionstart', this.transitionStart, this);
    // this.events.on('transitionwake', this.transitionWake, this);
    // this.events.on('transitioncomplete', this.transitionComplete, this);
    // this.events.on('transitionout', this.transitionOut, this);
    // this.events.on('shutdown', this.shutdown, this);

    //  NOTE: Provide at least a `destroy` callback to free up resources used
    //  by this plugin.
    this.events.once('destroy', this.destroy, this);
  }

  /**
   *  Called when a scene is started by the scene manager. The scene is now
   *  active, visible and running.
   *
   *  @private
   *  @param {Phaser.Scenes.Systems} sys - The systems object of the host scene.
   */
  // start(/* sys */) {}

  /**
   *  Called every time a scene in being updated - pre-processing step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  // preUpdate(/* t, dt */) {}

  /**
   *  Called every time a scene in being updated.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  // update(/* t, dt */) {}

  /**
   *  Called every time a scene in being updated - post-processing step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  // postUpdate(/* t, dt */) {}

  /**
   *  Called during the scene rendering process.
   *
   *  @private
   *  @param {(Phaser.Renderer.Canvas.CanvasRenderer|Phaser.Renderer.WebGL.WebGLRenderer)} renderer - The current rendering engine in use.
   */
  // render(/* renderer */) {}

  /**
   *  Called when the user request to resize the game canvas.
   *
   *  @private
   *  @param {number} width - The new width of the game, in pixels.
   *  @param {number} height - The new height of the game, in pixels.
   */
  // resize(/* width, height */) {}

  /**
   *  Called when a scene shuts down, it may then come back again later (which
   *  will invoke the `start` event) but should be considered dormant.
   *
   *  @private
   *  @param {Phaser.Scenes.Systems} sys - The systems object of the host scene.
   */
  // shutdown(/* sys */) {}

  /**
   *  Called when a scene is destroyed by the scene manager. All allocated
   *  resources should be cleaned up.
   *
   *  @private
   *  @param {Phaser.Scenes.Systems} sys - The systems object of the host scene.
   */
  destroy(/* sys */) {
    this.game = null;
    this.scene = null;
    this.events = null;
    this.systems = null;
    this.pluginManager = null;
  }
}
