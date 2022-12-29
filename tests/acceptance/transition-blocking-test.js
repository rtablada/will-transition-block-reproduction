import { module, test } from 'qunit';
import { visit, currentURL, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Route willTransition promise awareness', function (hooks) {
  setupApplicationTest(hooks);

  const getModal = () => find('[data-test-confirm-modal]');

  test('Route willTransition should block transitions from continuing if it returns a promise', async function (assert) {
    await visit('/route-will-transition');

    assert.strictEqual(currentURL(), '/route-will-transition');

    await click('[data-test-nav="route-will-transition"]');

    assert.strictEqual(
      currentURL(),
      '/route-will-transition',
      'Url should not have changed after clicking current route link'
    );

    assert.notOk(
      getModal(),
      'The confirmation modal should not be shown if the user is staying on the same route'
    );

    await click('[data-test-nav="route-will-change-event"]');

    assert.ok(
      getModal(),
      'The confirmation modal should be visible when navigating away'
    );

    assert.strictEqual(
      currentURL(),
      '/route-will-transition',
      'Url should not have changed while modal is shown'
    );

    await click('[data-test-confirm-modal-action="cancel"]');

    assert.strictEqual(
      currentURL(),
      '/route-will-transition',
      'Transition should be aborted after clicking cancel'
    );

    assert.notOk(
      getModal(),
      'The confirmation modal should be hidden after clicking cancel'
    );

    await click('[data-test-nav="route-will-change-event"]');

    await click('[data-test-confirm-modal-action="ok"]');

    assert.strictEqual(
      currentURL(),
      '/route-will-change-event',
      'Transition should continue after ok button is clicked'
    );

    assert.notOk(
      getModal(),
      'The confirmation modal should be hidden after ok button is clicked'
    );
  });
});
