import type { EventType } from './event-type';
import type { TargetData } from './target-data';

export class Command {
	eventType: EventType;
	data: TargetData | null;

	constructor(eventType: EventType, data: TargetData | null) {
		this.eventType = eventType;
		this.data = data;
	}
}

// ADD, {target:1}
// ADD, {target:2}
// DELETE, {target:2}
// UPDATE {target:1,changedNumber:2}
