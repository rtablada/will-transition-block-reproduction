import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ConfirmService extends Service {
  @tracked isOpen = false;
  @tracked message = null;
  @tracked resolve = null;
  @tracked reject = null;

  async confirm(message) {
    try {
      this.message = message;
      await this.createPromise();
    } finally {
      this.isOpen = false;
      this.message = null;
      this.resolve = null;
      this.reject = null;
    }
  }

  createPromise() {
    this.isOpen = true;
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
