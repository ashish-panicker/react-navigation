# React Router 7 Tutorial (JavaScript)

This article provides a comprehensive guide to utilizing React Router 7 for client-side routing in your React applications. It covers essential setup, navigation techniques, and advanced routing patterns, all with practical JavaScript code examples.

---

## Setting Up React Router

To begin, ensure you have a React project set up (e.g., using Vite or Create React App). Then, install React Router:

```bash
npm install react-router-dom
````

Next, integrate React Router into your application by wrapping your top-level component (typically **App.js**) with the `BrowserRouter` component. This provides the routing context to your entire application.

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Your main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

-----

## Routing and Navigation Fundamentals

React Router's core functionality revolves around two main concepts: declarative navigation using **Link** components and defining routes with **Routes** and **Route** components.

### Basic Navigation

The `Link` component is used to create navigation links that, when clicked, change the URL without causing a full page reload. The `Routes` component acts as a container for `Route` components, which define the path and the React element to render when that path matches the current URL.

```javascript
// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Dummy components for demonstration
const Home = () => (
  <main style={{ padding: '1rem 0' }}>
    <h2>Home Page</h2>
    <p>Welcome to the home section!</p>
  </main>
);

const Users = () => (
  <main style={{ padding: '1rem 0' }}>
    <h2>Users List</h2>
    <p>Here you can see a list of users.</p>
  </main>
);

const Navigation = () => {
  return (
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <h1>Basic React Router Example</h1>
      <Navigation />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
```

When you run this application, clicking "**Home**" or "**Users**" will update the browser's URL and render the respective component without a page refresh.

-----

## Layout Routes for Shared Structure

Often, multiple routes will share a common layout (e.g., a header, footer, or sidebar). React Router provides "**Layout Routes**" to manage this efficiently, avoiding component duplication. Instead of rendering a `Layout` component for each `Route` individually, you define a parent `Route` with the `Layout` component and nest child `Route` components within it.

The `Layout` component itself uses the `Outlet` component from `react-router-dom` to render the content of the currently matched child route.

```javascript
// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main style={{ padding: '1rem 0', border: '1px solid #ccc', margin: '1rem', borderRadius: '8px' }}>
      <p>This is part of the shared layout.</p>
      <Outlet /> {/* This is where the child route's element will be rendered */}
      <p>Layout footer content.</p>
    </main>
  );
};

export default Layout;

// src/App.js (updated)
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component

// ... Home and Users components (as defined previously) ...

const Navigation = () => {
  return (
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/home" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <h1>React Router Layout Example</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />}> {/* Define Layout Route */}
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
```

-----

## Active Links with NavLink

To visually indicate the currently active navigation link, use the **NavLink** component instead of `Link`. `NavLink` provides an `isActive` property in its `style` or `className` prop, allowing you to apply conditional styling.

```javascript
// src/App.js (updated)
import React from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom'; // Import NavLink and Outlet
import Layout from './components/Layout';

// ... Home and Users components ...

const Navigation = () => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'blue' : 'black',
    marginRight: '1rem',
  });

  return (
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <NavLink to="/home" style={navLinkStyle}>Home</NavLink>
      <NavLink to="/users" style={navLinkStyle}>Users</NavLink>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <h1>React Router Active Links</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
```

-----

## Index Routes for Default Content

An "**Index Route**" is used to define a default child route when a parent route matches, but no specific child path is provided. This is particularly useful for the root path (`/`) or a parent route that should display some content by default.

```javascript
// src/App.js (updated)
import React from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Layout from './components/Layout';

// ... Home and Users components ...

const Navigation = () => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'blue' : 'black',
    marginRight: '1rem',
  });

  return (
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <NavLink to="/" style={navLinkStyle}>Home</NavLink> {/* Link to root path */}
      <NavLink to="/users" style={navLinkStyle}>Users</NavLink>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <h1>React Router Index Routes</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} /> {/* Index Route for "/" */}
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
```

Now, navigating to `/` will render the `Home` component.

-----

## No Match (404) Routes

To handle cases where a user navigates to a URL that doesn't match any defined routes (a 404 Not Found scenario), you can define a "**No Match Route**" using the `*` wildcard path.

```javascript
// src/components/NoMatch.js
import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <main style={{ padding: '1rem 0', textAlign: 'center' }}>
      <h2>404 - Page Not Found!</h2>
      <p>Sorry, there's nothing here.</p>
      <Link to="/">Go to Home</Link>
    </main>
  );
};

export default NoMatch;

// src/App.js (updated)
import React from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch'; // Import NoMatch component

// ... Home and Users components ...

const App = () => {
  return (
    <>
      <h1>React Router No Match Route</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NoMatch />} /> {/* No Match Route */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
```

Any path not explicitly matched by `/` or `/users` will now render the `NoMatch` component.

-----

## Dynamic and Nested Routes

React Router excels at handling dynamic segments in URLs (e.g., `/users/1` where `1` is a user ID) and nesting routes to create hierarchical navigation structures.

### Dynamic Routes

Dynamic segments are defined using a colon (`:`) followed by a parameter name (e.g., `:userId`). The `useParams` hook allows you to extract these dynamic values from the URL.

```javascript
// src/components/UserDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams(); // Get the dynamic 'userId' from the URL
  // In a real app, you would fetch user data based on userId
  return (
    <div style={{ padding: '1rem', border: '1px solid #eee', marginTop: '1rem' }}>
      <h3>User Details for ID: {userId}</h3>
      <p>This component displays details for a specific user.</p>
      <Link to="/users">Back to Users List</Link>
    </div>
  );
};

export default UserDetail;

// src/App.js (updated)
import React from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import UserDetail from './components/UserDetail'; // Import UserDetail

// ... Home, Users components ...

const App = () => {
  return (
    <>
      <h1>React Router Dynamic & Nested Routes</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}> {/* Parent route for users */}
            <Route path=":userId" element={<UserDetail />} /> {/* Nested dynamic route */}
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
```

For the `UserDetail` component to render, the parent `Users` component must also render an `Outlet` component where the nested route's content will appear:

```javascript
// src/App.js (partial - Users component updated)
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet

const Users = () => {
  const dummyUsers = [
    { id: '1', name: 'Robin Wieruch' },
    { id: '2', name: 'Sarah Finnley' },
    { id: '3', name: 'John Doe' },
  ];

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users List</h2>
      <ul>
        {dummyUsers.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link> {/* Link to dynamic path */}
          </li>
        ))}
      </ul>
      <Outlet /> {/* Renders the nested UserDetail component */}
    </main>
  );
};
// ... rest of App.js
```

-----

## Relative Links

React Router 7 simplifies linking within nested routes by allowing "**Relative Links**." Instead of providing the full absolute path (e.g., `/users/${user.id}`), you can provide a path relative to the current route.

```javascript
// src/App.js (partial - Users component updated for relative link)
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Users = () => {
  const dummyUsers = [
    { id: '1', name: 'Robin Wieruch' },
    { id: '2', name: 'Sarah Finnley' },
    { id: '3', name: 'John Doe' },
  ];

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users List</h2>
      <ul>
        {dummyUsers.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link> {/* Relative link: '1', '2', '3' */}
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};
// ... rest of App.js
```

When the `Users` component is rendered at `/users`, a `Link to={user.id}` will correctly navigate to `/users/:userId`.

-----

## Declarative vs. Programmatic Navigation

While `Link` and `NavLink` offer declarative navigation, there are scenarios where you need to navigate programmatically (e.g., after a form submission, a successful API call, or a button click). The `useNavigate` hook provides this capability.

```javascript
// src/App.js (updated with programmatic navigation example)
import React, { useState } from 'react';
import { Routes, Route, NavLink, Outlet, useNavigate, useParams, Link } from 'react-router-dom';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';

// Dummy user data for state management
const initialUsers = [
  { id: '1', name: 'Robin Wieruch' },
  { id: '2', name: 'Sarah Finnley' },
  { id: '3', name: 'John Doe' },
];

// UserDetail component with remove functionality
const UserDetail = ({ onRemoveUser }) => {
  const { userId } = useParams();
  const navigate = useNavigate(); // Get the navigate function

  const handleRemove = () => {
    onRemoveUser(userId); // Call the remove function passed from App
    navigate('/users'); // Programmatically navigate back to users list
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #eee', marginTop: '1rem' }}>
      <h3>User Details for ID: {userId}</h3>
      <button onClick={handleRemove} style={{ marginRight: '10px' }}>Remove User</button>
      <Link to="/users">Back to Users List</Link>
    </div>
  );
};

// Users component (no change from previous relative link example)
const Users = () => {
  const dummyUsers = initialUsers; // Use initialUsers for consistency
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users List</h2>
      <ul>
        {dummyUsers.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};


const App = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleRemoveUser = (userIdToRemove) => {
    setUsers(users.filter(user => user.id !== userIdToRemove));
    // In a real application, you'd also make an API call to delete from the backend
  };

  const Navigation = () => {
    const navLinkStyle = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'blue' : 'black',
      marginRight: '1rem',
    });

    return (
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/users" style={navLinkStyle}>Users</NavLink>
      </nav>
    );
  };

  return (
    <>
      <h1>React Router Programmatic Navigation</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetail onRemoveUser={handleRemoveUser} />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
```

-----

## Search Parameters in URLs

URLs can include query strings (also known as search parameters) after a `?` symbol, in key-value pairs (e.g., `/products?category=electronics&sort=price`). React Router's `useSearchParams` hook allows you to read and manipulate these parameters.

```javascript
// src/App.js (partial - Users component updated with search params)
import React, { useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom'; // Import useSearchParams

const Users = () => {
  const dummyUsers = [
    { id: '1', name: 'Robin Wieruch' },
    { id: '2', name: 'Sarah Finnley' },
    { id: '3', name: 'John Doe' },
    { id: '4', name: 'Jane Smith' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('name') || ''; // Read 'name' param

  const handleSearchChange = (event) => {
    const name = event.target.value;
    if (name) {
      setSearchParams({ name: name }); // Set 'name' param
    } else {
      setSearchParams({}); // Clear all search params if input is empty
    }
  };

  const filteredUsers = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users List</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};
// ... rest of App.js
```

This allows for shareable URLs that include filters or other state-related information.

-----

## Conclusion

React Router is a powerful and flexible library for managing navigation in React applications. By understanding its core components (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `Outlet`) and hooks (`useParams`, `useNavigate`, `useSearchParams`), you can build sophisticated client-side routing experiences, including nested, dynamic, and programmatic navigation, along with URL-based state management via search parameters.