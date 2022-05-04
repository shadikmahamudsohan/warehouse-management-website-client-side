import { useEffect, useState } from 'react';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        fetch('https://quiet-refuge-83525.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return [products, setProducts, loading]
};

export default useProducts;