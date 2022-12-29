import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class RouteWillTransitionRoute extends Route {
  @service confirm;

  @action
  async willTransition() {
    await this.confirm.confirm('Do you want to leave this route?');
  }
}
