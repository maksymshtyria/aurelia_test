import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'github:aurelia/logging-console@0.2.2';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

export function configure(aurelia) {
    aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .router()
        .eventAggregator()
        //.plugin('./js');

    aurelia.start().then(a => a.setRoot('app', document.body));
}