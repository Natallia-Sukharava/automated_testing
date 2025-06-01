export function getBrowserViewport() {
    return {
      width: parseInt(process.env.VIEWPORT_WIDTH || '1280'),
      height: parseInt(process.env.VIEWPORT_HEIGHT || '720')
    };
  }
  