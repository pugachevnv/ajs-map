export default class Settings {
    constructor() {

      this.defaultSettings = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
      ]);

      this.userSettings = new Map();
    }
  
    setSetting(name, value) {
        this.userSettings.set(name, value);
    }
  
    get settings() {
      const mergedSettings = new Map(this.defaultSettings); // Создаем копию дефолтных настроек
  
      this.userSettings.forEach((value, key) => {
        mergedSettings.set(key, value);
      });
  
      return mergedSettings;
    }
  }
  