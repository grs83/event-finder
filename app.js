import React, { Component } from 'react';
import Genres from './components/genres';
import genresCategories from './components/genres-categories';
import Items from './components/items';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oArgs: {
        app_key: 'vC6JjzFkLQqRMX39',
        q: 'music',
        where: 91355,
        date: 'April',
        include: 'tags,categories',
        page_size: 5,
        sort_order: 'popularity'
      },
      events: [],
      showItems: true
    };
  }

  componentDidMount() {
    EVDB.API.call('/events/search', this.state.oArgs, function(response) {
      this.setState({ events: response });
    });
    // .then(console.log(this.state.events))
  }

  render() {
    return (
      <div>
        <Genres genresCategories={genresCategories} />
        {this.state.showItems ? (
          <div>
            <Items />
          </div>
        ) : null}
      </div>
    );
  }
}
