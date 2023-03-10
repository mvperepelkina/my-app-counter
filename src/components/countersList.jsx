import React, { useState } from "react";
import Counter from "./counter";

const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" }
];

const CountersList = () => {
    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        setCounters(counters.filter((c) => c.id !== id));
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        setCounters((prevState) =>
            prevState.map((c) =>
                c.id !== id ? c : { ...c, value: c.value + 1 }
            )
        );
    };

    const handleDecrement = (id) => {
        setCounters((prevState) =>
            prevState.map((c) =>
                c.id !== id ? c : { ...c, value: c.value - 1 }
            )
        );
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}>
                Сброс
            </button>
        </>
    );
};

export default CountersList;
