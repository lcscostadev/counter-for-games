import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="text-white pt-10">
            <div className="flex flex-col items-center gap-10">
                <p>{count}</p>
                <div className="flex gap-10">
                    <button onClick={() => setCount(count + 1)}>
                        Count
                    </button>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;