import * as React from 'react';
import { ISearchState } from "index";
import { TextInput } from "$components/TextInput";
const style = require('./style.scss');

interface ISearchFormProps extends ISearchState {
  onQueryChange: React.ChangeEventHandler<HTMLInputElement>,
  onArrivalChange: React.ChangeEventHandler<HTMLInputElement>,
  onDepartureChange: React.ChangeEventHandler<HTMLInputElement>,
  onSubmit: React.FormEventHandler,
}

export const SearchForm: React.FunctionComponent<ISearchFormProps> = ({
  onArrivalChange,
  onDepartureChange,
  onQueryChange,
  onSubmit,
  arrival_date,
  departure_date,
  query,
}) => (
  <form className={style.wrapper} onSubmit={onSubmit}>
    <div className={style.dateColumn}>
      <TextInput
        label="Departure (locked)"
        placeholder="Type it here"
        value={departure_date}
        onChange={onDepartureChange}
      />
    </div>
    <div className={style.dateColumn}>
      <TextInput
        label="Arrival (locked)"
        placeholder="Type it here"
        value={arrival_date}
        onChange={onArrivalChange}
      />
    </div>
    <div className={style.searchColumn}>
      <TextInput
        label="Search query"
        placeholder="Type it here"
        value={query}
        onChange={onQueryChange}
      />
    </div>
    <div className={style.buttonRow}>
      <button>search</button>
    </div>
  </form>
);
