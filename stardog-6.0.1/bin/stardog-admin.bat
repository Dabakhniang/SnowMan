@echo off
setlocal EnableDelayedExpansion

SET THEARGS=%*

CALL "%~dp0\helpers.bat" init

CALL "%~dp0\helpers.bat" is_appstart %*

CALL "%~dp0\helpers.bat" build_classpath admin

CALL "%~dp0\helpers.bat" is_foreground %*

CALL "%~dp0\helpers.bat" handle_zk %*

CALL "%~dp0\helpers.bat" check_log4j_config

CALL "%~dp0\helpers.bat" check_home %STARDOG_HOME%

IF DEFINED APP_START IF DEFINED STARDOG_SERVER_JAVA_ARGS SET STARDOG_JAVA_ARGS=%STARDOG_SERVER_JAVA_ARGS%

SET CMD=%JAVA% %STARDOG_JAVA_ARGS% %STARDOG_PERF_JAVA_ARGS% %DEFAULT_JAVA_ARGS% -Dstardog.install.location="%STARDOG%" -server -classpath "%CLASSPATH%" com.complexible.stardog.cli.admin.CLI %THEARGS%

%CMD%
