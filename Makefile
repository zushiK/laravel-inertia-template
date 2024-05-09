# 独自コマンドを追加する場合は同階層に「own.mk」ファイルを作成してそちらに記載
-include own.mk

.PHONY: bash
bash: ##
	docker exec -it WML-CROSSMALL-apache bash

pma:
	open http://localhost:8081

mailer:
	open http://localhost:1080

web:
	open http://localhost.com

re: 
	php artisan migrate:fresh --seed