import TestPlugin from './test-plugin/test-plugin.plugin';
const PluginManager = window.PluginManager;
PluginManager.register('TestPlugin', TestPlugin, '[data-test-plugin]');
