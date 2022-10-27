import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center'>What is cors</h1>
            <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p><br />

            <h1 className='text-center'>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p><br />
            
            <h1 className='text-center'>How does the private route work?</h1>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p><br />

            <h1 className='text-center'>What is Node? How does Node work?</h1>
            <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. <br />It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;