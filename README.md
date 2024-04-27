# [![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&random=false&width=500&lines=Male-Fashion+(Front-end))](https://git.io/typing-svg)

## Описание проекта
**Male-Fashion** - интернет-магазин мужской одежды (e-commerce). Отзывчиво-адаптивное Full-Stack приложение.

**Ссылки на проект:**
- Frontend: https://male-fashion.ru
- Backend (REST API): https://male-fashion.ru/api
- Swagger: https://male-fashion.ru/api/docs

**Демо пользователь (Front-end):** 
 - Email - test@mail.com
 - Пароль - Test123!

**Ссылки на репозитории:**
- Frontend: https://github.com/ShnaiderDanila/male-fashion-store-frontend
- Backend: https://github.com/ShnaiderDanila/male-fashion-store-api

## Функциональность (Front-end): 
* Адаптивная верстка под все размеры экрана (до 320px)
* Регистрация и авторизация пользователей;
* Редактирование личных данных;
* Валидация данных
* Взаимодействие с корзиной (добавление товаров, удаление и т.д.)
* Возможность оформления заказа с последующим отображением в истории (в личном кабинете пользователя)
* Добавление товаров в избранное
* Поиск по ключевым слова
* Фильтрация по: виду, бренду, размеру и цвету товара
* Сортировка товаров по: умолчанию, возрастанию цены, убыванию цены, алфавиту
* Пагинация данных
* Настроена анимация блоков с помощью библиотеки AOS
* Приложение развернуто на облачном сервере VSCALE
* Подключен домен male-fashion.ru (хостинг-провайдер - TimeWeb)
* Настроен NGINX
* Подключен SSL сертификат (certbot)

## Используемые технологии (Front-end):
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

* Дополнительные:
(Zod, RTK Query, Axios, React Toastify, React Icons, React Google Autocomplete, Tailwind Scrollbar, AOS)

## 🚀 Запуск проекта (Front-end):

#### Клонировать репозиторий:
```
git clone git@github.com:ShnaiderDanila/movies-explorer-frontend.git
```
#### Установить зависимости:
```
npm install
```
#### Запустить приложение в DEV MODE:
```
npm run dev
```
#### Запустить приложение в PROD MODE:
```
npm run preview

## Планы по доработке проекта (Front-end):
* Добавить защиту проекта от XSS уязвимостей
* Оптимизировать проект для лучшей производительности (Сжать бандл. Настроить gzip и т.д.)
* Поработать над семантикой сайта
* Настроить Docker
* Подключить сервис приема электронных платежей - ЮMoney
* Делегировать на backend логику обработки пагинации, сортировки, фильтрации товаров и логику обработки корзины
* Добавить админ панель
* Провести дополнительный рефакторинг кода (добавить инвалидацию кеша, вынести статические данные в переменные и т.д.)

## 🎨 Макет (Layout)
В качестве референса, для базового макета приложения был выбран данный шаблон - https://themewagon.com/themes/free-bootstrap-4-html5-ecommerce-website-template-malefashion/.
Далее он дорабатывался вручную, по мере добавления новых функций в проект.

## Автор

**Данила Шнайдер**

- E-mail: [d.shnder@gmail.com](mailto:d.shnder@gmail.com)
- Telegram: [@shnaider_danila](https://t.me/shnaider_danila)

