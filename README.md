# Cleanice

Лендинг для ню-метал группы Cleanice. Сайт для продвижения дебютного альбома «First Look».

## Стек

- **Фреймворк:** Astro 7
- **Язык:** TypeScript (strict)
- **Шрифты:** PT Serif (заголовки) + Inter (текст)
- **Формы:** Formspree
- **Деплой:** Static site

## Возможности

- Двуязычность (EN/RU) с переключением на клиенте
- Тёмная/светлая тема
- Анимации: parallax, scroll-reveal, page transitions
- Фильтрация релизов
- Модалка плеера с focus trap
- Film grain, glassmorphism эффекты
- Адаптивный дизайн

## Команды

```bash
npm run dev      # Запуск dev-сервера
npm run build    # Сборка
npm run preview  # Предпросмотр сборки
```

## Структура

```
src/
├── assets/          # Изображения
├── layouts/         # Layout.astro — общий layout
├── pages/           # Страницы: index, about, music, 404
└── scripts/         # Утилиты: i18n, parallax
```
