import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'gh.agro.connect',
	appName: 'Agro Connect Hub Ghana',
	webDir: 'New folder (10)',
	bundledWebRuntime: false,
	npmClient: 'npm',
	plugins: {
		SplashScreen: {
			launchShowDuration: 0
		}
	}
};

export default config;