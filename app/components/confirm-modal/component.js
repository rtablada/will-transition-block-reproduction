import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ConfirmModal extends Component {
  @service('confirm') confirmService;
}
