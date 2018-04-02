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
        location: 'los angeles',
        when: 'today',
        category: 'concerts',
        keywords: '',
        within: '10',
        units: 'mi',
        title: '',
        include: 'tags,categories',
        page_size: 10,
        sort_order: 'popularity'
      },
      events: [],
      showItems: true
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    let state = Object.assign({}, this.state);
    state.oArgs.category = event.target.textContent.toLowerCase();
    EVDB.API.call('/events/search', this.state.oArgs, response => {
      this.setState({ events: response.events.event });
    });
  }

  render() {
    return (
      <div>
        <Genres
          clickHandler={this.clickHandler}
          genresCategories={genresCategories}
        />
        {this.state.showItems ? (
          <div>
            <Items events={this.state.events} />
          </div>
        ) : null}.
      </div>
    );
  }
}
