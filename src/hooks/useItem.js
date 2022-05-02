import { useEffect, useState } from 'react';

const useItem = (id) => {
    const [item, setItem] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])
    return [item, setItem];
};

export default useItem;