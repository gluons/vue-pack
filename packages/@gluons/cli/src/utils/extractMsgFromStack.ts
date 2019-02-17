const isMsg = (line: string) => /^\S+/.test(line);

/**
 * Extract error message (and stack) from whole stack.
 *
 * @export
 * @template T Error type
 * @param {T} err Error
 * @returns {{ msg: string, stack: string }}
 */
export default function extractMsgFromStack<T extends Error>(
	err: T
): { msg: string; stack: string } {
	const stackLines = err.stack.split('\n');

	const msgs = [];
	const stacks = [];
	let lineIndex = 0;

	// Use the beginning of lines as message
	while (lineIndex < stackLines.length) {
		if (!isMsg(stackLines[lineIndex])) {
			break;
		}

		msgs.push(stackLines[lineIndex]);
		lineIndex++;
	}

	// Other lines are stack.
	while (lineIndex < stackLines.length) {
		stacks.push(stackLines[lineIndex]);
		lineIndex++;
	}

	return {
		msg: msgs.join('\n'),
		stack: stacks.join('\n')
	};
}
