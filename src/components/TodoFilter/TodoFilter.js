import React, { useCallback } from 'react';
import './TodoFilter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelectors, changeFilter } from '../../redux/todos';

export default function TodoFilter() {
    const dispatch = useDispatch();
    const onChange = useCallback(
        () => e => dispatch(changeFilter(e.target.value)),
        [dispatch],
    );

    const value = useSelector(todosSelectors.changeFilter);

    return (
        <div className="TodoFilter">
            <p className="TodoFilter__label">Фильтр по содержимому</p>
            <input
                type="text"
                className="TodoFilter__input"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
