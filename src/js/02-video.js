import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    const LOCAL_STORAGE_VALUE = data.seconds;
    localStorage.setItem(LOCAL_STORAGE_KEY, LOCAL_STORAGE_VALUE);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY))
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
