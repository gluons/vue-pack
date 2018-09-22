import BaseOptions from './BaseOptions';
import WebOptions from './WebOptions';

import ConfigParameterError from './ConfigParameterError';
import Configuration from './Configuration';
import * as ConfigurationMethods from './Configuration';
import DevOptions from './DevOptions';
import Externals from './Externals';
import Plugin, { PluginContext, PluginFunction, PluginWebpackConfigGroup } from './Plugin';
import WebpackChainer, { WebpackChainConfigGroup } from './WebpackChainer';

export {
	BaseOptions,
	WebOptions,
	ConfigParameterError,
	Configuration,
	ConfigurationMethods,
	Externals,
	DevOptions,
	Plugin,
	PluginContext,
	PluginFunction,
	PluginWebpackConfigGroup,
	WebpackChainConfigGroup,
	WebpackChainer
};
