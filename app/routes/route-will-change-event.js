import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RouteWillTransitionRoute extends Route {
  @service router;
  @service confirm;
  constructor() {
    super(...arguments);

    this.router.on('routeWillChange', async (transition) => {
      if (
        transition.from?.find((route) => route.name === this.routeName) &&
        !transition.to.find((route) => route.name === this.routeName)
      ) {
        try {
          await this.confirm.confirm('Do you want to leave this route?');
        } catch {
          transition.abort();
        }
      }
    });
  }
}
