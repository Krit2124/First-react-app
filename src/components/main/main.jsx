import './main.css'

function Main({counter, minus, plus}) {
    
    return (
        <main>
            <img src="https://s0.rbk.ru/v6_top_pics/media/img/0/98/346854497450980.jpg" alt="Земля" />
            <h1>{counter}</h1>
            <button onClick={() => minus()}>-</button>
            <button onClick={() => plus()}>+</button>
        </main> 
    )
}

export default Main