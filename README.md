### Презентация и запись рабочего варианта

https://github.com/znako/translator/blob/main/project_info/Presentation.pdf



https://github.com/user-attachments/assets/5cea8669-7f2b-4c18-a5f7-9a22e00470ce




### Описание проекта

Данный проект посвящён созданию системы для автоматического определения языка текста и его перевода, используя микросервисную архитектуру и машинное обучение. Архитектура проекта включает несколько взаимосвязанных компонентов, каждый из которых выполняет отдельную функцию в рамках общей системы.

### Бизнес-цель

Целью проекта является разработка инструмента, который упростит пользователям взаимодействие с текстами на различных языках. Это решение может быть полезно для организаций, стремящихся улучшить доступность своих продуктов на международных рынках.

### Цель в области машинного обучения

Основная задача в рамках машинного обучения – внедрение модели, способной точно определять язык текста. Это позволит автоматически направлять текст к соответствующему сервису перевода, гарантируя удобство и скорость обработки.

### Архитектура

Система строится на основе микросервисной архитектуры, что обеспечивает модульность и масштабируемость. Структура включает следующие основные компоненты:

1. Frontend (Фронтенд): Веб-интерфейс, с которым взаимодействуют пользователи.
2. BFF (Backend for Frontend): Прокси-сервер, координирующий поток данных между фронтендом и внутренними сервисами.
3. Сервис для определения языка текста: Использует модель машинного обучения для идентификации языка.
4. Сервис перевода: Подключён к API для выполнения перевода текста на целевой язык.
5. ML модель: готовая модель papluca/xlm-roberta-base-language-detection

### Модель papluca/xlm-roberta-base-language-detection

#### Базовая архитектура

В основе модели лежит современная архитектура XLM-RoBERTa, которая позволяет ей эффективно работать с многоязычными данными

#### Цель модели

Основная задача модели — точно определять язык текста. Это задача классификации, где целью является правильно обозначить язык из заданного набора языков.

#### Особенности

Предобученная модель: Основа модели — XLM-RoBERTa base, которая эффективно обрабатывает данные на различных языках.
Файнтюнинг: Модель прошла этап дообучения (fine-tuning) на задаче идентификации языка с использованием текстовых примеров.
Количество языков: Поддерживает большое количество языков (потенциально более 50).
Практическое применение: Подходит для задач мультиязычных платформ, требующих автоматического определения языка для персонализации контента или маршрутизации запросов.

### Обоснование архитектуры

Выбранная микросервисная архитектура позволяет отдельно разрабатывать и развёртывать каждый модуль, что сокращает время на исправление ошибок и внедрение новых функций. При необходимости, системы могут масштабироваться в зависимости от нагрузки, что повышает общую устойчивость.

### Обоснование выбора технологий

Используемые технологии отвечают поставленным задачам и требованиям:

- Frontend: ReactJS выбран за его гибкость и распространённость.
- Backend: был выбран Python за его простоту и гибкость.
- ML: Для выполнения задач определения языка текста выбрали уже обученную модель `papluca/xlm-roberta-base-language-detection` за ее достаточно высокую точность и простую интеграцию 

### Сетевые аспекты

Система разделена на несколько зон безопасности:

- DMZ (Demilitarized Zone): Для размещения компонентов, имеющих доступ к интернету, таких как фронтенд.
- Secure Zone: Ограниченный доступ к BFF и внутренним сервисам для усиленной защиты данных.
