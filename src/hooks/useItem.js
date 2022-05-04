import { useEffect, useState } from 'react';

const useItem = (id) => {
    const [item, setItem] = useState('');
    const [loading, setLoading] = useState('')
    useEffect(() => {
        setLoading(true)
        fetch(`https://quiet-refuge-83525.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setLoading(false)
            })
    }, [id])
    return [item, setItem, loading];
};

export default useItem;