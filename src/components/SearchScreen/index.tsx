import * as React from 'react';
import { IStore } from "$redux/store";
import { SearchForm } from "$components/SearchForm";
import { ISearchState } from "$redux/search/reducer";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as searchActions from '$redux/search/actions';

const style = require('./style.scss');

interface ISearchScreenProps extends ISearchState {
  searchSetSearchString: typeof searchActions.searchSetSearchString,
  searchPerformSearch: typeof searchActions.searchPerformSearch,
}

class SearchScreen extends React.PureComponent<ISearchScreenProps, {}> {
  onArrivalChange = () => {};
  onDepartureChange = () => {};

  onQueryChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value }}) => {
    this.props.searchSetSearchString(value);
  };

  onSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    this.props.searchPerformSearch();
  };

  render() {
    const {
      query,
      arrival_date,
      departure_date,
    } = this.props;

    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.header}>
            Search form (Main component)
          </div>
          <SearchForm
            onQueryChange={this.onQueryChange}
            onArrivalChange={this.onArrivalChange}
            onDepartureChange={this.onDepartureChange}
            onSubmit={this.onSubmit}
            query={query}
            arrival_date={arrival_date}
            departure_date={departure_date}
          />
        </div>
      </div>
    )
  }

}


const mapStateToProps = ({ search }: IStore) => ({
  ...search,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchSetSearchString: searchActions.searchSetSearchString,
  searchPerformSearch: searchActions.searchPerformSearch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
