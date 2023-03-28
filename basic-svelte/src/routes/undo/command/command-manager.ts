import { Command } from './command';
import { EventType } from './event-type';
import Repository from './repository';
import { TargetData } from './target-data';
import { get } from 'svelte/store';

export class CommandManager {
	private list: Command[];

	constructor() {
		this.list = [];
	}

	push(command: Command) {
		this.executeCommand(command);
	}

	undo() {
		console.log(`현재 커맨드리스트 크기 : ${this.list.length}`);
		if (this.list.length === 0) {
			return;
		}

		const command: Command = this.list.pop()!;
		this.executeCorrespondingCommand(command);
	}

	private executeCorrespondingCommand(command: Command) {
		const { eventType, data } = command;
		if (eventType === EventType.ADD) {
			Repository.update((list) => [...list.slice(0, list.length - 1)]);
		} else if (eventType === EventType.DELETE) {
			Repository.update((list) => [...list, data.target]);
		}
	}

	private executeCommand(command: Command) {
		const { eventType, data } = command;
		if (eventType === EventType.ADD) {
			console.log('add왔덩');
			this.list.push(command);
			Repository.update((list) => [...list, data.target]);
		} else if (eventType === EventType.DELETE) {
			console.log('delete왔덩');

			const numListInStore = get(Repository);
			const deletedTargetData: TargetData = new TargetData(
				numListInStore[numListInStore.length - 1],
				null
			);
			const newCommand = new Command(EventType.DELETE, deletedTargetData);
			this.list.push(newCommand);
			Repository.update((list) => [...list.slice(0, list.length - 1)]);
		}
		console.log('넘어왔덩');
	}
}
