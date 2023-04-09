import React from 'react';
import '@/components/Tag/Tag.css'

function Tags({ avantage }) {
    return (
        <div className='tags' >
            {avantage.map((avantage) =>
                <div className='tag' key={avantage}>
                    <span className='avantage'>{avantage}</span>
                </div>
            )
            }
        </div>
    );
};

export default Tags;