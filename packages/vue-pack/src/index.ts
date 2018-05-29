import bundle, { displayError, displaySuccess, fulfilConfig, validateConfig } from './bundle';

export = bundle;

(bundle as any).displayError = displayError;
(bundle as any).displaySuccess = displaySuccess;
(bundle as any).fulfilConfig = fulfilConfig;
(bundle as any).validateConfig = validateConfig;
