import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';

const links = [
    {
        name: 'useState',
        render: <></>,
        path: '/'
    }
];

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {links.map((l) => (
                    <button onClick={() => navigate(l.path)} style={{ margin: 1 }}>
                        {l.name}
                    </button>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

const Application: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                {links.map((l) => (
                    <Route path={l.path} key={l.name} element={l.render} />
                ))}
            </Route>
        </Routes>
    );
};

export default Application;
