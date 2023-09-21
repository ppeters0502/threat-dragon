import EncryptionEnv from '../env/Encryption.js';
import env from '../env/Env.js';
import GithubEnv from '../env/Github.js';
import AzureEnv from '../env/Azure.js';
import ThreatDragonEnv from '../env/ThreatDragon.js';

const tryLoadDotEnv = () => {
  const github = new GithubEnv();
  const azure = new AzureEnv();
  const encryption = new EncryptionEnv();
  const threatDragon = new ThreatDragonEnv();
  env.get().addProvider(github);
  env.get().addProvider(azure);
  env.get().addProvider(encryption);
  env.get().addProvider(threatDragon);
  env.get().hydrate();
};

export default { tryLoadDotEnv };
