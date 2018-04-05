import React from 'react';

const TimeConverter = time => {
  const part = time.split(':');
  if (part[0] < 12) {
    return part[0] + ':' + part[1] + ' am';
  } else {
    return part[0] - 12 + ':' + part[1] + ' pm';
  }
};

const DateConverter = date => {
  const part = date.split('-');
  return part[1] + '/' + part[2] + '/' + part[0];
};

const CreateMarkup = text => {
  return { __html: text };
};

module.exports = {
  TimeConverter,
  DateConverter,
  CreateMarkup
};
