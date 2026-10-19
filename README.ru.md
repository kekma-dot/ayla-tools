![Ayla tools](assets/banner.png)

# Ayla tools для Pi

[English](README.md)

Расширения и скиллы для [Pi](https://pi.dev). Каждый пакет устанавливается отдельно.

| Пакет | Что делает |
|---|---|
| [Compact](https://github.com/kekma-dot/ayla-tools-compact) | Компактный вывод вызовов инструментов в терминале. |
| [UI](https://github.com/kekma-dot/ayla-tools-ui) | Редактор с рамкой, компактный футер, выбор модели и локальная панель сессии. Бета. |
| [Web](https://github.com/kekma-dot/ayla-tools-web) | Поиск в интернете, загрузка страниц и проверка источников. |
| [Browse](https://github.com/kekma-dot/ayla-tools-browse) | Открытие документов, поиск по тексту и переходы по ссылкам в снимках. Требует Web. |
| [Voice](https://github.com/kekma-dot/ayla-tools-voice) | Разговор с сессией Pi через Codex Live. Экспериментальное расширение. |
| [Resolve](https://github.com/kekma-dot/ayla-tools-resolve) | Просмотр проектов DaVinci Resolve на macOS. Экспериментальное расширение. |
| [Contract](https://github.com/kekma-dot/ayla-tools-contract) | Общие статусные сигналы для авторов расширений. Библиотека Node. |

## Установка

Нужны Pi, Git и Node 22.19 или новее. Расширения проверены с Pi 1.3.0. Требования к платформе и аккаунтам указаны в README каждого пакета.

Для компактного вывода инструментов:

```sh
pi install git:github.com/kekma-dot/ayla-tools-compact
```

После установки перезапустите Pi. Для удаления:

```sh
pi remove git:github.com/kekma-dot/ayla-tools-compact
```

Для навигации по документам:

```sh
pi install git:github.com/kekma-dot/ayla-tools-web
pi install git:github.com/kekma-dot/ayla-tools-browse
```

Добавьте `"documentSnapshots": true` в `~/.pi/agent/web-search.json` перед перезапуском Pi. Если файл уже есть, сохраните остальные настройки. При нестандартном каталоге агента используйте `$PI_CODING_AGENT_DIR/web-search.json`.

```json
{
  "documentSnapshots": true
}
```

Попросите Pi открыть `https://example.com` и найти заголовок. Для загрузки обычной страницы ключ поискового API не нужен; требования поисковых провайдеров описаны отдельно.

Пакеты устанавливаются из Git, не из npm. Чтобы зафиксировать ревизию, добавьте `@COMMIT` к Git-источнику.

## Чеклист выпуска

В этом репозитории также есть скилл для подготовки самостоятельных Pi-пакетов:

```sh
pi install git:github.com/kekma-dot/ayla-tools
```

После перезагрузки Pi вызовите `/skill:ayla-public-release`. Он охватывает упаковку, документацию, зависимости и проверки перед выпуском. Хаб добавляет только скилл; расширения устанавливаются отдельно.

## Лицензия

[MIT](LICENSE). Web основан на [pi-web-access Нико Байлона](https://github.com/nicobailon/pi-web-access). Авторство и уведомления о сторонних компонентах указаны в каждом пакете.
