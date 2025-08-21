import * as React from 'react';

import { ExpoStoreVersionCheckViewProps } from './ExpoStoreVersionCheck.types';

export default function ExpoStoreVersionCheckView(props: ExpoStoreVersionCheckViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
