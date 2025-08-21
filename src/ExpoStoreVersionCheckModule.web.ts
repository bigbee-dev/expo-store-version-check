import { registerWebModule, NativeModule } from 'expo';

import { ExpoStoreVersionCheckModuleEvents } from './ExpoStoreVersionCheck.types';

class ExpoStoreVersionCheckModule extends NativeModule<ExpoStoreVersionCheckModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoStoreVersionCheckModule, 'ExpoStoreVersionCheckModule');
