import bundle, { displayError, displaySuccess } from './bundle';

export = bundle;

(bundle as any).displayError = displayError;
(bundle as any).displaySuccess = displaySuccess;
