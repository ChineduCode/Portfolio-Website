'use client'

// pages/editor.js
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import styled from '@emotion/styled';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditorContainer = styled.div`
    width: 80%;
    margin: 2rem auto;
`;

export default function Editor(){
    const [content, setContent] = useState('');

    const handleContentChange = (value) => {
        setContent(value);
    };

    return (
        <EditorContainer>
            <ReactQuill
                value={content}
                onChange={handleContentChange}
                modules={editorModules}
                formats={editorFormats}
            />

            {/* Additional UI elements go here */}
        </EditorContainer>
    );
};

const handleImage = () => {
    // Simulate file input click
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', 'image/*');
    fileInput.addEventListener('change', handleFileUpload);
    fileInput.click();
};

const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
        try {
            // You can use FormData to handle file uploads
            const formData = new FormData();
            formData.append('image', file);

            // Send the file to the server (you need to implement this on your server)
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            // Assuming the server responds with the URL of the uploaded image
            const imageUrl = await response.json();

            // Insert the image into the editor
            const editor = document.querySelector('.ql-editor');
            const range = editor.getSelection(true);
            editor.insertEmbed(range.index, 'image', imageUrl);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
};

const handleVideo = () => {
  const url = prompt('Enter the video URL:');
  if (url) {
    const editor = document.querySelector('.ql-editor');
    const range = editor.getSelection(true);
    editor.insertEmbed(range.index, 'video', url);
  }
};

const editorModules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
    handlers: {
      image: handleImage,
      video: handleVideo,
    },
  },
};

const editorFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image', 'video',
  'color', 'background',
];
