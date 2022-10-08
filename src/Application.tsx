import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import UseCallbackPage from './pages/useCallback';
import UseContextPage from './pages/useContext';
import UseEffectPage from './pages/useEffect';
import UseIdPage from './pages/useId';
import UseLayoutEffectPage from './pages/useLayoutEffect';
import UseMemoPage from './pages/useMemo';
import UseRefPage from './pages/useRef';
import UseReducerPage from './pages/useReducer';
import UseStatePage from './pages/useState';

const links = [
    {
        name: 'useState',
        render: <UseStatePage />,
        path: '/'
    },
    {
        name: 'useReducer',
        render: <UseReducerPage />,
        path: '/useReducer'
    },
    {
        name: 'useEffect',
        render: <UseEffectPage />,
        path: '/useEffect'
    },
    {
        name: 'useLayoutEffect',
        render: <UseLayoutEffectPage />,
        path: '/useLayoutEffect'
    },
    {
        name: 'useRef',
        render: <UseRefPage />,
        path: '/useRef'
    },
    {
        name: 'useContext',
        render: <UseContextPage />,
        path: '/useContext'
    },
    {
        name: 'useId',
        render: <UseIdPage />,
        path: '/useId'
    },
    {
        name: 'useMemo',
        render: <UseMemoPage />,
        path: '/useMemo'
    },
    {
        name: 'useCallback',
        render: <UseCallbackPage />,
        path: '/useCallback'
    }
];

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', border: 'dashed' }}>
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
        <div style={{ padding: 2, backgroundColor: 'black', color: 'white', height: '100vh' }}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    {links.map((l) => (
                        <Route path={l.path} key={l.name} element={l.render} />
                    ))}
                </Route>
            </Routes>
        </div>
    );
};

export default Application;
