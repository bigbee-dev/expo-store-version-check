import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoStoreVersionCheckViewProps } from './ExpoStoreVersionCheck.types';

const NativeView: React.ComponentType<ExpoStoreVersionCheckViewProps> =
  requireNativeView('ExpoStoreVersionCheck');

export default function ExpoStoreVersionCheckView(props: ExpoStoreVersionCheckViewProps) {
  return <NativeView {...props} />;
}
