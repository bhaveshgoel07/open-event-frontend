import attr from 'ember-data/attr';
import ModelBase from 'open-event-frontend/models/base';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default ModelBase.extend({
  /**
   * attributes
   */
  amount         : attr('number'),
  address        : attr('string'),
  city           : attr('string'),
  state          : attr('string'),
  country        : attr('string'),
  zipcode        : attr('string'),
  paymentMode    : attr('string'),
  status         : attr('string', { defaultValue: 'pending' }),
  transactionId  : attr('string', { readOnly: true }),
  expMonth       : attr('string'),
  expYear        : attr('string'),
  identifier     : attr('string', { readOnly: true }),
  brand          : attr('string'),
  last4          : attr('string'),
  paidVia        : attr('string'),
  completedAt    : attr('moment', { readOnly: true }),
  discountCodeId : attr('string'),
  /**
   * Relationships
   */
  user           : belongsTo('user'),
  event          : belongsTo('event'),
  discountCode   : belongsTo('discount-code'),
  tickets        : hasMany('ticket', { readOnly: true }),
  attendees      : hasMany('attendee')
});
