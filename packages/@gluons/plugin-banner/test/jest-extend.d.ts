declare namespace jest {
	interface Matchers<R> {
		toContainBannerPlugin: (banner: string) => R;
	}
}
