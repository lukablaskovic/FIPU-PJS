.DEFAULT_GOAL := help
.PHONY: help setup check-script pdf upload sync

# Keep the lesson argument out of shell code.
export SCRIPT

help:
	@echo "make setup              Install dependencies and enable the date hook"
	@echo 'make pdf SCRIPT=PJS1     Generate this lesson PDF locally'
	@echo 'make upload SCRIPT=PJS1  Upload this lesson Markdown and existing PDF to Drive'
	@echo 'make sync SCRIPT=PJS1    Generate PDF, then upload both files on success'
	@echo 'Choose SCRIPT=PJS1 through PJS5. These commands do not commit or push.'

check-script:
	@test -n "$$SCRIPT" || { echo 'Choose a lesson, e.g. make sync SCRIPT=PJS1'; exit 1; }

pdf: check-script
	node script-patcher/render-pdfs.mjs --script "$$SCRIPT"

upload: check-script
	script-patcher/.venv/bin/python script-patcher/index.py --script "$$SCRIPT"

sync: pdf
	$(MAKE) upload

setup:
	python3 -m venv script-patcher/.venv
	PIP_CONFIG_FILE=/dev/null PIP_EXTRA_INDEX_URL= script-patcher/.venv/bin/python -m pip install --index-url https://pypi.org/simple -r script-patcher/requirements.txt
	npm ci --prefix script-patcher
	script-patcher/node_modules/.bin/playwright install chromium --only-shell
	git config core.hooksPath .githooks
