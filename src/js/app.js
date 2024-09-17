// TODO: write your code here
import ErrorRepository from "./errorrepository";
import Settings from "./settings";

const errorRepository = new ErrorRepository();

errorRepository.errors.set(404, 'Page not found');
console.log(errorRepository.translate(404));
console.log(errorRepository.errors);

const settings = new Settings();
console.log(settings.settings); 

settings.setSetting('theme', 'light');
settings.setSetting('music', 'rock');
console.log(settings.settings);