import bundle, { displayError, displaySuccess, fulfilConfig } from './bundle';

export = bundle;

(bundle as any).displayError = displayError;
(bundle as any).displaySuccess = displaySuccess;
(bundle as any).fulfilConfig = fulfilConfig;
