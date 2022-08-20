import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_DURATION = 'videoplayer-current-time';

const pLay = function (data) {
  localStorage.setItem(VIDEO_DURATION, data.seconds);
};
player.on('timeupdate', throttle(pLay, 1000));
const currentTime = localStorage.getItem(VIDEO_DURATION);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
