export class App {
    configureRouter(config, router) {
        config.title = 'Team Organizr';
        config.map([
            { route: '/', moduleId: 'squads', title: 'Squads' },
            { route: 'squads/:id', moduleId: 'squad-detail', name: 'Squad', title: 'Squad' }
        ]);
        this.router = router;
    }
}
