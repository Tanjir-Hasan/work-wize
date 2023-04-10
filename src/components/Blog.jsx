import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto my-10 max-w-6xl px-4'>
            <h1 className='text-5xl text-center'>Q&A about <span className='text-sky-700'>React</span></h1>
            <br />
            <hr className='border-1 border-violet-500' />
            <br />
            <div>
                <p className='text-2xl font-mono text-red-700'>Question: When should you use context API?</p>
                <br />
                <p className='text-2xl font-serif'>Answer:</p>
                <br />
                <p className='text-xl text-gray-500 px-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. If you want to avoid passing props through many levels you can use context API. It allows you when some data needs to be accessible by many components at different nesting levels.</p>
            </div>
            <br />
            <div>
                <p className='text-2xl font-mono text-red-700'>Question: What is a custom hook?</p>
                <br />
                <p className='text-2xl font-serif'>Answer:</p>
                <br />
                <p className='text-xl text-gray-500 px-5'>A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. It allows you to reuse some piece of code in several parts of your app. When we want to share the logic between other components, we can extract it to a separate function.</p>
            </div>
            <br />
            <div>
                <p className='text-2xl font-mono text-red-700'>Question: What is useRef?</p>
                <br />
                <p className='text-2xl font-serif'>Answer:</p>
                <br />
                <p className='text-xl text-gray-500 px-5'>A React built-in hook that accepts one argument as the initial value and returns a reference. In a method's parameter list, the ref keyword indicates that an argument is passed by reference, not by value. The ref keyword makes the formal parameter an alias for the argument, which must be a variable. In other words, any operation on the parameter is made on the argument.</p>
            </div>
            <br />
            <div>
                <p className='text-2xl font-mono text-red-700'>Question: What is useMemo?</p>
                <br />
                <p className='text-2xl font-serif'>Answer:</p>
                <br />
                <p className='text-xl text-gray-500 px-5'>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
            </div>
        </div>
    );
};

export default Blog;