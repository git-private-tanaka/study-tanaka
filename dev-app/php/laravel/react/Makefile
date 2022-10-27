make:
	cp task_management_app/.env.example task_management_app/.env
	docker-compose up -d --build
	docker-compose exec app npm install
	docker-compose exec app npm run build
