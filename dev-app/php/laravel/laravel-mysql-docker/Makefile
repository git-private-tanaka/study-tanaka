environment:
	cp .env.example .env
	cp task_management_app/.env.example task_management_app/.env
# must update .env

up:
	docker-compose up -d --build
	docker-compose exec app npm install
	docker-compose exec app npm run build
	docker-compose exec app php artisan key:generate
