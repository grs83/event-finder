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
        category: '',
        keywords: '',
        within: '10',
        units: 'mi',
        title: '',
        include: 'tags,categories',
        image_sizes: ['block200', 'large'],
        page_number: 1,
        page_size: 10,
        sort_order: 'popularity'
      },
      page_count: 0,
      events: [],
      showItems: false
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.clickPagePreviousHandler = this.clickPagePreviousHandler.bind(this);
    this.clickPageNextHandler = this.clickPageNextHandler.bind(this);
    this.dataFetch = this.dataFetch.bind(this);
  }

  dataFetch() {
    EVDB.API.call('/events/search', this.state.oArgs, response => {
      this.setState({
        events: response.events.event,
        page_count: response.page_count
      });
    });
  }

  clickHandler(event) {
    let state = Object.assign({}, this.state);
    state.oArgs.category = event.target.textContent.toLowerCase();
    state.oArgs.page_number = 1;
    this.dataFetch();
    this.setState({
      showItems: true
    });
  }

  clickPagePreviousHandler() {
    let state = Object.assign({}, this.state);
    state.oArgs.page_number--;
    this.setState(state);
    this.dataFetch();
  }

  clickPageNextHandler() {
    let state = Object.assign({}, this.state);
    state.oArgs.page_number++;
    this.setState(state);
    this.dataFetch();
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
            <Items
              events={this.state.events}
              title={this.state.oArgs.category}
              pageCount={this.state.page_count}
              pageNumber={this.state.oArgs.page_number}
              clickPagePreviousHandler={this.clickPagePreviousHandler}
              clickPageNextHandler={this.clickPageNextHandler}
              showItems={this.state.showItems}
            />
          </div>
        ) : null}.
      </div>
    );
  }
}
