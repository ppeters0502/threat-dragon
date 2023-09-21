import githubProvider from './github.provider.js';
import localProvider from './local.provider.js';
import azureProvider from './azure.provider.js';
import { providerTypes } from './providerTypes.js';

const providers = {
    azure: {
        key: 'azure',
        displayName: 'Azure',
        provider: azureProvider,
        type: providerTypes.local,
        icon: ['fab', 'windows'],
    },
    github: {
        key: 'github',
        displayName: 'Github',
        provider: githubProvider,
        type: providerTypes.git,
        icon: ['fab', 'github'],
    },
    local: {
        key: 'local',
        displayName: 'Local Session',
        provider: localProvider,
        type: providerTypes.local,
        icon: ['fab', 'vuejs'],
    },
};

export const allProviders = (() => {
    return Object.freeze(providers);
})();

export const providerNames = (() => {
    const _providers = {};
    Object.keys(providers).forEach(
        (key) => (_providers[key] = providers[key].key)
    );
    return Object.freeze(_providers);
})();

export const getDisplayName = (providerKey) =>
    providers[providerKey].displayName;

export const getProviderType = (providerKey) => providers[providerKey].type;

/**
 * Gets the dashboard actions based on the selected provider
 * @param {string} providerKey
 * @returns {Object[]}
 */
export const getDashboardActions = (providerKey) => {
    const provider = providers[providerKey];

    if (!provider) {
        throw new Error(`Unknown provider: ${providerKey}`);
    }

    if (!provider.provider || !provider.provider.getDashboardActions()) {
        throw new Error(
            `No dashboard actions configured for provider ${providerKey}`
        );
    }

    return provider.provider.getDashboardActions();
};

export default {
    allProviders,
    providerNames,
    getDashboardActions,
};
