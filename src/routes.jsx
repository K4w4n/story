import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

export default function RouteList() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </Router>
    );
}