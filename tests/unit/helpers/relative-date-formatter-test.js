import { relativeDateFormatter } from 'my-mail-app/helpers/relative-date-formatter';
import { module, test } from 'qunit';
import moment from 'moment';

module('Unit | Helper | relative date formatter');

// Replace this with your real tests.
test('shows relative time for date\'s that are less than 24 hours old', function(assert) {
  const date = moment("07/27/2016 1:00:00 PM", "MM/DD/YYYY h:mm:ss A").toDate();
  const laterDate = moment(date).add(1, 'hour').toDate();
  timekeeper.freeze(laterDate);
  const actual = relativeDateFormatter([date]);
  assert.equal(actual, '1:00 PM (1 hour ago)');
});
