import jsCookie from 'js-cookie';

const USER_COOKIE = 'mediasoup-demo.user';
const PRESENTER_COOKIE = 'mediasoup-demo.presenter';
const DEVICES_COOKIE = 'mediasoup-demo.devices';

export function getUser() {
	return jsCookie.getJSON(USER_COOKIE);
}

export function setUser({ displayName }) {
	jsCookie.set(USER_COOKIE, { displayName });
}

export function setPresenter({ presenter }) {
	jsCookie.set(PRESENTER_COOKIE, { presenter });
}

export function getPresenter() {
	return jsCookie.getJSON(PRESENTER_COOKIE);
}

export function getDevices() {
	return jsCookie.getJSON(DEVICES_COOKIE);
}

export function setDevices({ webcamEnabled }) {
	jsCookie.set(DEVICES_COOKIE, { webcamEnabled });
}
