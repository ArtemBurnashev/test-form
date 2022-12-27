type CallBackFnType = () => void;

class EventEmitter {
	private events: Record<string, Set<CallBackFnType>> = {};

	private getEventListByName(eventName: string) {
		if (typeof this.events[eventName] === 'undefined') {
			this.events[eventName] = new Set();
		}
		return this.events[eventName];
	}

	on(eventName: string, fn: CallBackFnType) {
		this.getEventListByName(eventName).add(fn);
	}

	once(eventName: string, fn: CallBackFnType) {
		const onceFn = () => {
			this.removeListener(eventName, onceFn);
			fn();
		};
		this.on(eventName, onceFn);
	}

	emit(eventName: string) {
		this.getEventListByName(eventName).forEach(fn => {
			fn();
		});
	}

	removeListener(eventName: string, fn: CallBackFnType) {
		this.getEventListByName(eventName).delete(fn);
	}
}

export default EventEmitter;
