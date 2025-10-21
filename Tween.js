export class Tween {
  constructor() {}

  /**
   * @typedef {Object.<string, number>} DataSet
   *
   * @param {{
   *   from: DataSet,
   *   to: DataSet,
   *   duration: number,
   *   onUpdate?: (data: DataSet) => void,
   *   onComplete?: (data: DataSet) => void
   * }} inputs
   */
  animate(inputs) {
    const { from, to, duration, onUpdate, onComplete } = inputs;

    const start = performance.now();

    /**
     * Updates animation each frame
     * @param {number} now - current time
     */
    const loop = (now) => {
      let t = (now - start) / duration;
      if (t > 1) t = 1;

      const data = {};

      for (const key in from) {
        const p = from[key]; // start value
        const r = to[key]; // end value
        const q = p + (r - p) * t;
        data[key] = q;
      }

      onUpdate?.(data);

      if (t < 1) requestAnimationFrame(loop);
      else onComplete?.(data);
    };

    requestAnimationFrame(loop);
  }
}
