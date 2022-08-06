import { Player, Youtube, DefaultUi } from '@vime/react';
import '@vime/core/themes/default.css';

export interface PLayerProps {
  idVideo: string;
}

export function PlayerVideo({ idVideo }: PLayerProps) {
  return (
    <Player>
      <Youtube 
        videoId={idVideo}
      />
      <DefaultUi />
    </Player>
  )
}