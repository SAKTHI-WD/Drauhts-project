// Content.js
import React, { useState } from 'react';
import './designs.css'
import Footer from './Footer';

const Designs = () => {
    const [contentList, setContentList] = useState([]);
    const [newContent, setNewContent] = useState({ image: '', title: '', description: '' });

    const handleUpload = () => {
        setContentList([...contentList, newContent]);
        setNewContent({ image: '', title: '', description: '' });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewContent({ ...newContent, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div >
            <div className='dess' >
                <h1>Page Content</h1>

                {/* Display Existing Content */}
                {contentList.map((content, index) => (
                    <div className='uploadcont' key={index}>
                        <img className='designimg' src={content.image} alt={content.title} />
                        <h2>{content.title}</h2>
                        <p>{content.description}</p>
                    </div>
                ))}

                {/* Upload New Content */}
                <div className='design'>
                    <h2>Add New Content</h2>
                    <label htmlFor='file'>Image File:</label>
                    <input type='file' id='file' accept='image/*' onChange={handleFileChange} />

                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' value={newContent.title} onChange={(e) => setNewContent({ ...newContent, title: e.target.value })} />

                    <label htmlFor='description'>Description:</label>
                    <textarea id='description' value={newContent.description} onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}></textarea>

                    <button className='buildbtn' onClick={handleUpload}>Upload</button>
                </div>
            </div>
                    
                    <Footer/>
        </div>
    );
};

export default Designs;
