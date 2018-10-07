declare namespace jest {
	interface Matchers<R> {
		toContainCopyPlugin: () => R;
	}
}
