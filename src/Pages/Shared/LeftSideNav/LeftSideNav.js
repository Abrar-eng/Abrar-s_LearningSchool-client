import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/news-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='bg-info text-center'>
            <h4>All Courses: {categories.length}</h4>
            <div >
                {
                    categories.map(category => <p className='bg-secondary' key={category.id}>
                        <Link  to={`/category/${category.id}`} style={{ color: '#FFF' }}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;