import {EntrypointParams} from '@vizir-banking/banking-app-core/dist/utils/entrypoint-params';

import {registerScreens} from '~/sample/navigation/register-screens';
import {SAMPLE_SCREENS} from '~/sample/navigation/screen-definitions';

export const sampleEntry = ({
  homeManager,
  routesManager,
}: EntrypointParams): void => {
  homeManager.addHomeMenuItem([
    {
      order: 2,
      label: 'Teste Translation',
      icon: 'pix',
      iconWidth: 25,
      iconHeight: 25,
      screenName: SAMPLE_SCREENS.home,
    },
  ]);
  registerScreens(routesManager);
};
