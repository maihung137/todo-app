import './App.css';

let items = [
    {
        id: 1,
        job: 'something',
        checked: true,
    },
    {
        id2: 2,
        job: 'quetnha',
    },
];

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <h2 className="">Thing todo</h2>
                    <ul className="list">
                        {items.map((item) => (
                            <li key={item.id} className="">
                                <input type={'checkbox'} checked={item.checked} />
                                {item.job}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
