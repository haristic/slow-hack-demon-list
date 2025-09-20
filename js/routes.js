import List from './pages/List.js';
import Platformers from './pages/Platformers.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/platformers', component: Platformers },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
