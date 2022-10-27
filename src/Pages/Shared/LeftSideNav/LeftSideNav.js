import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import News from '../../News/News/News';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const { category_id, details  } = News;
    useEffect( () =>{
        fetch('https://abrar-s-learning-school-server.vercel.app/news-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='bg-info text-center'>
            <h4>All Courses: {categories.length}</h4>
            <div >
                { 
                    categories.map(category => <p className='bg-secondary' >{details}
                        <Link  to={`/news/${category_id}`} style={{ color: '#FFF' }}>{category.name}</Link>
                    </p>)
                    
                }
            </div>
        </div>
    );
};

export default LeftSideNav;