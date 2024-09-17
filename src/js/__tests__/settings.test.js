import Settings from "../settings";

test('проверка настроек по умолчанию', () => {
    const settings = new Settings();

    expect(settings.settings.get('theme')).toBe('dark');
    expect(settings.settings.get('music')).toBe('trance');
    expect(settings.settings.get('difficulty')).toBe('easy');
});

test('после замены настройки она правильно заменяется', () => {
    const settings = new Settings();
    settings.setSetting('theme', 'light');
    settings.setSetting('music', 'pop');
    expect(settings.settings.get('theme')).toBe('light');
    expect(settings.settings.get('music')).toBe('pop');
    expect(settings.settings.get('difficulty')).toBe('easy');
});
