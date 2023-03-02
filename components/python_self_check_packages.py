
from subprocess import run
from sys import executable
from importlib import import_module

needs_install = [
    "psycopg2",
    "psycopg3",
    "coverage",
    "pytest",
    "pytest-cov",
    "coverage[toml]",
    "celery[eventlet,msgpack,librabbitmq,redis,gevent]",
]

module_query = (
  ("PIL", "pillow"),
  ("isort", "isort"),
  ("dotenv", "python-dotenv"),
  ("djoser", "djoser"),
  ("gunicorn", "gunicorn"),
  ("cuid", "cuid"),
  ("pytest_clarity", "pytest-clarity"),
)

def check_package_installation():
  for query in module_query:
    package, module = query
    try:
      import_module(package)
    except ModuleNotFoundError:
        needs_install.append(module)
    finally:
      return needs_install

packages = check_package_installation()

def install_missing_packages():
    # if len(packages) < 1:
    #     installation = [
    #         executable,
    #         "-m",
    #         "pip",
    #         "install",
    #     ] + needs_install
    #     run(installation)
    return print("installation check completed")

install_missing_packages()